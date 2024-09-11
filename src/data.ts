export const TECHS = [
  { name: "Vite", logo: "vite" },
  { name: "NextJS", logo: "nextjs" },
  { name: "ReactJS", logo: "react" },
  { name: "Tailwind CSS", logo: "tailwind" },
  { name: "TypeScript", logo: "ts" },
  { name: "Redux", logo: "redux" },
  { name: "Sass", logo: "sass" },
  { name: "CSS", logo: "css" },
  { name: "HTML", logo: "html" },
  { name: "JavaScript", logo: "js" },
  { name: "Strapi", logo: "strapi" },
  { name: "SQLite", logo: "sqlite" },
  { name: "MongoDB", logo: "mongodb" },
  { name: "Bootstrap", logo: "bootstrap" },
  { name: "Styled-components", logo: "sc" },
  { name: "Node", logo: "node" },
  { name: "Docker", logo: "docker" },
  { name: "Jest", logo: "jest" },
  { name: "GitHub", logo: "github" },
  { name: "Jira", logo: "jira" },
];

export const EXPERIENCE = [
  {
    title: "IT consultant and Developer",
    company: "Freelance",
    image: "/assets/logo.svg",
    date: "2021 - Present",
    description:
      "Developing and maintaining web applications and IT consulting including, hardware, network components, security and basic architecture.",
  },
  {
    title: "Frontend Developer",
    company: "Viking Sasquatch",
    link: "https://www.linkedin.com/company/viking-sasquatch/",
    image: "/assets/VS.jpg",
    date: "Dec 2022 - May 2024",
    description: `
      Contributed to building a mortgage and loan system using React, TailwindCSS, and TypeScript.
      Optimized frontend performance and supported Vue migration.
      Designed and implemented the UI for a PITI Calculator in React Native during a hackathon.
    `,
  },
  {
    title: "Frontend Developer",
    company: "FirstClose",
    link: "https://www.linkedin.com/company/firstclose/",
    image: "/assets/FC.jpg",
    date: "Dec 2022 - Apr 2023 (Project)",
    description: `
      Enhanced UI for mortgage applications and migrated to ReactJS.
      Improved functionality and worked closely with the team on design.
    `,
  },
  {
    title: "Frontend Developer",
    company: "Esto Es",
    link: "https://www.linkedin.com/company/estoes/posts/",
    image: "/assets/estoes.jpg",
    date: "Apr 2022 - Dec 2022",
    description: `
      Developed features for the Institutional Telecom site using Next.js and MaterialUI.
      Led the migration from CodeIgniter to Next.js with a focus on SEO and performance through server-side rendering.
    `,
  },
];

export const projects = [
  {
    icon: "discord",
    title: "Discord Roleplay Assistant Bot",
    subtitle: "Roleplay Assistant Bot for Discord",
    description:
      "This Discord bot is designed to assist a server that organizes roleplaying games. It allows users to access a list of useful commands, such as asking questions, retrieving character information, and rolling dice. The bot utilizes the discord.js library, TypeScript for implementation, and Gemini AI for enhanced interactions.",
    techs: ["JavaScript", "TypeScript", "Discord.js", "Gemini AI"],
    live: "",
    source: "https://github.com/TanisJam/eradrin-bot",
    screenshot: "/assets/projects/bot.png",
  },
  // {
  //   icon: "superhero",
  //   title: "Superhero Team Inspector",
  //   subtitle: "App to Create a Superhero Team",
  //   description:
  //     "This app allows you to create a fake superhero team to easily see their combined power stats. Credentials to access: Email: challenge@alkemy.org Password: react.",
  //   techs: ["React", "CSS", "Redux"],
  //   live: "https://sti.vercel.app/",
  //   source: "https://github.com/TanisJam/sti",
  //   screenshot: "/assets/projects/sti.png",
  // },
  {
    icon: "cart-shopping",
    title: "Shopping Cart Demo",
    subtitle: "Simple E-commerce Shopping Cart Demo",
    description:
      "This is a simple demo of a shopping cart application that allows users to browse products by category, filter products, and search within categories. The cart is persistent in local.",
    techs: ["React", "TypeScript", "Redux", "Vite", "Material UI"],
    live: "https://first-cart-chi.vercel.app/",
    source: "https://github.com/TanisJam/first-cart",
    screenshot: "/assets/projects/shop.png",
  },
  {
    icon: "crow",
    title: "El Reposo Del Cuervo Landing Page",
    subtitle: "Landing Page for a D&D Discord Server",
    description:
      "El Reposo Del Cuervo is the name of a Discord server that organizes and runs D&D sessions. To promote the server, I've created a landing page that includes information about the server, its rules, and how to join. The page is designed to be visually appealing and user-friendly. This project is built with Next.js, TypeScript, and Tailwind CSS.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI"],
    live: "https://elreposodelcuervo.mnr.ar/",
    source: "https://github.com/TanisJam/reposo",
    screenshot: "/assets/projects/reposo.png",
  },
  // {
  //   icon: "blog",
  //   title: "Blog Management",
  //   subtitle: "Blog Management App",
  //   description:
  //     "This is a simple blog management app. It allows you to create, edit, and delete posts. It uses React, Redux, and a {JSON} Placeholder fake endpoint.",
  //   techs: ["React", "Redux", "Bootstrap"],
  //   live: "https://blogment.vercel.app/",
  //   source: "https://github.com/TanisJam/almemy-warm-up",
  //   screenshot: "/assets/projects/blog.png",
  // },
  // {
  //   icon: "trivia",
  //   title: "Trivia",
  //   subtitle: "Trivia Game",
  //   description:
  //     "As part of the Evuca project, we were tasked with creating a website to apply the knowledge acquired so far. This strengthened our use of HTML, CSS, and JavaScript. We used Webpack, Git, and Less in this project. It is a simple trivia game with achievements.",
  //   techs: ["HTML", "CSS", "JavaScript", "Webpack", "Git", "Less"],
  //   live: "https://trivia15dias.vercel.app/",
  //   source: "https://github.com/TanisJam/trivia15dias",
  //   screenshot: "/assets/projects/trivia.png",
  // },
  {
    icon: "nft",
    title: "Hero NFT",
    subtitle: "Demo Landing Page for NFT Transactions",
    description:
      "Landing page for NFT transactions. This was created as a demo using NextJs and Sass.",
    techs: ["NextJs", "Sass", "Eslint"],
    live: "https://hero-nft.vercel.app/",
    source: "https://github.com/TanisJam/hero-page-nft",
    screenshot: "/assets/projects/nft.png",
  },
  // {
  //   icon: '/assets/logo.svg',
  //   title: 'SuperMarket',
  //   subtitle: 'E-Commerce App',
  //   description:
  //     'This is a simple e-commerce app. You can add products to your cart and checkout. It uses React, Redux, Bootstrap, and Firebase as the database.',
  //   techs: ['React', 'Redux', 'Bootstrap', 'Firebase'],
  //   live: 'https://super-evuca.vercel.app/',
  //   source: 'https://github.com/TanisJam/superCualquiera',
  //   screenshot: '/assets/projects/super.png',
  // },
  // {
  //   icon: "rain",
  //   title: "Its Raining",
  //   subtitle: "React-Based Weather Seeker",
  //   description:
  //     "React-based weather seeker. It consumes a free OpenWeatherMap API. I used CreateReactApp, React Router, and Styled Components.",
  //   techs: ["React", "CreateReactApp", "React Router", "Styled Components"],
  //   live: "https://its-raining.vercel.app/",
  //   source: "https://github.com/TanisJam/its-raining",
  //   screenshot: "/assets/projects/weather.png",
  // },
  // {
  //   icon: "humidity",
  //   title: "Temperature and Humidity Simulator",
  //   subtitle: "Temperature and Humidity Simulation",
  //   description:
  //     "A scienceless simulation of how temperature and humidity affect a bunch of computer-generated slimes. My initial thoughts for this project were to practice with Objects and Classes, but I also learned about physics and how to manipulate CSS variables.",
  //   techs: ["JavaScript", "CSS"],
  //   live: "https://tanisjam.github.io/cold-humidity-sim/",
  //   source: "https://github.com/TanisJam/cold-humidity-sim",
  //   screenshot: "/assets/projects/temp.png",
  // },
  // {
  //   icon: '/assets/logo.svg',
  //   title: 'ETCH-A-SKETCH',
  //   subtitle: 'ETCH-A-SKETCH Game with Extra Features',
  //   description:
  //     'ETCH-A-SKETCH game with some extra functionalities. Currently, it only works on desktop.',
  //   techs: ['JavaScript'],
  //   live: 'https://tanisjam.github.io/etch-a-sketch/',
  //   source: 'https://github.com/TanisJam/etch-a-sketch',
  //   screenshot: '/assets/projects/EtchASketch.png',
  // },
];
