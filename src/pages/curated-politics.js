import * as React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import ButtonDropper from "../components/buttondropper"

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

    <main className="measured">
      <title>Curated Politics</title>
      <h1>Curated Politics</h1>

      <button id="opener" onClick={openUp}>
        Select Subject Here
        <ButtonDropper />
      </button>

      <ul id="veiled" className="inactive">
        <li><Link to="/curated-politics/">All</Link></li>
        <li><Link to="/curated-politics/usfiscal">US Fiscal</Link></li>
        <li><Link to="/curated-politics/europe">Europe</Link></li>
      </ul>

      <h3 className="vertical-space">Tim's Politics News Feed.</h3>

      <table className="vertical-space">
          <thead>
            <tr>
            <th className="date-box">Date</th>
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
      
        <hr />

      <h3>Bloomberg Macro Squawk Headlines.</h3>

      <table className="vertical-space">
          <thead>
            <tr>
            <th className="date-box">Date</th>
              <th>Headline</th>
            </tr>
          </thead>
          <tbody>

          {data.allStrapiBloombergSquawks.edges.map(document => (
            <tr>
              <td>{document.node.date}</td>
              <td>{document.node.headline}</td>
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
          date(formatString: "M/D/YY")
          thing
          details1
          subject
        }
      }
    }

    allStrapiBloombergSquawks {
      edges {
        node {
          id
          date(formatString: "M/D/YY")
          headline
        }
      }
    }

  }
`