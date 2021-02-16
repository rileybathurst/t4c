import React from 'react'
import { Link } from "gatsby"

import MenuLinks from "./menulinks"

function Footer() {
  return (
    <footer>
        <h3 className="measured"><Link to="/">T4C Macro</Link></h3>
        <nav id="menu_large">
             <ul>
                <MenuLinks />
            </ul>
        </nav>
    </footer>
  );
}

export default Footer;