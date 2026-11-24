import { createFileRoute } from "@tanstack/react-router";
import { UnifiedHome } from "../components/unified-home";
import { HOME_CONTENT } from "../data/home-content";
import heroOffice from "../assets/hero-office.webp";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "twitter:title", content: "משרד רואי חשבון בהרצליה פיתוח | נמרודי ושות׳ – מאז 2000" },
      { name: "twitter:description", content: "משרד רואי חשבון בהרצליה פיתוח מאז 2000: הנהלת חשבונות, שכר, דוחות, ביקורת וייעוץ מס במענה אישי לחברות, סטארטאפים ועצמאים. חייגו 09-9582211 לשיחת היכרות." },
      { property: "og:locale", content: "he_IL" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "משרד רואי חשבון בהרצליה פיתוח | נמרודי ושות׳ – מאז 2000" },
      {
        name: "description",
        content:
          "משרד רואי חשבון בהרצליה פיתוח מאז 2000: הנהלת חשבונות, שכר, דוחות, ביקורת וייעוץ מס במענה אישי לחברות, סטארטאפים ועצמאים. חייגו 09-9582211 לשיחת היכרות.",
      },
      {
        property: "og:title",
        content: "משרד רואי חשבון בהרצליה פיתוח | נמרודי ושות׳ – מאז 2000",
      },
      { property: "og:description", content: "משרד רואי חשבון בהרצליה פיתוח מאז 2000: הנהלת חשבונות, שכר, דוחות, ביקורת וייעוץ מס במענה אישי לחברות, סטארטאפים ועצמאים. חייגו 09-9582211 לשיחת היכרות." },
      { property: "og:url", content: "https://nimrodi.co.il/" },
      { property: "og:image", content: "https://nimrodi.co.il/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:image", content: "https://nimrodi.co.il/og-image.jpg" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroOffice,
        type: "image/webp",
        fetchPriority: "high",
      },
      { rel: "canonical", href: "https://nimrodi.co.il/" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://nimrodi.co.il/" },
      { rel: "alternate", hrefLang: "en-US", href: "https://nimrodi.co.il/en" },
      { rel: "alternate", hrefLang: "x-default", href: "https://nimrodi.co.il/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_CONTENT.he.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return <UnifiedHome lang="he" />;
}
