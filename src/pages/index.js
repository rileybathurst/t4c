import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import ButtonDropper from "../components/buttondropper"

import USDGraphImage from "../images/usd-graph-image"
import FxImage from "../images/fx-image"
import EquitiesImage from "../images/equities-image"
import Rates2Image from "../images/rates-2-image"
import Rates3Image from "../images/rates-3-image"

import FirmCalls from "../sections/firm-calls"
import Podcasts from "../sections/podcasts"
import OneCalls from "../sections/onecalls"
import ResearchForm from "../sections/researchform"

import "@fontsource/poppins"
import "@fontsource/poppins/100.css" // Weight 500.
import "../styles/atoms.scss"

function openUp() {
  var veiled = document.getElementById('veiled');

  if (veiled.className === 'active'){
      veiled.className = 'inactive';
  } else {
      veiled.className = 'active';
  }
}

// markup
const IndexPage = ({ data }) => {
  return (
    <>
      <Header />
      <main>

      <section className="measured">
        <h2><Link to="/this-week">Calendar</Link></h2>

        <table>
          <thead>
            <tr>
              <th className="date-box">Date</th>
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

        <Link to="/this-week" className="link-block">View More Rows &gt;&gt;</Link>

        <hr />
      </section>

      <section className="measured">
        <h2><Link to="macro-weeks">Recent Macro Clippings</Link></h2>
        <table>
          <thead>
            <tr>
              <th className="date-box">Date</th>
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
        <Link to="/macro-weeks" className="link-block">View More Rows &gt;&gt;</Link>

        <hr />
      </section>

      <section className="measured split">
        <section>
          <h2>Question Box <span className="title-p">Tim will follow up</span></h2>
          
          <form name="contact" method="POST" data-netlify="true">
            <label for="name" className="hide-the-a11y">Enter your name: </label>
            <input type="text" name="name" id="name" placeholder="Enter your name:" required />
            <textarea id="story" name="story" rows="5" cols="33" placeholder="Ask macro questions Tim will follow up on."></textarea>

            <input type="submit" value="Ask!" />
          </form>
        </section>

        <section>
        <h3>Outstanding Questions</h3>

        <table className="vertical-space">
            <thead>
              <tr>
                <th className="date-box">Date</th>
                <th>Question</th>
              </tr>
            </thead>
          <tbody>
              <tr>
                <td>2/1/21</td>
                <td>Of the $600 checks from the December bill do we know what proportion have been spent already and do we have an assumption at how fast the following $1,400 will be spent presuming the bill passes in March?</td>
              </tr>
          </tbody>
        </table>
        <Link to="/" className="link-block">View More Rows &gt;&gt;</Link>
        </section>
      </section>

      <section className="measured">
      <hr />

        <h2><Link to="curated-politics">Curated Politics</Link></h2>

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
        <Link to="/curated-poitics" className="link-block">View More Rows &gt;&gt;</Link>

        <hr />

        <h3>Tim's Politics News Feed</h3>

        <table>
          <thead>
            <tr>
              <th className="date-box">Date</th>
              <th>Thing</th>
              <th>Details 1</th>
              <th>Details 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12/27/20</td>
              <td>Trump signs the Dec bill</td>
              <td>www.washingtonpost.com</td>
              <td></td>
            </tr>
            <tr>
              <td>1/1/21</td>
              <td>MKT comes into the year</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <Link to="/" className="link-block">View More Rows &gt;&gt;</Link>

        <hr />
      
        <h3>Bloomberg Macro Squawk Headlines for selected news feed.</h3>

        <table>
          <thead>
            <tr>
              <th className="date-box">Date</th>
              <th>Headlines</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>21/01/08</td>
              <td>Biden said the stimulus</td>
            </tr>
            <tr>
              <td>21/01/08</td>
              <td>Yellen faces Senate to sell</td>
            </tr>
          </tbody>
        </table>
        <Link to="/" className="link-block">View More Rows &gt;&gt;</Link>

        <hr />

      </section>

      <section className="measured">
        <h2><Link to="research">Street Research</Link></h2>
        <ResearchForm />

        <table>
          <thead>
            <tr>
              <th>Mark</th>
              <th>Read</th>
              <th>Sender</th>
              <th>Subject</th>
              <th className="date-box">Date</th>
              <th>Tags</th>
              <th>Source</th>
              <th>Star</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" id="starred" name="starred" /></td>
              <td><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"/></svg></td>
              <td>IHS Markit</td>
              <td>Connect Daily Summary</td>
              <td>Sat 2/13/21 9:11AM</td>
              <td>daily</td>
              <td>reasrch-market</td>
              <td><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></td>
            </tr>

            <tr>
              <td><input type="checkbox" id="starred" name="starred" /></td>
              <td><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></td>
              <td>JPM</td>
              <td>US Weekly Prospectus</td>
              <td>Fri 2/12/21 9:08AM</td>
              <td>us</td>
              <td>reasrch-market</td>
              <td><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg></td>
            </tr>
          </tbody>
        </table>
        <Link to="/" className="link-block">View More Rows &gt;&gt;</Link>

        <hr />

      </section> {/* Street Research */}

      <section className="measured">
        <h2><Link to="positioning">Positioning</Link></h2>
        
        <h3>Rates</h3>
        {/* rates 2 and 3 are the tuesday morning call */}
        <Rates2Image />
        <Rates3Image />

        <h3>FX</h3>
        <div className="max-30">{/* this goes above */}
          <FxImage />{/* this is correct as fx */}
        </div>
        <USDGraphImage />{/* this is also fx but it goes below */}

        <h3>Equities</h3>
        <EquitiesImage />{/* this one is right as equities */}

        <hr />
      </section>

      <section className="measured">
        <h2><Link to="audio-corner">Audio Corner</Link></h2>

        <h3>Firm Macro Confrence Calls</h3>
        <FirmCalls />

        <hr />
      
        <h3>Podcasts</h3>
        <Podcasts />

        <hr />

        <h3>One on One Calls</h3>
        <OneCalls />

{/*         <form>
          <label for="subject-select">Select topic Here: </label>
          <select id="subject-select">
            <option value="us-fiscal">Fed</option>
            <option value="us-fiscal">Europe</option>
            <option value="us-fiscal">Politics</option>
          </select>
          </form> */}

      </section>

    </main>

      <Footer />
    </>
  )
}

export default IndexPage

export const IndexQuery = graphql`  
  query IndexQuery {
    allStrapiThisWeeks {
      edges {
        node {
          id
          date(formatString: "M/D/YY")
          event
          country
          type
        }
      }
    }

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

  }
`