import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock, MessageCircle } from "lucide-react";
import {
  FloatingWhatsAppEn,
  SiteFooterEn,
  SiteHeaderEn,
  WHATSAPP_URL_EN,
} from "../components/site-chrome-en";
import { BLOG_POSTS_EN, BLOG_POSTS_EN_BY_SLUG, type BlogPostEn } from "../data/blog-posts-en";
import { AUTHOR_PERSON_REF, buildBreadcrumbJsonLd, toMetaDescription } from "../lib/meta";
import { SummaryBox } from "../components/page-summary";
import { EN_TO_HE_SLUG } from "../data/blog-pairs";
import { ProfessionalDisclaimer } from "../components/professional-disclaimer";
import { BlogInlineContent } from "../components/blog-inline-content";

const ORIGIN = "https://nimrodi.co.il";


/** Articles where outsourced financial management is a natural next step. */
const CFO_SLUGS = new Set([
  "startup-accounting-tax-israel",
  "israeli-subsidiary-vs-branch",
  "foreign-companies-operating-in-israel",
  "preferred-technological-enterprise",
]);

export const Route = createFileRoute("/en/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS_EN_BY_SLUG[params.slug];
    if (!post) throw notFound();
    return { post, slug: params.slug };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article Not Found | Nimrodi & Co. CPA" },
          { name: "robots", content: "noindex, nofollow" },
        ],
      };
    }
    const { post } = loaderData;
    const url = `${ORIGIN}/en/blog/${params.slug}`;
    return {
      meta: [
        { title: `${post.metaTitle ?? post.title} | Nimrodi & Co.` },
        { name: "description", content: toMetaDescription(post.metaDescription ?? post.excerpt) },
        { property: "og:title", content: post.title },
        {
          property: "og:description",
          content: toMetaDescription(post.metaDescription ?? post.excerpt),
        },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: `${ORIGIN}/og-image.jpg` },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "640" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: `${ORIGIN}/og-image.jpg` },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
      ],
      links: [
        { rel: "canonical", href: url },
        ...(EN_TO_HE_SLUG[params.slug]
          ? [
              {
                rel: "alternate",
                hrefLang: "he-IL",
                href: `${ORIGIN}/blog/${EN_TO_HE_SLUG[params.slug]}`,
              },
              { rel: "alternate", hrefLang: "en-US", href: url },
              {
                rel: "alternate",
                hrefLang: "x-default",
                href: `${ORIGIN}/blog/${EN_TO_HE_SLUG[params.slug]}`,
              },
            ]
          : []),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Home", url: `${ORIGIN}/en` },
              { name: "Blog", url: `${ORIGIN}/en/blog` },
              { name: post.title, url },
            ]),
          ),
        },
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
            inLanguage: "en-US",
            author: AUTHOR_PERSON_REF,
            reviewedBy: AUTHOR_PERSON_REF,
            publisher: {
              "@type": "Organization",
              name: "Nimrodi & Co. CPAs",
              url: `${ORIGIN}/en`,
              logo: { "@type": "ImageObject", url: `${ORIGIN}/og-image.jpg` },
            },
            articleSection: post.category,
            ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
            mainEntityOfPage: url,
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
  component: BlogPostPageEn,
  notFoundComponent: PostNotFoundEn,
});

function PostNotFoundEn() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />
      <main id="main-content">
        <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
          <h1 className="font-display text-3xl font-bold text-primary">Article not found</h1>
          <p className="mt-3 text-muted-foreground">
            The link may have changed or the article may have been removed.
          </p>
          <Link
            to="/en/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Back to blog
          </Link>
        </div>
      </main>
      <SiteFooterEn />
    </div>
  );
}

function BlogPostPageEn() {
  const { post } = Route.useLoaderData() as { post: BlogPostEn; slug: string };

  const related = (post.relatedSlugs ?? [])
    .map((slug) => BLOG_POSTS_EN.find((p) => p.slug === slug))
    .filter((p): p is BlogPostEn => Boolean(p) && p!.slug !== post.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />

      <main id="main-content">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <nav className="mb-6 text-xs text-muted-foreground">
            <Link to="/en" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/en/blog" className="hover:text-primary">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{post.category}</span>
          </nav>

          <div className="inline-flex items-center rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-medium text-gold-text">
            {post.category}
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-border pb-6 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden />
              {new Date(post.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {post.readMin} min read
            </span>
          </div>

          {post.image ? (
            <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-xl">
              <img
                src={post.image}
                alt={post.imageAlt ?? `Illustration for the article: ${post.title}`}
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-cover"
              />
            </div>
          ) : null}

          <div className="mt-8">
            <SummaryBox text={post.excerpt} lang="en" />
          </div>

          <div className="mt-8 space-y-10">
            {post.sections.map((s) => (
              <section key={s.h}>
                <h2 className="font-display text-2xl font-bold text-primary">{s.h}</h2>
                <div className="mt-4 space-y-4">
                  {s.p.map((para, i) => (
                    <p key={i} className="whitespace-pre-line leading-relaxed text-muted-foreground">
                      <BlogInlineContent text={para} />
                    </p>
                  ))}
                </div>
                {s.table ? (
                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full min-w-[36rem] border-collapse text-left text-sm leading-relaxed">
                      <caption className="sr-only">{s.h}</caption>
                      <thead><tr>{s.table.headers.map((header) => <th key={header} scope="col" className="border border-border bg-secondary p-3 font-semibold text-primary">{header}</th>)}</tr></thead>
                      <tbody>{s.table.rows.map((row, index) => <tr key={index}>{row.map((cell, column) => column === 0 ? <th key={column} scope="row" className="border border-border p-3 font-semibold text-foreground"><BlogInlineContent text={cell} /></th> : <td key={column} className="border border-border p-3 text-muted-foreground"><BlogInlineContent text={cell} /></td>)}</tr>)}</tbody>
                    </table>
                  </div>
                ) : null}
              </section>
            ))}
          </div>

          {post.faqs?.length ? (
            <section className="mt-14">
              <h2 className="font-display text-2xl font-bold text-primary">
                Frequently Asked Questions
              </h2>
              <div className="mt-5 divide-y divide-border rounded-xl border border-border bg-card">
                {post.faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4 text-left font-semibold text-primary">
                      <span>{f.q}</span>
                      <span
                        className="mt-1 text-gold-text transition group-open:rotate-45"
                        aria-hidden
                      >
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
              <h2 className="font-display text-xl font-bold text-primary">
                Related professional service
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <Link
                  to={post.relatedService.href}
                  className="font-semibold text-primary hover:text-gold-text hover:underline"
                >
                  {post.relatedService.label}
                </Link>
              </p>
              {CFO_SLUGS.has(post.slug) ? (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Ongoing financial management:{" "}
                  <Link
                    to="/en/fractional-cfo"
                    className="font-semibold text-primary hover:text-gold-text hover:underline"
                  >
                    Fractional CFO services in Israel
                  </Link>
                </p>
              ) : null}
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Meet us at the office:{" "}
                <Link
                  to="/en/cpa-herzliya"
                  className="font-semibold text-primary hover:text-gold-text hover:underline"
                >
                  CPA in Herzliya Pituach
                </Link>
              </p>
            </aside>
          ) : null}

          <div className="mt-14 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
            <h2 className="font-display text-2xl font-bold">
              Need help with an Israeli accounting or tax matter?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Contact our Israeli CPA firm for an introductory discussion about your accounting,
              tax, and reporting needs.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL_EN}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground hover:brightness-95"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                Contact our CPA firm
              </a>
              <Link
                to="/en/contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                Schedule a Consultation →
              </Link>
            </div>
          </div>

          {/* Professional disclaimer */}

          {/* Required on all professional-content pages. Do not remove or duplicate. */}

          <ProfessionalDisclaimer lang="en" text={post.disclaimer} className="mt-10" />

          {related.length > 0 && (
            <aside className="mt-14 border-t border-border pt-10">
              <h2 className="font-display text-xl font-bold text-primary">
                More Israeli accounting and tax articles
              </h2>
              <ul className="mt-4 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to="/en/blog/$slug"
                      params={{ slug: r.slug }}
                      className="text-primary hover:text-gold-text hover:underline"
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
              to="/en/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-text"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              View all accounting and tax articles
            </Link>
          </div>
        </article>
      </main>

      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}
