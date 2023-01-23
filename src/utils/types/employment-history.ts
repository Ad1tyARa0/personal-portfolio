export type EmploymentHistoryType = {
  company_description: {
    text: string;
  };

  company_logo: {
    url: string;
  };

  company_name: {
    text: string;
  };

  core_responsibilities: {
    text: string;
  };

  from_date: string;
  to_date: string;
  timestamp: string;
  is_current: boolean;
  location: {
    longitude: number;
    latitude: number;
  };
  technologies_used: {
    text: string;
  };
};
