import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Scrollspy from "react-scrollspy"

import { useSiteMetadata } from "../hooks/use-site-metadata"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function () {
  const [isVisible, setVisibility] = useState(false)

  const { menuItems } = useSiteMetadata()


  let showStyle = null
  if (isVisible){
    showStyle = {transform: 'scaleY(1)'}
  }else{
    showStyle = null
  }

  return(
    <nav id="nav-wrap">
      <button
        id="toggle-btn"
        href="/#"
        title="Menu"
        onClick={() => setVisibility(!isVisible)}
        >
        <FontAwesomeIcon icon={ faBars } />
      </button>

      <Scrollspy
        className="nav mobile"
        style={showStyle}
        items={ menuItems.map(a => a.path) }
        currentClassName="current"
        offset={-100} >

        {menuItems.map((value, index) => {
          return (
            <li key={index}>
              <button onClick={() =>
                {
                  scrollTo('#' + value.path)
                  setVisibility(0)
                }
              }>
                {value.label}
              </button>
            </li>
          )
        })}

      </Scrollspy>
    </nav>
  )
}
