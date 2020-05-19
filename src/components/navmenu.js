import React, { useState } from "react"
import { Link } from "gatsby"


export default function () {
  const [isVisible, setVisibility] = useState(false)

  const menuItems = [
    {path: '/#features', label: 'Features'},
    {path: '/#pricing', label: 'Pricing'},
    {path: '/#screenshots', label: 'Screenshots'},
    {path: '/#testimonials', label: 'Testimonials'},
    {path: '/#subscribe', label: 'Subscribe'},
  ]

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

        {menuItems.map((value, index) => {
          return (
              <li><Link to={menuItems[index].path}>{menuItems[index].label}</Link></li>
          )
        })}

      </ul>
    </nav>
  )
}
