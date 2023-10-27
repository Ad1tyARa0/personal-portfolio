export type ProjectsType = {
  allPrismicProjects: {
    nodes: ProjectType[];
  };
};

export type ProjectType = {
  data: {
    description: { text: string };

    features: {
      text: string;
    };

    project_image: {
      url: string;
      alt: string;
    };

    website: {
      url: string;
    };

    source_code: {
      url: string;
    };

    tech_stack: {
      stack: {
        text: string;
      };

      stack_image: {
        url: string;
        alt: string;
      };
    }[];

    title: {
      text: string;
    };
  };
};
