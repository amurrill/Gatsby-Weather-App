import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/darklayout"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <h1>Current Weather</h1> 
    <p>
      DarkSky weather data source.
    </p>
  </Layout>
)
