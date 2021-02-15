import * as React from "react"
import { Link } from "gatsby"

import SmallMenu from "../components/smallmenu"

import FxImage from "../images/fx-image"
import RatesImage from "../images/rates-image"
import QuadImage from "../images/quad-image"
import USDGraphImage from "../images/usd-graph-image"

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
    <main>

      <header>
        <title>Home Page</title>
        <h1 className="measured">T4C Macro</h1>
        <h2 className="measured">Home Page For Internal Macro Content</h2>

        <SmallMenu />
      </header>

      <nav id="menu_small" className="inactive">
        <ul>

          <li>
            <Link>Curated</Link>
          </li>

          <li>
            <Link to="curated-politics">Politics</Link>
          </li>

          <li>
            <Link>Central Banking</Link>
          </li>

          <li>
            <Link>COVID</Link>
          </li>

          <li>
            <Link>Calendar</Link>
          </li>

          <li>
            <Link>Research</Link>
          </li>

          <li>
            <Link>Positioning</Link>
          </li>

          <li>
            <Link>FX</Link>
          </li>

          <li>
            <Link>Rates</Link>
          </li>

          <li>
            <Link>Equities</Link>
          </li>

          <li>
            <Link>Audio Corner</Link>
          </li>

          <li>
            <Link>Firm Confrence Calls</Link>
          </li>

          <li>
            <Link>One On One</Link>
          </li>

          <li>
            <Link>Podcast Collection</Link>
          </li>
        </ul>
      </nav>

      <nav id="menu_large">
        <ul>
          <li><Link to="this-week">This Week</Link></li>
          <li><Link to="curated-politics">Politics</Link></li>
          <li><Link>Podcast Collection</Link></li>
        </ul>
      </nav>

      <section className="measured">
        <h2>This Week</h2>

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

        <hr />
      </section>

      <section className="measured">
        <h2>The Week in Macro So Far</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Crncy</th>
              <th>Outstanding</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {data.allStrapiMacroWeeks.edges.map(document => (
              <tr>
                <td>{document.node.date}</td>
                <td>{document.node.currency}</td>
                {/* <td>{document.node.outstanding}</td> */}
                <td></td>
                <td>{document.node.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
      </section>

      <section className="measured">
        <h2>Question Box</h2>
        <p>Tim will follow up</p>
        <form name="contact" method="POST" data-netlify="true">
          <label for="name">Enter your name: </label>
          <input type="text" name="name" id="name" required />
          <textarea id="story" name="story" rows="5" cols="33">
            Ask macro questions Tim will follow up on.
          </textarea>

          <input type="submit" value="Ask!" />
        </form>

        <hr />
      </section>

      <section className="measured">
        <h2>Curated Politics</h2>

        <button id="opener" onClick={openUp}>Select Subject Here</button>

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

        <hr />

        <h3>Tim's Politics News Feed</h3>

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

        <hr />
      
        <h3>Bloomberg Macro Squawk Headlines for selected news feed.</h3>

        <table>
          <thead>
            <tr>
              <th>Date</th>
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

        <hr />

      </section>

      <section className="measured">
        <h2>Street Research</h2>
        <form>
          <label for="subject-select">Select Subject Here: </label>
          <select id="subject-select">
            <option value="us-fiscal">Research Macro</option>
          </select>

          <p>Query type:</p>
          <input type="radio" id="messages" name="drone" value="messages" checked />
          <label for="huey">Messages</label>

          <input type="radio" id="word cloud" name="drone" value="word cloud" />
          <label for="dewey">Word Cloud</label>

          <label for="select">Select tags to filter on</label>
          <input type="text" name="select" id="select" placeholder="Select tags to filter on" />

          <input type="radio" id="and" name="andor" value="and" checked />
          <label for="huey">And</label>

          <input type="radio" id="or" name="andor" value="or" />
          <label for="dewey">Or</label>

          <label for="select">Select Senders to filter on</label>
          <input type="text" name="select" id="select" placeholder="Select senders to filter on" />

          <label for="select">Select sources to filter on</label>
          <input type="text" name="select" id="select" placeholder="Select sources to filter on" />

          <label for="start">From:</label>
          <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
          
          <label for="start">To:</label>
          <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />

          <label for="tentacles">Last # days</label>
          <input type="number" id="tentacles" name="tentacles" min="10" max="100" />

          <input type="checkbox" id="starred" name="starred" />
          <label for="scales">Starred</label>

          <input type="checkbox" id="unread" name="unread" />
          <label for="horns">Unread</label>

          <input type="radio" id="untagged" name="uei" value="untagged" />
          <label for="untagged">Untagged</label>

          <input type="radio" id="exclude" name="uei" value="exclude" checked />
          <label for="exclude">Exclude</label>

          <input type="radio" id="only" name="uei" value="only" />
          <label for="only">Include Only</label>

          <label for="select">Enter subject search expression(s)</label>
          <input type="text" name="select" id="select" placeholder="Enter subject search expression(s)" />
        </form>

        <table>
          <thead>
            <tr>
              <th>Mark</th>
              <th>Read</th>
              <th>Sender</th>
              <th>Subject</th>
              <th>Date</th>
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

        <hr />

      </section> {/* Street Research */}

      <section className="measured">
        <h2>Rates Positioning</h2>
        <p>Ps the Screenshots for Rates and FX positioning I will keep in final version </p>

        <RatesImage />
        <QuadImage />
        <FxImage />
        <USDGraphImage />

        <hr />
      </section>

      <section className="measured">
        <h2>Audio Center</h2>

        <h3>Firm Macro Confrence Calls</h3>
        <figure>
          <figcaption>Bifurcated Internet:</figcaption>
          <audio
              controls
              src="https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/WFMU\/FMA_Overlords\/Net_Neutrality_Sample_Pack\/FMA_Overlords_-_06_-_Bifurcated_Internet.mp3">
                  Your browser does not support the
                  <code>audio</code> element.
          </audio>
        </figure>
        <p>Transcripts</p>

        <hr />
      </section>

      <section className="measured">
        <h2>One on One Calls</h2>

        <form>
          <label for="subject-select">Select topic Here: </label>
          <select id="subject-select">
            <option value="us-fiscal">Fed</option>
            <option value="us-fiscal">Europe</option>
            <option value="us-fiscal">Politics</option>
          </select>
          </form>

          <hr />
      </section>

    </main>
  )
}

export default IndexPage

export const IndexQuery = graphql`  
  query IndexQuery {
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

    allStrapiMacroWeeks {
      edges {
        node {
          id
          date
          currency
          comment
        }
      }
    }

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