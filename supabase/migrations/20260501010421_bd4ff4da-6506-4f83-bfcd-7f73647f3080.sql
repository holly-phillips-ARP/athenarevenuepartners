CREATE TABLE public.diagnostic_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  role text,
  arr_stage text,
  challenge text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.diagnostic_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a diagnostic request"
ON public.diagnostic_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can view diagnostic requests"
ON public.diagnostic_requests FOR SELECT
TO authenticated
USING (true);