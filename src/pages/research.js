import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
  }
  const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
  }

// markup
const FxPage = () => {
  return (
    <>
        <Header />

        <main style={pageStyles} className="measured">
        <title>Not found</title>
        <h1 style={headingStyles}>Street Research</h1>

        <form>

          {/* Select Subject */}
          <label for="subject-select">Select Subject Here: 
            <select id="subject-select">
              <option value="us-fiscal">Research Macro</option>
            </select>
          </label>

          <section>
            <p>Query type:</p>
            <input type="radio" id="messages" name="drone" value="messages" checked />
            <label for="huey">Messages</label>

            <input type="radio" id="word cloud" name="drone" value="word cloud" />
            <label for="dewey">Word Cloud</label>
          </section>

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

          <section>
            <input type="checkbox" id="starred" name="starred" />
            <label for="scales">Starred</label>

            <label for="horns">Unread
              <input type="checkbox" id="unread" name="unread" />
            </label>
          </section>

          <section>
            <label for="untagged">Untagged
              <input type="radio" id="untagged" name="uei" value="untagged" />
            </label>

            <label for="exclude">Exclude
              <input type="radio" id="exclude" name="uei" value="exclude" checked />
            </label>

            <label for="only">Include Only
              <input type="radio" id="only" name="uei" value="only" />
            </label>
          </section>

          <label for="select">Enter subject search expression(s)
            <input type="text" name="select" id="select" placeholder="Enter subject search expression(s)" />
          </label>

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

        </main>
        <Footer />
    </>
  )
}

export default FxPage
