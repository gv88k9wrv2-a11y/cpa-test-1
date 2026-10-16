import { Fragment } from "react";
import { Link } from "@tanstack/react-router";

/** Only local editorial links and bold text are interpreted; HTML stays escaped. */
export function BlogInlineContent({ text }: { text: string }) {
  return text.split(/(\[[^\]]+\]\(\/[^\s)]+\)|\*\*[^*]+\*\*)/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((\/[^\s)]+)\)$/);
    if (link) {
      return <Link key={index} to={link[2]} className="font-semibold text-primary underline decoration-border underline-offset-4 hover:text-gold-text">{link[1]}</Link>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}