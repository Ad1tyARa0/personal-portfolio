export type ResumeType = {
  basicDetails: {
    name: string;
    title: string;
    email: string;
    phone: string;
    website: string;
    github: string;
    linkedIn: string;
  };

  experience: ResumeExperienceType[];
  skills: ResumeSkillsType[];
  education: ResumeEducationType[];
  projects: ResumeProjectType[];
  interests: string[];
};

type ResumeExperienceType = {
  companyName: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
};

type ResumeSkillsType = {
  skillName: string;
  items: string[];
};

type ResumeEducationType = {
  universityName: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  grade: string;
};

type ResumeProjectType = {
  projectName: string;
  description: string;
};
