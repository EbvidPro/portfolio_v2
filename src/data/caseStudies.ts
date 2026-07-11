export type CaseStudy = {
  title: string;
  tagline: string;
  image: string;
  url: string;
  overview: string;
  challenge: string;
  role: string[];
  approach: string[];
  results: string[];
  tech: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Spendify",
    tagline:
      "Public site and admin dashboard for an AI finance product serving 25K+ users",
    image: "/case-studies/spendify.png",
    url: "https://spendify.ca/",
    overview:
      "Spendify is a personal and business finance mobile app (AI companion Ola, expense tracking, invoices, financial literacy) serving 25K+ users. Delivered the full web surface: the public marketing and product site at spendify.ca and the internal admin dashboard that operations use to manage users, subscription plans, in-app push notifications, and support, giving the mobile product a clear web presence and a single control plane for day-to-day ops.",
    challenge:
      "A mobile-first product still needs a credible web presence for acquisition and trust, and a dedicated ops layer so the team can manage users, plans, and support without depending on mobile releases. Both surfaces had to feel cohesive, perform well, and scale, with the dashboard built for speed and clarity so non-technical staff could own routine operations.",
    role: [
      "Shipped the complete public website (spendify.ca): landing, product narrative, and conversion flows",
      "Designed and built the internal admin dashboard end-to-end for user, plan, and support management",
      "Implemented role-based access, subscription plan controls, and in-app push notification tooling",
      "Unified support workflows so tickets and user issues are handled from one dashboard",
    ],
    approach: [
      "Split public and admin into distinct surfaces with a shared design system to keep UI consistent",
      "Optimized the public site for conversion and responsiveness; the dashboard for density and desktop use",
      "Standardized state and API patterns so user, plan, and notification data stay predictable and testable",
      "Prioritized scannable layouts and clear actions in the admin so ops could run without engineering support",
    ],
    results: [
      "Public site and admin dashboard in production, establishing web presence and operational control",
      "Single internal tool replacing ad-hoc processes for users, subscriptions, notifications, and support",
      "Operational changes (plans, notifications, support) possible without mobile app releases",
      "Extensible dashboard foundation for future admin features as the product and team grow",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "State management",
      "REST APIs",
    ],
  },
  {
    title: "Unifaires",
    tagline:
      "Role-based careers platform: student experience, business course tools, and admin dashboards",
    image: "/case-studies/unifaires.png",
    url: "https://thryster.com/",
    overview:
      "Unifaires is a role-based education and careers platform connecting students (learners and job seekers), businesses (course and opportunity posters), and internal admins. As frontend developer I built product surfaces across those roles: the student-facing experience for jobs, courses, and funding discovery, business tools for posting and managing offerings, and internal admin dashboards for operating the platform.",
    challenge:
      "One product had to serve three audiences with different goals and permissions without feeling like three disconnected apps. Students needed clear discovery and application flows. Businesses needed reliable tools to publish and manage courses and opportunities. Admins needed dense, trustworthy dashboards to oversee users, content, and platform operations at scale.",
    role: [
      "Built frontend experiences for the student (user) role: browsing jobs, courses, funding, and core account flows",
      "Implemented business-facing tools for course posters and opportunity managers",
      "Developed internal admin dashboards for platform operations and oversight",
      "Wired role-aware UI so each audience only sees the actions and data their role allows",
    ],
    approach: [
      "Modeled the product around role-based access from the start: student, business, and admin",
      "Shared components and patterns across roles while keeping each journey focused on that audience's job-to-be-done",
      "Prioritized scannable lists, filters, and clear CTAs on the student side for discovery and conversion",
      "Designed admin and business views for density, clarity, and repeatable day-to-day operations",
    ],
    results: [
      "Live multi-role platform experience spanning students, businesses, and internal admins",
      "Clear separation of permissions and workflows so each role can work without colliding with the others",
      "Admin dashboards that give operators a control plane for content and users",
      "A maintainable frontend foundation for expanding marketplace and learning features",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Role-based access",
      "Dashboards",
      "REST APIs",
    ],
  },
  {
    title: "Sahara Farms",
    tagline:
      "Startup landing page and early dashboard for a pan-African agri-capital platform",
    image: "/case-studies/sahara-farms.png",
    url: "https://saharafarms.co/",
    overview:
      "Sahara Farms is the first pan-African agri-capital markets platform (AI-native, blockchain-backed) turning farmland and future harvests into a liquid, seasonally tradable asset class. Owned and delivered the majority of the public landing experience at saharafarms.co (hero, investment narrative, mission, What We Do, FAQ, Request a Demo), and contributed initial dashboard screens before handing off to the team.",
    challenge:
      "The platform had to communicate institutional-grade agri-finance (17%+ IRR, crop-backed equity, forward offtake) to investors, governments, and farmers while remaining accessible and action-oriented. The landing page needed to establish credibility, explain the model, and convert interest through clear CTAs and demo requests, without overwhelming visitors with jargon or clutter.",
    role: [
      "Owned end-to-end delivery of the Sahara Farms landing page (saharafarms.co)",
      "Implemented hero, investment narrative, mission, What We Do, FAQ, and Request a Demo flows",
      "Delivered responsive, on-brand layouts and a reusable section structure for marketing and product",
      "Shipped the first set of internal dashboard screens before transitioning off the project",
    ],
    approach: [
      "Organized the page around a single narrative: problem → solution → proof → action, with clear hierarchy",
      "Applied a consistent design system and responsive grid so the story reads well on all devices",
      "Wrote and structured content with the product's positioning (Grow Your Wealth, Feed the World) in mind",
      "Built sections and components so the in-house team could iterate after handoff",
    ],
    results: [
      "Landing page live at saharafarms.co, serving as the primary public face for the platform",
      "Coherent narrative and visual system that communicates agri-capital markets to a mixed audience",
      "Request a Demo and key conversion paths in place for institutional and partner leads",
      "Dashboard and landing foundations in place for the team to extend post-handoff",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "RYD Learning",
    tagline:
      "Custom React learning product: avatar-led curriculum, IDE, and structured flows",
    image: "/case-studies/ryd-learning.png",
    url: "https://ai.rydlearning.com/",
    overview:
      "RYD Learning delivers personalized, standards-aligned coding education (CSTA & ISTE) across Basic, Advanced, and Special programs. Brought onto the product team to lead development of an upcoming flagship feature: an AI-driven learning experience where a virtual instructor guides children through a structured coding curriculum inside an interactive environment with an embedded IDE, enabling learn-by-doing without leaving the platform.",
    challenge:
      "Teaching coding to young learners demands clarity, engagement, and safe practice. The feature had to combine an AI avatar, a stepwise curriculum, and a real coding environment in one cohesive flow, without intimidating beginners or fragmenting the experience across external tools. Technical and UX decisions needed to support multiple age bands and lesson formats while staying maintainable for the existing RYD stack.",
    role: [
      "Leading frontend development of the new AI-powered learning module from design to implementation",
      "Architecting and building the in-app IDE and interactive coding environment used in lessons",
      "Implementing the structured curriculum engine and lesson flow tied to the avatar experience",
      "Integrating the feature with RYD's current platform, auth, and program structure",
    ],
    approach: [
      "Structured the experience as a single journey: avatar guidance → concept → practice in IDE → feedback",
      "Designed the IDE and environment for reliability and age-appropriate feedback across lesson types",
      "Reused and extended RYD's design system so the feature feels native, not bolted-on",
      "Worked closely with product and curriculum to align technical scope with launch timeline",
    ],
    results: [
      "Flagship AI learning module built for launch, with avatar guidance, curriculum flow, and in-app IDE",
      "Unified learn-by-doing experience that keeps students inside one interactive, curriculum-led flow",
      "Reusable IDE and lesson framework that can scale to additional courses and age groups",
      "Clear path for RYD to differentiate with AI-led, hands-on coding education",
    ],
    tech: [
      "React",
      "TypeScript",
      "Structured curriculum",
      "Interactive IDE",
      "AI integration",
    ],
  },
];
