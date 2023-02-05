export type AboutType = {
  allPrismicAbout: {
    nodes: BiographyType[];
  };

  site: {
    siteMetadata: {
      name: string;
      role: string;
    };
  };
};

export type BiographyType = {
  data: {
    bio: {
      text: string;
    };

    profile_picture: {
      alt: string;
      url: string;
    };
  };
};
