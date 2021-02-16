import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import FirmCalls from "../sections/firm-calls"
import Podcasts from "../sections/podcasts"
import OneCalls from "../sections/onecalls"

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
          <FirmCalls />

          <hr />

          <h2>Podcasts</h2>
          <Podcasts />

          <hr />

          <h2>One On One Calls</h2>
          <OneCalls />
          
        </main>
        <Footer />
    </>
  )
}

export default FxPage
