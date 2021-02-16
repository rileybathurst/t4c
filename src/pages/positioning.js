import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import USDGraphImage from "../images/usd-graph-image"
import FxImage from "../images/fx-image"
import EquitiesImage from "../images/equities-image"
import Rates2Image from "../images/rates-2-image"
import Rates3Image from "../images/rates-3-image"

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
const EquitiesPage = () => {
  return (
    <>
        <Header />

        <main style={pageStyles} className="measured">
        <title>Not found</title>
        <h1 style={headingStyles}>Positioning</h1>
        
        <h2>Rates</h2>
        {/* rates 2 and 3 are the tuesday morning call */}
        <Rates2Image />
        <Rates3Image />

        <h2>FX</h2>
        <div className="max-30">{/* this goes above */}
          <FxImage />{/* this is correct as fx */}
        </div>
        <USDGraphImage />{/* this is also fx but it goes below */}

        <h2>Equities</h2>
        <EquitiesImage />{/* this one is right as equities */}

        </main>
        <Footer />
    </>
  )
}

export default EquitiesPage
