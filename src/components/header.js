import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import NavMenu from "./navmenu"
import HeaderSocial from "./header-social"

const Header = () => (
  <header>
    <div className="logo">
      <AnchorLink to="/#top">
        <img alt="" src={useSiteMetadata().logo} />
      </AnchorLink>
    </div>

    <NavMenu />
    <HeaderSocial />
  </header>
)
export default Header
