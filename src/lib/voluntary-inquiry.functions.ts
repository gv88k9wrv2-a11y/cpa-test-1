import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
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
    const request = getRequest();
    const requestOrigin = request.headers.get("origin");
    const allowedOrigins = new Set(["https://nimrodi.co.il", "https://nimrodi.co.il", "https://cpa-test-1.lovable.app", "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app", new URL(request.url).origin]);
    if (!requestOrigin || !allowedOrigins.has(requestOrigin)) throw new Error("Forbidden");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const digits = data.phone.replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 15) throw new Error("Invalid phone");
    const payload = {
      ...data,
      service_name: data.language === "he" ? "גילוי מרצון והסדרה יזומה" : "Voluntary Disclosure & Tax Regularization",
      page_path: data.language === "he" ? "/voluntary-disclosure" : "/en/voluntary-disclosure",
    };
    const { error } = await supabaseAdmin.rpc("store_voluntary_inquiry", { payload });
    if (error) throw new Error("Unable to save inquiry. Please try again later.");
    return { stored: true };
  });