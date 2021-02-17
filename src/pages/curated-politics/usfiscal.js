import * as React from "react"
import { graphql, Link } from "gatsby"

import Header from "../../components/header"
import Footer from "../../components/footer"

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
    <main className="measured">
      <h1>Curated Politics / US Fiscal</h1>

      <button id="opener" onClick={openUp}>Select Subject Here</button>

      <ul id="veiled" className="inactive">
          <li><Link to="/curated-politics/">All</Link></li>
          {/* <li><Link to="/curated-politics/usfiscal">US Fiscal</Link></li> */}
          <li><Link to="/curated-politics/europe">Europe</Link></li>
      </ul>

      <h3 className="vertical-space">Tim's Politics News Feed for US Fiscal.</h3>


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

        <hr />

      <h3>Bloomberg Macro Squawk Headlines for US Fiscal.</h3>

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


    allStrapiBloombergSquawks(filter: {subject: {eq: "usfiscal"}}) {
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