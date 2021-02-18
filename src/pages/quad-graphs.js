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
        <h1 style={headingStyles}>Rates</h1>

        <QuadImage />

        </main>
        <Footer />
    </>
  )
}

export default FxPage
