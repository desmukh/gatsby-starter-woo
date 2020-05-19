import React, { useState } from "react"
import { Link } from "gatsby"


export default function () {
  const [isVisible, setVisibility] = useState(false)

  let showStyle = null
  if (isVisible){
    showStyle = {display: 'block'}
  }else{
    showStyle = null
  }

  return(
    <nav id="nav-wrap">
      <button id="toggle-btn" href="/#" title="Menu" onClick={() => setVisibility(!isVisible)}>Menu</button>

      <ul id="nav" className="nav mobile" style={showStyle}>
        <li><Link to="/#features" >Features</Link></li>
        <li><Link to="/#pricing">Pricing</Link></li>
        <li><Link to="/#screenshots">Screenshots</Link></li>
        <li><Link to="/#testimonials">Testimonials</Link></li>
        <li><Link to="/#subscribe">Subscribe</Link></li>
      </ul>
    </nav>
  )
}
