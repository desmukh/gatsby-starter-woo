import React from "react"
import { Link } from "gatsby"

export default () => (
  <section id="screenshots">

    <div className="row section-head">
      <h1>Product Screenshots.</h1>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
   </p>
 </div>

 <div className="row">
   <div className="twelve columns">
     <div id="screenshots-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

       <div className="columns item">
         <div className="item-wrap">

           <Link to="images/screenshots/big/b-line-icons.jpg" data-imagelightbox="a" >
             <img src="images/screenshots/line-icons.jpg" alt="Line Icons" />
               <div className="overlay"></div>
                 <div className="link-icon"><i className="icon-plus"></i></div>
               </Link>
             </div>
           </div>

           <div className="columns item">
             <div className="item-wrap">

               <Link to="images/screenshots/big/b-hipster.jpg" data-imagelightbox="a" >
                 <img src="images/screenshots/hipster.jpg" alt="Hipster" />
                 <div className="overlay"></div>
                 <div className="link-icon"><i className="icon-plus"></i></div>
               </Link>
             </div>
           </div>

           <div className="columns item">
             <div className="item-wrap">

               <Link to="images/screenshots/big/b-authentic-vintage.jpg" data-imagelightbox="a" >
                 <img src="images/screenshots/authentic-vintage.jpg" alt="Authentic Vintage" />
                 <div className="overlay"></div>
                 <div className="link-icon"><i className="icon-plus"></i></div>
               </Link>

             </div>
           </div>

           <div className="columns item">
             <div className="item-wrap">

               <Link to="images/screenshots/big/b-spot-uv-logo.jpg" data-imagelightbox="a" >
                 <img src="images/screenshots/spot-uv-logo.jpg" alt="Spot UV Logo" />
                 <div className="overlay"></div>
                 <div className="link-icon"><i className="icon-plus"></i></div>
               </Link>

             </div>
           </div>

           <div className="columns item">
             <div className="item-wrap">

               <Link to="images/screenshots/big/b-tshirt-mockup.jpg" data-imagelightbox="a" >
                 <img src="images/screenshots/tshirt-mockup.jpg" alt="TShirt Mockup" />
                 <div className="overlay"></div>
                 <div className="link-icon"><i className="icon-plus"></i></div>
               </Link>

             </div>
           </div>

           <div className="columns item">
             <div className="item-wrap">

               <Link to="images/screenshots/big/b-abstract-vector.jpg" data-imagelightbox="a" >
                 <img src="images/screenshots/abstract-vector.jpg" alt="Abstract Vector" />
                 <div className="overlay"></div>
                 <div className="link-icon"><i className="icon-plus"></i></div>
               </Link>

             </div>
           </div>

           <div className="columns item">
             <div className="item-wrap">

               <Link to="images/screenshots/big/b-embossed-paper.jpg" data-imagelightbox="a" >
                 <img src="images/screenshots/embossed-paper.jpg" alt="Embossed Paper" />
                 <div className="overlay"></div>
                 <div className="link-icon"><i className="icon-plus"></i></div>
               </Link>

             </div>
           </div>

           <div className="columns item">
             <div className="item-wrap">

               <Link to="images/screenshots/big/b-judah.jpg" data-imagelightbox="a" >
                 <img src="images/screenshots/judah.jpg" alt="Judah" />
                 <div className="overlay"></div>
                 <div className="link-icon"><i className="icon-plus"></i></div>
               </Link>

             </div>
           </div>

         </div>

       </div>
     </div>
   </section>

)
