import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  id: z.string().uuid(),
  name: z.string().trim().min(2).max(200),
  company: z.string().trim().max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(8).max(30).regex(/^[+\d\s().-]+$/),
  message: z.string().trim().min(10).max(1000),
  language: z.enum(["he", "en"]),
});

// Public write-only contact operation: validate and rate-limit before privileged storage.
export const storeVoluntaryInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => inquirySchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const payload = {
      ...data,
      service_name: data.language === "he" ? "גילוי מרצון והסדרה יזומה" : "Voluntary Disclosure & Tax Regularization",
      page_path: data.language === "he" ? "/voluntary-disclosure" : "/en/voluntary-disclosure",
    };
    const { error } = await supabaseAdmin.rpc("store_voluntary_inquiry", { payload });
    if (error) throw new Error("Unable to save inquiry. Please try again later.");
    return { stored: true };
  });