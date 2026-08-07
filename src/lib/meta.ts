const MIN_LENGTH = 150;
const MAX_LENGTH = 160;

/**
 * Shorten a description to the repository metadata rule (max 160 characters)
 * without cutting in the middle of a word.
 */
export function toMetaDescription(input: string, maxLength: number = MAX_LENGTH): string {
  const text = input.replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;

  const slice = text.slice(0, maxLength);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > MIN_LENGTH - 20 ? slice.slice(0, lastSpace) : slice;
  return cut.replace(/[\s,;:.\-–—]+$/u, "") + "…";
}
