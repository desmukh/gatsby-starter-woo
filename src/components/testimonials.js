import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query TestimonialsQuery {
      markdownRemark(frontmatter: { section: { eq: "testimonials" } }) {
        frontmatter {
          heading
          quotes {
            text
            cite
          }
        }
      }
    }
  `)

  const { frontmatter } = data.markdownRemark

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 7000,
    draggable: false,
    appendDots: dots => <ol> {dots} </ol>,
    customPaging: i => <button>{i + 1}</button>,
  }

  return (
    <section id="testimonials">
      <div className="row content">
        <span>
          <i className="quote-left fa">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </i>
        </span>
        <div className="text-container">
          <div className="twelve columns">
            <h1>{frontmatter.heading}</h1>
          </div>
          <div className="twelve columns flex-container">
            <Slider {...settings} style={{ userSelect: "text" }}>
              {frontmatter.quotes.map((quote, index) => (
                <div key={index}>
                  <blockquote>
                    <p>{quote.text}</p>
                    <cite>{quote.cite}</cite>
                  </blockquote>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <span>
          <i className="quote-right fa">
            <FontAwesomeIcon icon={faQuoteRight} />
          </i>
        </span>
      </div>
    </section>
  )
}

export default Testimonials
