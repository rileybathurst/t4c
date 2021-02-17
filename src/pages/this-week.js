import * as React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

// markup
const ThisWeeksPage = ({ data }) => {
  return (

    <>
    <Header />

    <main className="measured">
      <title>Not found</title>
      {/* <h1 style={headingStyles}>This Week</h1> */}
      <h1 className="headingStyles">This Week</h1>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Country</th>
            <th>Event</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          
        {data.allStrapiThisWeeks.edges.map(document => (
          <tr>
            <td>{document.node.date}</td>
            <td>{document.node.country}</td>
            <td>{document.node.event}</td>
            <td>{document.node.type}</td>
          </tr>
        ))}
        </tbody>
      </table>

    </main>
    <Footer />
    </>
  )
}

export default ThisWeeksPage

export const pageQuery = graphql`  
  query ThisWeeksQuery {
    allStrapiThisWeeks {
      edges {
        node {
          id
          date
          event
          country
          type
        }
      }
    }

  }
`