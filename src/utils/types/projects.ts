export type ProjectsType = {
  allPrismicProjects: {
    nodes: ProjectType[];
  };
};

export type ProjectType = {
  data: {
    description: { text: string };

    features: {
      feature: {
        text: string;
      };
    }[];

    images: {
      project_image: {
        url: string;
        alt: string;
      };
    }[];

    link: {
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
