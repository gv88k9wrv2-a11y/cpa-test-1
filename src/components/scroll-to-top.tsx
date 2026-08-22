import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop({ lang = "he" }: { lang?: "he" | "en" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const label = lang === "he" ? "חזרה למעלה" : "Scroll to top";
  const side = lang === "he" ? "right-4" : "left-4";

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={label}
      title={label}
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
      className={`fixed ${side} z-40 grid h-11 w-11 min-h-[44px] min-w-[44px] place-items-center rounded-full border border-gold/40 bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </button>
  );
}
