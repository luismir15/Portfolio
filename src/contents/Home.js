import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
//import profilepic from '../img/IMG_5898.JPG';
import pic1 from '../img/IMG_5898.JPG';
import pic2 from '../img/IMG_1584.JPG';
import pic3 from '../img/IMG_4814.JPG';
import pic4 from '../img/IMG_5252.HEIC';
import pic5 from '../img/IMG_1548.JPG';
import Social from '../components/Social';
import { Slide } from 'react-slideshow-image';
 
const slideImages = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5
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
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
}

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <div className='profilepic'>
                    {Slideshow()}
                </div>
                <ReactTypingEffect className="typingeffect" text={['Hello! My name is Luis Miranda']} speed={100} eraseDelay={700}/>
                <div className="social">
                    <Social />
                </div>
            </div>
            )
        }
    }
    
export default Home

/**
 * <img src={profilepic} className="profilepic"></img>
 */
    