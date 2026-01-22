import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ScrollAnimation from "react-animate-on-scroll"

const Features = () => {
  const data = useStaticQuery(graphql`
    query FeaturesQuery {
      markdownRemark(frontmatter: { section: { eq: "features" } }) {
        frontmatter {
          features {
            name
            title
            body
            image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            vimeo
          }
        }
      }
    }
  `)

  const features = data.markdownRemark.frontmatter.features

  return (
    <section id="features">
      {features.map((value, index) => {
        let pos, imagepos
        if (index % 2 === 0) {
          pos = "right"
          imagepos = "left"
        } else {
          pos = "left"
          imagepos = "right"
        }

        let media
        if (value.image) {
          const featureImage = getImage(value.image)
          media = <GatsbyImage image={featureImage} alt={value.title} />
        } else if (value.vimeo) {
          media = (
            <div className="fluid-video-wrapper">
              <iframe
                title="video"
                src={
                  "https://player.vimeo.com/video/" +
                  value.vimeo +
                  "?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39"
                }
                width="500"
                height="281"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              ></iframe>
            </div>
          )
        }

        return (
          <div className={"row feature " + value.name} key={index}>
            <div className={"six columns " + pos}>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </div>

            <ScrollAnimation
              animateIn="pulse"
              animateOnce={true}
              initiallyVisible={true}
              className={"six columns feature-media " + imagepos}
            >
              {media}
            </ScrollAnimation>
          </div>
        )
      })}
    </section>
  )
}

export default Features
