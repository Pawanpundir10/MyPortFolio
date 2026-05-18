const portfolioConfig = {
  profile: {
    name: "Pawan Singh",
    title: "Full Stack Developer",
    avatarUrl: "/photo.jpg",
    summary:
      "Final-year Computer Science student experienced in full-stack web development and building SaaS applications. Skilled in React, Node.js, and modern web technologies with hands-on experience developing AI-powered systems and scalable backend architectures.",
    phone: "+91 7986757637",
    location: "Tehri Garhwal, Uttarakhand",
    education: {
      degree: "Bachelor of Engineering in Computer Science Engineering",
      institution: "Chandigarh University, Punjab",
      period: "July 2022 – Present",
      cgpa: "7.59",
    },
    skills: {
      languages: ["C", "C++", "Python"],
      frontend: ["HTML5", "CSS3", "JavaScript", "ReactJS"],
      backend: ["ExpressJS", "NodeJS"],
      databases: ["SQL", "MongoDB"],
      tools: ["Git", "GitHub", "VS Code", "Cursor", "Postman"],
      coursework: ["DSA", "OOPs", "DBMS", "Computer Networks"],
      soft: ["Collaborative", "Multitasker", "Flexible", "Adaptive", "Fast Learner"],
    },
    achievements: [
      "LeetCode: Solved 550+ coding problems.",
      "NPTEL Cloud Computing: Elite + Silver certification from IIT Kharagpur.",
      "Sports: Winner of Inter-Department Football Competition.",
      "SQL: A Practical Introduction for Querying Databases — IBM (Coursera).",
    ],
  },

  projects: [
    {
      id: 1,
      name: "CampusPrint",
      liveLabel: "Live",
      description:
        "A full-stack platform enabling students to upload documents and place print orders with campus print shops. Features automatic PDF page detection, dynamic pricing, and role-based dashboards for students and shop admins.",
      techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Supabase Storage"],
      link: "https://campus-print-seven.vercel.app/",
      imageUrl: "/campus print.png",
    },
    {
      id: 2,
      name: "ResumeLens",
      liveLabel: "Live",
      description:
        "An AI-powered resume analyzer that evaluates resumes against job descriptions to improve ATS compatibility. Client-side PDF parsing with Vision AI for formatting and keyword relevance analysis.",
      techStack: ["ReactJS", "TailwindCSS", "pdf.js", "PuterJS"],
      link: "https://resume-lens-two.vercel.app/",
      imageUrl: "/resumelens.png",
    },
    {
      id: 3,
      name: "CollabHub",
      liveLabel: "Live",
      description:
        "A real-time collaboration platform allowing students to create project groups and communicate through live chat. WebSocket-based messaging using Socket.io for instant communication between members.",
      techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Socket.io"],
      link: "https://collab-hub-alpha.vercel.app/",
      imageUrl: "/collabhublogo (1).png",
    },
  ],

  contact: {
    email: "pawanpundir191@gmail.com",
    github: "Pawanpundir10",
    linkedin: "in/pawan-singh-09948624b/",
    phone: "+91 7986757637",
  },
};

export default portfolioConfig;
