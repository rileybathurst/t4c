import * as React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import ButtonDropper from "../components/buttondropper"

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

function openUp() {
    var veiled = document.getElementById('veiled');

    if (veiled.className === 'active'){
        veiled.className = 'inactive';
    } else {
        veiled.className = 'active';
    }
}

// markup
const CuratedPoliticsPage = ({ data }) => {
  return (
    <>
    <Header />

    <main style={pageStyles} className="measured">
      <title>Not found</title>
      <h1 style={headingStyles}>Curated Politics</h1>

      <button id="opener" onClick={openUp}>
        Select Subject Here
        <ButtonDropper />
      </button>

      <ul id="veiled" className="inactive">
        <li><Link to="/curated-politics/">All</Link></li>
        <li><Link to="/curated-politics/usfiscal">US Fiscal</Link></li>
        <li><Link to="/curated-politics/europe">Europe</Link></li>
      </ul>

      <table className="vertical-space">
          <thead>
            <tr>
              <th>Date</th>
              <th>Thing</th>
              <th>Details 1</th>
              <th>Details 2</th>
            </tr>
          </thead>
          <tbody>

          {data.allStrapiCuratedPolitics.edges.map(document => (
            <tr>
              <td>{document.node.date}</td>
              <td>{document.node.thing}</td>
              <td>{document.node.details1}</td>
              <td></td>
            </tr>
            ))}
          </tbody>
        </table>

    </main>
    <Footer />
    </>
  )
}

export default CuratedPoliticsPage

export const pageQuery = graphql`  
  query CuratedPoliticsQuery {
    allStrapiCuratedPolitics {
      edges {
        node {
          id
          date
          thing
          details1
          subject
        }
      }
    }

  }
`