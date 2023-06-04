import {
  react,
  reactNative,
  nextjs,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  geekbrains,
  ilalex,
  nextjsLogo,
  expo,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  me,
  CV_Duncan,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "React Native Developer",
    icon: reactNative,
  },
  {
    title: "NextJS Developer",
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
    name: "JavaScript",
    icon: javascript,
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
    name: "Expo React Native",
    icon: expo,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
]

const experiences = [
  {
    title: "Frontend JavaScript Developer (student)",
    company_name: "Geekbrains IT University",
    icon: geekbrains,
    iconBg: "#E6DEDD",
    date: "April 2021 - September 2021",
    points: [
      "Development of non-commercial website projects using HTML5, CSS3 (SCSS) and JavaScript (JS , React, NextJS, Expo React Native) technologies.",
    ],
  },
  {
    title: "Backend JavaScript Developer (student)",
    company_name: "Geekbrains IT University",
    icon: geekbrains,
    iconBg: "#E6DEDD",
    date: "October 2021 - January 2022",
    points: [
      "Development of non-commercial projects of server applications using JavaScript (NodeJS), Web project assembly tools (Webpack), databases (SQLite) and the HTTP network protocol.",
    ],
  },
  {
    title: "Full Stack JavaScript Developer (student)",
    company_name: "Geekbrains IT University",
    icon: geekbrains,
    iconBg: "#E6DEDD",
    date: "January 2022 - December 2022",
    points: [
      "Development of non-commercial web application projects using TypeScript, NestJS.",
    ],
  },
  {
    title: "Frontend JavaScript Developer",
    company_name: "ILALEX (own brand)",
    icon: ilalex,
    iconBg: "#E6DEDD",
    date: "July 2022 - Present",
    points: [
      "Developed my personal website using React library and Vite framework. Below in the portfolio section, you can view demos of non-commercial pet-projects, as well as view the source code on GitHub.",
      "Commercial development of landing pages for desktop and mobile devices, as well as the development of calculators (converters) using React.",
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
    image: project1,
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
    image: project2,
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
    image: project3,
    source_code_link:
      "https://github.com/jean-louis1776/responsive-car-website",
    demo_link: "https://jean-louis1776.github.io/responsive-car-website/",
  },
  {
    name: "Beautiful World",
    description:
      "First experience of creating a website with 3D scrolling. Third party libraries were not used. There is a custom animated cursor.",
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
    image: project4,
    source_code_link: "https://github.com/jean-louis1776/3d-scroll-nextjs",
    demo_link: "https://3d-scroll-nextjs.vercel.app/",
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
    image: project5,
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
    image: project6,
    source_code_link:
      "https://github.com/jean-louis1776/responsive-coffee-website",
    demo_link: "https://jean-louis1776.github.io/responsive-coffee-website/",
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
    image: project7,
    source_code_link: "https://github.com/jean-louis1776/2048-animated",
    demo_link: "https://2048-animated-aleksin.netlify.app/",
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
    image: project8,
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
    image: project9,
    source_code_link: "https://github.com/jean-louis1776/holux-responsive",
    demo_link: "https://holux-responsive.vercel.app/",
  },
  {
    name: "GeekTube",
    description:
      "Graduation Fullstack project at GeekBrains University. The project was created in a team. Simple video hosting (like YouTube).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: project10,
    source_code_link: "https://github.com/jean-louis1776/GBTube",
    demo_link: "http://www.geek-tube.ru/",
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
    image: project11,
    source_code_link: "https://github.com/jean-louis1776/witcher-parallax",
    demo_link: "https://witcher-parallax.vercel.app/",
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
    image: project12,
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
    image: project13,
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
    image: project14,
    source_code_link: "https://github.com/jean-louis1776/coffetto",
    demo_link: "https://coffetto.vercel.app/",
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
    image: project15,
    source_code_link: "https://github.com/jean-louis1776/coffetto",
    demo_link: "https://coffetto.vercel.app/",
  },
]

export { services, technologies, experiences, myWords, projects }
