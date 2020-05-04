import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default () => (
  <footer>
    <div className="row">
      <div className="six columns info">

        <div className="footer-logo">
          <Link to="#">
            <img src="images/footer-logo.png" alt="" />
          </Link>
        </div>

        <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
        </p>

      </div>

      <div className="six columns right-cols">
        <div className="row">
          <div className="columns">
            <h3 className="address">Come Visit</h3>
            <p>1600 Amphitheatre Parkway<br />Mountain View, CA<br />
           94043 US
           </p>
         </div>

       <div className="columns">
         <h3 className="social">socialize</h3>
         <ul>
           <li><Link to="#">Facebook</Link></li>
           <li><Link to="#">Twitter</Link></li>
           <li><Link to="#">GooglePlus</Link></li>
         </ul>
      </div>

        <div className="columns last">
           <h3 className="contact">Contact Us</h3>
           <ul>
             <li><Link to="tel:6473438234">647.343.8234</Link></li>
             <li><Link to="tel:1234567890">123.456.7890</Link></li>
             <li><Link to="mailto:someone@woo.com">someone@woosite.com</Link></li>
           </ul>
        </div>
      </div>
    </div>

    <p className="copyright">&copy; 2014 Woo | Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></p>

    <div id="go-top">
      <AnchorLink title="Back to Top" to="/#hero"><i className="icon-up-open"></i></AnchorLink>
    </div>
  </div>
</footer>

)
