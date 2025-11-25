import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Andoko Wijaya - AI and IoT Enthusiast",
  author: "Andoko Wijaya",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/Andoko-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    // { text: "Email", href: "andoko.wijaya@binus.ac.id" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/andoko-wijaya/" },
    { text: "Github", href: "https://github.com/Andokidoki" },
    { text: "Instagram", href: "https://www.instagram.com/andoko_wijaya/" },
  ],
  canonicalURL: "https://andokowijaya.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Andoko Wijaya",
    specialty: "Artificial Intelligence and Internet of Things Enthusiast",
    summary:
      "Aspire to become a person who inspires others to grow, lead, and create meaningful impact through technology.",
    email: "andokowijaya1@email.com",
  },
  experience: [
    {
      company: "HIMTI",
      position: "Chairman",
      startDate: "Mar 2025",
      endDate: "Present",
      summary: [
        "Serving as the highest leader of HIMTI, overseeing 7 regional branches and managing nearly 400 active members.",
        "Launched an internal monitoring system for performance evaluation and inter-division communication.",
        "Successfully increased activist count by 12% compared to the previous year.",
        "Supervised the execution of all HIMTI events, ensuring smooth coordination across divisions and committees."
      ],
    },
    {
      company: "Golden Game City",
      position: "Assistant Manager",
      startDate: "Feb 2023",
      endDate: "Jul 2023",
      summary: [
        "Processed 150+ transactions per shift with 98% accuracy rate.",
        "Recognized by management for consistently maintaining professionalism and positive customer interactions.",
      ],
    },
    {
      company: "HolyFox",
      position: "Accountant",
      startDate: "Aug 2022",
      endDate: "Mar 2023",
      summary:[
        "Processed 150+ transactions per shift with 100% accuracy rate.",
        "Maintained accurate financial records across 3+ events, ensuring zero discrepancies in reporting.",
      ]
    },
  ],
  projects: [
    {
      name: "FitPlate",
      summary: "A web-based health application that helps users maintain a healthy lifestyle by simplifying calorie tracking and promoting balanced nutrition through an intuitive and user-friendly interface.",
      linkPreview: "https://drive.google.com/drive/folders/1-NE8S8TNc7R6nWHxQBybveARQAfA9bub?usp=drive_link",
      linkSource: "https://github.com/Andokidoki/FitPlate_project",
      image: "/fitplate.png",
    },
    {
      name: "BINUSMAYA 2.0",
      summary: "A redesigned version of Binusmaya aimed at improving the student experience by reducing loading times, simplifying navigation, and enhancing accessibility.",
      linkPreview: "https://stynw7.github.io/Binusmaya2.0/schedule.html",
      linkSource: "https://github.com/Andokidoki/Binusmaya2.0",
      image: "/binusmaya1.png",
    },
    {
      name: "LyriGist",
      summary: "A machine learning-based system that classifies music genres using audio feature data and a Support Vector Machine (SVM) model to accurately identify songs based on their unique sound characteristics.",
      linkPreview: "https://drive.google.com/drive/folders/1oG0f69w7rVFvoTemWvJXcmycHpMiUMsE?usp=drive_link",
      linkSource: "https://github.com/Andokidoki/LyriGist-AI",
      image: "/lyrigist1.png",
    },
    {
      name: "DiamondCut Motors",
      summary: "A luxury car e-commerce website featuring a user-friendly interface. It is designed and developed to elevate the user experience, complete with features such as a showroom locator.",
      linkPreview: "https://diamond-cut-motors-seven.vercel.app/",
      linkSource: "https://github.com/Andokidoki/DiamondCut-Motors",
      image: "/dist/diamondcutmotor.png",
    },
    {
      name: "SignSphere",
      summary: "An AI tool that converts sign language to text in real time, improving communication, enhancing accessibility, and promoting inclusivity for the disability community.",
      // linkPreview: "",
      linkSource: "https://github.com/Andokidoki/SignSphere",
      image: "/dist/signsphere.png",
    },
    {
      name: "Snake Game with Hand Gesture",
      summary: "A YOLOv8-based system enabling real-time hand gesture control for the Snake game, making gameplay more interactive than traditional controls.",
      linkPreview: "https://snake-ai-command.netlify.app/",
      linkSource: "https://github.com/Andokidoki/Snake_Game_With_Computer_Vision",
      image: "/dist/snakegame.png",
    },
    {
      name: "Research paper",
      summary: "Comparative Analysis of Deep Learning Models For Edible Mushroom Image Classification",
      linkPreview: "",
      linkSource: "https://www.kaggle.com/datasets/benedictusjason/edible-and-poisonous-mushroom-classification",
      image: "/dist/rm2.png",
    },
  ],
  about: {
    description: `
      Hi, I'm a 5th-semester Computer Science undergraduate at BINUS University, specializing in Artificial Intelligence. I am passionate about exploring how intelligent systems can be applied to solve real-world problems and improve lives. Currently serving as the Chairman of HIMTI, I combine my technical interests with leadership to foster growth, collaboration, and innovation within the student community. I aspire to become an individual who not only contributes to the advancement of AI but also inspires others to pursue their passions and create meaningful impact through technology.
    `,
    image: "/Andoko-big2.png",
  },
};

// #5755ff
