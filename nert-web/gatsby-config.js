module.exports = {
    siteMetadata: {
        siteUrl: `https://nert.afriendlyfox.com`,
        title: "NERT Home",
        titleTemplate: "%s · The Negative Experience Reframing Tool",
        description: "A theraputic tool used to calm your mind, identify cognitive distortions, and feel better after any kind of negative experience.",
        image: "/mainMetaImage.jpg",
        twitterUsername: "@Valefox"
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        "gatsby-plugin-styled-components",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
          resolve: `gatsby-plugin-google-gtag`,
          options: {
            trackingIds: [
              "G-XXXXXXXX",
            ],
            gtagConfig: {
              anonymize_ip: true,
              cookie_expires: 0,
            },
            pluginConfig: {
              head: false,
              respectDNT: true,
            },
          },
        },
    ]
};