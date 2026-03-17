import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { MongoDBIcon } from "@/components/ui/svgs/mongodb";
import { Docker } from "@/components/ui/svgs/docker";
import { cpp } from "@/components/ui/svgs/cpp";
import { PrismaIcon } from "@/components/ui/svgs/prisma";
import { CIcon } from "@/components/ui/svgs/c";
import { WebSocketIcon } from "@/components/ui/svgs/websockets";
import { WebRTCIcon } from "@/components/ui/svgs/webrtc";
import { GeminiIcon } from "@/components/ui/svgs/gemini";
import { GithubIcon } from "@/components/ui/svgs/github";
import { GitIcon } from "@/components/ui/svgs/git";

export const DATA = {
  name: "Biswarup Biswas",
  initials: "BB",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  description:
    "Software engineer specializing in full-stack web development, cloud deployment, and AI-driven automation & exploring Blockchain Development.",
  summary:
    "Software engineer skilled in React, Next.js, and TypeScript, focused on building scalable, production-ready products. I love solving problems, taking ownership end-to-end, and working in fast-paced, product-driven teams.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "Postgres", icon: Postgresql },
    { name: "Prisma", icon: PrismaIcon },
    { name: "Docker", icon: Docker },
    { name: "C++", icon: cpp },
    { name: "C", icon: CIcon },
    { name: "WebSockets", icon: WebSocketIcon },
    { name: "WebRTC", icon: WebRTCIcon },
    { name: "Gemini", icon: GeminiIcon },
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GithubIcon },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    tel: "https://wa.me/918910909286",
    social: {
      Email: {
        name: "Send Email",
        url: "mailto:bbiswasrup2005@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1mO3deVZHibn4MosAFQlUHFTPb0oOn_Ny/view?usp=sharing",
        icon: NotebookIcon,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/biswa2005",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/biswarup-biswas-625463319/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/biswarup10183",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ciphernauts",
      href: "https://www.linkedin.com/company/ciphernauts-official/",
      badges: [],
      location: "Kolkata, India",
      title: "Community Associate",
      logoUrl: "/Ciphernauts.jpg",
      start: "March 2026",
      end: "Present",
      description:
        "At Ciphernauts, we cultivate an ecosystem where curiosity meets execution. Members are guided through structured mentorship, collaborative teamwork, and handson technical exploration across domains such as software development, artificial intelligence, data science, cybersecurity, and emerging technologies.Unlike conventional student clubs, Ciphernauts is designed as a performancedriven network of builders. Our core team consists of carefully selected individuals who demonstrate exceptional dedication, technical capability, and collaborative spirit. This ensures a high concentration of talent and a culture focused on meaningful outcomes",
    },
    {
      company: "AI Wallah",
      href: "https://www.linkedin.com/company/aiwallah/",
      badges: [],
      location: "Remote",
      title: "Gen AI Engineer",
      logoUrl: "/AIWallah.jpg",
      start: "May 2025",
      end: "Aug 2025",
      description:
        "Build Some real World Gen AI projects like A nutriton analysis tool or a smart notebook app which actually can help user to boost their productivity and improve their lifestyle.",
    },
    {
      company: "Girlscript Summer of Code",
      href: "https://gssoc.girlscript.org/",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/Gssoc.jpg",
      start: "January 2018",
      end: "April 2018",
      description:
        "I, myself as a open source contributor, regularly engage with the community to review pull requests, provide feedback, and assist in project documentation. Focused on enhancing software accessibility, performance, and user experience across diverse projects. Skills developed: Version control (Git), problem-solving, collaborative coding, and open-source best practices.",
    },
  ],
  education: [
    {
      school: "Narula Institute of Technology",
      href: "https://www.nit.ac.in/",
      degree: "B.Tech CSE(AIML)",
      logoUrl: "/nit.jpg",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "Sanjeevani",
      href: "https://t.me/Sanjeevani2026_bot",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Sanjeevani is an AI-powered healthcare assistant that predicts possible diseases based on user symptoms and provides medical guidance, precautions, and hospital recommendations..",
      technologies: [
        "React",
        "Javascript",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Telegram Bot",
          href: "https://t.me/Sanjeevani2026_bot",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/biswa2005/Sanjeevani",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sanjeevani.png",
      video: "",
    },
    {
      title: "DevArena",
      href: "https://dev-arena-six.vercel.app/",
      dates: "Dec 2025 - Present",
      active: true,
      description:
        "DevArena is a polished application that aggregates programming contests and hackathons from multiple platforms and displays them with real-time timers, filters.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://dev-arena-six.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/biswa2005/DevArena",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/devarena.png",
      video: "",
    },
    {
      title: "Pragati Coaching Centre",
      href: "https://pragatilive.com",
      dates: "Nov 2025 - Dec 2025",
      active: true,
      description:
        "A website for promotion of a coaching centre which provides coaching for various competitive exams in India.",
      technologies: [
        "React",
        "Javascript",
        "MongoDB",
        "TailwindCSS",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://pragatilive.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/biswa2005/Course-Selling-Website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pragati.png",
      video: "",
    },
    {
      title: "Portfolio Website",
      href: "https://www.bedabratapaul.in/",
      dates: "Mar 2026",
      active: true,
      description:
        "A modern, dark-themed portfolio website showcasing the work and expertise of Bedabrata Paul, UI/UX Designer, Web Developer, and Founder of BEYOND POWERED digital services & consultancy.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "EmailJS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.bedabratapaul.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/biswa2005/Beda_Portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/beda.mp4",
    },
  ],
  hackathons: [
    {
      title: "SIH Internal Hackathon Winner",
      dates: "November 23rd - 25th, 2025",
      location: "Kolkata, India",
      description:
        "Developed a Whatsapp Bot named 'Sanjeevani' that predicts diseases based on user symptoms and provides medical guidance. The project won the internal hackathon organized by SIH and was recognized for its innovative use of AI in healthcare.",
      image:
        "/sih.png",
      mlh: "",
      links: [],
    },
    {
      title: "Hackloop Finalist",
      dates: "June 20th - 27th, 2025",
      location: "Remote",
      description:
        "Piteched a idea called 'Trinetra' for a smart glass system for blind users to help them crossing paths and helps to do their regular staffs independently. The project was selected as a finalist in Hackloop 2025, showcasing its potential to enhance accessibility for visually impaired individuals.",
      image:
        "/hackloop.jpg",
      mlh: "",
      links: [],
    },
    {
      title: "Hack-O-NiT",
      dates: "Dec 20th, 2024",
      location: "Kolkata, India",
      description:
        "Developed a all-in-one college/school management application to make a face-based attendance system and helpful for upload necessary resources and learn from it for both students and teachers.",
      image:
        "/hackonit.png",
      mlh: "",
      links: [],
    },

  ],
} as const;
