import React from 'react';
import pic1 from '../img/IMG_5898.JPG';
import pic2 from '../img/IMG_1584.JPG';
/*import pic3 from '../img/IMG_5898.JPG';
import pic4 from '../img/IMG_5898.JPG';
import pic5 from '../img/IMG_5898.JPG';
import pic6 from '../img/IMG_5898.JPG';
import pic7 from '../img/IMG_5898.JPG';
import pic8 from '../img/IMG_5898.JPG';
import pic9 from '../img/IMG_5898.JPG';*/
import { Slide } from 'react-slideshow-image';
 
const slideImages = [
  pic1,
  pic2
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}