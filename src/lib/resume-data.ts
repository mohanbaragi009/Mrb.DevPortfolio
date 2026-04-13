export const resumeData = {
  basics: {
    name: "Alex Continuum",
    title: "Senior Product Designer & Full-Stack Engineer",
    summary: "Visionary design-led engineer specializing in high-performance digital products. Expert at bridging the gap between complex technical infrastructure and world-class user experiences. Proven track record of scaling platforms for millions of users while maintaining pixel-perfect precision.",
    location: "San Francisco, CA",
    email: "hello@continuum.dev",
    phone: "+1 (555) 000-0000",
    links: [
      "https://linkedin.com/in/alexcontinuum",
      "https://github.com/alexcontinuum",
      "https://continuum.dev"
    ]
  },
  experience: [
    {
      company: "Quantum Systems",
      role: "Lead Product Engineer",
      dates: "2021 — Present",
      location: "Remote",
      bullets: [
        "Architected a new Design System that reduced front-end development time by 45% across 12 product teams.",
        "Led the migration of a legacy monolithic platform to a modern micro-frontend architecture using Next.js and Module Federation.",
        "Increased core platform performance by 60% through aggressive caching strategies and bundle optimization.",
        "Mentored a team of 8 engineers and designers, fostering a culture of cross-functional excellence."
      ]
    },
    {
      company: "Nova Interactive",
      role: "Senior UX Engineer",
      dates: "2018 — 2021",
      location: "Austin, TX",
      bullets: [
        "Delivered a real-time collaborative workspace tool used by over 500k monthly active users.",
        "Implemented advanced WebGL-based data visualizations for the platform's analytics dashboard.",
        "Reduced churn rate by 15% through data-driven UI optimizations and A/B testing initiatives.",
        "Collaborated closely with PMs to translate complex user requirements into elegant technical solutions."
      ]
    },
    {
      company: "Stellar Cloud",
      role: "Full-Stack Developer",
      dates: "2015 — 2018",
      location: "Seattle, WA",
      bullets: [
        "Engineered secure API endpoints handling 10k requests per second using Node.js and Redis.",
        "Integrated multi-cloud infrastructure monitoring tools using Go and Prometheus.",
        "Redesigned the customer onboarding flow, increasing conversion rate from 22% to 38%."
      ]
    }
  ],
  achievements: [
    {
      measurableItem: "45% reduction",
      context: "in front-end development time through a global Design System implementation."
    },
    {
      measurableItem: "500k MAU",
      context: "actively using a real-time collaboration tool built from the ground up."
    },
    {
      measurableItem: "60% performance boost",
      context: "achieved across core platform metrics via modern stack migration."
    },
    {
      measurableItem: "12 Product Teams",
      context: "unified under a single UI language and technical standard."
    }
  ],
  projects: [
    {
      title: "Nebula OS",
      stack: "React, Three.js, TailwindCSS",
      bullets: [
        "A futuristic, browser-based operating system shell exploring new desktop metaphors.",
        "Features a custom window manager and interactive 3D desktop environments."
      ],
      links: ["https://github.com/alexcontinuum/nebula-os"]
    },
    {
      title: "Prism Dev Tools",
      stack: "TypeScript, Rust, WASM",
      bullets: [
        "A collection of high-performance developer utilities for visual debugging.",
        "Used by over 5,000 developers globally."
      ],
      links: ["https://prism.dev"]
    }
  ],
  skills: [
    {
      category: "Engineering",
      items: ["TypeScript", "Next.js", "React", "Node.js", "Rust", "Go", "PostgreSQL", "Redis", "AWS"]
    },
    {
      category: "Design",
      items: ["Figma", "Design Systems", "Framer Motion", "Three.js", "Interaction Design", "Prototyping"]
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Kubernetes", "CI/CD", "Vercel", "Storybook"]
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      institution: "Stanford University",
      dates: "2011 — 2015",
      location: "Stanford, CA",
      details: ["Specialization in Human-Computer Interaction", "GPA: 3.9/4.0"]
    }
  ],
  certifications: [
    "AWS Certified Solutions Architect",
    "Google UX Design Professional Certificate"
  ],
  awards: [
    "Red Dot Award: Communication Design (2022)",
    "Product Hunt Golden Kitty Nominee (2021)"
  ],
  extra: [
    "Active contributor to various Open Source projects including Next.js and Framer Motion.",
    "Speaker at several international tech conferences on the topic of 'The Hybrid Engineer'."
  ]
};

export type ResumeData = typeof resumeData;
