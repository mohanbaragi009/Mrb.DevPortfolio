export const resumeData = {
  basics: {
    name: "Mohan Baragi",
    title: "Aspiring Software Engineer",
    summary: "Aspiring Software engineer skilled in Python, Java, REST APIs, scalable systems, and performance optimization. Passionate about building innovative solutions in CSE-Data Science, leveraging GenAI and full-stack development to solve real-world problems.",
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
      context: "Maintained a strong academic record at AMC Engineering College in CSE and Data Science."
    }
  ],
  projects: [
    {
      title: "AI Powered Resume Analyzer",
      stack: "React JS, Node.js, Express.js, MongoDB, Google Gemini",
      bullets: [
        "Developed an AI-powered Full Stack application matching resumes using the Gemini API.",
        "Implemented an ATS scoring algorithm to measure resume relevance and identify missing skills.",
        "Generated AI-based improvement suggestions to enhance resume quality and job-match probability."
      ],
      links: ["https://github.com/mohanbaragi009"]
    },
    {
      title: "Wikipedia Search Application",
      stack: "HTML, CSS, JS, Wikipedia API",
      bullets: [
        "Built a dynamic search engine leveraging the Wikipedia API for real-time information retrieval.",
        "Implemented custom UI filters and responsive layout for seamless cross-device browsing.",
        "Optimized API calling frequency to ensure smooth user experience and low latency."
      ],
      links: ["https://mohanbaragi009.github.io/Wikipedia-Search-App/"]
    },
    {
      title: "mcp-learning-path-ChatBot",
      stack: "Python, GenAI, LangChain, OpenAI API",
      bullets: [
        "Engineered an AI chatbot designed to generate personalized learning paths for students.",
        "Utilized modern LLM orchestration frameworks to maintain context and intent throughout conversations.",
        "Focused on data science and software engineering roadmap generation."
      ],
      links: ["https://github.com/mohanbaragi009"]
    },
    {
      title: "Loan-Approval-Prediction-System",
      stack: "Python, Flask, Scikit-learn, Machine Learning",
      bullets: [
        "Developed a web application for predicting loan approval status based on user input features.",
        "Trained multiple ML models (Random Forest, Logistic Regression) to find the most accurate prediction engine.",
        "Deployed the model using a Flask backend for real-time inference capability."
      ],
      links: ["https://github.com/mohanbaragi009"]
    },
    {
      title: "BookMyShow Clone",
      stack: "React, Node.js, MongoDB, Tailwind CSS",
      bullets: [
        "Architected a scalable movie booking platform with real-time seat selection and availability.",
        "Integrated secure authentication and a mock payment gateway for a complete user journey.",
        "Focused on high-performance image rendering and state management."
      ],
      links: ["https://github.com/mohanbaragi009"]
    },
    {
      title: "Food Munch",
      stack: "HTML, CSS, Bootstrap",
      bullets: [
        "Developed a fully responsive food ordering website offering a comprehensive list of items with detailed descriptions.",
        "Enhanced user experience with structured HTML elements and modern Bootstrap components.",
        "Implemented high-quality product displays and engagement features."
      ],
      links: ["https://mohanbaragi009.github.io/Food-munch/"]
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
      items: ["DSA", "OOPS", "DBMS", "Operating Systems", "Computer Networks", "Git", "GitHub", "HTML5", "CSS", "UI/UX Design", "GenAI", "Data Science"]
    }
  ],
  education: [
    {
      degree: "B.Tech in CSE - DATA SCIENCE Specialization",
      institution: "AMC Engineering College",
      dates: "2022 — 2026",
      location: "Bengaluru, Karnataka",
      details: ["CGPA: 8.26", "Specialization: Computer Science Engineering & Data Science"]
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
    { name: "Programming Foundations with Python", link: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=WABDAHZAZY" },
    { name: "Introduction to Databases", link: "https://certificates.ccbp.in/academy/introduction-to-databases?id=DTYSECLWBQ" },
    { name: "Responsive Web Design using Flexbox", link: "https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=BHSAGAUDGC" },
    { name: "Static Website", link: "https://certificates.ccbp.in/academy/static-website?id=WWBJVRTOHU" },
    { name: "Dynamic Web Application", link: "https://certificates.ccbp.in/academy/dynamic-web-application?id=NTMSYLSJVS" },
    { name: "Node JS", link: "https://certificates.ccbp.in/academy/node-js?id=PNBBCZVWFI" }
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
