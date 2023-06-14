import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function SwiperDetailsImage({ images }) {
  return (
    <div className="details-container-products">
      <div className="details-image">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
          navigation={{
            nextEl: ".swiper_detail-next",
            prevEl: ".swiper_detail-prev",
          }}
        >
          {images.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to="/detail-products" className="details_link">
                  <div className="details-products">
                    <img className="details-img" src={item} alt="" />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          paginationClickable={true}
          autoplay={3000}
          autoplayDisableOnInteraction={false}
          direction="vertical"
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {images.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img className="details-img" src={item} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-details">
          <div className="swiper_detail-prev">
            <NavigateBeforeIcon />
          </div>
          <div className="swiper_detail-next">
            <NavigateNextIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwiperDetailsImage;
