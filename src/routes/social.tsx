import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { SITE_IMAGES } from "@/lib/images";

export const Route = createFileRoute("/social")({
  head: () => ({
    meta: [
      { title: "Social — Instagram & LinkedIn | Apoorva Verma" },
      { name: "description", content: "Follow Apoorva Verma on Instagram and LinkedIn. Recent posts, behind-the-scenes and styling insights." },
      { property: "og:title", content: "Follow Apoorva Verma" },
      { property: "og:description", content: "Latest posts and updates from Instagram and LinkedIn." },
      { property: "og:url", content: "https://av-image.vercel.app/social" },
      { property: "og:image", content: SITE_IMAGES.og },
      { name: "twitter:image", content: SITE_IMAGES.og },
    ],
    links: [{ rel: "canonical", href: "https://av-image.vercel.app/social" }],
  }),
  component: Social,
});

const igPosts = [
  { img: SITE_IMAGES.primary, caption: "Building people, elevating brands: image management for confident professionals.", likes: 1240, comments: 86 },
  { img: SITE_IMAGES.secondary, caption: "Workshop moments from institutional training with students and educators.", likes: 980, comments: 54 },
  { img: SITE_IMAGES.primary, caption: "Appearance, behaviour and communication are the A.B.C. of professional image.", likes: 1612, comments: 122 },
  { img: SITE_IMAGES.secondary, title: "Award", caption: "Recognised as Outstanding Corporate Trainer at the ISIM Summit.", likes: 2100, comments: 198 },
  { img: SITE_IMAGES.primary, caption: "Confidence is built through grooming, self-perception and communication practice.", likes: 870, comments: 41 },
  { img: SITE_IMAGES.secondary, caption: "Executive presence and first impression management for corporate teams.", likes: 760, comments: 38 },
];

const liPosts = [
  { img: SITE_IMAGES.primary, title: "Why soft skills training is mission-critical",
    excerpt: "Communication, collaboration and adaptability are no longer optional. They directly affect retention, morale and leadership readiness.",
    reactions: 412, comments: 47 },
  { img: SITE_IMAGES.secondary, title: "Executive presence and first impression management",
    excerpt: "A practical session for professionals who need presence, communication and personal brand to work together.",
    reactions: 1280, comments: 156 },
  { img: SITE_IMAGES.primary, title: "The polished professional",
    excerpt: "Workplace conduct, grooming, business English and virtual presence are finishing-school essentials for modern teams.",
    reactions: 689, comments: 73 },
];

const channels = [
  { icon: Instagram, label: "Instagram", handle: "@avimagemanagement", href: CONTACT.instagram, color: "from-[#FFC9A8] via-[#FF7E5F] to-[#E91E63]" },
  { icon: Linkedin, label: "LinkedIn", handle: "Apoorva Verma", href: CONTACT.linkedin, color: "from-[#0A66C2] to-[#004182]" },
  { icon: Facebook, label: "Facebook", handle: "A.V Image Management", href: CONTACT.facebook, color: "from-[#1877F2] to-[#0A4DA1]" },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.6 } };

function Social() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <motion.div {...fadeUp} className="text-center mb-14">
        <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">Follow Along</p>
        <h1 className="text-5xl md:text-6xl font-light">Social <span className="italic text-gradient-gold">Feed</span></h1>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">Updates from A.V Image Management: workshops, training insights, confidence tools and professional presence notes.</p>
      </motion.div>

      {/* Follow CTAs */}
      <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-5 mb-20">
        {channels.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="glass rounded-3xl p-7 hover-lift flex items-center gap-5 group">
            <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center shrink-0`}>
              <c.icon className="text-white" size={26}/>
            </div>
            <div className="flex-1">
              <div className="text-[10px] tracking-widest uppercase text-primary">{c.label}</div>
              <div className="text-lg font-display">{c.handle}</div>
            </div>
            <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18}/>
          </a>
        ))}
      </motion.div>

      {/* Instagram grid */}
      <section className="mb-24">
        <motion.div {...fadeUp} className="flex items-end justify-between mb-8">
          <div>
            <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Latest from</p>
            <h2 className="text-3xl md:text-4xl font-light">Instagram <span className="italic text-gradient-gold">@avimagemanagement</span></h2>
          </div>
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="glass-btn-gold rounded-full px-6 py-3 text-xs uppercase tracking-widest hidden md:inline-flex items-center gap-2">
            Follow <Instagram size={14}/>
          </a>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {igPosts.map((p, i) => (
            <motion.a
              key={i}
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="relative aspect-square overflow-hidden rounded-2xl glass group block"
            >
              <img src={p.img} alt={p.caption} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <p className="text-xs text-foreground/95 mb-3 line-clamp-3">{p.caption}</p>
                <div className="flex gap-4 text-[10px] tracking-widest uppercase text-primary">
                  <span className="flex items-center gap-1"><Heart size={12}/> {p.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle size={12}/> {p.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* LinkedIn posts */}
      <section className="mb-20">
        <motion.div {...fadeUp} className="flex items-end justify-between mb-8">
          <div>
            <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Latest from</p>
            <h2 className="text-3xl md:text-4xl font-light">LinkedIn <span className="italic text-gradient-gold">Essays</span></h2>
          </div>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="glass-btn-gold rounded-full px-6 py-3 text-xs uppercase tracking-widest hidden md:inline-flex items-center gap-2">
            Follow <Linkedin size={14}/>
          </a>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {liPosts.map((p, i) => (
            <motion.a
              key={i}
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-3xl overflow-hidden hover-lift block"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover object-top"/>
              </div>
              <div className="p-7">
                <h3 className="text-lg font-display mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">{p.excerpt}</p>
                <div className="flex gap-4 text-[10px] tracking-widest uppercase text-primary">
                  <span className="flex items-center gap-1"><Heart size={12}/> {p.reactions}</span>
                  <span className="flex items-center gap-1"><MessageCircle size={12}/> {p.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <motion.div {...fadeUp} className="glass-strong rounded-3xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-light">Let's stay in <span className="italic text-gradient-gold">touch</span></h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Follow for image management, soft skills, etiquette, communication and workplace-readiness updates.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {channels.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="glass-btn rounded-full px-6 py-3 text-xs uppercase tracking-widest inline-flex items-center gap-2">
              <c.icon size={14} className="text-primary"/> Follow on {c.label}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
