import React from "react"
import Slider from "react-slick"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

import content from '../../content/testimonials.yaml'


const MySlider = () =>{

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
    appendDots: dots => (
      <ol> {dots} </ol>
    ),
    customPaging: i => (
      <button>
        {i + 1}
      </button>
    ),
  }

  return (
    <section id="testimonials">
      <div className="row content">
        <span><i className="quote-left fa"><FontAwesomeIcon icon={ faQuoteLeft } /></i></span>
        <div className="text-container">
          <div className="twelve columns">
            <h1>{ content.title }</h1>
          </div>
          <div className="twelve columns flex-container">
          <Slider {...settings} style={{ userSelect: 'text' }}>
            { content.quotes.map((quote, index) => (
              <div>
                <blockquote>
                  <p>{ quote.text }</p>
                  <cite>{ quote.cite }</cite>
                </blockquote>
              </div>
            ))}
          </Slider>
          </div>

        </div>
        <span><i className="quote-right fa"><FontAwesomeIcon icon={ faQuoteRight } /></i></span>
      </div>
    </section>
  )
}

export default MySlider
