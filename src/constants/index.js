import {
  css,
  CV_Duncan,
  ducky,
  email,
  figma,
  html,
  ilalex,
  mafiagame,
  me,
  nerveGames,
  nextjs,
  nextjsLogo,
  nuxt,
  pinia,
  project0,
  project1,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  react,
  reactjs,
  redux,
  stylus,
  tailwind,
  telegram,
  typescript,
  vue,
  weblab,
  whatsapp,
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
    icon: nextjs,
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
      "Developed key game interfaces and features using Nuxt 3, TypeScript, and Pug, ensuring high performance for a massive global audience.",
      "Contributed to the Telegram Mini App (TMA) frontend architecture, focusing on smooth mobile webview rendering and stable operation under heavy load.",
      "Worked in a cross-functional team (Back-end, Design, QA) to deliver consistent updates and new game mechanics."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "mafiagamelive.com",
    icon: mafiagame,
    iconBg: "#FFFFFF",
    date: "February 2026 - Present",
    points: [
      "Landing page development for the game mafiagamelive.com. Adding animations and parallax effects.",
      "Front-end development for Mafia Game. The game is in active development and closed beta testing."
    ],
  },
]

const myWords = [
  {
    text: "Here you can download my СV by clicking on Download button. I will be glad to our cooperation.",
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
      "Multiplayer social deduction game where players take on hidden roles and compete through strategy, deception, discussion, and teamwork",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "zustand",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "go_backend",
        color: 'blue-text-gradient'
      }
    ],
    image: project0,
    demo_link: "https://t.me/mafiagamelivebot",
  },
  {
    name: "Hamster Kombat 2",
    description:
      "Season 2 of Hamster Kombat — an evolution of the viral clicker game with new mechanics, visuals, and improved progression.",
    tags: [
      {
        name: "nuxt3",
        color: "green-text-gradient",
      },
      {
        name: "stylus",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    demo_link: "https://t.me/Hamster_Game_Dev_bot",
  },
  {
    name: "2048",
    description:
      "Game 2048 using React. Romain Cousin - it's his design. Logic - Ivan Vergiliev. His logic is very easy to follow.",
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
    image: project2,
    source_code_link: "https://github.com/jean-louis1776/2048-animated",
    demo_link: "https://2048-animated-aleksin.netlify.app/",
  },
  {
    name: "The Witcher",
    description:
      "Parallax gallery. Was used a custom library for creating particles, as well as the ScrollReveal and SwiperJS libraries.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/jean-louis1776/witcher-parallax",
    demo_link: "https://witcher-parallax.vercel.app/",
  },
  {
    name: "Yummio",
    description:
      "A small cooking React app using a third party API. There is a search in the recipe database and 4 ready-made presets.",
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
  {
    name: "Parallax Gallery",
    description:
      "A small gallery project. Actively used CSS animation, blur, parallax and gradient effects, as well as the SwiperJS library.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/jean-louis1776/Parallax-Gallery",
    demo_link: "https://jean-louis1776.github.io/Parallax-Gallery/",
  },
  {
    name: "Elecar",
    description:
      "Responsive website using HTML CSS & JavaScript. Contains animations when scrolling, smooth scrolling in each section.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link:
      "https://github.com/jean-louis1776/responsive-car-website",
    demo_link: "https://jean-louis1776.github.io/responsive-car-website/",
  },
  {
    name: "Assassin's Mantle",
    description:
      "A tricky way to create a 3D effect for a 2D picture. The website is designed as a gallery. Bootstrap and SwiperJS libraries were used.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project7,
    source_code_link: "https://github.com/jean-louis1776/assassin-hoodie",
    demo_link: "https://jean-louis1776.github.io/assassin-hoodie/",
  },
  {
    name: "Coffee.",
    description:
      "Landing page for a fictional coffee shop. Full responsiveness. CSS animations and JavaScript library MixItUp were used.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project8,
    source_code_link:
      "https://github.com/jean-louis1776/responsive-coffee-website",
    demo_link: "https://jean-louis1776.github.io/responsive-coffee-website/",
  },
  {
    name: "Google Clone",
    description:
      "Google search engine clone. API official. The frontend part of the application was written using the NextJS React framework.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "rest_api",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project9,
    source_code_link: "https://github.com/jean-louis1776/google-clone",
    demo_link: "https://google-clone-ilalex.vercel.app/",
  },
  {
    name: "Holux",
    description:
      "Beautiful landing page for real estate services. Includes a dark and light mode. Used JS libraries - ScrollReveal and SwiperJS.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project10,
    source_code_link: "https://github.com/jean-louis1776/holux-responsive",
    demo_link: "https://holux-responsive.vercel.app/",
  },
  {
    name: "Fairy Forest",
    description:
      "Parallax and neon light effect in this demo. To create this effect, the GSAP, ScrollSmoother and ScrollTrigger libraries were used.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project11,
    source_code_link: "https://github.com/jean-louis1776/forest-parallax",
    demo_link: "https://forest-parallax-ilalex.vercel.app/",
  },
  {
    name: "Coffetto",
    description:
      "Landing page for a fictional coffee shop. Full responsiveness. CSS animations and JavaScript library ScrollReveal were used.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project12,
    source_code_link: "https://github.com/jean-louis1776/coffetto",
    demo_link: "https://coffetto.vercel.app/",
  },
  {
    name: "Age Calculator",
    description:
      "A calculator that can calculate your age down to the day. There is a beautiful animation of calculating the age.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project13,
    source_code_link: "https://github.com/jean-louis1776/age-calculator-nextjs",
    demo_link: "https://age-calculator-nextjs.vercel.app/",
  },
  {
    name: "Natural Forest",
    description:
      "Beautiful website with 3D parallax effect. There is a beautiful rain animation, as well as a custom animated cursor.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project14,
    source_code_link:
      "https://github.com/jean-louis1776/natural-forest-parallax-nextjs",
    demo_link: "https://natural-forest-parallax.vercel.app/",
  },
  {
    name: "Beats Landing Page",
    description:
      "A minimalist landing page for Beats headphones with smooth animations, done in a dark theme.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project15,
    source_code_link:
      "https://github.com/jean-louis1776/responsive-headphones-beats",
    demo_link: "https://responsive-headphones-beats.vercel.app/",
  },
]

const myLinks = [
  {
    title: "Contact with me via ",
    subtitle: "Email",
    subtitle_color: "pink-text-gradient",
    link: "mailto:aleskin095@gmail.com",
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
