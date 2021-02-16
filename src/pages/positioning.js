import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import USDGraphImage from "../images/usd-graph-image"
import FxImage from "../images/fx-image"
import EquitiesImage from "../images/equities-image"

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
        <USDGraphImage />

        <h2>FX</h2>
        <div className="max-30">
          <FxImage />
        </div>

        <h2>Equities</h2>
        <EquitiesImage />

        </main>
        <Footer />
    </>
  )
}

export default EquitiesPage
