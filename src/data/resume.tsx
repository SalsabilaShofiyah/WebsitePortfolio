import { HomeIcon, Instagram } from "lucide-react";

export const DATA = {
  name: "Salsabila Shofiyah",
  initials: "SS",
  url: "https://portfolio-salsabila.vercel.app",
  location: "Bandung, Indonesia",
  locationLink: "https://google.com/maps",

  description:
    "Undergraduate student in Information Systems and Technology at ITB, passionate about project management and business development.",

  summary:
    "Undergraduate student in Information Systems and Technology at Institut Teknologi Bandung with hands-on experience in project coordination, business development, competition organizing, and organizational management. Proven track record in business case competitions, incubator programs, and large-scale events. Skilled in structured problem solving, stakeholder coordination, research-driven decision making, and cross-functional collaboration. Seeking opportunities as a Project Manager Intern or Business Development Intern in technology-driven environments.",

  avatarUrl: "/me.png",

  skills: [
    { name: "Project Management", icon: null },
    { name: "Business Development", icon: null },
    { name: "Stakeholder Management", icon: null },
    { name: "Data Analysis", icon: null },
    { name: "Research & Analysis", icon: null },
    { name: "UI/UX Design", icon: null },
    { name: "Figma", icon: null },
    { name: "Python", icon: null },
    { name: "Java", icon: null },
    { name: "C", icon: null },
    { name: "Git", icon: null },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],

  contact: {
    email: "salsabilashofiyaaa@gmail.com",
    tel: "+62811173723",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SalsabilaShofiyah",
        icon: "github",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/salsabilashofiyah",
        icon: "linkedin",
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/shofiyaals",
        icon: "instagram",
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/salsabilashofiyah",
        icon: "x",
        navbar: false,
      },
    },
  },

  work: [
    // isi work tetap sama
  ],

  education: [
    {
      school: "Institut Teknologi Bandung",
      href: "https://www.itb.ac.id",
      degree: "Bachelor of Information Systems and Technology (GPA: 3.54/4.00)",
      logoUrl: "/itb.png",
      start: "2024",
      end: "Present",
    },
    {
      school: "SMA Negeri 8 Jakarta",
      href: "",
      degree: "Advanced Mathematics and Natural Sciences (GPA: 92.4/100)",
      logoUrl: "/sma.png",
      start: "2021",
      end: "2024",
    },
  ],

  projects: [
    {
      title: "SIRUANG Sports Facility Platform",
      href: "https://github.com/abdurrahman-rafi/IF2050-2026-K02-G09-SIRUANG",
      dates: "2026",
      active: true,
      description: "A web based platform developed for booking public sports facilities.",
      technologies: ["Software Engineering", "Web Development", "Collaboration"],
      links: [
        {
          type: "Source",
          href: "https://github.com/abdurrahman-rafi/IF2050-2026-K02-G09-SIRUANG",
          icon: "github",
        },
      ],
      image: "/project.png",
      video: "",
    },
    {
      title: "Nimonscooked",
      href: "https://github.com/nicholasphalim/Tubes-OOP-K02-A",
      dates: "2026",
      active: true,
      description: "A cooperative cooking simulation game inspired by Overcooked.",
      technologies: ["Object Oriented Programming", "Game Development"],
      links: [
        {
          type: "Source",
          href: "https://github.com/nicholasphalim/Tubes-OOP-K02-A",
          icon: "github",
        },
      ],
      image: "/project.png",
      video: "",
    },
    {
      title: "Digital Image Watermarking",
      href: "https://github.com/SalsabilaShofiyah/watermarking",
      dates: "2026",
      active: true,
      description: "A specialized algorithm developed to apply digital watermarks to photographs.",
      technologies: ["Algorithm", "Image Processing"],
      links: [
        {
          type: "Source",
          href: "https://github.com/SalsabilaShofiyah/watermarking",
          icon: "github",
        },
      ],
      image: "/project.png",
      video: "",
    },
    {
      title: "Personal Web Portfolio",
      href: "https://github.com/SalsabilaShofiyah/Web-Portofolio-DRPL",
      dates: "2026",
      active: true,
      description: "A responsive portfolio website built to showcase personal projects, professional experiences, and competition achievements.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/SalsabilaShofiyah/Web-Portofolio-DRPL",
          icon: "github",
        },
      ],
      image: "/project.png",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Do Well Do Good Business Case Competition",
      dates: "2025",
      location: "2nd Winner - National",
      description: "Proposed an end-to-end solution for an F&B MSME focusing on product development, digital strategy, and marketing optimization.",
      image: "/dwdgipb.png",
      links: [],
    },
    {
      title: "Integrated Youth Renewable Energy Festival",
      dates: "2025",
      location: "3rd Winner - National",
      description: "Proposed an end-to-end solution for Pertamina Renewable Energy for the biogas industry.",
      image: "/iyref.png",
      links: [],
    },
    {
      title: "Share UI Business Case Competition",
      dates: "2024",
      location: "Top 10 Finalist - National",
      description: "Ranked Top 10 nationally with a case study on merger and acquisition strategy in the banking industry.",
      image: "/shareui.png",
      links: [],
    },
  ],
};
