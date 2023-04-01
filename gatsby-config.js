module.exports = {
  siteMetadata: {
    siteUrl: "https://test.website.com",
    name: "Aditya S Rao",
    role: "Software Engineer & Computer Enthusiast",
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
        },
      },
    },

    {
      resolve: "gatsby-plugin-pdf",
      options: {
        paths: ["/resume"],
        outputPath: "/assets/pdf",
      },
    },
  ],
};
