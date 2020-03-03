module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Weather - DarkSky and OpenWeather`,
  /*  pathPrefix: '/static-gatsby-weather',*/
  },
  plugins: [
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Gatsby-starter-weather`,
      short_name: `GatsbySW`,
      start_url: `/`,
      background_color: `#6b37bf`,
      theme_color: `#6b37bf`,
      display: `standalone`,
      icon: `src/images/cloudy.png`, // This path is relative to the root of the site.
      },
    },
  'gatsby-plugin-offline',
 {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: 'b836e6879a0aee23a9de2c7e84fdd19a',
        location: 'Seminole, Florida',
        units: 'imperial',
        type: 'weather'
      },
    },
  

    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '89b71bfc6ec9b0dcf1ca9bba2b626bad',
        latitude: '39.791000',
        longitude: '-86.148003',
        exclude: ['minutely']
      },
    } 
    
  ]
}