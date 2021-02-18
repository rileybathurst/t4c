import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import FirmCalls from "../sections/firm-calls"
import Podcasts from "../sections/podcasts"
import OneCalls from "../sections/onecalls"

// markup
const FxPage = () => {
  return (
    <>
        <Header />

        <main className="measured">
            <h1>Audio Corner</h1>

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
