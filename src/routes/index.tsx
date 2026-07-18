import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Crown, Briefcase, Scissors, ArrowRight, Star, Quote } from "lucide-react";
import portrait from "@/assets/portrait-hero.jpg";
import portraitAbout from "@/assets/portrait-about.jpg";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apoorva Verma — Image Consultant & Soft Skills Trainer" },
      { name: "description", content: "Certified image consultant, soft skills trainer and CELTA-certified English language trainer helping professionals lead with presence, confidence and credibility." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Crown, title: "Executive Presence", desc: "Image management, power dressing, body language and gravitas for leaders, managers and client-facing teams." },
  { icon: Sparkles, title: "Communication Mastery", desc: "Assertive communication, feedback, listening, business writing and confident hybrid communication." },
  { icon: Scissors, title: "Workplace Etiquette", desc: "Professional conduct, grooming, dining etiquette, cultural sensitivity and client-handling protocol." },
  { icon: Briefcase, title: "Corporate Training", desc: "Onsite workshops, masterclasses, modular rollouts and L&D calendar programs built for measurable behavior change." },
];

const stats = [
  { v: "10+", l: "Years Training Experience" },
  { v: "4", l: "Professional Certifications" },
  { v: "12", l: "Corporate Training Modules" },
  { v: "200+", l: "Students Trained in One Workshop" },
];

function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center grain">
        <div className="absolute inset-0 -z-10">
          <img src={portrait} alt="" className="absolute right-0 -top-[6%] h-[112%] w-full object-cover object-[68%_top] opacity-90 sm:object-[64%_top] md:top-0 md:h-full md:w-[60%] md:object-[center_12%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background md:bg-gradient-to-r md:from-background md:via-background/85 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-primary tracking-[0.3em] text-xs uppercase mb-6">A.V Image Management</p>
            <h1 className="text-5xl md:text-7xl leading-[1.05] font-light">
              Building people. <br/>
              <span className="text-gradient-gold italic font-display">Elevating brands.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              I help individuals and teams become credible, confident and competent
              professionals through image enhancement, soft skills training and English language coaching.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="glass-btn-gold rounded-full px-8 py-4 text-sm tracking-widest uppercase inline-flex items-center gap-2">
                Book a Consultation <ArrowRight size={16}/>
              </Link>
              <Link to="/services" className="glass-btn rounded-full px-8 py-4 text-sm tracking-widest uppercase">
                Explore Services
              </Link>
            </div>

            {/* Floating glass UI cards */}
            <div className="mt-14 grid grid-cols-2 gap-4 max-w-md">
              <div className="glass rounded-2xl p-4 hover-lift">
                <Star className="text-primary mb-2" size={18}/>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Trainer For</div>
                <div className="text-lg font-display">Teams & Institutions</div>
              </div>
              <div className="glass rounded-2xl p-4 hover-lift">
                <Crown className="text-primary mb-2" size={18}/>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Certified</div>
                <div className="text-lg font-display">CELTA & Image Consulting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / STATS */}
      <motion.section initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}} className="border-y border-primary/10 glass-strong">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div key={s.l} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.1}}>
              <div className="text-4xl md:text-5xl font-display text-gradient-gold">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ABOUT TEASER */}
      <motion.section initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:0.7}} className="mx-auto max-w-7xl px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl -z-10"/>
          <img src={portraitAbout} alt="Apoorva Verma" className="rounded-3xl object-cover object-top w-full aspect-[4/5] glass-strong p-2"/>
        </div>
        <div>
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">About Apoorva Verma</p>
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">Training that turns competence into <span className="italic text-gradient-gold">visible confidence</span>.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Apoorva Verma is a certified image consultant, soft skills trainer and
            CELTA-certified English language trainer based in Delhi.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Her workshops blend appearance, behaviour and communication with practical
            role plays, reflection and real-time feedback for corporate teams, retail staff,
            students, educators and client-facing professionals.
          </p>
          <Link to="/about" className="glass-btn rounded-full px-7 py-3 text-sm uppercase tracking-widest inline-flex items-center gap-2">
            My Story <ArrowRight size={14}/>
          </Link>
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:0.7}} className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">What I Offer</p>
          <h2 className="text-4xl md:text-5xl font-light">Signature <span className="italic text-gradient-gold">Services</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.08}} className="glass rounded-2xl p-8 hover-lift group cursor-default">
              <s.icon className="text-primary mb-5" size={28}/>
              <h3 className="text-xl font-display mb-3 gold-underline inline-block">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="glass-btn-gold rounded-full px-8 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
            See All Services <ArrowRight size={16}/>
          </Link>
        </div>
      </motion.section>

      {/* TESTIMONIAL */}
      <motion.section initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true,margin:"-80px"}} transition={{duration:0.7}} className="mx-auto max-w-5xl px-6 py-24">
        <div className="glass-strong rounded-3xl p-12 md:p-16 text-center relative">
          <Quote className="text-primary mx-auto mb-6" size={36}/>
          <p className="text-2xl md:text-3xl font-display italic leading-relaxed">
            "Her extensive knowledge on the topic and her exemplary way of interaction
            excited the curiosity among the students. The session was highly engaging and insightful."
          </p>
          <div className="mt-8 text-sm tracking-widest uppercase text-primary">— Trishna Sarkar, Bhim Rao Ambedkar College, Delhi University</div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:0.7}} className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-light leading-tight">
          Ready to build a more <span className="italic text-gradient-gold">confident</span> team?
        </h2>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">Reach out for corporate workshops, institutional programs, image consulting and one-on-one training.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="glass-btn-gold rounded-full px-8 py-4 text-sm uppercase tracking-widest">WhatsApp Me</a>
          <a href={`mailto:${CONTACT.email}`} className="glass-btn rounded-full px-8 py-4 text-sm uppercase tracking-widest">Email</a>
          <a href={`tel:${CONTACT.phoneRaw}`} className="glass-btn rounded-full px-8 py-4 text-sm uppercase tracking-widest">Call</a>
        </div>
      </motion.section>
    </div>
  );
}
