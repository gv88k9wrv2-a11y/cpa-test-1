import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, MessageCircle } from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader, WHATSAPP_URL } from "../components/site-chrome";
import { BLOG_POSTS_BY_SLUG, BLOG_POSTS, type BlogPost } from "../data/blog-posts";
import { toMetaDescription } from "../lib/meta";
import { HE_TO_EN_SLUG } from "../data/blog-pairs";
import { ProfessionalDisclaimer } from "../components/professional-disclaimer";

const ORIGIN = "https://www.nimrodi.co.il";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS_BY_SLUG[params.slug];
    if (!post) throw notFound();
    return { post, slug: params.slug };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "המאמר המבוקש לא נמצא | נמרודי ושות׳" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | בלוג נמרודי ושות׳` },
        { name: "description", content: toMetaDescription(post.metaDescription ?? post.excerpt) },
        { property: "og:title", content: post.title },
        {
          property: "og:description",
          content: toMetaDescription(post.metaDescription ?? post.excerpt),
        },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${ORIGIN}/blog/${params.slug}` },
        { property: "og:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "640" },
        { name: "twitter:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
      ],
      links: [
        { rel: "canonical", href: `${ORIGIN}/blog/${params.slug}` },
        ...(HE_TO_EN_SLUG[params.slug]
          ? [
              { rel: "alternate", hrefLang: "he-IL", href: `${ORIGIN}/blog/${params.slug}` },
              {
                rel: "alternate",
                hrefLang: "en-US",
                href: `${ORIGIN}/en/blog/${HE_TO_EN_SLUG[params.slug]}`,
              },
              { rel: "alternate", hrefLang: "x-default", href: `${ORIGIN}/blog/${params.slug}` },
            ]
          : []),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription ?? post.excerpt,
            image: `${ORIGIN}/og-image.jpg`,
            datePublished: post.date,
            ...(post.modifiedDate ? { dateModified: post.modifiedDate } : {}),
            inLanguage: "he-IL",
            author: {
              "@type": "Organization",
              name: "נמרודי ושות׳ – רואי חשבון",
            },
            publisher: {
              "@type": "Organization",
              name: "נמרודי ושות׳ – רואי חשבון",
            },
            mainEntityOfPage: `${ORIGIN}/blog/${params.slug}`,
            articleSection: post.category,
            ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
          }),
        },
        ...(post.faqs?.length
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: post.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }),
              },
            ]
          : []),
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content">
        <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
          <h1 className="font-display text-3xl font-bold text-primary">המאמר לא נמצא</h1>
          <p className="mt-3 text-muted-foreground">ייתכן שהקישור השתנה או שהמאמר הוסר.</p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            חזרה לבלוג
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData() as { post: BlogPost; slug: string };

  const related = (post.relatedSlugs ?? [])
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => Boolean(p) && p!.slug !== post.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <nav className="mb-6 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            בית
          </Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">
            בלוג
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{post.category}</span>
        </nav>

        <div className="inline-flex items-center rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-medium text-gold">
          {post.category}
        </div>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-6 flex items-center gap-5 border-b border-border pb-6 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden />
            {new Date(post.date).toLocaleDateString("he-IL", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {post.readMin} דק׳ קריאה
          </span>
        </div>

        {post.image ? (
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-xl">
            <img
              src={post.image}
              alt={post.imageAlt ?? `תמונה נלווית למאמר: ${post.title}`}
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover"
            />
          </div>
        ) : null}

        <p className="mt-8 text-lg leading-relaxed text-foreground/90">{post.excerpt}</p>

        <div className="mt-8 space-y-10">
          {post.sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-2xl font-bold text-primary">{s.h}</h2>
              <div className="mt-4 space-y-4">
                {s.p.map((para, i) => (
                  <p key={i} className="leading-relaxed text-muted-foreground">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {post.faqs?.length ? (
          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-primary">שאלות נפוצות</h2>
            <div className="mt-5 divide-y divide-border rounded-xl border border-border bg-card">
              {post.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 text-right font-semibold text-primary">
                    <span>{f.q}</span>
                    <span className="mt-1 text-gold transition group-open:rotate-45" aria-hidden>
                      ＋
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        {post.relatedService ? (
          <aside className="mt-14 rounded-2xl border border-border bg-secondary/40 p-6">
            <h2 className="font-display text-xl font-bold text-primary">שירות מקצועי בנושא זה</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <Link
                to={post.relatedService.href}
                className="font-semibold text-primary hover:text-gold hover:underline"
              >
                {post.relatedService.label}
              </Link>
            </p>
          </aside>
        ) : null}

        {/* Professional disclaimer */}
        {/* Required on all professional-content pages. Do not remove or duplicate. */}
        <ProfessionalDisclaimer lang="he" className="mt-10" />

        <div className="mt-14 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
          <h2 className="font-display text-2xl font-bold">רוצים לשוחח על המצב הספציפי שלכם?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            אפשר ליצור קשר לצורך שיחת היכרות ראשונית ובחינת הצרכים.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground hover:brightness-95"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            דברו איתנו
          </a>
        </div>

        {related.length > 0 && (
          <aside className="mt-14 border-t border-border pt-10">
            <h2 className="font-display text-xl font-bold text-primary">
              מאמרים נוספים באותו נושא
            </h2>
            <ul className="mt-4 space-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: r.slug }}
                    className="text-primary hover:text-gold hover:underline"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <div className="mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold"
          >
            <ArrowRight className="h-4 w-4" aria-hidden />
            לכל המאמרים
          </Link>
        </div>
      </article>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
