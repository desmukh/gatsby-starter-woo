import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import content from '../../content/screenshots.yaml'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const screenshots = content.screenshots

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <section id="screenshots">

        <div className="row section-head">
          <h1>{ content.title }</h1>
          <p>{ content.body }</p>
     </div>
     <div className="row">
       <div className="twelve columns">
         <div id="screenshots-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

           {screenshots.map((screenshot, index) => {
             return (
               <div className="columns item" key={index.toString()}>
                 <div className="item-wrap">

                   <a
                     href={'images/screenshots/big/' + screenshot.big}
                     data-imagelightbox="a" onClick={event => {
                        event.preventDefault()
                        this.setState({ isOpen: true, photoIndex: index, })
                  }}>
                     <img
                       src={'images/screenshots/' + screenshot.thumb}
                       alt={screenshot.caption} />
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
          mainSrc={
            'images/screenshots/big/' + screenshots[photoIndex].big
          }
          nextSrc={
            'images/screenshots/big/' + screenshots[(photoIndex + 1) % screenshots.length].big
          }
          prevSrc={
            'images/screenshots/big/' + screenshots[(photoIndex + screenshots.length - 1) % screenshots.length].big}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + screenshots.length - 1) % screenshots.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % screenshots.length,
            })
          }
          imageCaption={screenshots[photoIndex].caption}
          enableZoom={false}
        />
      )}
      </div></section>
    );
  }
}
