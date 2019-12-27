module.exports = {
  siteMetadata: {
    social: [
      { 
        name: 'fb',
        link: 'https://www.facebook.com/maria.kagirova'
      },
      {
        name: 'insta', 
        link:'https://www.instagram.com/kagirova/'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `M PLUS Rounded 1c`,
            subsets: [`cyrillic`],
            variants: [`400`, `700`]
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `items`,
        path: `${__dirname}/items/`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `kagirova`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-155014627-1"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Maria Kagirova",
        short_name: "Kagirova",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/files/fav-logo.png"
      },
    },
  ],
}
