import { ResumeType } from "../types/resume";

export const RESUME: ResumeType = {
  basicDetails: {
    name: "Aditya S Rao",
    email: "aditya.s.rao1995@outlook.com",
    github: "https://www.github.com/Ad1tyARa0",
    phone: "+91-7353046202",
    title: "Front-End Software Engineer",
    website: "https://www.google.com",
    linkedIn: "https://www.linkedin.com/in/aditya-sathish-rao",
  },

  experience: [
    {
      companyName: "Tricog Health",
      startDate: "July 1st 2022",
      endDate: "Current",
      location: "Bangalore, IN",
      responsibilities: [
        "Architectural development, building robust and performant new features and pages.",
        "Profiling, optimisation of existing features and improving responsiveness.",
        "Working with designers and product managers to understand requirements.",
        "Performs code review of other team members’ work and recommends changes to improve code quality.",
      ],
    },

    {
      companyName: "Quantonaut",
      startDate: "Oct 1st 2020",
      endDate: "June 1st 2022",
      location: "Bangalore, IN",
      responsibilities: [
        "Designed, Developed and maintained an internal tool",
        "Worked with a variety of different frameworks such as TypeScript, React, D3JS, React drag and drop, SASS, Redux, Redux Thunk, JWTs",
        "Developed and maintained multiple features and pages",
        "Experience with writing clean and well-documented functional TypeScript",
      ],
    },

    {
      companyName: "IBM",
      startDate: "Nov 1st 2018",
      endDate: "Sep 31st 2020",
      location: "Bangalore, IN",
      responsibilities: [
        "Designed, developed, and deployed automation scripts that reduced the need for manual repetitive tasks",
        "Developed a chatbot powered by IBM Watson that was able to understand customer queries and perform certain tasks based on a rule",
        "Experience with PowerShell, Citrix, and Active Directory",
      ],
    },
  ],

  skills: [
    {
      skillName: "Programming Languages",
      items: [
        "JavaScript (ES6)",
        "TypeScript",
        "HTML",
        "CSS/Sass",
        "GraphQL",
        "MySQL",
        "Go",
        "Python",
      ],
    },

    {
      skillName: "Libraries & Frameworks",
      items: [
        "React",
        "React Native",
        "Gatsby",
        "Next",
        "NodeJS",
        "Express",
        "MongoDB",
        "NestJs",
        "MaterialUI",
        "ChakraUI",
        "Tailwind",
      ],
    },

    {
      skillName: "Tools & Platforms",
      items: ["Git", "Webpack", "Vercel", "Prismic", "Docker", "Firebase"],
    },

    {
      skillName: "Design",
      items: ["Inkscape", "Figma", "Adobe XD"],
    },
  ],

  education: [
    {
      universityName: "NMIT University",
      description: "Bachelor of Science in computer science and engineering",
      startDate: "2013",
      endDate: "2018",
      location: "Bangalore, IN",
      grade: "7.5 GPA",
    },
  ],

  projects: [
    {
      projectName: "Mufasa",
      description: "Curated tourist experience",
    },
  ],

  interests: ["Soccer", "Pizza"],
};
