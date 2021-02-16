import React from 'react'

function OneCalls() {
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
        <p>Transcripts</p>
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
    </>
  );
}

export default OneCalls;