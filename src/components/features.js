import React from "react"
import ScrollAnimation from 'react-animate-on-scroll'

export default () => (

  <section id='features'>

    <div className="row feature design">
     <div className="six columns right">
       <h3>Simple, Clean and Modern Design.</h3>

       <p>Lorem ipsum dolor sit amet, ea eum labitur scripserit, illum complectitur deterruisset at pro. Odio quaeque reformidans est eu, expetendis intellegebat has ut, viderer invenire ut his. Has molestie percipit an. Falli volumus efficiantur sed id, ad vel noster propriae. Ius ut etiam vivendo, graeci iudicabit constituto at mea. No soleat fabulas prodesset vel, ut quo solum dicunt. Nec et amet vidisse mentitum. Cibo mutat nulla ei eam.
       </p>
     </div>

     <ScrollAnimation animateIn="pulse" animateOnce="true" initiallyVisible="true"  className="six columns feature-media left">
       <img src="images/feature-image-1.png" alt="" />
     </ScrollAnimation>
   </div>

   <div className="row feature responsive">

     <div className="six columns left">
       <h3>Fully Responsive.</h3>

       <p>Aenean condimentum, lacus sit amet luctus lobortis, dolores et quas molestias excepturi enim tellus ultrices elit, amet consequat enim elit noneas sit amet luctu. Quis nostrum exercitationem ullam corporis suscipit laboriosam.Our library is continually refreshed with the latest on web technology so you'll never fall behind. Quis nostrum exercitationem ullam corporis suscipit laboriosam.
       </p>
     </div>

     <ScrollAnimation animateIn="pulse" animateOnce="true" initiallyVisible="true" className="six columns feature-media right">
       <img src="images/feature-image-2.png" alt="" />
    </ScrollAnimation>
   </div>

   <div className="row feature cross-browser">

     <div className="six columns right">
       <h3>Cross-Browser Compatible.</h3>

       <p>Lorem ipsum dolor sit amet, ea eum labitur scripserit, illum complectitur deterruisset at pro. Odio quaeque reformidans est eu, expetendis intellegebat has ut, viderer invenire ut his. Has molestie percipit an. Falli volumus efficiantur sed id, ad vel noster propriae. Ius ut etiam vivendo, graeci iudicabit constituto at mea. No soleat fabulas prodesset vel, ut quo solum dicunt. Nec et amet vidisse mentitum. Cibo mutat nulla ei eam.
       </p>
     </div>

     <ScrollAnimation animateIn="pulse" animateOnce="true" initiallyVisible="true" className="six columns feature-media left">
       <img src="images/feature-image-3.png" alt="" />
     </ScrollAnimation>

   </div>

   <div className="row feature video">

     <div className="six columns left">
       <h3>Video Support.</h3>

       <p>Aenean condimentum, lacus sit amet luctus lobortis, dolores et quas molestias excepturi enim tellus ultrices elit, amet consequat enim elit noneas sit amet luctu. Quis nostrum exercitationem ullam corporis suscipit laboriosam. No soleat fabulas prodesset vel, ut quo solum dicunt. Nec et amet vidisse mentitum. Cibo mutat nulla ei eam.
       </p>
     </div>

     <ScrollAnimation animateIn="pulse" animateOnce="true" initiallyVisible="true" className="six columns feature-media right">
       <div className="fluid-video-wrapper">
         <iframe title="video" src="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39" width="500" height="281" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen>
         </iframe>
       </div>
     </ScrollAnimation>
   </div>
 </section>
)
