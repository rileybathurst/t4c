import * as React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

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
    <>
    <Header />
    <main style={pageStyles} className="measured">
      <title>Not found</title>
      <h1 style={headingStyles}>The Week in Macro So Far</h1>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Crncy</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            
          {data.allStrapiMacroWeeks.edges.map(document => (
            <tr>
              <td>{document.node.date}</td>
              <td>{document.node.currency}</td>
              <td>{document.node.comment}</td>
            </tr>
          ))}
          </tbody>
        </table>

    </main>
    <Footer />
    </>
  )
}

export default MacroWeeksPage

export const pageQuery = graphql`  
  query MacroWeeksQuery {
    allStrapiMacroWeeks {
      edges {
        node {
          id
          date(formatString: "M/D/YY")
          currency
          comment
        }
      }
    }

  }
`