import React from 'react'

function ResearchForm() {
  return (
    <form>
        {/* Select Subject */}
        <label for="subject-select">Select Subject Here: 
        <select id="subject-select" className="minecraft vertical-space">
            <option value="us-fiscal">Research Macro</option>
        </select>
        </label>

        <section>
        <p>Query type:</p>
        <label for="huey">Messages
            <input type="radio" id="messages" name="drone" value="messages" checked />
        </label>

        <label for="dewey">Word Cloud
            <input type="radio" id="word cloud" name="drone" value="word cloud" />
        </label>
        </section>

        <section>
        <label for="select">
            Select tags to filter on
            <input type="text" name="select" id="select" placeholder="Select tags to filter on" />
        </label>

        <label for="huey">And
            <input type="radio" id="and" name="andor" value="and" checked />
        </label>

        <label for="dewey">Or
            <input type="radio" id="or" name="andor" value="or" />
        </label>
        </section>

        <label for="select">Select Senders to filter on
        <input type="text" name="select" id="select" placeholder="Select senders to filter on" />
        </label>

        <label for="select">Select sources to filter on
        <input type="text" name="select" id="select" placeholder="Select sources to filter on" />
        </label>

        <label for="start">From:
        <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
        </label>
        
        <label for="start">To:
        <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
        </label>

        <section>
        <label for="tentacles">Last # days
            <input type="number" id="tentacles" name="tentacles" min="10" max="100" />
        </label>
        </section>

        <section className="vertical-space">
        <label for="scales">Starred
            <input type="checkbox" id="starred" name="starred" />
        </label>

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
  );
}

export default ResearchForm;