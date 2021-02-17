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
const CalendarUSDPage = ({ data }) => {
  return (

    <>
        <Header />

        <main className="measured">
        <h1><Link to="/calendar">Calendar</Link> / USD</h1>

        <button id="opener" onClick={openUp}>
        Select Country Here
          <ButtonDropper />
        </button>

        <ul id="veiled" className="inactive">
            <li><Link to="/calendar/">All</Link></li>
            <li><Link to="/calendar/ARS">ARS</Link></li>
            <li><Link to="/calendar/China">China</Link></li>
            <li><Link to="/calendar/CNH">CNH</Link></li>
            <li><Link to="/calendar/USD">USD</Link></li>
            <li><Link to="/calendar/Global">Global</Link></li>
            <li><Link to="/calendar/MXN">MXN</Link></li>
            <li><Link to="/calendar/TRY">TRY</Link></li>
            <li><Link to="/calendar/IDR">IDR</Link></li>
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

export default CalendarUSDPage

export const pageQuery = graphql`  
  query CalendarUSDQuery {
    allStrapiThisWeeks(filter: {country: {eq: "USD"}}) {
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