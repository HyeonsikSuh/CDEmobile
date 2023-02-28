import React, { Component } from "react";
import Slider from "react-slick";
import "./slick-theme.css";
import "./slick.css";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="slideimg" src="/images/mainimg/mainimg2.png" alt="..."></img>
          </div>
          <div>
          <img className="slideimg" src="/images/mainimg/mainimg5.png" alt="..."></img>
          </div>
          <div>
          <img className="slideimg" src="/images/mainimg/mainimg3.png" alt="..."></img>
          </div>
          <div>
          <img className="slideimg" src="/images/mainimg/mainimg4.png" alt="..."></img>
          </div>
          <div>
          <img className="slideimg" src="/images/mainimg/mainimg.png" alt="..."></img>
          </div>
        </Slider>
      </div>
    );
  }
}