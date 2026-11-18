import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Container, Eyebrow } from "@/components/ui";
import { formatDate, getPost, getPosts } from "@/lib/blog";
import { englishLang, spell } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { organizationId } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

type Params = Promise<{ eng: string; slug: string }>;

export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  // British spelling in metadata, as on the rest of the site, so "holiday" stays for UK searches.
  const post = getPost(slug, "en-GB");
  if (!post) return {};
  const base = pageMetadata({ title: post.title, description: post.description, path: `/blog/${slug}` });
  return {
    ...base,
    keywords: post.keywords,
    openGraph: { ...base.openGraph, type: "article", publishedTime: post.date, images: [{ url: post.image.src, alt: post.imageAlt }] },
    twitter: { ...base.twitter, images: [post.image.src] },
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { eng, slug } = await params;
  const lang = englishLang(eng);
  const post = getPost(slug, lang);
  if (!post) notFound();
  const url = absoluteUrl(`/blog/${slug}`);

  return (
    <div className="bg-ink pt-28">
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              image: absoluteUrl(post.image.src),
              url,
              mainEntityOfPage: url,
              author: { "@id": organizationId },
              publisher: { "@id": organizationId },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
                { "@type": "ListItem", position: 3, name: post.title, item: url },
              ],
            },
          ],
        }}
      />
      <article className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm font-semibold text-sea hover:underline">
            ← All articles
          </Link>
          <div className="mt-8">
            <Eyebrow>
              {post.scheduled ? `Preview · scheduled for ${formatDate(post.date, lang)}` : formatDate(post.date, lang)}
            </Eyebrow>
          </div>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-stone">{post.description}</p>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl">
            <Image
              src={post.image}
              alt={spell(post.imageAlt, lang)}
              fill
              priority
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover"
              placeholder="blur"
            />
          </div>

          <div className="blog-body mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />

          <aside className="mt-16 rounded-3xl bg-ink p-8 text-cream sm:p-10">
            <Eyebrow invert>Play here next</Eyebrow>
            <p className="mt-4 font-display text-3xl leading-snug">
              Small-group pickleball retreats on the Barcelona coast.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream/75">
              {spell("Certified coaching, a tournament with the locals and a beachfront 4★ hotel in Coma-ruga. Max 16 players.", lang)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/pickleball-holiday-barcelona"
                className="rounded-full bg-ball px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Local Dink · 5 days
              </Link>
              <Link
                href="/pickleball-vacation-barcelona"
                className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold transition hover:border-white"
              >
                Long-Haul Lob · 9 days
              </Link>
            </div>
          </aside>
          </div>
        </Container>
      </article>
    </div>
  );
}
