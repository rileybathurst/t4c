import React from 'react'
import { Link } from "gatsby"

function MenuLinks() {
  return (
    <>
        <li><Link to="/this-weeks">This Week</Link></li>
        <li><Link to="/curated-politics">Politics</Link></li>

        <li>
            <Link>Curated</Link>
        </li>
        
        <li>
            <Link>Central Banking</Link>
        </li>

        <li>
            <Link>COVID</Link>
        </li>

        <li>
            <Link>Calendar</Link>
        </li>

        <li>
            <Link to="/research">Research</Link>
        </li>

        <li>
            <Link to="/positioning">Positioning</Link>
        </li>

        <li>
            <Link to="/fx-graphs">FX</Link>
        </li>

        <li>
           <Link to="/quad-graphs">Rates</Link>
        </li>

        <li>
            <Link to="/equities">Equities</Link>
        </li>

        <li>
           <Link>Audio Corner</Link>
        </li>

        <li>
            <Link to="/calls">Firm Confrence Calls</Link>
        </li>

        <li>
           <Link to="/one">One On One</Link>
        </li>

        <li><Link to="/podcasts">Podcast Collection</Link></li>
    </>
  );
}

export default MenuLinks;