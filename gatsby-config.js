module.exports = {
  siteMetadata: {
    siteUrl: "https://test.website.com",
    name: "Aditya S Rao",
    role: "Computer Enthusiast",
    bio: "Engineer that likes building Isomorphic Reactive Serverless applications",
  },

  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-bio",
        path: `${__dirname}/md`,
      },
    },
  ],
};
