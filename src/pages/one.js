import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

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

function openUp() {
  var veiled = document.getElementById('veiled');

  if (veiled.className === 'active'){
      veiled.className = 'inactive';
  } else {
      veiled.className = 'active';
  }
}

// markup
const FxPage = () => {
  return (
    <>
        <Header />

        <main style={pageStyles} className="measured">
        <h1 style={headingStyles}>One On One Calls</h1>

        <button id="opener" onClick={openUp}>Select Subject Here 
          
          
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" >
              <g>
                <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                  c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                  c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
              </g>
            </svg>
          </span>
          <span className="button-pipe">|</span>
        </button>

        <ul id="veiled" className="inactive">
          <li><Link>All</Link></li>
          <li><Link>Fed</Link></li>
          <li><Link>Europe</Link></li>
          <li><Link>Politics</Link></li>
        </ul>

        <OneCalls />

        </main>
        <Footer />
    </>
  )
}

export default FxPage