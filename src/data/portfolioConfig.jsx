// src/data/portfolioConfig.js
// This is the central place to edit your portfolio's content.

const portfolioConfig = {
  profile: {
    name: "Pawan Singh",
    title: "Web Developer ",
    avatarUrl: "src/utils/profile.jpg", 
  },

  projects: [
    { 
      id: 1, 
      name: "Project Buddy", 
      description: "A collaborative platform to find teammates and work on projects together seamlessly.", 
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      link: 'https://project-buddy-five.vercel.app/',
      imageUrl: 'https://placehold.co/600x400/252526/E0E0E0?text=Project+Buddy'
    },
    { 
      id: 2, 
      name: "Typing Test", 
      description: "A web app to test and improve your typing speed and accuracy with real-time feedback and stats.", 
      techStack: ['React', 'TailwindCSS'],
      link: 'https://typing-test-delta-khaki.vercel.app/',
      imageUrl: 'https://placehold.co/600x400/252526/E0E0E0?text=Typing+Test'
    },
  ],
  contact: {
    email: "pawanpundir191@gmail.com",
    github: "Pawanpundir10",
    linkedin: "in/pawan-singh-09948624b/",
  },
};

export default portfolioConfig;

