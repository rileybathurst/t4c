import React from 'react'
import { Link } from "gatsby"

function TightMenu() {
  return (
    <>
        <li><Link to="/this-week">Calendar</Link></li>
        <li><Link to="/curated-politics">Curated</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/positioning">Positioning</Link></li>
        <li><Link to="/audio-corner">Audio Corner</Link></li>
    </>
  );
}

export default TightMenu;