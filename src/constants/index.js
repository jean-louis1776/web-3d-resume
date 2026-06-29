import {
  css,
  CV_Duncan,
  ducky,
  email,
  figma,
  html,
  ilalex,
  linkedin,
  mafiagame,
  me,
  nerveGames,
  nextjs,
  nextjsLogo,
  nuxt,
  pinia,
  pug,
  project1,
  project2,
  project3,
  project4,
  react,
  reactjs,
  redux,
  stylus,
  tailwind,
  telegram,
  typescript,
  vue,
  web,
  weblab,
  whatsapp
} from "../assets"

export const CVDuncan = CV_Duncan

export const myGithub = "https://github.com/jean-louis1776"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "cv",
    title: "Download CV",
  },

  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "React (Next.js) Developer",
    icon: react,
  },
  {
    title: "Vue 3 (Nuxt 3) Developer",
    icon: vue,
  },
  {
    title: "Telegram Mini Apps",
    icon: telegram,
  },
  {
    title: "Real-time / WebSocket Apps",
    icon: web,
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Stylus",
    icon: stylus,
  },
  {
    name: "Pug",
    icon: pug,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjsLogo,
  },
  {
    name: "Vue 3",
    icon: vue,
  },
  {
    name: "Nuxt.js",
    icon: nuxt,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Pinia Store",
    icon: pinia,
  },
  {
    name: "figma",
    icon: figma,
  },
]

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Freelance",
    icon: ilalex,
    iconBg: "#E6DEDD",
    date: "November 2021 - December 2023",
    points: [
      "Participated in the frontend development of web applications using React and Svelte libraries.",
      "Developed and maintained a personal portfolio and various non-commercial pet projects to master modern web standards.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "WebLab",
    icon: weblab,
    iconBg: "#000C80",
    date: "January 2024 - October 2024",
    points: [
      "Contributed to the frontend update of the PassimPay payment platform, focusing on secure UI components and complex financial interfaces.",
      "Developed scalable web applications using React and TypeScript, ensuring high code maintainability and type safety.",
      "Integrated REST APIs and managed application state to provide a seamless and responsive user experience.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Nerve Games",
    icon: nerveGames,
    iconBg: "#6A6BCD",
    date: "November 2024 - December 2024",
    points: [
      "Participated in the initial development phase of Hamster Kombat 2, building UI components and pages with Nuxt 3.",
      "Transitioned to Ducky LTD. as part of the core project team following the strategic acquisition of the product and its developers."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Ducky LTD.",
    icon: ducky,
    iconBg: "#FFFFFF",
    date: "January 2025 - November 2025",
    points: [
      "Joined the core development team of Hamster Kombat 2 at Nerve Games and continued work after the team was acquired by Ducky LTD.",
      "Developed key game interfaces and features using Nuxt 3, TypeScript, and Pug, ensuring high performance for an audience of 500K+.",
      "Contributed to the Telegram Mini App (TMA) frontend architecture, focusing on smooth mobile webview rendering and stable operation under heavy load.",
      "Worked in a cross-functional team (Back-end, Design, QA) to deliver consistent updates and new game mechanics."
    ],
  },
  {
    title: "Frontend Developer (Part-time)",
    company_name: "mafiagamelive.com",
    icon: mafiagame,
    iconBg: "#FFFFFF",
    date: "February 2026 - Present",
    points: [
      "Key frontend developer on a real-time multiplayer social-deduction game (Mafia) — took the client from prototype to MVP and closed beta.",
      "Designed the client architecture on React 19, TypeScript, Vite and Zustand (~70 components, modular SCSS).",
      "Built a resilient WebSocket layer with ticket auth, auto-reconnect and real-time synchronization of lobby and in-game state across players.",
      "Implemented a complex game state machine (day / voting / night / finale) with role-based action flows, end-to-end type-safe API integration (Orval over a Go backend), and i18n in 5 languages.",
      "Worked closely with the backend, design and product team to ship features and the marketing landing page with animations and parallax effects."
    ],
  },
]

const myWords = [
  {
    text: "Here you can download my CV in English or Russian. I'll be glad to cooperate — feel free to reach out.",
    name: "Ilya Aleksin",
    designation: "The owner",
    company: "ILALEX",
    image: me,
  },
]

const projects = [
  {
    name: "Mafia Game",
    description:
      "Real-time multiplayer social-deduction game. I architected the full React 19 client (~70 components): a resilient WebSocket layer with ticket auth and auto-reconnect, a complete game state machine (day / voting / night / finale) with role-based flows, and type-safe API integration generated from a Go backend via Orval — localized into 5 languages.",
    tags: [
      {
        name: "react19",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "websocket",
        color: "orange-text-gradient",
      },
      {
        name: "zustand",
        color: "pink-text-gradient",
      },
      {
        name: "go_backend",
        color: 'blue-text-gradient'
      }
    ],
    image: project1,
    demo_link: "https://mafiagamelive.com/",
  },
  {
    name: "Hamster Kombat 2",
    description:
      "Season 2 of the viral Telegram clicker (500K+ audience). As part of the core team I built key game screens and mechanics on Nuxt 3 + Pug + Stylus, focused on stable, high-performance rendering inside mobile webviews under heavy load.",
    tags: [
      {
        name: "nuxt3",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "pug",
        color: "orange-text-gradient",
      },
      {
        name: "telegram",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    demo_link: "https://t.me/Hamster_Game_Dev_bot",
  },
  {
    name: "2048",
    description:
      "Animated take on the classic 2048 in React, with smooth tile transitions and clean, easy-to-follow game logic. Design by Romain Cousin, core algorithm inspired by Ivan Vergiliev.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/jean-louis1776/2048-animated",
    demo_link: "https://2048-animated-aleksin.netlify.app/",
  },
  {
    name: "Yummio",
    description:
      "A compact recipe app in React backed by a third-party food API — full-text search across the recipe database plus four ready-made presets for quick discovery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest_api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/jean-louis1776/recipe-app-react",
    demo_link: "https://yummio.netlify.app/",
  },
]

const myLinks = [
  {
    title: "Contact with me via ",
    subtitle: "LinkedIn",
    subtitle_color: "blue-text-gradient",
    link: "https://www.linkedin.com/in/ilalex76",
    icon: linkedin
  },
  {
    title: "Contact with me via ",
    subtitle: "Email",
    subtitle_color: "pink-text-gradient",
    link: "mailto:aleksin095@gmail.com",
    icon: email
  },
  {
    title: "Contact with me via ",
    subtitle: "Telegram",
    subtitle_color: "blue-text-gradient",
    link: "https://t.me/ilya_js_overflow",
    icon: telegram
  },
  {
    title: "Contact with me via ",
    subtitle: "WhatsApp",
    subtitle_color: "green-text-gradient",
    link: "https://wa.me/79876487486",
    icon: whatsapp
  },
]

export {experiences, myWords, projects, services, technologies, myLinks}
