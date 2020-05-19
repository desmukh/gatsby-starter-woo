import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import NavMenu from "./navmenu"

export default () => (
  <header>
    <div className="logo">
       <AnchorLink to="/#hero">
         <img alt="" src="images/logo.png" />
       </AnchorLink>
    </div>

    <NavMenu />

    <ul className="header-social">
       <li><a href="https://facebook.com/"><i className="fa fa-facebook"></i></a></li>
       <li><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
       <li><a href="https://google.com/"><i className="fa fa-google-plus"></i></a></li>
    </ul>
  </header>

)
