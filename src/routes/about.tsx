import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Award, Heart, Target, Compass, BookOpen, Globe, Users } from "lucide-react";
import { SITE_IMAGES } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Apoorva Verma — Image Consultant & Soft Skills Trainer" },
      { name: "description", content: "Apoorva Verma is a certified image consultant, soft skills trainer and CELTA-certified English language trainer based in Delhi." },
      { property: "og:title", content: "About Apoorva Verma" },
      { property: "og:description", content: "Profile, certifications, education and professional experience." },
      { property: "og:url", content: "https://av-image.vercel.app/about" },
      { property: "og:image", content: SITE_IMAGES.og },
      { name: "twitter:image", content: SITE_IMAGES.og },
    ],
    links: [{ rel: "canonical", href: "https://av-image.vercel.app/about" }],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Confidence", desc: "Training that helps people lead with presence, communicate with confidence and represent their organisation with grace." },
  { icon: Award, title: "Certified Expertise", desc: "International image consultancy, trainer skills, CELTA English training, soft skills and seasonal colour analysis credentials." },
  { icon: Target, title: "Business Alignment", desc: "Programs are adapted to function, level and industry so learning translates into visible workplace behaviour." },
  { icon: Sparkles, title: "Practical Delivery", desc: "Scenario-based learning, role plays, visual tools, group activities and coaching-led reflection." },
];

const journey = [
  { year: "2015-2020", title: "Director and owner, Stellar Tots Preschool", desc: "Led HR management, curriculum development, events, budgeting, policy management and teacher-training workshops." },
  { year: "2021-Present", title: "Image Consultant and Trainer, A.V Image Management", desc: "Runs group and one-on-one training in image enhancement, soft skills and English language training." },
  { year: "2021", title: "Trainer skills certification", desc: "Completed competence in trainer skills with Bodhih Training Solutions, Delhi." },
  { year: "2022-2023", title: "CELTA-certified English language trainer", desc: "Certified by Cambridge University in principles of teaching English effectively." },
  { year: "2023-2024", title: "Advanced image and soft skills credentials", desc: "Certified in advanced soft skills and seasonal colour analysis through the Indian School of Image Management." },
];

const method = [
  { icon: Compass, t: "Diagnose", d: "Understand the audience, workplace context, communication gaps and image goals before designing the session." },
  { icon: BookOpen, t: "Design", d: "Build modules around image, etiquette, emotional intelligence, communication and professional development." },
  { icon: Sparkles, t: "Practice", d: "Use role plays, scenarios, visual tools, feedback loops and group activities to make learning active." },
  { icon: Users, t: "Apply", d: "Focus on behaviour change that improves confidence, client engagement, collaboration and leadership readiness." },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.6 } };

function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative order-2 md:order-1">
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-3xl -z-10"/>
          <img src={SITE_IMAGES.primary} alt="Apoorva Verma portrait" loading="lazy" className="rounded-3xl object-cover object-top w-full aspect-[4/5] glass-strong p-2"/>
        </motion.div>
        <motion.div {...fadeUp} className="order-1 md:order-2">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">About The Trainer</p>
          <h1 className="text-5xl md:text-6xl font-light leading-[1.05]">
            Certified trainer for <span className="italic text-gradient-gold">credible, confident</span> professionals.
          </h1>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Apoorva Verma is an image consultant, soft skills trainer and CELTA-certified
              English language trainer with over a decade of training experience across
              education, communication and corporate sectors.
            </p>
            <p>
              Through A.V Image Management in Delhi, she provides group and one-on-one
              training in image enhancement, soft skills, English language training,
              first impression management and professional presence.
            </p>
            <p>
              She is also a visiting faculty member at Amity Finishing School,
              Amity University, where she mentors students in professional image,
              confidence and workplace readiness.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Long-form bio */}
      <section className="grid md:grid-cols-5 gap-12 mb-32 items-start">
        <motion.div {...fadeUp} className="md:col-span-2 md:sticky md:top-28">
          <img src={SITE_IMAGES.secondary} alt="Apoorva Verma at work" loading="lazy" className="rounded-3xl object-cover object-top w-full aspect-[4/5] glass-strong p-2"/>
        </motion.div>
        <motion.div {...fadeUp} className="md:col-span-3 space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-primary tracking-[0.3em] text-xs uppercase">Who I am</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight">A profile built across <span className="italic text-gradient-gold">training, image and communication</span>.</h2>
          <p>
            Apoorva's professional work focuses on personal branding, power dressing,
            communication mastery and interpersonal skills for diverse audiences including
            corporate executives, retail staff, students and non-profits.
          </p>
          <p>
            Her project experience includes image-building workshops for Ozone Signature's
            retail staff, a 3-day intensive workshop for Seher India, corporate dress code
            standards work with Times Now, NGO outreach with N.G.O Pratidhi, and programs
            for Amity University, TNC Aviation, Blossom Tree Preschool, Ramagya Group and
            Bhim Rao Ambedkar College.
          </p>
          <p>
            Her approach combines appearance, behaviour and communication with behavioural
            psychology, emotional intelligence, facilitation and professional development
            to create measurable outcomes in client engagement, team performance and
            personal growth.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="glass rounded-2xl p-5 text-center"><Globe className="text-primary mx-auto mb-2" size={22}/><div className="text-2xl font-display text-gradient-gold">10+</div><div className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">Years</div></div>
            <div className="glass rounded-2xl p-5 text-center"><Users className="text-primary mx-auto mb-2" size={22}/><div className="text-2xl font-display text-gradient-gold">200+</div><div className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">Students</div></div>
            <div className="glass rounded-2xl p-5 text-center"><Award className="text-primary mx-auto mb-2" size={22}/><div className="text-2xl font-display text-gradient-gold">5</div><div className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">Certifications</div></div>
          </div>
        </motion.div>
      </section>

      {/* Method */}
      <section className="mb-32">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">How I Work</p>
          <h2 className="text-4xl md:text-5xl font-light">A four-step <span className="italic text-gradient-gold">method</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {method.map((m, i) => (
            <motion.div key={m.t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass rounded-3xl p-8 hover-lift">
              <div className="text-[10px] tracking-[0.3em] text-primary mb-3">STEP {String(i+1).padStart(2,"0")}</div>
              <m.icon className="text-primary mb-4" size={26}/>
              <h3 className="text-xl font-display mb-3">{m.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journey timeline */}
      <section className="mb-32">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">Journey</p>
          <h2 className="text-4xl md:text-5xl font-light">A career in <span className="italic text-gradient-gold">training</span></h2>
        </motion.div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30"/>
          {journey.map((j, i) => (
            <motion.div
              key={j.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative pl-12 md:pl-0 mb-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}
            >
              <div className={`absolute top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_var(--gold)] left-3 md:left-auto ${i % 2 === 0 ? "md:-right-1.5" : "md:-left-1.5"}`}/>
              <div className="glass rounded-2xl p-6">
                <div className="text-xs tracking-[0.3em] text-primary mb-2">{j.year}</div>
                <h3 className="text-xl font-display mb-2">{j.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{j.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mb-32">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">The Philosophy</p>
          <h2 className="text-4xl md:text-5xl font-light">What I <span className="italic text-gradient-gold">stand for</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <motion.div key={v.title} {...fadeUp} className="glass rounded-2xl p-8 hover-lift">
              <v.icon className="text-primary mb-4" size={26}/>
              <h3 className="text-xl font-display mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <motion.section {...fadeUp} className="glass-strong rounded-3xl p-12 md:p-16">
        <h2 className="text-3xl md:text-4xl font-light mb-10">Credentials & <span className="italic text-gradient-gold">Education</span></h2>
        <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-muted-foreground">
          <li className="border-l-2 border-primary/40 pl-4">International Certification in Image Consultancy, Image Consultant Business Institute, Delhi</li>
          <li className="border-l-2 border-primary/40 pl-4">Certification of Competence in Trainer Skills, Bodhih Training Solutions, Delhi</li>
          <li className="border-l-2 border-primary/40 pl-4">CELTA-certified English Language Trainer, Cambridge University</li>
          <li className="border-l-2 border-primary/40 pl-4">International Advanced Soft Skills Certification, Indian School of Image Management</li>
          <li className="border-l-2 border-primary/40 pl-4">Certification in Seasonal Colour Analysis, Indian School of Image Management</li>
          <li className="border-l-2 border-primary/40 pl-4">B.Sc. (Hons) Biomedical Sciences, Delhi University</li>
          <li className="border-l-2 border-primary/40 pl-4">PGDM in Public Relations and Corporate Communications, Xavier's Institute of Communications, Mumbai</li>
          <li className="border-l-2 border-primary/40 pl-4">MA Psychology with specialisation in Counselling Psychology, ongoing</li>
        </ul>
        <Link to="/contact" className="glass-btn-gold rounded-full px-8 py-4 text-sm uppercase tracking-widest mt-10 inline-block">
          Work With Me
        </Link>
      </motion.section>
    </div>
  );
}
