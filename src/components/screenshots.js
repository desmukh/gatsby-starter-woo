import React, { Component } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import content from "../../content/screenshots.yaml"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const screenshots = content.screenshots

export default class LightboxExample extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state

    return (
      <section id="screenshots">
        <div className="row section-head">
          <h1>{content.title}</h1>
          <p>{content.body}</p>
        </div>
        <div className="row">
          <div className="twelve columns">
            <div
              id="screenshots-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {screenshots.map((screenshot, index) => {
                return (
                  <div className="columns item" key={index.toString()}>
                    <div className="item-wrap">
                      <a
                        href={"/images/screenshots/big/" + screenshot.big}
                        data-imagelightbox="a"
                        onClick={event => {
                          event.preventDefault()
                          this.setState({ isOpen: true, photoIndex: index })
                        }}
                      >
                        <img
                          src={"/images/screenshots/" + screenshot.thumb}
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
              close={() => this.setState({ isOpen: false })}
              slides={screenshots.map(screenshot => ({
                src: "/images/screenshots/big/" + screenshot.big,
                title: screenshot.caption,
              }))}
              index={photoIndex}
              onIndexChange={index => this.setState({ photoIndex: index })}
            />
          )}
        </div>
      </section>
    )
  }
}
