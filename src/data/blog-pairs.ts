import { BLOG_POSTS } from "./blog-posts";
import { BLOG_POSTS_EN } from "./blog-posts-en";

/** HE slug -> EN slug, resolved only through translationKey. */
export const HE_TO_EN_SLUG: Record<string, string> = {};
/** EN slug -> HE slug, resolved only through translationKey. */
export const EN_TO_HE_SLUG: Record<string, string> = {};

for (const he of BLOG_POSTS) {
  if (!he.translationKey) continue;
  const en = BLOG_POSTS_EN.find((p) => p.translationKey === he.translationKey);
  if (!en) continue;
  HE_TO_EN_SLUG[he.slug] = en.slug;
  EN_TO_HE_SLUG[en.slug] = he.slug;
}

/** Language-switch target for a Hebrew article. */
export function enHrefForHeSlug(slug: string): string {
  const en = HE_TO_EN_SLUG[slug];
  return en ? `/en/blog/${en}` : "/en/blog";
}

/** Language-switch target for an English article. */
export function heHrefForEnSlug(slug: string): string {
  const he = EN_TO_HE_SLUG[slug];
  return he ? `/blog/${he}` : "/blog";
}
