import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import scrollTo from "gatsby-plugin-smoothscroll"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faMapMarkerAlt, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const { social, footer, address, contacts } = useSiteMetadata()
  return (
    <footer>
      <div className="row">
        <div className="six columns info">

          <div className="footer-logo">
            <AnchorLink to="/">
              <img src={ footer.logo } alt="" />
            </AnchorLink>
          </div>

          <p>{ footer.text }</p>

        </div>

        <div className="six columns right-cols">
          <div className="row">
            <div className="columns">
              <FontAwesomeIcon icon={ faMapMarkerAlt } />
              <h3 className="address">Come Visit</h3>
              <p>
                { address.line1 }<br />
                { address.line2 }<br />
                { address.line3 }
             </p>
           </div>

         <div className="columns">
           <FontAwesomeIcon icon={ faUsers } />
           <h3 className="social">socialize</h3>
           <ul>
             { social.map(mySocial =>
               <li><a href={ mySocial.url }>
                 { mySocial.service }
               </a></li>
             )}
           </ul>
        </div>

          <div className="columns last">
            <FontAwesomeIcon icon={ faEnvelope } />
             <h3 className="contact">Contact Us</h3>
             <ul>
               { contacts.map((contact, index) =>
                 <li><a href={ contact.url }>{ contact.text }</a></li>
               )}
             </ul>
          </div>
        </div>
      </div>

      <p className="copyright">&copy; 2014 Woo | Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a> | Ported to Gatsby by <a href="https://github.com/desmukh/gatsby-starter-woo" title="Fahad Desmukh">Fahad Desmukh</a> </p>

      <div id="go-top">
        <button title="Back to Top" onClick={() => scrollTo('#top')}>
          <FontAwesomeIcon icon={ faChevronUp } />
        </button>
      </div>
    </div>
  </footer>

)}
