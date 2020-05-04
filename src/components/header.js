import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default () => (
  <header>
    <div className="logo">
       <AnchorLink to="/#hero">
         <img alt="" src="images/logo.png" />
       </AnchorLink>
    </div>

    <nav id="nav-wrap">
      <Link className="mobile-btn" to="#nav-wrap" title="Show navigation">Show Menu</Link>
      <Link className="mobile-btn" to="#" title="Hide navigation">Hide Menu</Link>

      <ul id="nav" className="nav">
        <li><AnchorLink to="/#features">Features</AnchorLink></li>
        <li><AnchorLink to="/#pricing">Pricing</AnchorLink></li>
        <li><AnchorLink to="/#screenshots">Screenshots</AnchorLink></li>
        <li><AnchorLink to="/#testimonials">Testimonials</AnchorLink></li>
        <li><AnchorLink to="/#subscribe">Subscribe</AnchorLink></li>
      </ul>
    </nav>

    <ul className="header-social">
       <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
       <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
       <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
    </ul>
  </header>

)
