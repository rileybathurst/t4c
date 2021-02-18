import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import RatesImage from "../images/rates-image"

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
        <h1 style={headingStyles}>Equities</h1>

        <RatesImage />

        </main>
        <Footer />
    </>
  )
}

export default EquitiesPage
