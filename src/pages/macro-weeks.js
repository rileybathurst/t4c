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
const MacroWeeksPage = ({ data }) => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>This Weeks</h1>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Crncy</th>
              <th>Outstanding</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            
          {data.allStrapiMacroWeeks.edges.map(document => (
            <tr>
              <td>{document.node.date}</td>
              <td>{document.node.currency}</td>
              {/* <td>{document.node.outstanding}</td> */}
              <td></td>
              <td>{document.node.comment}</td>
            </tr>
          ))}
          </tbody>
        </table>

        <Link to="/">Go home</Link>.
    </main>
  )
}

export default MacroWeeksPage

export const pageQuery = graphql`  
  query MacroWeeksQuery {
    allStrapiMacroWeeks {
      edges {
        node {
          id
          date
          currency
          comment
        }
      }
    }

  }
`