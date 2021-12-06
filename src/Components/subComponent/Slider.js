import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const Slider = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className="slider-box mx-1" onDragStart={handleDragStart}>
      <img
        src="http://tokyo.ibthemespro.com/assets/img/partners/6.png"
        alt=""
      />
    </div>,
    <div className="slider-box mx-1" onDragStart={handleDragStart}>
      <img
        src="http://tokyo.ibthemespro.com/assets/img/partners/3.png"
        alt=""
      />
    </div>,
    <div className="slider-box mx-1" onDragStart={handleDragStart}>
      <img
        src="http://tokyo.ibthemespro.com/assets/img/partners/5.png"
        alt=""
      />
    </div>,
    <div className="slider-box mx-1" onDragStart={handleDragStart}>
      <img
        src="http://tokyo.ibthemespro.com/assets/img/partners/7.png"
        alt=""
      />
    </div>,
    <div className="slider-box mx-1" onDragStart={handleDragStart}>
      <img
        src="http://tokyo.ibthemespro.com/assets/img/partners/8.png"
        alt=""
      />
    </div>,
    <div className="slider-box mx-1" onDragStart={handleDragStart}>
      <img
        src="http://tokyo.ibthemespro.com/assets/img/partners/1.png"
        alt=""
      />
    </div>,
    <div className="slider-box mx-1" onDragStart={handleDragStart}>
      <img
        src="http://tokyo.ibthemespro.com/assets/img/partners/2.png"
        alt=""
      />
    </div>,
    <div className="slider-box  mx-1" onDragStart={handleDragStart}>
      <img
        src="http://tokyo.ibthemespro.com/assets/img/partners/4.png"
        alt=""
      />
    </div>,
  ];
  return (
    <div className="slider mt-5 mb-5">
      <AliceCarousel
        items={items}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
      />
    </div>
  );
};

export default Slider;
