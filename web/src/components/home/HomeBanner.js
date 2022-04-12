import React from 'react';
import Slider from 'react-slick';
export default () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <section className="content-home">
        <div className="container">
          <div className="img-main">

            <Slider {...settings} >
              <div>
                <img
                  style={{ width: "100%", cursor: "pointer", zIndex: 0 }}
                  src="https://hyt.r.worldssl.net/cms-images/banner/434445_only-rose.jpg"
                  alt="valentine"
                />                </div>
              <div>
                <img
                  style={{ width: "100%", cursor: "pointer", zIndex: 0 }}
                  src="https://hyt.r.worldssl.net/cms-images/banner/434410_dong-hanh-cung-nong-dan-viet-nam.jpg"
                  alt="valentine"
                />                </div>
              <div>
                <img
                  style={{ width: "100%", cursor: "pointer", zIndex: 0 }}
                  src="	https://hyt.r.worldssl.net/images/valentine/valentine.jpg"
                  alt="valentine"
                />                </div>
              <div>
                <img
                  style={{ width: "100%", cursor: "pointer", zIndex: 0 }}
                  src="https://hyt.r.worldssl.net/cms-images/banner/434433_63-tinh-thanh.jpg"
                  alt="valentine"
                />                </div>
              <div>
                <img
                  style={{ width: "100%", cursor: "pointer", zIndex: 0 }}
                  src="	https://hyt.r.worldssl.net/images/valentine/valentine.jpg"
                  alt="valentine"
                />                </div>
            </Slider>
          </div>

        </div>
      </section>

    </>
  )
}