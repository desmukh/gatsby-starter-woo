import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { social, footer, address, contacts } = useSiteMetadata()
  return (
    <footer>
      <div className="row">
        <div className="six columns info">

          <div className="footer-logo">
            <AnchorLink to="/#">
              <img src={ footer.logo } alt="" />
            </AnchorLink>
          </div>

          <p>{ footer.text }</p>

        </div>

        <div className="six columns right-cols">
          <div className="row">
            <div className="columns">
              <h3 className="address">Come Visit</h3>
              <p>
                { address.line1 }<br />
                { address.line2 }<br />
                { address.line3 }
             </p>
           </div>

         <div className="columns">
           <h3 className="social">socialize</h3>
           <ul>
             <li><a href={ 'https://facebook.com/ ' + social.facebook }>Facebook</a></li>
             <li><a href={'https://twitter.com/ ' + social.twitter }>Twitter</a></li>
             <li><a href={'https://google.com/ ' + social.google }>GooglePlus</a></li>
           </ul>
        </div>

          <div className="columns last">
             <h3 className="contact">Contact Us</h3>
             <ul>
               { contacts.map((contact, index) =>
                 <li><a href={ contact.url }>{ contact.text }</a></li>
               )}
             </ul>
          </div>
        </div>
      </div>

      <p className="copyright">&copy; 2014 Woo | Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a> | Ported to Gatsby by <a href="https://github.com/desmukh" title="Fahad Desmukh">Fahad Desmukh</a> </p>

      <div id="go-top">
        <AnchorLink title="Back to Top" to="/#hero"><i className="icon-up-open"></i></AnchorLink>
      </div>
    </div>
  </footer>

)}
