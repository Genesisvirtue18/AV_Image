import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Apoorva Verma" },
      { name: "description", content: "Book an image consultation with Apoorva Verma via WhatsApp, email or phone." },
      { property: "og:url", content: "https://av-image.vercel.app/contact" },
      { property: "og:image", content: "https://av-image.vercel.app/og-image.jpg" },
      { name: "twitter:image", content: "https://av-image.vercel.app/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://av-image.vercel.app/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const channels = [
    { icon: MessageCircle, label: "WhatsApp", value: "Reply in minutes", href: CONTACT.whatsapp, target: "_blank" as const, primary: true },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: "Call", value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
  ];
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="text-center mb-16">
        <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">Let's Talk</p>
        <h1 className="text-5xl md:text-6xl font-light">Reach out to <span className="italic text-gradient-gold">collaborate</span></h1>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">For corporate workshops, institutional training, image management programs and one-on-one coaching, choose the channel that works best.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {channels.map((c) => (
          <a key={c.label} href={c.href} target={"target" in c ? c.target : undefined} rel="noreferrer"
            className={`${c.primary ? "glass-btn-gold" : "glass"} rounded-3xl p-8 hover-lift text-center block`}>
            <c.icon className={`mx-auto mb-4 ${c.primary ? "" : "text-primary"}`} size={28}/>
            <div className={`text-sm uppercase tracking-widest mb-2 ${c.primary ? "" : "text-primary"}`}>{c.label}</div>
            <div className={`font-display text-lg ${c.primary ? "" : "text-foreground"}`}>{c.value}</div>
          </a>
        ))}
      </div>

      <div className="glass-strong rounded-3xl p-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-display mb-4">Studio Hours</h2>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex items-center gap-3"><Clock size={16} className="text-primary"/> Mon – Sat · 10:00 – 19:00 IST</li>
            <li className="flex items-center gap-3"><MapPin size={16} className="text-primary"/> Delhi · Onsite, online and hybrid programs</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-display mb-4">What to expect</h2>
          <ol className="space-y-3 text-muted-foreground text-sm list-decimal list-inside">
            <li>Share your audience, team size and training goals.</li>
            <li>Apoorva will recommend relevant modules and a delivery format.</li>
            <li>The program is customized by function, seniority and industry.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
