import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
  {big:'b-line-icons.jpg', thumb:'line-icons.jpg', caption:'Line Icons' },
  {big:'b-hipster.jpg', thumb:'hipster.jpg', caption:'Hipster' },
  {big:'b-authentic-vintage.jpg', thumb:'authentic-vintage.jpg', caption:'Authentic Vintage'},
  {big:'b-spot-uv-logo.jpg', thumb:'spot-uv-logo.jpg', caption:'Spot UV Logo'},
  {big:'b-tshirt-mockup.jpg', thumb:'tshirt-mockup.jpg', caption:'TShirt Mockup'},
  {big:'b-abstract-vector.jpg', thumb:'abstract-vector.jpg', caption:'Abstract Vector'},
  {big:'b-embossed-paper.jpg', thumb:'embossed-paper.jpg', caption:'Embossed Paper'},
  {big:'b-judah.jpg', thumb:'judah.jpg', caption:'Judah'}
];

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
          <h1>Product Screenshots.</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
       </p>
     </div>
     <div className="row">
       <div className="twelve columns">
         <div id="screenshots-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

           {images.map((value, index) => {
             return (
               <div className="columns item" key={index.toString()}>
                 <div className="item-wrap">

                   <a href={'images/screenshots/big/' + images[index].big} data-imagelightbox="a" onClick={event => {
                        event.preventDefault()
                        this.setState({ isOpen: true, photoIndex: index, })
                    }}>
                     <img src={'images/screenshots/' + images[index].thumb} alt={images[index].caption} />
                       <div className="overlay"></div>
                         <div className="link-icon"><i className="icon-plus"></i></div>
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
            mainSrc={'images/screenshots/big/' + images[photoIndex].big}
            nextSrc={'images/screenshots/big/' + images[(photoIndex + 1) % images.length].big}
            prevSrc={'images/screenshots/big/' + images[(photoIndex + images.length - 1) % images.length].big}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
            imageCaption={images[photoIndex].caption}
            enableZoom={false}
          />
        )}
      </div></section>
    );
  }
}
