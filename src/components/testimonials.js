import React from "react"
import Slider from "react-slick"
import { css } from "@emotion/core"

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
        <h1>What People Are Saying.</h1>
        <Slider {...settings} style={{ userSelect: 'text' }}>
          <div>
            <blockquote>
              <p>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.
              </p>
              <cite>Steve Jobs</cite>
            </blockquote>
          </div>
          <div>
            <blockquote>
              <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              </p>
              <cite>Mr. Adobe</cite>
            </blockquote>
          </div>
        </Slider>
      </div>
    </div>
    <span><i className="quote-right fa fa-quote-right"></i></span>

    </div>
    </section>
  )
}

export default MySlider
