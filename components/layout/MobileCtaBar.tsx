import { PhoneCall, MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/content";

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/70 backdrop-blur sm:hidden">
      <div className="mx-auto flex max-w-6xl gap-2 px-4 py-3">
        <a
          href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black"
        >
          <PhoneCall className="h-4 w-4" />
          Appeler
        </a>
        <a
          href={contactInfo.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
