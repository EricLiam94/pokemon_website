import React from "react";
import { Link } from "react-router-dom";
import Tick from './tick.js'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {

    const navStyle = {color:"white"}
    const floatRight = {color: 'blue'}

  return (
      <nav>
        <ul className= "nav-link">
          <li>
            <Link style = {navStyle} to="/">Home</Link>
          </li>
          <li>
            <Link style = {navStyle} to="/about">About</Link>
          </li>
          <li>
            <Link style = {navStyle} to="/dashboard">Dashboard</Link>
          </li>
<li id="time" style={floatRight}>  <Tick name="hello world"/>    </li>
        </ul>
        <hr />
      </nav>
  );
}

// You can think of these components as "pages"
// in your app.




