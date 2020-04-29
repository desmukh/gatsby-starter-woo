import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import "../styles/default.css"
import "../styles/layout.css"
import "../styles/media-queries.css"
import "../styles/animate.css"
import "../styles/prettyPhoto.css"

export default () => (
  <>
    <Helmet>
      <title>Corona Solidarity Campaign</title>
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />
    </Helmet>
    <header>
      <div className="logo">
         <Link className="smoothscroll" to="#hero">
           <img alt="" src="images/logo.png" />
         </Link>
      </div>

      <nav id="nav-wrap">
        <Link className="mobile-btn" to="#nav-wrap" title="Show navigation">Show Menu</Link>
	      <Link className="mobile-btn" to="#" title="Hide navigation">Hide Menu</Link>

        <ul id="nav" className="nav">
          <li><Link className="smoothscroll" to="#features">Features</Link></li>
	        <li><Link className="smoothscroll" to="#pricing">Pricing</Link></li>
          <li><Link className="smoothscroll" to="#screenshots">Screenshots</Link></li>
          <li><Link className="smoothscroll" to="#testimonials">Testimonials</Link></li>
          <li><Link className="smoothscroll" to="#subscribe">Subscribe</Link></li>
        </ul>
      </nav>

      <ul className="header-social">
         <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
         <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
         <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
      </ul>
    </header>
    <main>
      <section id="hero">
        <div className="row">
          <div className="twelve columns">

            <div className="hero-text">
              <h1 className="responsive-headline">The perfect template to showcase your awesome product and service.</h1>
              <p>Aenean condimentum, lacus sit amet luctus lobortis, dolores et quas molestias excepturi enim tellus ultrices elit, amet consequat enim elit noneas sit amet luctu. Quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
            </div>

            <div className="buttons">
              <Link className="button trial" to="#">Free Trial</Link>
              <Link className="button learn-more smoothscroll" to="#features">Learn More</Link>
            </div>

            <div className="hero-image">
              <img src="images/hero-image.png" alt="" />
            </div>
          </div>
        </div>
      </section>

    </main>
  </>

)
