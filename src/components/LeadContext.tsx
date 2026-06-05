import { createContext, useContext, useState, ReactNode } from "react";
import emailjs from "@emailjs/browser";
import { supabase } from "@/lib/supabase";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

type LeadCtx = {
  open: boolean;
  prefillService?: string;
  openModal: (service?: string) => void;
  closeModal: () => void;
  submitLead: (data: LeadData) => Promise<boolean>;
};

export type LeadData = {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  service?: string;
  message?: string;
  source?: string;
  photoUrls?: string[];
};

const Ctx = createContext<LeadCtx | null>(null);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefillService, setPrefill] = useState<string | undefined>();

  const openModal = (service?: string) => {
    setPrefill(service);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  const submitLead = async (data: LeadData) => {
    try {
      await supabase.from("roofing_leads").insert({
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        address: data.address || null,
        service: data.service || null,
        message: data.message || null,
        source: data.source || "lead-form",
        photo_urls: data.photoUrls && data.photoUrls.length ? data.photoUrls : null,
      });

      const recipients = ["sluggersusa@gmail.com", "amiegarciaotr@yahoo.com"];
      const templateParams = {
        to_email: recipients.join(","),
        from_name: data.name,
        from_phone: data.phone,
        from_email: data.email || "Not provided",
        address: data.address || "Not provided",
        service: data.service || "Not specified",
        message: data.message || "No message",
        source: data.source || "lead-form",
      };
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      }

      if (data.email) {
        await fetch("https://famous.ai/api/crm/6a220c8e02b9295900ce46da/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: data.email,
            name: data.name || undefined,
            source: data.source || "lead-form",
            tags: ["roofing-lead", data.service || "inspection"],
          }),
        });
      }
      return true;
    } catch {
      return false;
    }
  };

  return (
    <Ctx.Provider value={{ open, prefillService, openModal, closeModal, submitLead }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLead() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLead must be used within LeadProvider");
  return c;
}
