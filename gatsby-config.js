module.exports = {
  siteMetadata: {
    siteUrl: "https://test.website.com",
    name: "Aditya S Rao",
    role: "Computer Enthusiast / Professional button masher & bug squasher",
  },

  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-bio",
        path: `${__dirname}/md`,
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "aditya-rao-dev-portoflio",
        schemas: {
          icebreaker: require("./src/schemas/icebreaker.json"),
          employment_history: require("./src/schemas/employment_history.json"),
          new_employment_history: require("./src/schemas/new_employment_history.json"),
        },
      },
    },
  ],
};
