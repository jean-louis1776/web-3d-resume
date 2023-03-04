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
  project16,
  project17,
  project18,
  project19,
  project20,
  project21,
  project22,
  project23,
  project24,
  project25,
  project26,
  project27,
  project28,
  project29,
  project30,
  project31,
  project32,
  project33,
  project34,
  project35,
  project36,
  project37,
  project38,
  me,
} from "../assets"

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

const testimonials = [
  {
    testimonial:
      "Here you can download my СМ by clicking on Download button. I will be glad to our cooperation.",
    name: "Ilya Aleksin",
    designation: "The owner",
    company: "ILALEX",
    image: me,
  },
]

const projects = [
  {
    name: "Guess My Number!",
    description:
      "This is my first game on JavaScript. In this game you have to guess a number between 1 and 20 until you run out of lives.",
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
    image: project1,
    source_code_link:
      "https://github.com/jean-louis1776/PROJECT-1-guess-my-number",
    demo_link: "https://jean-louis1776.github.io/PROJECT-1-guess-my-number/",
  },
  {
    name: "Pig Game",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    source_code_link: "https://github.com/jean-louis1776/PROJECT-2-pig-game",
    demo_link: "https://jean-louis1776.github.io/PROJECT-2-pig-game/",
  },
  // {
  //   name: "Calculator",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project3,
  //   source_code_link: "https://github.com/jean-louis1776/PROJECT-3-calculator",
  //   demo_link: "https://jean-louis1776.github.io/PROJECT-3-calculator/",
  // },
  // {
  //   name: "JS-animation",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project4,
  //   source_code_link:
  //     "https://github.com/jean-louis1776/PROJECT-4-JS-animation",
  //   demo_link: "https://jean-louis1776.github.io/PROJECT-4-JS-animation/",
  // },
  // {
  //   name: "Responsive Login Form",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project5,
  //   source_code_link:
  //     "https://github.com/jean-louis1776/PROJECT-5-responsive-login-form",
  //   demo_link:
  //     "https://jean-louis1776.github.io/PROJECT-5-responsive-login-form/",
  // },
  // {
  //   name: "CSS Stacked Cards",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project6,
  //   source_code_link:
  //     "https://github.com/jean-louis1776/PROJECT-6-Responsive-CSS-Stacked-Cards",
  //   demo_link:
  //     "https://jean-louis1776.github.io/PROJECT-6-Responsive-CSS-Stacked-Cards/",
  // },
  // {
  //   name: "Web-Store",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project7,
  //   source_code_link: "https://github.com/jean-louis1776/web-store",
  //   demo_link: "https://jean-louis1776.github.io/web-store/",
  // },
  {
    name: "Yummio",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    source_code_link: "https://github.com/jean-louis1776/recipe-app-react",
    demo_link: "https://yummio.netlify.app/",
  },
  // {
  //   name: "Finger Scan",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project9,
  //   source_code_link:
  //     "https://github.com/jean-louis1776/PROJECT-7-CSS-Effect-Finger-Scan",
  //   demo_link:
  //     "https://jean-louis1776.github.io/PROJECT-7-CSS-Effect-Finger-Scan/",
  // },
  // {
  //   name: "Circular NavBar JS",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project10,
  //   source_code_link:
  //     "https://github.com/jean-louis1776/PROJECT-9-Circular-NavBar-JS",
  //   demo_link: "https://jean-louis1776.github.io/PROJECT-9-Circular-NavBar-JS/",
  // },
  // {
  //   name: "CSS Effect Product Card",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project11,
  //   source_code_link:
  //     "https://github.com/jean-louis1776/PROJECT-8-CSS-Effect-Product-Card",
  //   demo_link:
  //     "https://jean-louis1776.github.io/PROJECT-8-CSS-Effect-Product-Card/",
  // },
  // {
  //   name: "JavaScript Calendar",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project12,
  //   source_code_link:
  //     "https://github.com/jean-louis1776/PROJECT-10-Full-Year-Calendar",
  //   demo_link:
  //     "https://jean-louis1776.github.io/PROJECT-10-Full-Year-Calendar/",
  // },
  // {
  //   name: "JavaScript Clock",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project13,
  //   source_code_link: "https://github.com/jean-louis1776/PROJECT-11-JS-Clock",
  //   demo_link: "https://jean-louis1776.github.io/PROJECT-11-JS-Clock/",
  // },
  {
    name: "Parallax Gallery",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project14,
    source_code_link: "https://github.com/jean-louis1776/Parallax-Gallery",
    demo_link: "https://jean-louis1776.github.io/Parallax-Gallery/",
  },
  {
    name: "GERÍCHT",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project15,
    source_code_link:
      "https://github.com/jean-louis1776/responsive-restaurant-website",
    demo_link: "https://gericht-food.netlify.app/",
  },
  {
    name: "GPT-3",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project16,
    source_code_link: "https://github.com/jean-louis1776/modern-website-react",
    demo_link: "https://gpt3-react-aleksin.netlify.app/",
  },
  {
    name: "Elecar",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project17,
    source_code_link:
      "https://github.com/jean-louis1776/responsive-car-website",
    demo_link: "https://jean-louis1776.github.io/responsive-car-website/",
  },
  {
    name: "3D-Scroll",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project18,
    source_code_link: "https://github.com/jean-louis1776/3d-scroll-site",
    demo_link: "https://jean-louis1776.github.io/3d-scroll-site/",
  },
  {
    name: "Assassin's Mantle",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project19,
    source_code_link: "https://github.com/jean-louis1776/assassin-hoodie",
    demo_link: "https://jean-louis1776.github.io/assassin-hoodie/",
  },
  {
    name: "Parallax Mountain",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project20,
    source_code_link: "https://github.com/jean-louis1776/parallax-mountain",
    demo_link: "https://parallax-mountain-ilalex.netlify.app/",
  },
  {
    name: "Coffee.",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project21,
    source_code_link:
      "https://github.com/jean-louis1776/responsive-coffee-website",
    demo_link: "https://jean-louis1776.github.io/responsive-coffee-website/",
  },
  {
    name: "2048",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project22,
    source_code_link: "https://github.com/jean-louis1776/2048-animated",
    demo_link: "https://2048-animated-aleksin.netlify.app/",
  },
  // {
  //   name: "NFT Market",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project23,
  //   source_code_link:
  //     "https://github.com/jean-louis1776/nft-market-react-native",
  //   demo_link: "https://nft-native-showcase.netlify.app/",
  // },
  // {
  //   name: "Weather App",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project24,
  //   source_code_link:
  //     "https://github.com/jean-louis1776/weather-app-react-native",
  //   demo_link: "https://expo.dev/@jean-louis1776/weather-app",
  // },
  {
    name: "Google Clone",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project25,
    source_code_link: "https://github.com/jean-louis1776/google-clone",
    demo_link: "https://google-clone-ilalex.vercel.app/",
  },
  {
    name: "Holux",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project26,
    source_code_link: "https://github.com/jean-louis1776/holux-responsive",
    demo_link: "https://holux-responsive.vercel.app/",
  },
  {
    name: "Responsive 404 Page",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project27,
    source_code_link: "https://github.com/jean-louis1776/responsive-404-page",
    demo_link: "https://responsive-404-page.vercel.app/",
  },
  {
    name: "Live Battery Level",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project28,
    source_code_link:
      "https://github.com/jean-louis1776/battery-level-indicator",
    demo_link: "https://battery-level-indicator.vercel.app/",
  },
  {
    name: "Neumorphism Style Calculator",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project29,
    source_code_link:
      "https://github.com/jean-louis1776/neumorphism-calculator",
    demo_link: "https://neumorphism-calculator-ilalex.vercel.app/",
  },
  // {
  //   name: "CSS Water Drop Effect",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project30,
  //   source_code_link: "https://github.com/jean-louis1776/water-drop-effect-css",
  //   demo_link: "https://water-drop-effect-css.vercel.app/",
  // },
  {
    name: "3D Hover Animation",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project31,
    source_code_link: "https://github.com/jean-louis1776/css-3d-text-animation",
    demo_link: "https://css-3d-text-animation.vercel.app/",
  },
  // {
  //   name: "Text Focus Hover Effect",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project32,
  //   source_code_link: "https://github.com/jean-louis1776/css-text-hover",
  //   demo_link: "https://css-text-hover.vercel.app/",
  // },
  // {
  //   name: "Bubbles Animation",
  //   description:
  //     "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project33,
  //   source_code_link: "https://github.com/jean-louis1776/bubbles-animation-js",
  //   demo_link: "https://bubbles-animation-js.vercel.app/",
  // },
  {
    name: "YouTube 2.0",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project34,
    source_code_link: "https://github.com/jean-louis1776/youtube-clone-reactjs",
    demo_link: "https://youtube-2.vercel.app/",
  },
  {
    name: "Beats 3 Headphones Landing Page",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project35,
    source_code_link:
      "https://github.com/jean-louis1776/responsive-headphones-beats",
    demo_link: "https://responsive-beats.vercel.app/",
  },
  {
    name: "GeekTube (Graduation Project)",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project36,
    source_code_link: "https://github.com/jean-louis1776/GBTube",
    demo_link: "http://www.git-tube.ru/",
  },
  {
    name: "The Witcher",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project37,
    source_code_link: "https://github.com/jean-louis1776/witcher-parallax",
    demo_link: "https://witcher-parallax.vercel.app/",
  },
  {
    name: "Fairy Forest",
    description:
      "My second game using JavaScript. This is a multiplayer dice game. The game continues until one of the players scores 100+ points.",
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
    image: project38,
    source_code_link: "https://github.com/jean-louis1776/forest-parallax",
    demo_link: "https://forest-parallax-ilalex.vercel.app/",
  },
]

export { services, technologies, experiences, testimonials, projects }
