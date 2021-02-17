import * as React from "react"
import { graphql, Link } from "gatsby"

import Header from "../../components/header"
import Footer from "../../components/footer"
import ButtonDropper from "../../components/buttondropper"

function openUp() {
  var veiled = document.getElementById('veiled');

  if (veiled.className === 'active'){
      veiled.className = 'inactive';
  } else {
      veiled.className = 'active';
  }
}

// markup
const CalendarCBPage = ({ data }) => {
  return (

    <>
        <Header />

        <main className="measured">
        <h1 className="headingStyles">Calendar</h1>

        <button id="opener" onClick={openUp}>
          Select Subject Here
          <ButtonDropper />
        </button>

        <ul id="veiled" className="inactive">
            <li><Link to="/calendar/">All</Link></li>
            <li><Link to="/calendar/Politics">Politics</Link></li>
            <li><Link to="/calendar/CB">CB</Link></li>
            <li><Link to="/calendar/Geopolitics">Geopolitics</Link></li>
        </ul>

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
                <td><Link to={`/calendar/${document.node.country}`}>{document.node.country}</Link></td>
                <td>{document.node.event}</td>
                <td><Link to={`/calendar/${document.node.type}`}>{document.node.type}</Link></td>
            </tr>
            ))}
            </tbody>
        </table>

        </main>
        <Footer />
    </>
  )
}

export default CalendarCBPage

export const pageQuery = graphql`  
  query CalendarCBQuery {
    allStrapiThisWeeks(filter: {type: {eq: "CB"}}) {
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