import React from 'react'
import { Link } from "gatsby"

import ButtonDropper from "../components/buttondropper"

function openUp() {
  var veiled = document.getElementById('veiled');

  if (veiled.className === 'active'){
      veiled.className = 'inactive';
  } else {
      veiled.className = 'active';
  }
}

function OneCalls() {
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

        <button className="button-wide">
          Select Subject Here
          <ButtonDropper />
        </button>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Participants</th>
              <th>Transcript</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>02/11/2021</td>
              <td>Tim & Joe</td>
              <td>Tim calls Joe back with information from consultants in Italy on how long-lasting the Draghi Governmment will be.</td>
            </tr>
            <tr>
              <td>02/02/2021</td>
              <td>Jane & Tim</td>
              <td>Jane calls Tim to talk about whether Policy Statements or liquidity provision in China have shed any real light on how policy makers are approaching a tightening cycle and whether they are comfortable with credit growth slowing.</td>
            </tr>
          </tbody>
        </table>
        <Link to="/one" className="link-block">View More Rows &gt;&gt;</Link>

    </>
  );
}

export default OneCalls;