import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const ReactSlick = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h1>1</h1>
        </div>
        <div className="sec-container">
          <h1>2</h1>
        </div>
        <div>
          <h1>3</h1>
        </div>
        <div>
          <h1>4</h1>
        </div>
      </Slider>
    </div>
  );
};

export default ReactSlick;
