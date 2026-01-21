import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpload } from "@fortawesome/free-solid-svg-icons"

const CallToAction = () => {
  const data = useStaticQuery(graphql`
    query CallToActionQuery {
      markdownRemark(frontmatter: { section: { eq: "call-to-action" } }) {
        html
        frontmatter {
          ctaTitle {
            text
            url
          }
          button {
            label
            url
          }
        }
      }
    }
  `)

  const { frontmatter, html } = data.markdownRemark

  return (
    <section id="call-to-action">
      <div className="row">
        <div className="two columns header-col">
          <h1>
            <FontAwesomeIcon icon={faUpload} />
            <span>Get Hosting.</span>
          </h1>
        </div>
        <div className="seven columns">
          <h2>
            <a href={frontmatter.ctaTitle.url}>{frontmatter.ctaTitle.text}</a>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <div className="three columns action">
          <a href={frontmatter.button.url} className="button">
            {frontmatter.button.label}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
