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

        <div className="row feature design">
         <div className="six columns right">
           <h3>Simple, Clean and Modern Design.</h3>

           <p>Lorem ipsum dolor sit amet, ea eum labitur scripserit, illum complectitur deterruisset at pro. Odio quaeque reformidans est eu, expetendis intellegebat has ut, viderer invenire ut his. Has molestie percipit an. Falli volumus efficiantur sed id, ad vel noster propriae. Ius ut etiam vivendo, graeci iudicabit constituto at mea. No soleat fabulas prodesset vel, ut quo solum dicunt. Nec et amet vidisse mentitum. Cibo mutat nulla ei eam.
           </p>
         </div>

         <div className="six columns feature-media left">
           <img src="images/feature-image-1.png" alt="" />
         </div>

       </div>

       <div className="row feature responsive">

         <div className="six columns left">
           <h3>Fully Responsive.</h3>

           <p>Aenean condimentum, lacus sit amet luctus lobortis, dolores et quas molestias excepturi enim tellus ultrices elit, amet consequat enim elit noneas sit amet luctu. Quis nostrum exercitationem ullam corporis suscipit laboriosam.Our library is continually refreshed with the latest on web technology so you'll never fall behind. Quis nostrum exercitationem ullam corporis suscipit laboriosam.
           </p>
         </div>

         <div className="six columns feature-media right">
           <img src="images/feature-image-2.png" alt="" />
         </div>

       </div>

       <div className="row feature cross-browser">

         <div className="six columns right">
           <h3>Cross-Browser Compatible.</h3>

           <p>Lorem ipsum dolor sit amet, ea eum labitur scripserit, illum complectitur deterruisset at pro. Odio quaeque reformidans est eu, expetendis intellegebat has ut, viderer invenire ut his. Has molestie percipit an. Falli volumus efficiantur sed id, ad vel noster propriae. Ius ut etiam vivendo, graeci iudicabit constituto at mea. No soleat fabulas prodesset vel, ut quo solum dicunt. Nec et amet vidisse mentitum. Cibo mutat nulla ei eam.
           </p>
         </div>

         <div className="six columns feature-media left">
           <img src="images/feature-image-3.png" alt="" />
         </div>

       </div>

       <div className="row feature video">

         <div className="six columns left">
           <h3>Video Support.</h3>

           <p>Aenean condimentum, lacus sit amet luctus lobortis, dolores et quas molestias excepturi enim tellus ultrices elit, amet consequat enim elit noneas sit amet luctu. Quis nostrum exercitationem ullam corporis suscipit laboriosam. No soleat fabulas prodesset vel, ut quo solum dicunt. Nec et amet vidisse mentitum. Cibo mutat nulla ei eam.
           </p>
         </div>

         <div className="six columns feature-media right">
           <div className="fluid-video-wrapper">
             <iframe title="video" src="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
             </iframe>
           </div>
         </div>
       </div>
     </section>

     <section id="pricing">
       <div className="row section-head">
         <h1>Pricing Tables.</h1>
         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
         </p>
       </div>

       <div className="row">
         <div className="pricing-tables bgrid-quarters s-bgrid-halves">
           <div className="column">
             <div className="price-block">
               <h3 className="plan-title"><i className="fa fa-cog"></i>Starter</h3>
               <p className="plan-price">FREE <span>per month</span></p>

               <ul className="features">
                 <li>1GB Storage</li>
                 <li>5GB Bandwidth</li>
                 <li>2 Domains</li>
                 <li>3 Databases</li>
                 <li>1 FTP Account</li>
                 <li>25 Email Accounts</li>
               </ul>

               <footer className="plan-sign-up">
                 <Link className="button" to="#">Sign Up</Link>
               </footer>
             </div>
           </div>

           <div className="column">
             <div className="price-block">
               <h3 className="plan-title"><i className="fa fa-thumbs-up"></i>Standard</h3>
               <p className="plan-price">$9.99 <span>per month</span></p>

               <ul className="features">
                 <li>3GB Storage</li>
                 <li>10GB Bandwidth</li>
                 <li>3 Domains</li>
                 <li>5 Databases</li>
                 <li>3 FTP Account</li>
                 <li>30 Email Accounts</li>
               </ul>

               <footer className="plan-sign-up">
                 <Link className="button" to="#">Sign Up</Link>
               </footer>
             </div>
           </div>

           <div className="column">
             <div className="price-block">
               <h3 className="plan-title"><i className="fa fa-star"></i>Premium</h3>
               <p className="plan-price">$19.99 <span>per month</span></p>

               <ul className="features">
                 <li>10GB Storage</li>
                 <li>25GB Bandwidth</li>
                 <li>5 Domains</li>
                 <li>10 Databases</li>
                 <li>10 FTP Account</li>
                 <li>50 Email Accounts</li>
               </ul>

               <footer className="plan-sign-up">
                 <Link className="button" to="#">Sign Up</Link>
               </footer>
             </div>
           </div>

           <div className="column">
             <div className="price-block">
               <h3 className="plan-title"><i className="fa fa-trophy"></i>Ultimate</h3>
               <p className="plan-price">$29.99 <span>per month</span></p>

               <ul className="features">
                 <li>30 Storage</li>
                 <li>Unlimited Bandwidth</li>
                 <li>10 Domains</li>
                 <li>15 Databases</li>
                 <li>10 FTP Account</li>
                 <li>50 Email Accounts</li>
               </ul>

               <footer className="plan-sign-up">
                 <Link className="button" to="#">Sign Up</Link>
               </footer>

             </div>
           </div>
         </div>
       </div>
     </section>

   </main>
  </>

)
