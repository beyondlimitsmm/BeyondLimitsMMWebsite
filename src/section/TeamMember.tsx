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
      className="OurTeam bg-primary pt-10 pb-14 md:py-20 text-white relative scroll-m-16"
    >
      <div className="container ">
        <div className="row justify-center">
          <div className="w-full lg:w-1/2">
            <div className="text-center pb-6">
              <h3 className="">Modest Team</h3>
              <h1 className="z-20">But with a big passion</h1>
            </div>
          </div>
        </div>
        <img
          src={TeamMember1}
          alt=""
          className="absolute scale-50 md:scale-100 -left-20 -bottom-28  md:left-0 md:bottom-0"
        />
        <img
          src={TeamMember2}
          alt=""
          className="absolute scale-50 md:scale-100 -right-24 -top-32  md:right-0 md:top-0"
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
        <div className="bg-white rounded-3xl flex justify-center items-center py-8 mb-2">
          <img
            src={profileUrl}
            alt=""
            className="w-[124px] h-[124px]  md:w-[160px] md:h-[160px] rounded-full"
          />
        </div>
        <div className="member_info text-center flex flex-col gap-2 mb-6">
          <h3>{name}</h3>
          <div className="flex justify-center items-center font-light">
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
