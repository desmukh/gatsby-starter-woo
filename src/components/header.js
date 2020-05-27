import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import NavMenu from "./navmenu"
import HeaderSocial from "./header-social"

export default () => {

  return (
    <header>
      <div className="logo">
         <AnchorLink to="/#hero">
           <img alt="" src="images/logo.png" />
         </AnchorLink>
      </div>

      <NavMenu />
      <HeaderSocial />

    </header>
  )
}
