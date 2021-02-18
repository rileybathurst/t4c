import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import Covid1Image from "../images/covid1-image"
import Covid2Image from "../images/covid2-image"
import Covid3Image from "../images/covid3-image"
import Covid4Image from "../images/covid4-image"

// markup
const EquitiesPage = () => {
  return (
    <>
        <Header />

        <main className="measured">
        <h1>COVID</h1>
        
        <div className="three-quarters">
          <Covid1Image />
          <Covid2Image />
          <Covid3Image />
          <Covid4Image />
        </div>

        </main>
        <Footer />
    </>
  )
}

export default EquitiesPage
