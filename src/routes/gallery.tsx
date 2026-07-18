import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Trophy, Star, Calendar } from "lucide-react";
import award1 from "@/assets/award-1.jpg";
import award2 from "@/assets/award-2.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import portrait from "@/assets/portrait-about.jpg";
import portrait2 from "@/assets/portrait-sitting.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Awards, Achievements & Press | Apoorva Verma" },
      { name: "description", content: "Awards, achievements, speaking engagements and press features for image consultant Apoorva Verma." },
      { property: "og:title", content: "Gallery — Apoorva Verma" },
      { property: "og:description", content: "Awards, recognitions and milestones." },
      { property: "og:url", content: "https://av-image.vercel.app/gallery" },
      { property: "og:image", content: "https://av-image.vercel.app/og-image.jpg" },
      { name: "twitter:image", content: "https://av-image.vercel.app/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://av-image.vercel.app/gallery" }],
  }),
  component: Gallery,
});

const awards = [
  { img: award1, title: "Outstanding Corporate Trainer", year: "ISIM Summit", body: "Recognised as an Outstanding Corporate Trainer at the ISIM Summit." },
  { img: award2, title: "Bhim Rao Ambedkar College Workshop", year: "Delhi University", body: "Delivered entrepreneurship and sales workshops, including a comprehensive session for 200+ students." },
  { img: event1, title: "Ramagya Group Corporate Office", year: "Corporate Training", body: "Designed an interactive session on enhancing executive presence and first impression management." },
  { img: event2, title: "Amity University", year: "Visiting Faculty", body: "Serves as visiting faculty at Amity Finishing School and facilitates confidence, entrepreneurship and professional image sessions." },
  { img: portrait, title: "Ozone Signature Retail Staff", year: "Image-Building Workshop", body: "Led image-building workshops to improve employee motivation and customer service engagement across store locations." },
  { img: portrait2, title: "Times Now Dress Code Standards", year: "Corporate Image", body: "Collaborated on corporate dress code standards to improve staff professionalism and workplace attire." },
];

const milestones = [
  { icon: Trophy, n: "10+", l: "Years Training Experience" },
  { icon: Star, n: "5", l: "Certifications" },
  { icon: Calendar, n: "12", l: "Corporate Modules" },
  { icon: Award, n: "200+", l: "Students In One Workshop" },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.6 } };

function Gallery() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <motion.div {...fadeUp} className="text-center mb-16">
        <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">Gallery</p>
        <h1 className="text-5xl md:text-6xl font-light">Projects & <span className="italic text-gradient-gold">Achievements</span></h1>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">A record of real training work across corporates, institutions, universities and client-facing teams.</p>
      </motion.div>

      <motion.section {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
        {milestones.map((m) => (
          <div key={m.l} className="glass-strong rounded-2xl p-6 text-center">
            <m.icon className="text-primary mx-auto mb-3" size={26}/>
            <div className="text-3xl font-display text-gradient-gold">{m.n}</div>
            <div className="mt-1 text-[10px] tracking-widest uppercase text-muted-foreground">{m.l}</div>
          </div>
        ))}
      </motion.section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="glass rounded-3xl overflow-hidden hover-lift group"
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted/20">
              <img src={a.img} alt={a.title} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"/>
            </div>
            <div className="p-7">
              <div className="text-[10px] tracking-[0.3em] text-primary mb-2">{a.year}</div>
              <h3 className="text-xl font-display mb-3">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
