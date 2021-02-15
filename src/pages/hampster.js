import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
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
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
        <h1>🙀</h1>

        <div id="opener" onClick={openUp}>Hi</div>

        <div id="veiled" className="inactive">
            <Link to="/hampster/dog">Dog</Link>
            <Link to="/hampster/meow">Meow</Link>
        </div>
    </main>
  )
}

export default NotFoundPage
