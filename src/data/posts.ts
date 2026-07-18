export type FAQ = { q: string; a: string };
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorBio: string;
  body: { heading: string; content: string }[];
  faqs: FAQ[];
};

export const posts: BlogPost[] = [
  {
    slug: "why-soft-skills-training-is-mission-critical",
    title: "Why Soft Skills Training Is Mission-Critical",
    excerpt: "Communication, collaboration, etiquette and adaptability directly shape retention, morale, leadership readiness and client trust.",
    category: "Corporate Training",
    readTime: "5 min",
    date: "2026-07-18",
    author: "Apoorva Verma",
    authorBio: "Certified image consultant, soft skills trainer and CELTA-certified English language trainer based in Delhi.",
    body: [
      {
        heading: "Soft skills protect performance",
        content:
          "Hard skills may get people hired, but soft skills help them stay effective, collaborative and ready for larger responsibility. Teams that communicate clearly, listen well and handle pressure professionally are easier to trust in client rooms and internal meetings.",
      },
      {
        heading: "What companies gain",
        content:
          "A focused soft skills program strengthens brand image through polished professionals, improves collaboration across functions, enhances client relationships and builds leadership readiness across mid and senior management levels.",
      },
      {
        heading: "How the learning sticks",
        content:
          "The most useful training is active. My sessions use scenarios, role plays, group activities, visual tools and real-time feedback so participants practise the behaviour and can apply it immediately at work.",
      },
    ],
    faqs: [
      { q: "Who is this training for?", a: "Corporate teams, client-facing professionals, managers, fresh recruits, educators, students and institutions." },
      { q: "Can modules be customized?", a: "Yes. Programs are customized by function, seniority, industry and the organisation's current goals." },
    ],
  },
  {
    slug: "executive-presence-and-image-management",
    title: "Executive Presence & Image Management for the Workplace",
    excerpt: "Presence is built through personal branding, power dressing, posture, voice, first impressions and authority without intimidation.",
    category: "Image Management",
    readTime: "6 min",
    date: "2026-07-18",
    author: "Apoorva Verma",
    authorBio: "Founder of A.V Image Management and visiting faculty at Amity Finishing School, Amity University.",
    body: [
      {
        heading: "The A.B.C. of professional image",
        content:
          "Image management is the alignment of appearance, behaviour and communication. When these three elements support each other, professionals look credible, communicate with intention and carry themselves with quiet confidence.",
      },
      {
        heading: "Executive presence is practical",
        content:
          "Training can include personal branding in the corporate world, power dressing, body language for impact, first impressions, voice, posture, gravitas and projecting authority without intimidation.",
      },
      {
        heading: "Where it helps",
        content:
          "Executive presence is especially useful for managers, CXOs, high-potential employees, women in leadership and client-facing teams who need to represent the brand with consistency and polish.",
      },
    ],
    faqs: [
      { q: "Is image management only about clothing?", a: "No. Clothing is one part of a larger system that includes behaviour, communication, grooming, etiquette, posture and confidence." },
      { q: "Do you run this as a workshop?", a: "Yes. It can be delivered as an onsite workshop, masterclass, modular rollout or executive bootcamp." },
    ],
  },
  {
    slug: "the-polished-professional",
    title: "The Polished Professional: Finishing School for the Workplace",
    excerpt: "Fresh recruits and customer-facing teams need the unspoken skills of grooming, workplace conduct, business English and virtual presence.",
    category: "Professional Growth",
    readTime: "4 min",
    date: "2026-07-18",
    author: "Apoorva Verma",
    authorBio: "Image consultant, soft skills trainer and CELTA-certified English language trainer.",
    body: [
      {
        heading: "Professional polish starts early",
        content:
          "New professionals often know the technical requirements of a role but have not been taught the unspoken expectations of workplace conduct, communication, boundaries, hierarchy and feedback.",
      },
      {
        heading: "Core finishing-school themes",
        content:
          "A workplace finishing-school program can cover grooming and appearance for work, business English in emails and meetings, speaking clearly and courteously, in-office presence, virtual presence and respectful workplace behaviour.",
      },
      {
        heading: "Why organisations invest",
        content:
          "Polished professionals create better first impressions, reduce avoidable communication friction and help clients experience the organisation as credible, respectful and easy to work with.",
      },
    ],
    faqs: [
      { q: "Is this only for freshers?", a: "No. It is useful for fresh recruits, junior staff, customer-facing teams and anyone moving into a more visible role." },
      { q: "Can English language training be included?", a: "Yes. Apoorva is CELTA-certified and can include business English for emails, calls and meetings." },
    ],
  },
];
