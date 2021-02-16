import React from 'react'
import { Link } from "gatsby"

import SmallMenu from "./smallmenu"
import MenuLinks from "./menulinks"
import TightMenu from "./tightmenu"

function Header() {
  return (
    <>
      <header>
        <title>Home Page</title>
        <h1 className="measured"><Link to="/">T4C Macro</Link></h1>
        <h2 className="measured">Home Page For Internal Macro Content</h2>

        <SmallMenu />
      </header>

      <nav id="menu_small" className="inactive">
        <ul>
          <MenuLinks />
        </ul>
      </nav>

      <nav id="menu_large">
        <ul>
          <TightMenu />

        </ul>
      </nav>
    </>
  );
}

export default Header;