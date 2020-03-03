import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

//import "./src/styles/global.css" 

import "../styles/global.css"

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
  weatherData{
    latitude
    longitude
    timezone
    currently {
      time
      summary
      icon
      nearestStormDistance
      precipIntensity
      precipProbability
      temperature
      apparentTemperature
      dewPoint
      humidity
      pressure
      windSpeed
      windGust
      windBearing
      cloudCover
      uvIndex
      visibility
      ozone
    }
    daily{
      summary
    }
  }
  
}  `
}
    render={data => (
  <div>
    <Link to="/" style={{ float: `right`}}>
      Home
    </Link>
    {children}
{/*    <Link to="/">Home </Link> */}
    <body>
      <ul>
      <li><h3>Location: {data.weatherData.timezone}</h3></li>
      <li><h3>Current Conditions: {data.weatherData.currently.summary}</h3></li>
      <li><h3>Forcast: {data.weatherData.daily.summary}</h3></li>
      </ul>
      
      <ul>
      <li><h4>Tempature: {data.weatherData.currently.temperature} Degrees F</h4></li>
      <li><h4>Humidity: {data.weatherData.currently.humidity}</h4></li>
      <li><h4>Wind Speed: {data.weatherData.currently.windSpeed} Mph</h4></li>
      <li><h4>UV Index: {data.weatherData.currently.uvIndex}</h4></li>
      <li><h4>Visibility: {data.weatherData.currently.visibility} Miles</h4></li>
    </ul></body>  
  </div>
    )}
  />
    )