import AungHtetPaing from "../assets/TeamMember/AungHtetPaing.svg";
import KyawZinHtun from "../assets/TeamMember/KyawZinHtun.svg";
import MinBala from "../assets/TeamMember/MinBala.svg";
import NyanLinSoe from "../assets/TeamMember/NyanLinSoe.svg";
import SeintSinsarLwin from "../assets/TeamMember/SeintSinsarLwin.svg";
import ThetOoAung from "../assets/TeamMember/ThetOoAung.svg";
import WaiYanKyaw from "../assets/TeamMember/WaiYanKyaw.svg";
import WaiYanMinKhant from "../assets/TeamMember/WaiYanMinKhant.svg";
import YeMyoAung from "../assets/TeamMember/YeMyoAung.svg";
import { ITeamMemberCard } from "./types";

export const PanelItem: { title: string; body: string }[] = [
  {
    title: "Discovery",
    body: "We begin by understanding your business goals, requirements, and target audience to create a comprehensive project plan.",
  },
  {
    title: "Design",
    body: "Our designers create wireframes, mockups, and prototypes to ensure a visually appealing and user-friendly experience.",
  },
  {
    title: "Development",
    body: "Our developers bring your vision to life by writing clean, efficient, and scalable code using the latest technologies and best practices.",
  },
  {
    title: "Testing",
    body: "We perform rigorous testing to identify and resolve any issues, ensuring the highest level of quality and reliability ",
  },
  {
    title: "Deployment",
    body: "We help you launch your solution, providing support and guidance throughout the process.",
  },
  {
    title: "Maintenance & Support",
    body: "We offer ongoing support and updates to ensure your software stays current and performs optimally.",
  },
];

export const TeamMemberList: Array<ITeamMemberCard> = [
  {
    profileUrl: AungHtetPaing,
    name: "Aung Htet Paing",
    role: ["CEO (Co-Founder)"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description:
      "With extensive entrepreneurial and management experience, skilled in formulating company strategy and leading teams to achieve goals.",
  },
  {
    profileUrl: KyawZinHtun,
    name: "Kyaw Zin Tun",
    role: ["COO (Co-Founder)"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description:
      "Possesses a solid background in operations management, adept at optimizing business processes and improving work efficiency.",
  },
  {
    profileUrl: YeMyoAung,
    name: "Ye Myo Aung",
    role: ["CTO"],
    socials: {
      facebook: "",
      twitter: "",
      linkedin: "",
      github: "",
    },
    description:
      "Boasting rich technical experience and extensive industry knowledge, excels at leading the technology team in developing innovative software solutions.",
  },
  {
    profileUrl: NyanLinSoe,
    name: "Nyan Lin Soe",
    role: ["Technical Project Manager"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description:
      "With a technical background and project management experience, proficient in cross-departmental collaboration and resource integration.",
  },
  {
    profileUrl: ThetOoAung,
    name: "Thet Oo Aung",
    role: ["Front-end Engineer"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description:
      "Possessing outstanding programming skills and a keen insight into user experience, adept at transforming complex design and functionality requirements into elegant, high-performance front-end interfaces.",
  },

  {
    profileUrl: WaiYanMinKhant,
    name: "Wai Yan Min Khant",
    role: ["Mobile Developer"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description:
      "Proficient in the development of multiple mobile platforms, with extensive experience in cross-platform application development.",
  },

  {
    profileUrl: WaiYanKyaw,
    name: "Wai Yan Kyaw",
    role: ["Back-end Developer"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description:
      "With rich back-end development experience, proficient in various programming languages and frameworks.",
  },
  {
    profileUrl: SeintSinsarLwin,
    name: "Seint Sinsar Lwin",
    role: ["Product Designer"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description:
      "Possessing exceptional visual design skills and a deep understanding of interface layout, attentive to detail, and committed to creating beautiful and user-friendly interfaces.",
  },
  {
    profileUrl: MinBala,
    name: "Min Ye Htut Myat",
    role: ["Product Designer"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description:
      "With abundant user experience design experience, adept at using data and user feedback for product iteration.",
  },
];

export const makeAnimation = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.4,
      },
      opacity: {
        duration: 0.25,
        delay: 0.15,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.4,
      },
      opacity: {
        duration: 0.25,
      },
    },
  },
};
