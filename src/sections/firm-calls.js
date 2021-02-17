import React from 'react'
import { Link } from "gatsby"

function FirmCalls() {
  return (
    <>
        <figure>
            <figcaption></figcaption>
            <audio
                controls
                src="https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/WFMU\/FMA_Overlords\/Net_Neutrality_Sample_Pack\/FMA_Overlords_-_06_-_Bifurcated_Internet.mp3">
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>
        </figure>

        {/* <p>Transcripts</p> */}
        
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Topic</th>
                <th>Transcript</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>02/12/2021</td>
                <td>US Politics</td>
                <td>Expectations for March Package growing from $1 Trillion to $1.5 T and above.</td>
            </tr>
            <tr>
                <td>02/09/2021</td>
                <td>Global</td>
                <td>Economics who has regained their Dec 2019 Real GDP Levels, whose next and where might never get back to their prior trend.</td>
            </tr>
            </tbody>
        </table>
        <Link to="/calls" className="link-block">View More Rows &gt;&gt;</Link>
    </>
  );
}

export default FirmCalls;