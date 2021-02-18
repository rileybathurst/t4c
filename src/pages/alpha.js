import * as React from "react"
import { graphql } from "gatsby"

// markup
const AlphaPage = ({ data }) => {
  return (
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
                {data.allStrapiThisWeeks.edges.map(document => (
                    <tr>
                        <td>{document.node.date}</td>
                        <td>{document.node.country}</td>
                    </tr>
                ))}
            </tbody>
        </table>
  )
}

export default AlphaPage

export const pageQuery = graphql`  
  query AlphaQuery {
    allStrapiThisWeeks {
      edges {
        node {
          id
          date
          country
        }
      }
    }
  }
`