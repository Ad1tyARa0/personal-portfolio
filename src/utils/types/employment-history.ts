export type EmploymentHistoryType = {
  id: string;
  company_description: {
    text: string;
  };
  company_logo: {
    alt: string;
    url: string;
  };
  company_name: {
    text: string;
  };
  designation: {
    text: string;
  };
  responsibilities: EmploymentResponsibilityType[];
  technologies: EmploymnetTechnologyType[];
  from_date: string;
  to_date: string;
  is_current: boolean;
  location: {
    longitude: number;
    latitude: number;
  };
  timestamp: string;
};

type EmploymentResponsibilityType = {
  responsibility_text: {
    text: string;
  };
};

type EmploymnetTechnologyType = {
  technology_title: {
    text: string;
  };
  technology_image: {
    url: string;
    alt: string;
  };
};
