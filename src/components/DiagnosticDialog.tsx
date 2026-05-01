import { useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  role: z.string().trim().max(100).optional().or(z.literal("")),
  arr_stage: z.string().trim().max(100).optional().or(z.literal("")),
  challenge: z.string().trim().max(1000).optional().or(z.literal("")),
});

interface Props {
  open: boolean;
  onOpenChange: (o: boolean) => void;
}

export const DiagnosticDialog = ({ open, onOpenChange }: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    arr_stage: "",
    challenge: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const first = parsed.error.errors[0];
      toast({ title: "Please check the form", description: first.message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const payload = {
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || null,
      role: parsed.data.role || null,
      arr_stage: parsed.data.arr_stage || null,
      challenge: parsed.data.challenge || null,
    };
    const { error } = await supabase.from("diagnostic_requests").insert(payload);
    if (error) {
      setSubmitting(false);
      toast({ title: "Submission failed", description: error.message, variant: "destructive" });
      return;
    }
    const { error: emailError } = await supabase.functions.invoke("send-diagnostic-email", {
      body: payload,
    });
    setSubmitting(false);
    if (emailError) {
      console.error("Email notification failed", emailError);
    }
    toast({ title: "Request received", description: "We'll be in touch within one business day." });
    setForm({ name: "", email: "", company: "", role: "", arr_stage: "", challenge: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Book a Revenue Diagnostic</DialogTitle>
          <DialogDescription>
            Tell us a bit about your company and we'll be in touch to schedule.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" value={form.name} onChange={update("name")} required maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" value={form.email} onChange={update("email")} required maxLength={255} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" value={form.company} onChange={update("company")} maxLength={150} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" value={form.role} onChange={update("role")} maxLength={100} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="arr_stage">Current ARR / stage</Label>
              <Input id="arr_stage" value={form.arr_stage} onChange={update("arr_stage")} maxLength={100} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="challenge">Top revenue challenge</Label>
              <Textarea id="challenge" value={form.challenge} onChange={update("challenge")} maxLength={1000} rows={4} />
            </div>
          </div>
          <Button type="submit" disabled={submitting} className="w-full rounded-full h-12">
            {submitting ? "Sending..." : "Submit request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
