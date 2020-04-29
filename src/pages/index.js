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

      <section id='features'>

        <div class="row feature design">
         <div class="six columns right">
           <h3>Simple, Clean and Modern Design.</h3>

           <p>Lorem ipsum dolor sit amet, ea eum labitur scripserit, illum complectitur deterruisset at pro. Odio quaeque reformidans est eu, expetendis intellegebat has ut, viderer invenire ut his. Has molestie percipit an. Falli volumus efficiantur sed id, ad vel noster propriae. Ius ut etiam vivendo, graeci iudicabit constituto at mea. No soleat fabulas prodesset vel, ut quo solum dicunt. Nec et amet vidisse mentitum. Cibo mutat nulla ei eam.
           </p>
         </div>

         <div class="six columns feature-media left">
           <img src="images/feature-image-1.png" alt="" />
         </div>

       </div>

       <div class="row feature responsive">

         <div class="six columns left">
           <h3>Fully Responsive.</h3>

           <p>Aenean condimentum, lacus sit amet luctus lobortis, dolores et quas molestias excepturi enim tellus ultrices elit, amet consequat enim elit noneas sit amet luctu. Quis nostrum exercitationem ullam corporis suscipit laboriosam.Our library is continually refreshed with the latest on web technology so you'll never fall behind. Quis nostrum exercitationem ullam corporis suscipit laboriosam.
           </p>
         </div>

         <div class="six columns feature-media right">
           <img src="images/feature-image-2.png" alt="" />
         </div>

       </div>

       <div class="row feature cross-browser">

         <div class="six columns right">
           <h3>Cross-Browser Compatible.</h3>

           <p>Lorem ipsum dolor sit amet, ea eum labitur scripserit, illum complectitur deterruisset at pro. Odio quaeque reformidans est eu, expetendis intellegebat has ut, viderer invenire ut his. Has molestie percipit an. Falli volumus efficiantur sed id, ad vel noster propriae. Ius ut etiam vivendo, graeci iudicabit constituto at mea. No soleat fabulas prodesset vel, ut quo solum dicunt. Nec et amet vidisse mentitum. Cibo mutat nulla ei eam.
           </p>
         </div>

         <div class="six columns feature-media left">
           <img src="images/feature-image-3.png" alt="" />
         </div>

       </div>

       <div class="row feature video">

         <div class="six columns left">
           <h3>Video Support.</h3>

           <p>Aenean condimentum, lacus sit amet luctus lobortis, dolores et quas molestias excepturi enim tellus ultrices elit, amet consequat enim elit noneas sit amet luctu. Quis nostrum exercitationem ullam corporis suscipit laboriosam. No soleat fabulas prodesset vel, ut quo solum dicunt. Nec et amet vidisse mentitum. Cibo mutat nulla ei eam.
           </p>
         </div>

         <div class="six columns feature-media right">
           <div class="fluid-video-wrapper">
             <iframe title="video" src="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
             </iframe>
           </div>
         </div>

       </div>

     </section>

   </main>
  </>

)
