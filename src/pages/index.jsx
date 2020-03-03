import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Icon from "../images/clear-night.png"

export default ({data}) => (
  <div>
    <Header headerText="DarkSky API Weather Example!"/>
    <ul style={{float: "right"}, {fontSize: '150%'}}>
      <li style={{textAlign: "center"}}><Link to="/darkabout/">DarkSky Forcast</Link></li> 
      <li style={{textAlign: "center"}}><Link to="/openabout/">OpenWeather Forcast</Link></li>
    </ul>
    <img src={ Icon } alt="clear-night"/>

  </div>
)