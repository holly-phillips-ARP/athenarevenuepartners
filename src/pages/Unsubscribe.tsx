import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

type Status = "validating" | "valid" | "already" | "invalid" | "submitting" | "success" | "error";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<Status>("validating");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON_KEY } },
        );
        const data = await res.json();
        if (!res.ok) {
          setStatus("invalid");
          return;
        }
        if (data.valid === false && data.reason === "already_unsubscribed") {
          setStatus("already");
          return;
        }
        if (data.valid === true) {
          setStatus("valid");
          return;
        }
        setStatus("invalid");
      } catch {
        setStatus("invalid");
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setStatus("submitting");
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    if (error) {
      setStatus("error");
      return;
    }
    if (data?.success) {
      setStatus("success");
    } else if (data?.reason === "already_unsubscribed") {
      setStatus("already");
    } else {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="max-w-md w-full text-center">
        <h1 className="font-display text-3xl text-foreground mb-4">Email preferences</h1>
        {status === "validating" && (
          <p className="text-muted-foreground">Checking your unsubscribe link…</p>
        )}
        {status === "valid" && (
          <>
            <p className="text-muted-foreground mb-8">
              Confirm below to stop receiving emails from Athena Revenue Partners.
            </p>
            <Button onClick={confirm} className="rounded-full h-12 px-8">
              Confirm unsubscribe
            </Button>
          </>
        )}
        {status === "submitting" && (
          <p className="text-muted-foreground">Processing…</p>
        )}
        {status === "success" && (
          <p className="text-foreground">
            You've been unsubscribed. We won't email you again.
          </p>
        )}
        {status === "already" && (
          <p className="text-foreground">You're already unsubscribed. No further action needed.</p>
        )}
        {status === "invalid" && (
          <p className="text-muted-foreground">
            This unsubscribe link is invalid or has expired.
          </p>
        )}
        {status === "error" && (
          <p className="text-muted-foreground">
            Something went wrong. Please try again later or email{" "}
            <a className="underline" href="mailto:hello@athenarevenuepartners.com">
              hello@athenarevenuepartners.com
            </a>
            .
          </p>
        )}
      </div>
    </main>
  );
};

export default Unsubscribe;
