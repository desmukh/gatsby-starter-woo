import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Header from "../components/header"
import Hero from "../components/hero"
import Features from "../components/features"
import Pricing from "../components/pricing"
import CalltoAction from "../components/call-to-action"
import Screenshots from "../components/screenshots"
import Testimonials from "../components/testimonials"

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

    <Header />

  <main>
      <Hero />
      <Features />
      <Pricing />
      <CalltoAction />
      <Screenshots />
      <Testimonials />

     <section id="subscribe">
       <div className="row section-head">
         <div className="twelve columns">

         <h1>MailChimp signup form.</h1>

         <p>Adding your own MailChimp powered email sign-up is easy. Grab the super slim code from your MailChimp account and drop the code here. Lastly, remove the link and style tags that comes with the embedded code and your good to go. All styling is within our stylesheet.</p>

       </div>
     </div>

     <div className="row">
       <div className="twelve columns">
         <div id="mc_embed_signup">
           <form action="http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>

             <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required /  >
                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                <div style={{position: "absolute", left: "-5000px"}}><input type="text" name="b_cdb7b577e41181934ed6a6a44_e65110b38d" value="" /></div>
                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>

              </form>
            </div>

            <p><small>We never share your information or use it to spam you.</small></p>

          </div>

        </div>

      </section>
    </main>

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

  </>

)
