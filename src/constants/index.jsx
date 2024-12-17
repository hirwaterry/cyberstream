import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import terry from "../assets/profile-pictures/terry.jpg";
import ezra from "../assets/profile-pictures/ezra1.png";

import founder from "../assets/profile-pictures/founder.jpg";
import coFounder from "../assets/profile-pictures/Co-founder.jpg";

// Import icons from different React Icon libraries
import { FaCode } from "react-icons/fa"; // FontAwesome
import { IoMdCube } from "react-icons/io"; // Ionicons
import { BiShield } from "react-icons/bi"; // BoxIcons
import { FiGlobe } from "react-icons/fi"; // Feather Icons
import { HiServer } from "react-icons/hi"; // Heroicons
import { MdBarChart } from "react-icons/md"; // Material Icons
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiBrain } from "react-icons/bi";


import { Linkedin, Twitter, Github, Instagram } from "lucide-react"; // Icons for social media

export const companyLinks = [
  { href: "/about", text: "About Us" },
  { href: "/services", text: "Our Services" },
  { href: "/contact", text: "Contact" },
  { href: "/careers", text: "Careers" },
];

export const supportLinks = [
  { href: "/faq", text: "FAQ" },
  { href: "/privacy-policy", text: "Privacy Policy" },
  { href: "/terms-of-service", text: "Terms of Service" },
];

export const socialLinks = [
  { href: "https://linkedin.com/company/cyberstream", icon: <Linkedin /> },
  { href: "https://twitter.com/cyberstream", icon: <Twitter /> },
  { href: "https://github.com/cyberstream", icon: <Github /> },
  { href: "https://instagram.com/cyberstream", icon: <Instagram /> },
];






export const founderProfiles = [
  {
    name: "Mugisha Nehemie",
    title: "Founder & CEO",
    bio: "the visionary behind Cyberstream. Driven by a passion for innovation and a commitment to excellence, he leads with purpose, aiming to make a lasting impact on every project.",
    image: founder, // Update with actual image path
    linkedin: "https://www.linkedin.com/in/nehemie-mugisha-799a7326b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app  ",
    twitter: "https://x.com/MugishaNehemie",
    email: "nehemiemugisha06@gmail.com",
    github: "https://github.com/nehemiemugisha",
  },
  {
    name: "Hirwa Shema Terry",
    title: "Co-Founder & COO",
    bio: "Terry manages Cyberstream’s operations, driving efficiency and innovation to deliver exceptional digital solutions.",
    image: coFounder,
    linkedin: "https://www.linkedin.com/in/terry-hirwa/",
    twitter: "https://x.com/HirwaTerry",
    email: "hirwa.terry@gmail.com",
    github: "https://github.com/hirwaterry",
  },
  
  // Add more profiles as needed
];

export const features = [
  {
    icon: <FaCode />,
    text: "Website & Application Development",
    description:
      "Expertly crafted websites and applications, tailored to deliver exceptional user experiences and drive business growth.",
  },
  {
    icon: <BiBrain />,
    text: "AI Model Training",
    description:
      "Harnessing advanced machine learning techniques to build, train, and deploy AI models that empower intelligent decision-making.",
  },
  {
    icon: <BiShield />,
    text: "Cybersecurity Solutions",
    description:
      "Comprehensive cybersecurity services to protect your digital assets, prevent breaches, and ensure data integrity.",
  },
  {
    icon: <FiGlobe />,
    text: "Cross-Platform Compatibility",
    description:
      "Developing solutions that work seamlessly across web, mobile, and desktop platforms for a consistent user experience.",
  },
  {
    icon: <HiServer />,
    text: "Cloud Integration",
    description:
      "Secure and scalable cloud integration to enhance accessibility, storage, and processing for web and app services.",
  },
  {
    icon: <MdBarChart />,
    text: "Analytics & Insights",
    description:
      "Detailed analytics dashboards to monitor performance, track user behavior, and optimize digital strategies.",
  },
];


export const navItems = [
  { label: "Home", href: "/home" },
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "About", href: "/about" },
  { label: "Founders", href: "#founders" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];



export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

// about us
// constants.js

export const aboutUsData = {
  header: {
    title: "About Us",
    description:
      "We are Cyberstream, a technology-driven company specializing in Health Tech solutions, AI model training, web & app development, and cybersecurity solutions. Our goal is to innovate and secure the future of businesses through cutting-edge technology.",
  },
  missionVision: {
    mission: "Our mission at Cyberstream is to transform ideas into innovative software solutions. We believe that if you can dream it, we can make it a reality. Our expertise spans across various industries, from AI to beyond, with a commitment to crafting the software of tomorrow, today.",
    vision: "Our vision is to be a global leader in software innovation, empowering businesses and individuals to realize their fullest potential through custom-built solutions. We strive to create a future where technology bridges gaps, drives progress, and turns visionary ideas into impactful realities.",
  },
  coreValues: [
    {
      icon: "FaRegHandshake",
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaboration to achieve innovative results.",
    },
    {
      icon: "FaAward",
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring the highest quality and performance.",
    },
    {
      icon: "FaUserTie",
      title: "Leadership",
      description: "Our leadership is rooted in a deep understanding of technology, business, and security needs.",
    },
  ],
  team: [
    {
      name: "Terry",
      role: "Chief Operating Officer",
      bio: "is responsible for overseeing and optimizing the company’s day-to-day operations, ensuring efficiency, driving business growth.",
      image: terry,
    },
    {
      name: "Nehemie",
      role: "Head of AI & Data",
      bio: "Nehemie oversees business strategy and ensures that Cyberstream delivers unparalleled value to clients.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Ezra",
      role: "Project Manager ",
      bio: "At Cyberstream, ensuring the successful delivery of software projects on time, within scope, and on budget. With expertise in project planning",
      image: ezra,
    },
    {
      name : "Shema",
      role : "",
      bio: "is the CTO at Cyberstream, where he leads the company’s technological strategy and innovation",
      
    }
  ],
  cta: {
    title: "Join Us in Securing the Future",
    description: "Ready to innovate and secure your business with Cyberstream’s expert solutions? Let’s talk!",
    buttonText: "Get in Touch",
    buttonLink: "/contact",
  },
};


export const workflowItems = [
  {
    title: "Plan & Design",
    description: "We work closely with you to define the scope and design the architecture for your web or app project.",
  },
  {
    title: "Develop & Implement",
    description: "Our team develops custom solutions tailored to your business needs, integrating AI and security features.",
  },
  {
    title: "Test & Optimize",
    description: "We thoroughly test your application, AI models, and security protocols to ensure they meet the highest standards.",
  },
  {
    title: "Launch & Support",
    description: "Once everything is optimized, we help you launch and provide ongoing support to maintain and improve your product.",
  },
];
