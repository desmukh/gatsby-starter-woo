import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      markdownRemark(frontmatter: { section: { eq: "hero" } }) {
        html
        frontmatter {
          headline
          image {
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP, AVIF])
            }
          }
          button1 {
            label
            to
          }
          button2 {
            label
            to
          }
        }
      }
    }
  `)

  const { frontmatter, html } = data.markdownRemark
  const heroImage = getImage(frontmatter.image)

  return (
    <section id="hero">
      <div className="row">
        <div className="twelve columns">
          <div className="hero-text">
            <h1 className="responsive-headline">{frontmatter.headline}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>

          <div className="buttons">
            <AnchorLink
              className="button trial animated shake"
              to={frontmatter.button1.to}
            >
              {frontmatter.button1.label}
            </AnchorLink>
            <AnchorLink
              className="button learn-more"
              to={frontmatter.button2.to}
            >
              {frontmatter.button2.label}
            </AnchorLink>
          </div>

          <div className="hero-image">
            <GatsbyImage
              image={heroImage}
              alt="Hero"
              loading="eager"
              className="animated fadeInUpBig"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
