export const resumeData = {
  basics: {
    name: "Mohan Baragi",
    title: "Aspiring Software Engineer",
    summary: "Aspiring Software engineer skilled in Python, Java, REST APIs, scalable systems, performance optimization. Passionate about building innovative solutions that leverage modern technologies like GenAI and full-stack development to solve real-world problems.",
    location: "Bengaluru, Karnataka",
    email: "mohanreddy00240@gmail.com",
    phone: "+91-8296783608",
    links: [
      "https://linkedin.com/in/mohan-baragi",
      "https://github.com/mohanbaragi009",
      "https://leetcode.com/mohanbaragi009",
      "https://www.instagram.com/_mohanreddy_009/"
    ]
  },
  experience: [
    {
      company: "KodNest",
      role: "Java Full Stack Developer Intern (Gen AI)",
      dates: "Feb 2026 — Present",
      location: "Bengaluru, Karnataka",
      bullets: [
        "Optimized full-stack applications using Java, React, HTML, and CSS, resulting in improved system scalability.",
        "Increased system efficiency by building RESTful APIs and optimizing MySQL queries, significantly enhancing overall performance.",
        "Integrated Generative AI features and responsive UI components to improve user experience and platform functionality."
      ]
    }
  ],
  achievements: [
    {
      measurableItem: "Quantum Hacks 2025",
      context: "Participated in a national-level hackathon held in Bengaluru, demonstrating high-level problem solving under pressure."
    },
    {
      measurableItem: "AWS Workshop",
      context: "Gained practical cloud computing experience through workshops conducted by NxtWave."
    },
    {
      measurableItem: "OpenAI Buildathon",
      context: "Participated in a State-Level Buildathon conducted by OpenAI X NxtWave."
    },
    {
      measurableItem: "8.26 CGPA",
      context: "Maintained a strong academic record at AMC Engineering College in Computer Science and Data Science."
    }
  ],
  projects: [
    {
      title: "AI Powered Resume Analyzer",
      stack: "React JS, Node.js, Express.js, MongoDB, Google Gemini",
      bullets: [
        "Developed an AI-powered Full Stack application matching resumes using the Gemini API.",
        "Implemented an ATS scoring algorithm to measure resume relevance and identify missing skills for candidates.",
        "Generated AI-based improvement suggestions to enhance resume quality and job-match probability."
      ],
      links: ["https://github.com/mohanbaragi009"]
    },
    {
      title: "Vehicle-to-Vehicle Communication Using LoRa",
      stack: "ESP32, LoRa Modules",
      bullets: [
        "Created a V2V communication system using ESP32 and LoRa modules for reliable long-range data transmission.",
        "Enabled real-time exchange of vehicle data such as speed and proximity alerts to improve road safety.",
        "Tested under simulated traffic scenarios, demonstrating increased situational awareness and collision prevention."
      ],
      links: ["https://github.com/mohanbaragi009"]
    },
    {
      title: "Food Munch",
      stack: "HTML, CSS, Bootstrap",
      bullets: [
        "Developed a fully responsive food ordering website offering a comprehensive list of items with detailed descriptions.",
        "Enhanced user experience with structured HTML elements and modern Bootstrap components.",
        "Implemented product videos for a better customer experience and engagement."
      ],
      links: ["https://github.com/mohanbaragi009"]
    }
  ],
  skills: [
    {
      category: "Programming",
      items: ["Python", "JavaScript", "Java", "REST APIs"]
    },
    {
      category: "Frameworks & Databases",
      items: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL"]
    },
    {
      category: "Others",
      items: ["DSA", "OOPS", "DBMS", "Operating Systems", "Computer Networks", "Git", "GitHub", "HTML5", "CSS", "UI/UX Design", "GenAI", "Microsoft Visual Studio"]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering and Data Science",
      institution: "AMC Engineering College",
      dates: "2022 — 2026",
      location: "Bengaluru, Karnataka",
      details: ["CGPA: 8.26"]
    },
    {
      degree: "Pre-University Education (12th Grade)",
      institution: "Sainikethan PU College",
      dates: "2019 — 2021",
      location: "Mudhol, Karnataka",
      details: ["Percentage: 82.33%"]
    }
  ],
  certifications: [
    "Introduction to Databases - NxtWave",
    "Programming Foundations with Python - NxtWave"
  ],
  awards: [
    "Quantum Hacks 2025 Participant",
    "State-Level OpenAI Buildathon Participant"
  ],
  extra: [
    "Skilled in problem solving, teamwork, adaptability, and time management.",
    "Active on coding platforms like LeetCode and GitHub.",
    "Passionate about scalable systems and performance optimization."
  ]
};

export type ResumeData = typeof resumeData;
