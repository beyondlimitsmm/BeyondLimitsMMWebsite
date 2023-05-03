import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import AungHtetPaing from "../assets/TeamMember/AungHtetPaing.svg";
import KyawZinHtun from "../assets/TeamMember/KyawZinHtun.svg";
import SeintSinsarLwin from "../assets/TeamMember/SeintSinsarLwin.svg";
import TeamMember1 from "../assets/layers/member-1.svg";
import TeamMember2 from "../assets/layers/member-2.svg";

interface ITeamMemberCard {
  profileUrl: string;
  name: string;
  role: String[];
  socials: {
    facebook: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
  description: string;
}

const TeamMemberList: Array<ITeamMemberCard> = [
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
    profileUrl: AungHtetPaing,
    name: "Thet Oo Aung",
    role: ["Frontend Developer"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description: "",
  },

  {
    profileUrl: KyawZinHtun,
    name: "Min Ye",
    role: ["Designer", "UI/UX"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    description: "",
  },
  {
    profileUrl: SeintSinsarLwin,
    name: "Wai Yan Min Khant",
    role: ["Mobile Developer"],
    socials: {
      facebook: "",
      twitter: "",
      linkedin: "",
      github: "",
    },
    description: "",
  },
];

export const OurTeam = () => {
  return (
    <section
      id="team"
      className="OurTeam relative scroll-m-16 overflow-hidden bg-primary pt-10 pb-14 text-white md:py-20"
    >
      <div className="container ">
        <div className="row justify-center">
          <div className="w-full lg:w-1/2">
            <div className="pb-6 text-center">
              <h3 className="">Modest Team</h3>
              <h1 className="relative z-20">But with a big passion</h1>
            </div>
          </div>
        </div>
        <img
          src={TeamMember1}
          alt=""
          className="absolute -left-20 -bottom-28 scale-50 md:left-0  md:bottom-0 md:scale-100"
        />
        <img
          src={TeamMember2}
          alt=""
          className="absolute -right-24 -top-32 scale-50 md:right-0  md:top-0 md:scale-100"
        />

        <div className="team-wrapper relative">
          <Splide
            options={{
              rewind: true,
              perPage: 3,
              gap: 24,
              arrows: false,
              pagination: true,

              breakpoints: {
                540: {
                  perPage: 1,
                },
                720: {
                  perPage: 2,
                },
                960: {
                  perPage: 2,
                },
                1140: {
                  perPage: 3,
                },
              },
            }}
            aria-label="Team Member Slider"
          >
            {TeamMemberList.map((el, index) => (
              <SplideSlide key={index}>
                <OurTeamCard {...el}></OurTeamCard>{" "}
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

const OurTeamCard = ({
  name,
  profileUrl,
  role,
  socials,
  description,
}: ITeamMemberCard) => {
  return (
    <div className="OurTeamCard">
      <div className="flex flex-col justify-center">
        <div className="mb-2 flex items-center justify-center rounded-3xl bg-white py-8">
          <img
            src={profileUrl}
            alt=""
            className="h-[124px] w-[124px]  rounded-full md:h-[160px] md:w-[160px]"
          />
        </div>
        <div className="member_info mb-6 flex flex-col gap-2 text-center">
          <h3>{name}</h3>
          <div className="flex items-center justify-center font-light">
            {role.map((e, index) => {
              if (index !== role.length - 1) {
                return <h5 key={index}>{e} |&nbsp;</h5>;
              }
              return <h5 key={index}>{e}</h5>;
            })}
          </div>
          <h5 className="font-light">
            {description != ""
              ? description
              : "brings a wealth of design experience to Beyond Limits Technologies "}
          </h5>
        </div>
      </div>
    </div>
  );
};
