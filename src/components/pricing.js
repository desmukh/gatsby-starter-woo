import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

const Pricing = () => {
  library.add(fas)

  const data = useStaticQuery(graphql`
    query PricingQuery {
      markdownRemark(frontmatter: { section: { eq: "pricing" } }) {
        html
        frontmatter {
          heading
          plans {
            title
            fa
            price
            per
            features
            signup {
              label
              to
            }
          }
        }
      }
    }
  `)

  const { frontmatter, html } = data.markdownRemark

  return (
    <section id="pricing">
      <div className="row section-head">
        <h1>{frontmatter.heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <div className="row">
        <div className="pricing-tables bgrid-quarters s-bgrid-halves">
          {frontmatter.plans.map((plan, index) => (
            <div className="column" key={index}>
              <div className="price-block">
                <h3 className="plan-title">
                  <i className="fa">
                    <FontAwesomeIcon icon={plan.fa} />
                  </i>
                  {plan.title}
                </h3>
                <p className="plan-price">
                  {plan.price}
                  <span>{plan.per}</span>
                </p>

                <ul className="features">
                  {plan.features.map((value, idx) => (
                    <li key={idx}>{value}</li>
                  ))}
                </ul>
                <footer className="plan-sign-up">
                  <Link className="button" to={plan.signup.to}>
                    {plan.signup.label}
                  </Link>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
