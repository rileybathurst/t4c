import * as React from "react"
// import { Link } from "gatsby"
import Flavor from '../components/flavor'

// markup
const NotFoundPage = () => {
  return (
    <main>
        <p>hey</p>
        <Flavor />

        <div id="fruit">
            <p className="banana">banana</p>
            <p className="cherry">cherry</p>
        </div>
    </main>
  )
}

export default NotFoundPage
