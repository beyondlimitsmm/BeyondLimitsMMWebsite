export interface ITeamMemberCard {
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

export interface ICardInfo {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
}
