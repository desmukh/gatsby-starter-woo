import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const Screenshots = () => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query ScreenshotsQuery {
      markdownRemark(frontmatter: { section: { eq: "screenshots" } }) {
        html
        frontmatter {
          heading
          screenshots {
            thumb {
              childImageSharp {
                gatsbyImageData(formats: [AUTO, WEBP, AVIF])
              }
            }
            big {
              publicURL
            }
            caption
          }
        }
      }
    }
  `)

  const { frontmatter, html } = data.markdownRemark
  const screenshots = frontmatter.screenshots

  return (
    <section id="screenshots">
      <div className="row section-head">
        <h1>{frontmatter.heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="row">
        <div className="twelve columns">
          <div
            id="screenshots-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {screenshots.map((screenshot, index) => {
              const thumbImage = getImage(screenshot.thumb)
              return (
                <div className="columns item" key={index.toString()}>
                  <div className="item-wrap">
                    <a
                      href={screenshot.big.publicURL}
                      data-imagelightbox="a"
                      onClick={event => {
                        event.preventDefault()
                        setIsOpen(true)
                        setPhotoIndex(index)
                      }}
                    >
                      <GatsbyImage
                        image={thumbImage}
                        alt={screenshot.caption}
                      />
                      <div className="overlay"></div>
                      <div className="link-icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div>
        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={screenshots.map(screenshot => ({
              src: screenshot.big.publicURL,
              title: screenshot.caption,
            }))}
            index={photoIndex}
            onIndexChange={index => setPhotoIndex(index)}
          />
        )}
      </div>
    </section>
  )
}

export default Screenshots
