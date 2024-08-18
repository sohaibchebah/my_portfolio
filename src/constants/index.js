import {
  backend,
  web,
  javascript,
  nextjs,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
  docker,
  esi,
  carrent,
  prompt,
  leon,
  threejs,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
];

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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
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
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Esi sba",
    icon: esi,
    iconBg: "#383E56",
    date: "March 2024 - May 2024",
    points: [
      "Developing and maintaining web application using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "JavaScript Developer",
    company_name: "Esi sba",
    icon: esi,
    iconBg: "#E6DEDD",
    date: "OCT 2023",
    points: [
      "kodikos hackathon ...",
      "Developing and maintaining web application using html css and javascript.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sohaib is a talented developer who consistently delivers high-quality, polished results.",
    name: "Yacine Djaaraoui",
    designation: "Student",
    company: "esi sba",
    image: "https://i.ibb.co/YNVZNfx/yacine.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sohaib does.",
    name: "Mohamed zaarir",
    designation: "Student",
    company: "esi sba",
    image: "https://i.ibb.co/Krx4Kj3/moh.jpg",
  },
  {
    testimonial:
      "Sohaib brings creativity and precision to every project. Their work is always outstanding.",
    name: "Walid Benchikh",
    designation: "Student",
    company: "esi sba",
    image: "https://i.ibb.co/jwd8DCy/walidben.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sohaibchebah/Lotok",
  },
  {
    name: "Prompting tool",
    description:
      "Web application that enables users to search for prompts, Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: prompt,
    source_code_link: "https://github.com/sohaibchebah/PromptHelp",
  },
  {
    name: "Leon template",
    description: "leon template using html css",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: leon,
    source_code_link: "https://github.com/sohaibchebah/web-project",
  },
];

export { services, technologies, experiences, testimonials, projects };
