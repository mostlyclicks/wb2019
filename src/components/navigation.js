import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <div>
    <h2>Navigation Placeholder</h2>
    <h3>Project pages</h3>
    <ul>
      <li><Link to="/projects/">Projects</Link></li>
      <li><Link to="/project-category/">Project Category</Link></li>
      <li><Link to="/project/">Project</Link></li>
    </ul>

    <h3>News pages</h3>
    <ul>
      <li><Link to="/news/">News</Link></li>
      <li><Link to="/news-article/">News Article</Link></li>
    </ul>

    <h3>Contact</h3>
    <ul>
      <li><Link to="/contact/">Contact Us</Link></li>
    </ul>
  </div>
)

export default Navigation