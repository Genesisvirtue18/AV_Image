import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Crown, Sparkles, Scissors, Briefcase, Users, ArrowRight, Heart, MessageSquare, UserCheck } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Corporate Training, Image Management & Soft Skills | Apoorva Verma" },
      { name: "description", content: "Corporate soft skills, executive presence, image management, communication, etiquette, leadership and professional growth training by Apoorva Verma." },
      { property: "og:title", content: "Services — Apoorva Verma" },
      { property: "og:description", content: "Training modules and specialized corporate offerings." },
      { property: "og:url", content: "https://av-image.vercel.app/services" },
      { property: "og:image", content: "https://av-image.vercel.app/og-image.jpg" },
      { name: "twitter:image", content: "https://av-image.vercel.app/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://av-image.vercel.app/services" }],
  }),
  component: Services,
});

const pillars = [
  { icon: Heart, t: "Improve retention and morale" },
  { icon: UserCheck, t: "Build leadership readiness" },
  { icon: Sparkles, t: "Strengthen brand image in client interactions" },
  { icon: Crown, t: "Create polished, confident professionals" },
  { icon: Users, t: "Improve collaboration across functions" },
  { icon: MessageSquare, t: "Reduce burnout with resilience tools" },
];

const individual = [
  { icon: Crown, title: "Executive Presence & Image Management", price: "Leadership & Client-Facing Excellence", desc: "Cultivate gravitas, polish and credibility for leaders, managers and teams that represent the brand in important rooms.", bullets: ["Personal branding in the corporate world", "Power dressing and body language for impact", "First impressions and commanding the room", "Voice, posture and gravitas for CXOs and managers", "Projecting authority without intimidation"] },
  { icon: MessageSquare, title: "Communication Mastery", price: "Clarity, Intention & Influence", desc: "Help teams communicate with clarity, empathy and influence across departments, generations and hybrid environments.", bullets: ["Assertive and strategic communication", "Giving and receiving constructive feedback", "Listening skills for collaboration and empathy", "Email, chat and professional writing etiquette", "Non-verbal communication in hybrid environments"] },
  { icon: Briefcase, title: "Workplace Etiquette & Cultural Sensitivity", price: "Professional Conduct", desc: "Build professional behaviour that reflects brand values across cultures, meetings, client interactions and workplace rituals.", bullets: ["Business etiquette and professional grace", "Dining etiquette and hosting protocol", "Cultural intelligence for global teams", "Client handling and relationship building", "Workplace respect and inclusive conduct"] },
  { icon: Users, title: "Leadership, Team Dynamics & Emotional Intelligence", price: "Manager & Team Development", desc: "Develop emotionally intelligent leaders and team players who can lead through conflict, pressure and change.", bullets: ["Situational leadership and delegation", "Emotional intelligence in conflict and pressure", "Leading without title: influence and initiative", "Trust-building and high-performing teams", "Coaching skills for managers"] },
  { icon: UserCheck, title: "Client-Facing & Sales Team Enhancement", price: "Frontline Excellence", desc: "Train sales, service and frontline professionals to create winning impressions and maintain long-term client rapport.", bullets: ["Executive grooming for sales and service teams", "Rapport building and relationship selling", "Voice, appearance and non-verbal influence", "Handling objections and difficult conversations", "Personal impact in negotiations and pitches"] },
  { icon: Sparkles, title: "Wellness, Resilience & Professional Growth", price: "Career Sustainability", desc: "Support employee wellbeing, motivation and long-term development with practical resilience and focus strategies.", bullets: ["Stress and burnout management strategies", "Time and energy management for peak performance", "Emotional regulation at work", "Mindfulness and focus in a distracted workplace", "Managing career change and reinvention"] },
];

const corporate = [
  { title: "The Art of Influence: Communication for Impact & Authority", desc: "For team leads, managers and client-facing professionals who need to lead conversations, command rooms and influence outcomes with clarity and confidence." },
  { title: "Inner Presence: Confidence, Assertiveness & Mindset Mastery", desc: "For emerging leaders, women professionals and mid-career talent building authentic presence, boundary-setting skills and a resilient growth mindset." },
  { title: "Strategic Visibility & Personal Branding at Work", desc: "For high-potential employees, women in leadership and specialists who need visibility without self-promotion fatigue or burnout." },
  { title: "The Polished Professional: Finishing School for the Workplace", desc: "For fresh recruits, junior staff and customer-facing professionals learning grooming, workplace conduct, business English and virtual presence essentials." },
];

const deliveryFormats = [
  { title: "Onsite Workshops", desc: "One to two day workshops for teams that need immersive, high-engagement learning with practical workplace application." },
  { title: "Masterclasses", desc: "Virtual or onsite 2-3 hour sessions for focused themes such as etiquette, communication, grooming or executive presence." },
  { title: "Hybrid Modular Rollouts", desc: "Multi-session learning journeys customized by function, level and industry for sustained behaviour change." },
  { title: "Executive Bootcamps", desc: "Intensive programs and thematic series for leaders, managers and high-potential employees." },
  { title: "L&D Calendar Integration", desc: "Quarterly or annual modules that can be plugged into an organization's existing learning and development calendar." },
];

const fashion = [
  { title: "Scenario-based learning", desc: "Sessions use workplace scenarios, role plays and guided reflection so participants practise the behaviour, not just hear the theory." },
  { title: "Visual tools", desc: "Style scales, posture grids, persona maps and other visual aids make image, presence and communication concrete." },
  { title: "Real-time feedback", desc: "Group activities and facilitator feedback help teams notice, correct and repeat improved professional behaviours." },
];

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      {/* Hero */}
      <motion.div {...fadeUp} className="text-center mb-20">
        <p className="text-primary tracking-[0.4em] text-xs uppercase mb-5">Building People · Elevating Brands</p>
        <h1 className="text-5xl md:text-7xl font-light leading-[1.05]">Corporate <span className="italic text-gradient-gold">Training</span></h1>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Soft skills keep people hired, growing and ready for leadership. Apoorva's training
          helps organisations build polished, assertive and emotionally intelligent professionals
          who communicate well and represent the brand with confidence.
        </p>
      </motion.div>

      {/* Pillars */}
      <motion.section {...fadeUp} className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-28">
        {pillars.map((p) => (
          <div key={p.t} className="glass rounded-2xl p-6 hover-lift flex items-center gap-4">
            <p.icon className="text-primary shrink-0" size={26}/>
            <span className="text-sm md:text-base text-foreground/90">{p.t}</span>
          </div>
        ))}
      </motion.section>

      {/* INDIVIDUAL SOLUTIONS */}
      <section className="mb-28">
        <motion.div {...fadeUp} className="mb-12">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Training Modules Offered</p>
          <h2 className="text-4xl md:text-5xl font-light">Core <span className="italic text-gradient-gold">Modules</span></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">Business-aligned modules rooted in image, communication and behavioural science for real-world impact.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {individual.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass rounded-3xl p-8 hover-lift flex flex-col"
            >
              <s.icon className="text-primary mb-5" size={28}/>
              <h3 className="text-xl font-display mb-2">{s.title}</h3>
              <div className="text-[10px] uppercase tracking-[0.25em] text-primary/80 mb-4">{s.price}</div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{s.desc}</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground mb-7">
                {s.bullets.map((b) => <li key={b} className="flex gap-2"><span className="text-primary">·</span>{b}</li>)}
              </ul>
              <Link to="/contact" className="glass-btn rounded-full px-5 py-2.5 text-[10px] uppercase tracking-[0.25em] inline-flex items-center justify-center gap-2 mt-auto">
                Know More <ArrowRight size={11}/>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CORPORATE */}
      <section className="mb-28">
        <motion.div {...fadeUp} className="mb-12">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Specialized Offerings</p>
          <h2 className="text-4xl md:text-5xl font-light">Focused <span className="italic text-gradient-gold">Programs</span></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">Targeted programs for managers, emerging leaders, fresh recruits, high-potential employees and customer-facing professionals.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {corporate.map((s) => (
            <motion.div key={s.title} {...fadeUp} className="glass-strong rounded-3xl p-8 hover-lift">
              <h3 className="text-2xl font-display mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WEDDINGS */}
      <section className="mb-28">
        <motion.div {...fadeUp} className="mb-12">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Delivery Format</p>
          <h2 className="text-4xl md:text-5xl font-light">Flexible <span className="italic text-gradient-gold">Engagements</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {deliveryFormats.map((s) => (
            <motion.div key={s.title} {...fadeUp} className="glass rounded-3xl p-8 hover-lift">
              <h3 className="text-xl font-display mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FASHION & FILM */}
      <section className="mb-28">
        <motion.div {...fadeUp} className="mb-12">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Methodology</p>
          <h2 className="text-4xl md:text-5xl font-light">How The Learning <span className="italic text-gradient-gold">Sticks</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {fashion.map((s) => (
            <motion.div key={s.title} {...fadeUp} className="glass rounded-3xl p-8 hover-lift">
              <Scissors className="text-primary mb-4" size={22}/>
              <h3 className="text-xl font-display mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.div {...fadeUp} className="glass-strong rounded-3xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-light">Build a program for your team</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Share your audience, goals and timeline. Apoorva can customize modules by function, seniority and industry.</p>
        <Link to="/contact" className="glass-btn-gold rounded-full px-8 py-4 text-sm uppercase tracking-widest mt-8 inline-block">Reach Out To Collaborate</Link>
      </motion.div>
    </div>
  );
}
