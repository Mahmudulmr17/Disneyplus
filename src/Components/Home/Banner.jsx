import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slide1 from "../Images/slide1.jpg";
import slide2 from "../Images/slide2.jpg";
import slide3 from "../Images/slide3.jpg";
import slide4 from "../Images/slide4.jpg";
import slide5 from "../Images/slide5.jpg";
import slide6 from "../Images/slide6.jpg";
import slide7 from "../Images/slide7.jpg";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <CarouselImgs {...settings}>
        <Warp>
          <div>
            <img src={slide1} alt={slide1} />
          </div>
        </Warp>
        <Warp>
          <div>
            <img src={slide2} alt={slide2} />
          </div>
        </Warp>
        <Warp>
          <div>
            <img src={slide3} alt={slide3} />
          </div>
        </Warp>
        <Warp>
          <div>
            <img src={slide4} alt={slide4} />
          </div>
        </Warp>
        <Warp>
          <div>
            <img src={slide5} alt={slide5} />
          </div>
        </Warp>

        <Warp>
          <div>
            <img src={slide6} alt={slide6} />
          </div>
        </Warp>

        <Warp>
          <div>
            <img src={slide7} alt={slide7} />
          </div>
        </Warp>
      </CarouselImgs>
    </div>
  );
};

const CarouselImgs = styled(Slider)`
  /*Dots*/
  ul li button {
    &::before {
      font-size: 11px;
      color: rgb(150, 158, 171);
    }
  }

  ul li.slick-active button {
    &::before {
      color: #fff;
    }
  }
  /*left - right button*/
  & > button {
    opacity: 0;
    z-index: 1500;
    width: 5vw;
    height: 100%;

    &:hover {
      opacity: 1;
      z-index: 2000;
      transition: opacity 0.2s ease 0s;
    }
  }

  .slick-prev {
    left: -65px;
  }

  .slick-next {
    right: -65px;
  }
  /*slick -list*/
  .slick-list {
    overflow: initial !important;
  }
`;
const Warp = styled.div`
  position: relative;

  div {
    border-radius: 4px;
    padding: 4px;
    display: block;
    opacity: 1;
    z-index: 2000;
    object-position: center;

    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
    &:hover {
      padding: 1px;
      border: 4px solid #fff;
      transition-duration: 300ms;
    }
  }
`;
export default Banner;
