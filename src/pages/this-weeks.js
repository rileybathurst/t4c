import * as React from "react"
import { graphql, Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

// markup
const ThisWeeksPage = ({ data }) => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>This Weeks</h1>

       {data.allStrapiThisWeeks.edges.map(document => (
          <li>
            {document.node.id}
          </li>
        ))}

        <Link to="/">Go home</Link>.
    </main>
  )
}

export default ThisWeeksPage

export const pageQuery = graphql`  
  query ThisWeeksQuery {
    allStrapiThisWeeks {
      edges {
        node {
          id
        }
      }
    }

  }
`