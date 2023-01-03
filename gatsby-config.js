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
        },
      },
    },
  ],
};
