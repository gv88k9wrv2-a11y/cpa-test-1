CREATE TABLE public.voluntary_disclosure_inquiries (
 id uuid PRIMARY KEY,
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL,
 company text NOT NULL DEFAULT '',
 email text NOT NULL,
 phone text NOT NULL,
 message text NOT NULL,
 language text NOT NULL CHECK (language IN ('he','en')),
 service_name text NOT NULL,
 page_path text NOT NULL
);
GRANT ALL ON public.voluntary_disclosure_inquiries TO service_role;
ALTER TABLE public.voluntary_disclosure_inquiries ENABLE ROW LEVEL SECURITY;
CREATE INDEX voluntary_inquiries_email_created ON public.voluntary_disclosure_inquiries (email, created_at DESC);
CREATE FUNCTION public.store_voluntary_inquiry(payload jsonb) RETURNS uuid
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE inquiry_id uuid := (payload->>'id')::uuid;
BEGIN
 PERFORM pg_advisory_xact_lock(hashtextextended(lower(payload->>'email'), 0));
 IF EXISTS (SELECT 1 FROM public.voluntary_disclosure_inquiries WHERE id = inquiry_id) THEN RETURN inquiry_id; END IF;
 IF (SELECT count(*) FROM public.voluntary_disclosure_inquiries WHERE email = lower(payload->>'email') AND created_at > now() - interval '1 hour') >= 3 THEN RAISE EXCEPTION 'Too many inquiries'; END IF;
 INSERT INTO public.voluntary_disclosure_inquiries (id,name,company,email,phone,message,language,service_name,page_path)
 VALUES (inquiry_id,payload->>'name',payload->>'company',lower(payload->>'email'),payload->>'phone',payload->>'message',payload->>'language',payload->>'service_name',payload->>'page_path');
 RETURN inquiry_id;
END;
$$;
REVOKE ALL ON FUNCTION public.store_voluntary_inquiry(jsonb) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.store_voluntary_inquiry(jsonb) TO service_role;