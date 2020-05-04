import React from "react"
import { Link } from "gatsby"

export default () => (
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

)
