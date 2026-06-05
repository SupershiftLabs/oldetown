import { createContext, useContext, useState, ReactNode } from "react";
import { supabase } from "@/lib/supabase";

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
