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
    role: ["Founder"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description:
      "A visionary leader with extensive experience in software development",
  },
  {
    profileUrl: KyawZinHtun,
    name: "Kyaw Zin Htun",
    role: ["Founder"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description:
      "A technology enthusiast with a deep understanding of emerging trends",
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
      "brings a wealth of design experience to Beyond Limits Technologies",
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
      "brings a wealth of technical experiences to Beyond Limits Technologies",
  },
  {
    profileUrl: ThetOoAung,
    name: "Thet Oo Aung",
    role: ["Frontend Developer"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description:
      "A technology enthusiast with a deep understanding of emerging trends",
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
      "brings a wealth of developer  experience to Beyond Limits Technologies",
  },

  {
    profileUrl: NyanLinSoe,
    name: "Nyan Lin Soe",
    role: ["Project Manager"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description:
      "With exceptional organizational skills and a keen eye for detail",
  },

  {
    profileUrl: MinBala,
    name: "Min Bala",
    role: ["Backend Developer"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description:
      "A visionary developer with extensive experience in software development",
  },
  {
    profileUrl: WaiYanKyaw,
    name: "Wai Yan Kyaw",
    role: ["Backend Developer"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description:
      "A technology enthusiast with a deep understanding of emerging trends",
  },
];
