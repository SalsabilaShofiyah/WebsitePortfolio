import { Icons } from "@/components/icons";
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
    "Project Management",
    "Business Development",
    "Stakeholder Management",
    "Data Analysis",
    "Research & Analysis",
    "UI/UX Design",
    "Figma",
    "Python",
    "Java",
    "C",
    "Git"
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
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/salsabilashofiyah",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/shofiyaals",
        icon: Instagram, 
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://linkedin.com/in/salsabilashofiyah",
        icon: Icons.x,
        navbar: false, 
      },
    },
  },

  work: [
    {
      company: "AIESEC in Bandung",
      href: "https://aiesec.org",
      badges: [],
      location: "Bandung",
      title: "Organizing Committee Customer Experience",
      logoUrl: "/aiesec.png", 
      start: "2026",
      end: "Present",
      description: "Supported program execution up to exchange program standards, managed volunteer needs, and coordinated participant communication throughout competition stages."
    },
    {
      company: "HMIF ITB",
      href: "",
      badges: [],
      location: "Bandung",
      title: "Head of People Development",
      logoUrl: "/hmif.png", 
      start: "2026",
      end: "Present",
      description: "Designed and executed active and passive cadre development programs, as well as training schools for program stakeholders at HMIF ITB."
    },
    {
      company: "GDGOC ITB",
      href: "",
      badges: [],
      location: "Bandung",
      title: "Curriculum Lead",
      logoUrl: "/gdgoc.png", 
      start: "2026",
      end: "Present",
      description: "Designed and executed curriculum for explorer program across various career paths."
    },
    {
      company: "Techno Entrepreneur Club (TEC) ITB",
      href: "",
      badges: [],
      location: "Bandung",
      title: "Staff of Incubator Curriculum",
      logoUrl: "/tec.png", 
      start: "2025",
      end: "Present",
      description: "Conducted research and trend analysis to identify startup ecosystem needs, contributed to incubator curriculum design, and supported execution of incubation programs."
    },
    {
      company: "Inkubator IT | BSO HMIF ITB",
      href: "",
      badges: [],
      location: "Bandung",
      title: "Staff of Business Development",
      logoUrl: "/iit.png", 
      start: "2025",
      end: "2026",
      description: "Rotated across multiple business development functions including pitch deck development, client acquisition pitching, and event management related to business growth initiatives."
    },
    {
      company: "StudentsxCEOs Bandung",
      href: "",
      badges: [],
      location: "Bandung",
      title: "Associate UI/UX Designer (14th Grand Summit)",
      logoUrl: "/sxc.png", 
      start: "2025",
      end: "2025",
      description: "Designed an interactive event website focusing on usability, user journey, and clear information architecture to support participant engagement."
    }
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
      title: "Buildify - AI Business Incubator Platform",
      href: "https://github.com/13222093/tech-startup", 
      dates: "2025",
      active: true,
      description: "An AI driven platform designed to guide aspiring entrepreneurs and business students through the end-to-end startup journey.",
      technologies: ["Business Development", "Artificial Intelligence", "Platform Design"],
      links: [
        {
          type: "Source",
          href: "https://github.com/13222093/tech-startup",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project.png", 
      video: "", 
    },
    {
      title: "Probability and Statistics Dashboard",
      href: "https://github.com/SalsabilaShofiyah/Dashboard-Tugas-Besar-II2211-Probabilitas-dan-Statistika", 
      dates: "2026",
      active: true,
      description: "A data visualization web dashboard built to analyze public perspectives on AI regulations.",
      technologies: ["Data Analysis", "Dashboard", "Statistics"],
      links: [
        {
          type: "Source",
          href: "https://github.com/SalsabilaShofiyah/Dashboard-Tugas-Besar-II2211-Probabilitas-dan-Statistika",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project.png", 
      video: "", 
    },
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
          icon: <Icons.github className="size-3" />,
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
          icon: <Icons.github className="size-3" />,
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
          icon: <Icons.github className="size-3" />,
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
      description: "A responsive portfolio website built to showcase personal projects