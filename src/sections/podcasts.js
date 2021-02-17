import React from 'react'
import { Link } from "gatsby"

function Podcasts() {
  return (
    <>
        <figure>
          <figcaption>Bifurcated Internet:</figcaption>
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
              <th>Show</th>
              <th>Transcript</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>02/12/2021</td>
              <td>-</td>
              <td>Summers and Krugman debate the size of the fiscal spend, what's good politics, what's good stimulus and what's good COVID economics.</td>
            </tr>
            <tr>
              <td>02/11/2021</td>
              <td>-</td>
              <td>Listen to a reporter recount how Joe Manchin told her that the Democrats should spend $2-4 Trillion on Infrastructure. She explains Biden need not be concerned he will vote for an infrastrucure package.</td>
            </tr>
          </tbody>
        </table>
        <Link to="/podcasts" className="link-block">View More Rows &gt;&gt;</Link>
    </>
  );
}

export default Podcasts;