module.exports = {
  siteMetadata: {
    title: `Ichsan Things & React`,
    name: `Teuku Mulia Ichsan`,
    siteUrl: `https://teukumulya-ichsan.com`,
    description: `Teuku Mulia Ichsan Blog Site`,
    hero: {
      heading: `After nearly two years without a blog, I'm starting over. To explain a simple think about developers`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/callme_dondO`
      },
      {
        name: `github`,
        url: `https://github.com/arogant7000`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/mulya.ichsan`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/mulia-ichsan/`
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mulya Ichsan Blog`,
        short_name: `Mulia Ichsan`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
