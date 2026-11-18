import fs from "node:fs";
import path from "node:path";
import type { StaticImageData } from "next/image";
import { marked } from "marked";
import { type Lang, spell } from "@/lib/i18n";
import bay from "@/assets/images/coma-ruga-bay.jpg";
import beachPalms from "@/assets/images/coma-ruga-beach-palms.jpg";
import palms from "@/assets/images/coma-ruga-palms.jpg";
import seafront from "@/assets/images/coma-ruga-seafront.jpg";
import vineyards from "@/assets/images/penedes-vineyards.jpg";
import clubAerial from "@/assets/images/pickleball-club-coma-ruga-aerial.jpg";
import courts from "@/assets/images/pickleball-courts-coma-ruga.jpg";
import sagrada from "@/assets/images/sagrada-familia.jpg";
import sitges from "@/assets/images/sitges.jpg";
import tarragona from "@/assets/images/tarragona-amphitheatre.jpg";

/**
 * English blog posts: Markdown files in content/blog/<slug>.md, read at build time.
 * Each file starts with front matter:
 *
 *   ---
 *   title: What to Expect on a Pickleball Holiday near Barcelona
 *   description: One or two sentences for Google and social cards.
 *   date: 2026-11-18
 *   image: coma-ruga-bay          (one of the names in `images` below)
 *   imageAlt: The bay at Coma-ruga
 *   keywords: pickleball holiday spain, pickleball barcelona
 *   ---
 *
 * Write posts in British English, like the rest of the English site; US visitors
 * get US spelling through spell(). Titles and descriptions stay British in
 * metadata, so "holiday" is kept for UK searches.
 *
 * Scheduled posts: put them in content/scheduled/ with a future date. The
 * GitHub Action in .github/workflows/publish-scheduled-posts.yml moves each one
 * into content/blog/ on its date, which redeploys the site. Preview deployments
 * show scheduled posts too, so they can be read and approved in advance.
 * Links to a post that isn't published yet are shown as plain text until it is.
 */

const images: Record<string, StaticImageData> = {
  "coma-ruga-bay": bay,
  "coma-ruga-beach-palms": beachPalms,
  "coma-ruga-palms": palms,
  "coma-ruga-seafront": seafront,
  "penedes-vineyards": vineyards,
  "pickleball-club-coma-ruga-aerial": clubAerial,
  "pickleball-courts-coma-ruga": courts,
  "sagrada-familia": sagrada,
  sitges,
  "tarragona-amphitheatre": tarragona,
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const SCHEDULED_DIR = path.join(process.cwd(), "content", "scheduled");
/** Vercel preview deployments and local builds show scheduled posts; production does not. */
const SHOW_SCHEDULED = process.env.VERCEL_ENV !== "production";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: StaticImageData;
  imageAlt: string;
  keywords: string[];
  scheduled: boolean;
};

function parse(file: string): { data: Record<string, string>; body: string } {
  const match = file.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: file };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i > 0) data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  return { data, body: match[2] };
}

function fileFor(slug: string): { file: string; scheduled: boolean } | null {
  const published = path.join(BLOG_DIR, `${slug}.md`);
  if (fs.existsSync(published)) return { file: published, scheduled: false };
  const scheduled = path.join(SCHEDULED_DIR, `${slug}.md`);
  if (SHOW_SCHEDULED && fs.existsSync(scheduled)) return { file: scheduled, scheduled: true };
  return null;
}

function read(slug: string): { meta: PostMeta; body: string } | null {
  const found = fileFor(slug);
  if (!found) return null;
  const { file, scheduled } = found;
  const { data, body } = parse(fs.readFileSync(file, "utf8"));
  if (!data.title || !data.date) throw new Error(`content/blog/${slug}.md needs a title and a date`);
  const image = images[data.image ?? ""] ?? bay;
  return {
    meta: {
      slug,
      title: data.title,
      description: data.description ?? "",
      date: data.date,
      image,
      imageAlt: data.imageAlt || data.title,
      keywords: data.keywords ? data.keywords.split(",").map((k) => k.trim()).filter(Boolean) : [],
      scheduled,
    },
    body,
  };
}

function slugsIn(dir: string): string[] {
  return fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, "")) : [];
}

/** All visible posts (published, plus scheduled on previews), newest first. */
export function getPosts(): PostMeta[] {
  const slugs = new Set([...slugsIn(BLOG_DIR), ...(SHOW_SCHEDULED ? slugsIn(SCHEDULED_DIR) : [])]);
  return [...slugs]
    .map((slug) => read(slug)!.meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Links to blog posts that aren't visible yet become plain text. A link with the
 * title "when-live", e.g. [Read our Tarragona guide](/blog/tarragona "when-live").,
 * disappears entirely (with its trailing full stop) until that post is published.
 */
function unlinkHidden(html: string): string {
  const visible = new Set(getPosts().map((p) => p.slug));
  return html.replace(
    /\s?<a href="\/blog\/([^"/#?]+)\/?"( title="when-live")?>([\s\S]*?)<\/a>(\.?)/g,
    (link, slug: string, whenLive: string | undefined, text: string, stop: string) => {
      if (visible.has(slug)) return whenLive ? link.replace(' title="when-live"', "") : link;
      return whenLive ? "" : `${link.match(/^\s?/)![0]}${text}${stop}`;
    },
  );
}

/** Converts only the text between tags, so links and image paths are never altered. */
function spellHtml(html: string, lang: Lang): string {
  return html.replace(/>([^<]+)</g, (_, text: string) => `>${spell(text, lang)}<`);
}

export function getPost(slug: string, lang: Lang) {
  const post = read(slug);
  if (!post) return null;
  return {
    ...post.meta,
    title: spell(post.meta.title, lang),
    description: spell(post.meta.description, lang),
    html: spellHtml(unlinkHidden(marked.parse(post.body, { async: false })), lang),
  };
}

/** "18 November 2026" for British English, "November 18, 2026" for US English. */
export function formatDate(date: string, lang: Lang): string {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString(lang === "en-GB" ? "en-GB" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
