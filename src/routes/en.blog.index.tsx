import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn } from "../components/site-chrome-en";
import { BLOG_POSTS_EN } from "../data/blog-posts-en";

const CANONICAL = "https://www.nimrodi.co.il/en/blog";

export const Route = createFileRoute("/en/blog/")({
  head: () => ({
    meta: [
      { title: "Professional Blog | Nimrodi & Co. — CPAs in Herzliya" },
      {
        name: "description",
        content:
          "Articles on international taxation, foreign companies in Israel, relocation and tax residency from Nimrodi & Co. CPA. Read the latest available content.",
      },
      { property: "og:title", content: "Blog — Nimrodi & Co. CPAs" },
      {
        property: "og:description",
        content: "Articles from Nimrodi & Co. CPA on Israeli taxation, accounting, reporting, startups, foreign companies and digital assets. Explore the available posts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: BlogIndexEn,
});

function BlogIndexEn() {
  const posts = [...BLOG_POSTS_EN].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />

      <main id="main-content">
        <section className="border-b border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <div className="text-sm font-semibold uppercase tracking-widest text-gold">
              Professional Blog
            </div>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
              Insight that moves businesses forward
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Guides, updates, and analysis from the world of accounting and taxation — grounded in real practice.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to="/en/blog/$slug"
                params={{ slug: p.slug }}
                aria-label={`Read the article: ${p.title}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg"
              >
                <div className="mb-3 inline-flex w-fit items-center rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-medium text-gold">
                  {p.category}
                </div>
                <h2 className="font-display text-xl font-bold text-primary group-hover:text-gold">
                  {p.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                    {new Date(p.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {p.readMin} min read
                  </span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold group-hover:underline">
                  Read the article →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}
