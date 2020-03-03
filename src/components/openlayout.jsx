import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

// import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
        openWeather {
          main {
            feels_like
            humidity
            temp
          }
          name
          weather {
            description
            id
            main
          }
          wind {
            deg
            speed
          }
          visibility
        }
      }`
}
    render={data => (
  <div>
        <Link to="/" style={{ float: `right`}}>
      Home
    </Link>
    {children}
        {/* <Link to="/">Home    </Link>  */}
     <h3><ul>       
            <li><h3>Location: {data.openWeather.name}, Florida</h3></li>
            <li><h3>Forcast: {data.openWeather.weather.main}</h3></li>
            <li><h3>Current Tempature: {data.openWeather.main.temp} Degrees F</h3></li>
            <li><h3>Feels Like: {data.openWeather.main.feels_like} Degrees F</h3></li>
            <li><h3>Humidity: {data.openWeather.main.humidity}%</h3></li>
            <li><h3>Wind Speed: {data.openWeather.wind.speed} MPH</h3></li>
     </ul></h3> 
	
  </div>
    )}
  />
    )