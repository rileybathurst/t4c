import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import FxImage from "../images/fx-image"

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
        <h1 style={headingStyles}>FX</h1>

        <div className="max-30">
          <FxImage />
        </div>
        
        </main>
        <Footer />
    </>
  )
}

export default FxPage
