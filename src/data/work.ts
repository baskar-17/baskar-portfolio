export type WorkItem = {
  slug: string
  title: string
  productType: string
  imageSrc: string
  logoSrc: string
  thumbnailSrc: string
  caseStudy: {
    overview: string
    role: string
    timeline: string
    team: string
    goals: string[]
    research: { method: string; detail: string }[]
    personas: { name: string; summary: string; painPoints: string[] }[]
    userFlows: string[]
    informationArchitecture: string[]
    designJourney: string[]
    decisions?: { title: string; detail: string; tradeoff?: string }[]
    finalDesigns?: { title: string; caption: string }[]
    learnings?: string[]
    outcomes: string[]
  }
}

const withBase = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: "sportsgravy",
    title: "SportsGravy",
    productType: "Web + Mobile",
    imageSrc: withBase("/work/sportsgravy.png"),
    logoSrc: withBase("/work/sportsgravy.png"),
    thumbnailSrc: withBase("/work/sportsgravy-banner.png"),
    caseStudy: {
      overview:
        "SportsGravy is a community platform that helps youth sports organizations manage teams, schedules, and communication. The project focused on simplifying daily workflows for coaches while keeping parents informed in real time.",
      role: "Lead product designer partnering with a PM and two engineers.",
      timeline: "10 weeks, iterative release.",
      team: "1 PM, 2 engineers, 1 designer (me).",
      goals: [
        "Reduce coach time spent on scheduling and messaging.",
        "Improve parent visibility into practices, cancellations, and game-day details.",
        "Create a consistent experience across web and mobile.",
      ],
      research: [
        {
          method: "Stakeholder interviews",
          detail:
            "Aligned on business goals, revenue drivers, and areas with the highest support tickets.",
        },
        {
          method: "Coach interviews",
          detail:
            "Spoke with 6 volunteer coaches to map current workflows and pain points.",
        },
        {
          method: "Usage analytics",
          detail:
            "Reviewed drop-offs in schedule creation and message delivery confirmation.",
        },
        {
          method: "Usability testing",
          detail:
            "5 moderated sessions on the prototype to validate navigation and task success.",
        },
      ],
      personas: [
        {
          name: "Coach Alex",
          summary:
            "Volunteer coach managing multiple teams with little time and a lot of coordination overhead.",
          painPoints: [
            "Too many steps to set up schedules.",
            "Parents miss last-minute updates.",
            "Duplicate data entry across tools.",
          ],
        },
        {
          name: "Parent Maria",
          summary:
            "Working parent who needs quick updates and a reliable source of truth.",
          painPoints: [
            "Unclear where to find the latest updates.",
            "Notifications feel noisy and inconsistent.",
            "Hard to see weekly schedule at a glance.",
          ],
        },
      ],
      userFlows: [
        "Create season schedule → auto-generate weekly events → notify parents.",
        "Update practice location → push change to all teams → confirm read.",
        "Parent checks weekly calendar → filters by child and team.",
      ],
      informationArchitecture: [
        "Dashboard",
        "Teams",
        "Schedule",
        "Messages",
        "Roster",
        "Settings",
      ],
      designJourney: [
        "Mapped the end-to-end scheduling workflow and removed redundant steps.",
        "Introduced a unified calendar view to reduce navigation hops.",
        "Simplified message composition with templates for common updates.",
        "Aligned mobile and web patterns to reduce learning curve.",
      ],
      outcomes: [
        "Reduced scheduling time by ~35% in usability tests.",
        "Improved message send completion rate from 68% to 89%.",
        "Support team reported fewer tickets about missed updates.",
      ],
    },
  },
  {
    slug: "mykinderpass",
    title: "MyKinderPass",
    productType: "Web + Mobile",
    imageSrc: withBase("/work/mykinderpass.png"),
    logoSrc: withBase("/work/mykinderpass.png"),
    thumbnailSrc: withBase("/work/mykinderpass-banner.png"),
    caseStudy: {
      overview:
        "MyKinderPass helps parents discover, compare, and enroll in childcare programs. The goal was to reduce anxiety in the search process and make enrollment decisions feel clearer and safer.",
      role: "Product designer leading research, IA, and UI.",
      timeline: "8 weeks, discovery to MVP.",
      team: "Founder, 2 engineers, 1 designer (me).",
      goals: [
        "Increase program inquiry submissions.",
        "Help parents compare options confidently.",
        "Reduce friction in the enrollment flow.",
      ],
      research: [
        {
          method: "Parent interviews",
          detail:
            "7 interviews focusing on discovery, trust signals, and decision criteria.",
        },
        {
          method: "Competitive teardown",
          detail:
            "Reviewed 5 childcare marketplaces to identify trust and transparency gaps.",
        },
        {
          method: "Card sorting",
          detail:
            "Validated category labels and filters for program search.",
        },
        {
          method: "Prototype testing",
          detail:
            "4 sessions to validate comparison and inquiry flows.",
        },
      ],
      personas: [
        {
          name: "First-time Parent Sam",
          summary:
            "Navigating childcare for the first time and seeking clear guidance.",
          painPoints: [
            "Inconsistent pricing and availability info.",
            "Unclear safety credentials.",
            "Hard to compare programs quickly.",
          ],
        },
        {
          name: "Working Parent Priya",
          summary:
            "Time-constrained and needs efficient shortlisting.",
          painPoints: [
            "Too many clicks to reach contact info.",
            "No visibility into waitlists.",
            "Weak signals of program quality.",
          ],
        },
      ],
      userFlows: [
        "Search by location → filter by age and hours → compare shortlist.",
        "View program profile → check availability → submit inquiry.",
        "Save programs → return to compare later.",
      ],
      informationArchitecture: [
        "Home",
        "Search",
        "Program profile",
        "Compare",
        "Saved",
        "Inquiry",
      ],
      designJourney: [
        "Created a trust-focused profile layout with licensing and reviews upfront.",
        "Simplified comparison to 5 core attributes parents cited as critical.",
        "Designed a lightweight inquiry form with progressive disclosure.",
      ],
      outcomes: [
        "Inquiry submissions increased in pilot testing by 22%.",
        "Parents completed comparisons 2x faster in usability tests.",
        "Founders reported clearer feedback from applicants.",
      ],
    },
  },
  {
    slug: "mudrex",
    title: "Mudrex",
    productType: "Web",
    imageSrc: withBase("/work/mudrex.png"),
    logoSrc: withBase("/work/mudrex.png"),
    thumbnailSrc: withBase("/work/mudrex-banner.png"),
    caseStudy: {
      overview:
        "Mudrex is a crypto investment platform focused on curated portfolios. The project aimed to demystify investment choices and improve onboarding completion for new users.",
      role: "Senior product designer across onboarding and portfolio experience.",
      timeline: "6 weeks, rapid iteration.",
      team: "1 PM, 3 engineers, 1 designer (me).",
      goals: [
        "Increase onboarding completion rate.",
        "Clarify risk and return expectations.",
        "Reduce drop-offs on funding steps.",
      ],
      research: [
        {
          method: "Funnel analysis",
          detail:
            "Identified highest drop-off at KYC and funding steps.",
        },
        {
          method: "Customer interviews",
          detail:
            "5 sessions to understand investment anxieties and mental models.",
        },
        {
          method: "Heuristic review",
          detail:
            "Audited onboarding screens for clarity and cognitive load.",
        },
      ],
      personas: [
        {
          name: "New Investor Jordan",
          summary:
            "Curious about crypto but cautious and needs simple guidance.",
          painPoints: [
            "Unclear how portfolios are built.",
            "Fear of hidden fees.",
            "KYC feels long and intimidating.",
          ],
        },
        {
          name: "Active Trader Lina",
          summary:
            "Understands the space but wants fast access and transparency.",
          painPoints: [
            "Too many steps before funding.",
            "Portfolio performance data hard to scan.",
          ],
        },
      ],
      userFlows: [
        "Sign up → KYC → select portfolio → fund account → track performance.",
        "Explore portfolio → view risk details → invest.",
      ],
      informationArchitecture: [
        "Onboarding",
        "Portfolio catalog",
        "Portfolio detail",
        "Funding",
        "Performance dashboard",
      ],
      designJourney: [
        "Reframed onboarding into 3 clear steps with progress visibility.",
        "Added plain-language risk cues and expected volatility ranges.",
        "Designed a compact funding summary to reduce decision friction.",
      ],
      outcomes: [
        "Onboarding completion improved by ~18% in A/B testing.",
        "Portfolio selection time reduced by 30% in usability tests.",
        "Funding step abandonment decreased noticeably in the first week.",
      ],
    },
  },
  {
    slug: "aplushub",
    title: "A Plus Hub",
    productType: "Web",
    imageSrc: withBase("/work/aplushub.png"),
    logoSrc: withBase("/work/aplushub.png"),
    thumbnailSrc: withBase("/work/aplushub-banner.png"),
    caseStudy: {
      overview:
        "A Plus Hub is a learning management platform for tutoring centers. The project focused on making lesson planning and student progress tracking faster for instructors.",
      role: "Product designer leading IA, UX, and UI.",
      timeline: "9 weeks, phased rollout.",
      team: "Founder, 2 engineers, 1 designer (me).",
      goals: [
        "Streamline lesson creation and reuse.",
        "Improve visibility into student progress.",
        "Reduce admin time for tutors.",
      ],
      research: [
        {
          method: "Contextual inquiry",
          detail:
            "Shadowed 3 instructors preparing weekly lesson plans.",
        },
        {
          method: "Task analysis",
          detail:
            "Mapped current grading and progress reporting steps.",
        },
        {
          method: "Survey",
          detail:
            "Collected feedback from 20 tutors on feature priorities.",
        },
      ],
      personas: [
        {
          name: "Tutor Hana",
          summary:
            "Manages multiple students and needs quick access to materials.",
          painPoints: [
            "Rebuilding lessons from scratch.",
            "Progress reports feel manual.",
            "Hard to spot gaps across students.",
          ],
        },
        {
          name: "Center Manager Leo",
          summary:
            "Oversees program quality and needs reporting visibility.",
          painPoints: [
            "Limited visibility into tutor activity.",
            "Inconsistent reporting formats.",
          ],
        },
      ],
      userFlows: [
        "Create lesson → attach materials → assign to class.",
        "Record session notes → update skill progress → generate report.",
      ],
      informationArchitecture: [
        "Dashboard",
        "Classes",
        "Lessons",
        "Materials",
        "Progress",
        "Reports",
      ],
      designJourney: [
        "Designed a lesson template system for repeatable structure.",
        "Built a progress timeline to visualize skill growth over time.",
        "Simplified reporting with auto-filled session summaries.",
      ],
      outcomes: [
        "Tutors reported 40% faster lesson prep time.",
        "Progress reporting time cut in half during pilot.",
        "Managers gained consistent reporting across classes.",
      ],
    },
  },
  {
    slug: "onhand-pos",
    title: "OnHand POS",
    productType: "Web + Tablet + Mobile",
    imageSrc: withBase("/work/onhand-pos.png"),
    logoSrc: withBase("/work/onhand-pos.png"),
    thumbnailSrc: withBase("/work/onhand-banner.png"),
    caseStudy: {
      overview:
        "OnHand POS is a point-of-sale system for fast-paced retailers. The focus was to reduce cashier errors and speed up checkout on tablet devices.",
      role: "Lead designer across checkout, inventory, and reporting.",
      timeline: "12 weeks, beta to launch.",
      team: "1 PM, 4 engineers, 1 designer (me).",
      goals: [
        "Reduce checkout time per transaction.",
        "Lower cashier training time.",
        "Improve visibility into inventory status.",
      ],
      research: [
        {
          method: "Store visits",
          detail:
            "Observed checkout at 3 retail locations during peak hours.",
        },
        {
          method: "Usability testing",
          detail:
            "6 sessions testing tablet flows with novice cashiers.",
        },
        {
          method: "Support ticket analysis",
          detail:
            "Reviewed the most common issues and indication of errors.",
        },
      ],
      personas: [
        {
          name: "Cashier Noah",
          summary:
            "Handles high volume with minimal time for training.",
          painPoints: [
            "Too many taps to complete a sale.",
            "Hard to correct mistakes quickly.",
            "Discounts and taxes are confusing.",
          ],
        },
        {
          name: "Store Owner Riya",
          summary:
            "Wants fast transactions and reliable inventory tracking.",
          painPoints: [
            "Stock counts are often outdated.",
            "Reports are buried and hard to export.",
          ],
        },
      ],
      userFlows: [
        "Scan items → apply discount → take payment → print receipt.",
        "Search product → edit quantity → update stock.",
      ],
      informationArchitecture: [
        "Checkout",
        "Products",
        "Inventory",
        "Customers",
        "Reports",
        "Settings",
      ],
      designJourney: [
        "Designed a single-screen checkout with contextual actions.",
        "Added quick-edit controls to fix items without backtracking.",
        "Created a lightweight inventory status panel for at-a-glance checks.",
      ],
      outcomes: [
        "Checkout time reduced by ~25% in pilot.",
        "Training time dropped from 2 days to 1 day.",
        "Error rates declined after introducing quick-edit tools.",
      ],
    },
  },
  {
    slug: "onhand-dairy",
    title: "OnHand Dairy",
    productType: "Mobile",
    imageSrc: withBase("/work/onhand-dairy.png"),
    logoSrc: withBase("/work/onhand-dairy.png"),
    thumbnailSrc: withBase("/work/onhand-banner.png"),
    caseStudy: {
      overview:
        "OnHand Dairy is a field app for dairy delivery and subscription management. The goal was to make route delivery and customer updates faster for drivers.",
      role: "Product designer leading mobile UX.",
      timeline: "7 weeks, MVP.",
      team: "1 PM, 2 engineers, 1 designer (me).",
      goals: [
        "Streamline daily delivery routes.",
        "Reduce missed deliveries and disputes.",
        "Enable quick customer updates in the field.",
      ],
      research: [
        {
          method: "Field interviews",
          detail:
            "Rode along with 2 delivery drivers to map workflows.",
        },
        {
          method: "Diary study",
          detail:
            "Drivers logged end-of-day issues for one week.",
        },
        {
          method: "Prototype testing",
          detail:
            "Tested tap targets and offline behavior on real devices.",
        },
      ],
      personas: [
        {
          name: "Driver Vikram",
          summary:
            "Needs speed, offline access, and clarity on each stop.",
          painPoints: [
            "Poor signal breaks order updates.",
            "Unclear stop priorities.",
            "Manual notes get lost.",
          ],
        },
        {
          name: "Ops Manager Neha",
          summary:
            "Monitors delivery completion and customer issues.",
          painPoints: [
            "Delayed visibility into missed deliveries.",
            "No standard reason codes for issues.",
          ],
        },
      ],
      userFlows: [
        "Start route → view stops → mark delivered → capture issue if needed.",
        "Update subscription → adjust quantity → notify customer.",
      ],
      informationArchitecture: [
        "Route",
        "Stops",
        "Orders",
        "Customers",
        "Issues",
        "Profile",
      ],
      designJourney: [
        "Designed an offline-first route list with clear status chips.",
        "Introduced quick issue reporting with predefined reasons.",
        "Added a customer note log to reduce repeat questions.",
      ],
      outcomes: [
        "Delivery completion tracking improved within the first release.",
        "Drivers reported fewer disputes due to clear issue logging.",
        "Operations gained same-day visibility into route exceptions.",
      ],
    },
  },
]
