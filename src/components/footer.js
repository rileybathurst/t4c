import React from 'react'
import { Link } from "gatsby"

import MenuLinks from "./menulinks"

function Footer() {
  return (
    <footer>
        <h3 className="measured"><Link to="/">T4C Macro</Link></h3>

        <hr className="measured" />

        <nav id="menu_large">
             <ul>
                {/* <MenuLinks /> */}

                <li><Link to="/this-week">This Week</Link></li>
                <li><Link to="/curated-politics">Curated</Link>
                  <ul>
                    <li><Link to="/">US Fiscal</Link></li>
                    <li><Link to="/">Europe</Link></li>
                  </ul>
                </li>
                <li><Link to="/">Research</Link></li>
                <li><Link to="/positioning">Positioning</Link>
                  <ul>
                    <li><Link to="/">Rates</Link></li>
                    <li><Link to="/">FX</Link></li>
                    <li><Link to="/">Equities</Link></li>
                  </ul>
                </li>
                <li><Link to="/audio-corner">Audio Corner</Link>
                  <ul>
                    <li><Link to="/">Rates</Link></li>
                    <li><Link to="/">FX</Link></li>
                    <li><Link to="/">Equities</Link></li>
                  </ul>
                </li>
            </ul>
        </nav>

        <section className="footer-footer">
          <h5 className="measured">T4C Macro 2021</h5>
        </section>
    </footer>
  );
}

export default Footer;