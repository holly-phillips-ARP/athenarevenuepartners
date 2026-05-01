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
  message: z.string().trim().min(1, "Message is required").max(2000),
});

interface Props {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  title?: string;
  description?: string;
  source?: string;
}

export const ContactDialog = ({
  open,
  onOpenChange,
  title = "Send us a message",
  description = "Drop us a note and we'll get back to you within one business day.",
  source,
}: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Please check the form", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const id = crypto.randomUUID();
    const { error: emailError } = await supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "contact-message",
        idempotencyKey: `contact-message-${id}`,
        templateData: {
          name: parsed.data.name,
          email: parsed.data.email,
          message: parsed.data.message,
          source: source || null,
        },
      },
    });
    setSubmitting(false);
    if (emailError) {
      toast({ title: "Submission failed", description: emailError.message, variant: "destructive" });
      return;
    }
    toast({ title: "Message sent", description: "We'll be in touch shortly." });
    setForm({ name: "", email: "", message: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Name *</Label>
            <Input id="contact-name" value={form.name} onChange={update("name")} required maxLength={100} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">Email *</Label>
            <Input id="contact-email" type="email" value={form.email} onChange={update("email")} required maxLength={255} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-message">Message *</Label>
            <Textarea id="contact-message" value={form.message} onChange={update("message")} required maxLength={2000} rows={6} />
          </div>
          <Button type="submit" disabled={submitting} className="w-full rounded-full h-12">
            {submitting ? "Sending..." : "Send message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
