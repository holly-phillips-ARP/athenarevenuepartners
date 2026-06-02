
-- 1. Fix diagnostic_requests SELECT: remove blanket authenticated read
DROP POLICY IF EXISTS "Authenticated users can view diagnostic requests" ON public.diagnostic_requests;

CREATE POLICY "Service role can view diagnostic requests"
ON public.diagnostic_requests
FOR SELECT
TO public
USING (auth.role() = 'service_role');

-- 2. Replace permissive INSERT(true) with a real validation check
DROP POLICY IF EXISTS "Anyone can submit a diagnostic request" ON public.diagnostic_requests;

CREATE POLICY "Anyone can submit a diagnostic request"
ON public.diagnostic_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) > 0
  AND length(name) <= 100
  AND length(trim(email)) > 0
  AND length(email) <= 255
  AND position('@' in email) > 1
);

-- 3. Lock down SECURITY DEFINER functions + set fixed search_path
REVOKE EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.delete_email(text, bigint) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) TO service_role;
GRANT EXECUTE ON FUNCTION public.delete_email(text, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) TO service_role;

ALTER FUNCTION public.enqueue_email(text, jsonb) SET search_path = public, pgmq;
ALTER FUNCTION public.read_email_batch(text, integer, integer) SET search_path = public, pgmq;
ALTER FUNCTION public.delete_email(text, bigint) SET search_path = public, pgmq;
ALTER FUNCTION public.move_to_dlq(text, text, bigint, jsonb) SET search_path = public, pgmq;
