interface FirmContactBlockProps {
  lang: "he" | "en";
}

export function FirmContactBlock({ lang }: FirmContactBlockProps) {
  const he = lang === "he";
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="space-y-3 rounded-lg border border-border/60 bg-secondary/30 p-6 text-muted-foreground">
          <h2 className="font-display text-xl font-bold text-primary">
            {he ? "נציג המשרד ליצירת קשר" : "Firm representative for contact"}
          </h2>
          <p className="font-semibold text-foreground">
            {he ? "רו״ח שלמה נמרודי" : "Shlomo Nimrodi, CPA"}
          </p>
          <p>
            <strong>{he ? "טלפון:" : "Telephone:"}</strong>{" "}
            <a href="tel:099582211" className="text-primary hover:text-gold hover:underline">
              09-9582211
            </a>
          </p>
          <p>
            <strong>{he ? "וואטסאפ:" : "WhatsApp:"}</strong>{" "}
            <a
              href="https://wa.me/972546688681"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-gold hover:underline"
            >
              054-6688681
            </a>
          </p>
          <p>
            <strong>{he ? "דוא״ל:" : "Email:"}</strong>{" "}
            <a
              href="mailto:office@nimrodi.co.il"
              className="text-primary hover:text-gold hover:underline"
            >
              office@nimrodi.co.il
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
