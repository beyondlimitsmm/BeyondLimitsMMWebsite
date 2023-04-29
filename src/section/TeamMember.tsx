import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import AungHtetPaing from "../assets/TeamMember/AungHtetPaing.svg";
import KyawZinHtun from "../assets/TeamMember/KyawZinHtun.svg";
import SeintSinsarLwin from "../assets/TeamMember/SeintSinsarLwin.svg";

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
}

const TeamMemberList: Array<ITeamMemberCard> = [
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
  },
  {
    profileUrl: KyawZinHtun,
    name: "Thet Oo Aung",
    role: ["Frontend Developer"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
  },
  {
    profileUrl: SeintSinsarLwin,
    name: "Thet Oo Aung",
    role: ["Frontend Developer"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
  },
  {
    profileUrl: AungHtetPaing,
    name: "John Doe",
    role: ["Designer", "UI/UX"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
  },
  {
    profileUrl: KyawZinHtun,
    name: "John Doe",
    role: ["Designer", "UI/UX"],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
  },
  {
    profileUrl: SeintSinsarLwin,
    name: "Tom",
    role: ["Mobile", "Backend Dev", "Tester"],
    socials: {
      facebook: "",
      twitter: "",
      linkedin: "",
      github: "",
    },
  },
];

export const OurTeam = () => {
  return (
    <section id="team" className="OurTeam bg-primary py-20 text-white">
      <div className="container">
        <div className="row justify-center">
          <div className="w-full lg:w-1/2">
            <div className="text-center pb-6">
              <h3>Modest Team</h3>
              <h1 className="">But with a big passion</h1>
            </div>
          </div>
        </div>

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

const OurTeamCard = ({ name, profileUrl, role, socials }: ITeamMemberCard) => {
  return (
    <div className="OurTeamCard">
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-3xl flex justify-center items-center py-8 mb-2">
          <img
            src={profileUrl}
            alt=""
            className="w-[160px] h-[160px] rounded-full"
          />
        </div>
        <div className="member_info text-center flex flex-col gap-2 mb-6">
          <h3>Aung Htet Paing</h3>
          <div className="">Founder</div>
          <h5>
            A visionary leader with extensive experience in software development
          </h5>
        </div>
      </div>
    </div>
  );
};
