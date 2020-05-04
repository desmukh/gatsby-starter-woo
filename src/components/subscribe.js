import React from "react"

export default () => (
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
)
