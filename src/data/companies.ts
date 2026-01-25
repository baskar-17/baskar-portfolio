import sportsgravyLogo from "../assets/logos/sportsgravylogo.png"
import brainvaultLogo from "../assets/logos/brainvaultlogo.png"
import mykinderpassLogo from "../assets/logos/mykinderpasslogo.png"
import mudrexLogo from "../assets/logos/mudrexlogo.png"
import aplushubLogo from "../assets/logos/aplushublogo.png"
import onhandLogo from "../assets/logos/onhandlogo.png"


export type CompanyData = {
  slug: string
  company: string
  role: string
  duration: string
  location?: string
  logoSrc?: string
  website?: string
  tags?: string[]
  intro?: string
  highlights?: string[]
  story?: string[]
}

export const COMPANIES: CompanyData[] = [
  {
    slug: "sportsgravy",
    company: "SportsGravy",
    role: "UI/UX Designer",
    duration: "Nov 2023 — Present",
    location: "Chennai, IN",
    logoSrc: sportsgravyLogo,
    website: "https://sportsgravy.com",
    tags: ["Web App", "Mobile App", "Sports Tech", "Marketing"],
    intro:
      "SportsGravy is a sports tech platform, and I handle end-to-end design here — from product features to marketing visuals.",
    highlights: [
      "Owned the complete design experience across web app, mobile app, and public website.",
      "Designed user flows, wireframes, and final UI for core product features used by teams, families, and organizers.",
      "Worked closely with developers and PMs to ship features iteratively and realistically.",
      "Created marketing and promotional graphics to support product launches and campaigns.",
    ],
    story: [
      "This role gave me full ownership — from early ideas to polished, production-ready designs.",
      "I enjoyed balancing product UX with real-world sports workflows, where users are often busy and time-sensitive.",
    ],
  },

  {
    slug: "brainvault",
    company: "BrainVault Technologies",
    role: "UI/UX Designer",
    duration: "Nov 2023 — Present",
    location: "Chennai, IN",
    logoSrc: brainvaultLogo,
    website: "https://brainvaulttech.com",
    tags: ["Product Design", "Fintech", "Mentorship"],
    intro:
      "BrainVault works closely with clients to build products with dedicated product and tech teams.",
    highlights: [
      "Mentored junior designers working across multiple client projects.",
      "Contributed to a fintech product, focusing on usability and clean data presentation.",
      "Designed graphic and visual assets for marketing and brand communication.",
      "Supported cross-functional teams with design direction and reviews.",
    ],
    story: [
      "This role pushed me beyond just designing screens — into mentoring, reviewing work, and shaping design thinking.",
      "I enjoyed switching contexts between product UX and marketing design while maintaining consistency and quality.",
    ],
  },

  {
    slug: "mykinderpass",
    company: "MyKinderPass",
    role: "UI/UX Designer",
    duration: "Mar 2021 — May 2023",
    location: "Singapore (Remote)",
    logoSrc: mykinderpassLogo,
    website: "https://mykinderpass.com",
    tags: ["Healthcare", "Web App", "Mobile App"],
    intro:
      "MyKinderPass focuses on child health and development, supporting parents and therapists through digital tools.",
    highlights: [
      "Designed features for parent-facing web and mobile applications.",
      "Worked on therapist-facing web app experiences to support assessments and workflows.",
      "Collaborated with product and engineering teams to refine flows through feedback and iteration.",
    ],
    story: [
      "This role helped me design for sensitive and meaningful use cases involving children and families.",
      "I learned how small UX decisions can have a big impact when users rely on clarity and trust.",
    ],
  },

  {
    slug: "mudrex",
    company: "Mudrex",
    role: "Jr. UI/UX Designer",
    duration: "Oct 2020 — Mar 2021",
    location: "Bangalore, IN",
    logoSrc: mudrexLogo,
    website: "https://mudrex.com",
    tags: ["Crypto", "Fintech", "Early Career"],
    intro:
      "Mudrex is a crypto trading platform, and this was my early professional design role.",
    highlights: [
      "Worked under the guidance of senior designers to deliver product features.",
      "Assisted in designing user flows and UI screens for trading-related features.",
      "Learned real-world product constraints, design reviews, and handoff practices.",
    ],
    story: [
      "This role laid the foundation for my UX career.",
      "I learned how to take feedback, iterate quickly, and design within real product limitations.",
    ],
  },

  {
    slug: "aplushub",
    company: "A Plus Hub",
    role: "UI/UX Designer",
    duration: "Freelance Engagement",
    location: "Remote",
    logoSrc: aplushubLogo,
    website: "https://www.aplushub.com/",
    tags: ["Job Platform", "Freelance", "Web"],
    intro:
      "A Plus Hub is a job search and hiring platform, where I worked as a freelance designer.",
    highlights: [
      "Designed UX and UI improvements for the job search and browsing experience.",
      "Focused on clarity, accessibility, and ease of navigation for users.",
      "Worked independently and delivered designs aligned with business goals.",
    ],
    story: [
      "Freelance work taught me how to communicate clearly, manage expectations, and deliver efficiently.",
    ],
  },
  {
    slug: "onhand",
    company: "OnHand Solutions",
    role: "UI/UX Designer",
    duration: "Freelance Engagement",
    location: "Remote",
    logoSrc: onhandLogo,
    website: "https://dairy.onhand.in/Account/LogOn?ReturnUrl=%2F",
    tags: ["CRM", "POS", "Web", "Mobile"],
    intro:
  "OnHand Solutions is a digital platform company building practical software products for business operations and hiring workflows.",

highlights: [
  "Improved the job search and hiring experience by refining navigation, layouts, and information hierarchy.",
  "Designed with a strong focus on clarity, accessibility, and mobile-friendly interactions, aligning with OnHand’s product philosophy.",
  "Translated business requirements into usable, scalable UI solutions while working independently with minimal supervision.",
],

story: [
  "Working as a freelance designer at OnHand Solutions strengthened my ability to own problems end-to-end, communicate design decisions clearly, and deliver efficient, user-focused solutions that supported real-world workflows.",
],
  },
]
