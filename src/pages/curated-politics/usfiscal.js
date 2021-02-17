import * as React from "react"
import { graphql, Link } from "gatsby"

import Header from "../../components/header"
import Footer from "../../components/footer"

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
const USFiscalCuratedPoliticsPage = ({ data }) => {
  return (
    <>
    <Header />
    <main style={pageStyles} className="measured">
      <title>Not found</title>
      <h1 style={headingStyles}>Curated Politics / US Fiscal</h1>

      <button id="opener" onClick={openUp}>Select Subject Here</button>

      <ul id="veiled" className="inactive">
          <li><Link to="/curated-politics/">All</Link></li>
          {/* <li><Link to="/curated-politics/usfiscal">US Fiscal</Link></li> */}
          <li><Link to="/curated-politics/europe">Europe</Link></li>
      </ul>

      <table>
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

export default USFiscalCuratedPoliticsPage

export const pageQuery = graphql`  
  query USFiscalCuratedPoliticsQuery {
    allStrapiCuratedPolitics(filter: {subject: {eq: "USfical"}}) {
      edges {
        node {
          id
          date(formatString: "M/D/YY")
          thing
          details1
          subject
        }
      }
    }

  }
`