import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import QuadImage from "../images/quad-image"

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
        <h1 style={headingStyles}>Audio Corner</h1>


        <h2>Firm Macro Confrence Calls</h2>

        <hr />

        <h2>Podcasts</h2>
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

        <h2>One On One Calls</h2>

        
        </main>
        <Footer />
    </>
  )
}

export default FxPage