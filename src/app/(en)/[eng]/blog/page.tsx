import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { formatDate, getPosts } from "@/lib/blog";
import { englishLang, spell } from "@/lib/i18n";

export const metadata: Metadata = pageMetadata({
  title: "Pickleball Travel Blog: Spain, Barcelona & the Costa Daurada",
  description:
    "Guides to pickleball holidays in Spain, playing near Barcelona, and getting the most out of Coma-ruga and the Costa Daurada, from the Dink Abroad team.",
  path: "/blog",
});

export default async function BlogIndex({ params }: { params: Promise<{ eng: string }> }) {
  const lang = englishLang((await params).eng);
  const posts = getPosts();

  return (
    <div className="bg-ink pt-28">
      <section className="bg-cream py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>The Dink Abroad blog</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
              Pickleball, sun and the <em className="text-terracotta">Catalan coast</em>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              {spell(
                "Travel guides, playing tips and local knowledge for pickleball players heading to Barcelona and the Costa Daurada.",
                lang,
              )}
            </p>
          </div>

          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full overflow-hidden rounded-3xl bg-white ring-1 ring-line transition hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={post.image}
                      alt={spell(post.imageAlt, lang)}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                      placeholder="blur"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-stone">
                      {post.scheduled && <span className="mr-2 rounded-full bg-ball px-2 py-0.5 font-semibold text-ink">Scheduled</span>}
                      {formatDate(post.date, lang)}
                    </p>
                    <h2 className="mt-2 font-display text-2xl leading-tight tracking-tight group-hover:text-sea">
                      {spell(post.title, lang)}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone">{spell(post.description, lang)}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
