import React from "react"
import Slider from "react-slick"

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
  }

  return (
    <section id="testimonials">
      <div className="row content">
        <span><i className="quote-left fa fa-quote-left"></i></span>
        <div className="text-container">

          <div>
            <h1>{ content.title }</h1>
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
        <span><i className="quote-right fa fa-quote-right"></i></span>
      </div>
    </section>
  )
}

export default MySlider
