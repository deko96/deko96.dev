import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dejan Bozhinoski",
  initials: "DB",
  url: "https://deko96.dev",
  location: "Skopje, MK",
  locationLink: "https://www.google.com/maps/place/skopje",
  description:
    "Coding is my passion, and I love seeing projects come to life on the web. Whether I'm working on a simple website or a complex web application, I approach each project with enthusiasm and dedication, always striving to create an enjoyable and effective user experience.",
  summary:
    "I’ve been passionate about tech since childhood, starting with playing a lot of Counter-Strike and creating PAWN scripts for game servers. This sparked my interest in server management, which led me to explore PHP and grow a love for programming. I studied computer science for two years but dropped out when I landed my first developer job. I’m always eager to learn, read about, and experiment with new technology.",
  avatarUrl: "/me.jpeg",
  softSkills: [
    "Leadership",
    "Communication",
    "Problem-Solving",
    "Mentorship",
    "Adaptability",
  ],
  techSkills: [
    "TypeScript",
    "PHP",
    "Node.js",
    "Nest.js",
    "Next.js",
    "SQL / NoSQL",
    "React",
    "Vue",
    "Angular",
    "Docker",
    "Kubernetes",
    "Serverless",
    "Terraform",
    "AWS",
  ],
  navbar: [
    // { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  cvUrl: "/CV_Dejan_Bozhinoski.pdf",
  contact: {
    email: "bozhinoski996@gmail.com",
    tel: "+38972311480",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/deko96",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/deko96/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:bozhinoski996@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Intertec",
      badges: [],
      href: "https://intertec.io",
      location: "Skopje, MK",
      title: "Technology Expert",
      logoUrl: "/work/intertec.png",
      start: "July 2021",
      end: "Present",
    },
    {
      company: "Culturetec",
      badges: [],
      href: "https://culturetec.co",
      location: "Skopje, MK",
      title: "TypeScript Tech Lead",
      logoUrl: "/work/culturetec.svg",
      start: "October 2023",
      end: "February 2025",
    },
    {
      company: "Brainster Next College",
      badges: [],
      href: "https://next.edu.mk/",
      location: "Skopje, MK",
      title: "NextJS / React Instructor",
      logoUrl: "/work/brainster.webp",
      start: "November 2023",
      end: "January 2024",
    },
    {
      company: "Digital Orange",
      href: "https://digital-orange.com/",
      badges: [],
      location: "Skopje, MK",
      title: "Web Developer & System Administrator",
      logoUrl: "/work/digitalorange.svg",
      start: "September 2019",
      end: "July 2021",
    },
    {
      company: "Digital Present",
      href: "https://digitalpresent.io",
      badges: [],
      location: "Skopje, MK",
      title: "Lead Backend Developer",
      logoUrl: "/work/digitalpresent.svg",
      start: "January 2019",
      end: "July 2019",
    },
    {
      company: "Centkom",
      href: "https://centkom.mk/",
      badges: [],
      location: "Skopje, MK",
      title: "Fullstack Web Developer",
      logoUrl: "/work/centkom.png",
      start: "January 2017",
      end: "January 2019",
    },
    {
      company: "Upwork",
      href: "https://upwork.com",
      badges: [],
      location: "Remote",
      title: "Freelance Software Developer",
      logoUrl: "/work/upwork.png",
      start: "September 2015",
      end: "December 2016",
    },
    {
      company: "Fiverr",
      href: "https://fiverr.com",
      badges: [],
      location: "Remote",
      title: "Freelance Software Developer",
      logoUrl: "/work/fiverr.svg",
      start: "March 2013",
      end: "June 2015",
    },
  ],
  education: [],
  projects: [
    {
      title: "Binance Storm",
      dates: "May 2020 - September 2021",
      active: false,
      description:
        "CLI application that automates the process of trading cryptocurrencies through Binance depending on a configurable profit/loss margin",
      technologies: ["Node.js"],
      links: [],
      image: "/projects/binancestorm.png",
      imagePosition: "center",
    },
    {
      title: "PBNBee",
      dates: "May 2020 - September 2021",
      active: false,
      description:
        "A marketplace crafted particularly for SEO engineers offering them filtered seed sites to help them grow their search engine rank by taking advantage of the seed site.",
      technologies: ["Node.js", "RabbitMQ", "React", "Bootstrap"],
      links: [],
      image: "/projects/pbnbee.jpeg",
      imagePosition: "center",
    },
    {
      title: "Kia Motors Macedonia",
      dates: "July 2020 - September 2020",
      active: false,
      description:
        "The project involved creating a custom content management system that allows for easy updates and management of vehicle information, alongside a user-friendly interface that enhances the customer experience for browsing and interacting with the site.",
      technologies: ["OctoberCMS", "MySQL", "Vue", "jQuery", "Bootstrap"],
      links: [],
      image: "/projects/kia.jpg",
      imagePosition: "center",
    },
    {
      title: "Contentbear",
      dates: "July 2019 - August 2021",
      active: false,
      description:
        "Simple, fast and reliable tool that can pull every CC from a Youtube Video and Every Single AutoCC that Youtube can generate",
      technologies: ["Laravel", "Node.js", "Redis", "Vue", "Bootstrap"],
      links: [],
      image: "/projects/contentbear.png",
      imagePosition: "top",
    },
    {
      title: "Gram.gg | TBNGram.io",
      dates: "February 2016 - October 2018",
      active: false,
      description:
        "Instagram automation Web Application with variety of features. Accumulated over 3000 active users and over 10.000 Active Instagram Accounts in our system",
      technologies: ["Laravel", "MySQL", "RabbitMQ", "Bootstrap", "JavaScript"],
      links: [],
      image: "/projects/gramgg.jpg",
      imagePosition: "center",
    },
    {
      title: "ViralBolt",
      dates: "August 2015 - February 2016",
      active: false,
      description:
        "Traffic exchange service designed to optimize engagement and interactions, aiming to influence YouTube’s and Dailymotion’s algorithms. The platform strategically increases video visibility and boosts metrics to enhance the chances of content being promoted by the algorithms.",
      technologies: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
      links: [],
      image: "/projects/viralbolt.jpg",
      imagePosition: "center",
    },
  ],
  hackathons: [
    {
      title: "Interhack",
      location: "Skopje, MK",
      dates: "2022",
      description:
        "HireAI - an AI-powered recruitment tool that simplifies candidate filtering and shortlisting by aggregating CVs by relevance to the job description, ensuring you get only the most qualified candidates.",
      image: "/work/intertec.png",
      links: [],
    },
    {
      title: "Business Startup Weekend",
      dates: "2018",
      location: "Skopje, MK",
      description:
        "Spread the Word - web portal and mobile app that empowers users to take action against ecological catastrophes! With Spread the Word, users can easily view and capture environmental issues on demand and share them with the world.",
      image: "/work/solveo.png",
      links: [],
    },
    {
      title: "Nasa Space Apps Challange",
      dates: "2017",
      location: "Skopje, MK",
      description:
        "Lets go to the Beach - a hybrid mobile application for beachgoers! Discover nearby beaches and get the latest UV index information for your location with just a few taps.",
      image: "/work/nasaspaceapps.jpeg",
    },
    {
      title: "Nasa Space Apps Challange",
      dates: "2016",
      location: "Skopje, MK",
      description:
        "Amaris - an interactive application that uses smart phone sensors to locate the moon at any time of the day using VR.",
      image: "/work/nasaspaceapps.jpeg",
    },
  ],
} as const;
