module.exports = {
  siteMetadata: {
    siteUrl: "https://test.website.com",
    name: "Aditya",
    role: "Front End Developer",
  },

  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "aditya-rao-dev-portoflio",
        schemas: {
          icebreaker: require("./src/schemas/icebreaker.json"),
          employment_history: require("./src/schemas/employment_history.json"),
          new_employment_history: require("./src/schemas/new_employment_history.json"),
          about: require("./src/schemas/about.json"),
          skills: require("./src/schemas/skills.json"),
          resume: require("./src/schemas/resume.json"),
          resumetype: require("./src/schemas/resumetype.json"),
          projects: require("./src/schemas/projects.json"),
        },
      },
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-JM5ZGSTFRT"],
        gtagConfig: {
          anonymize_ip: true,
        },
      },
    },
  ],
};
