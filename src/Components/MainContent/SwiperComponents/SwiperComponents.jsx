import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import productAPI from "../../../APIs/productAPI";

import "swiper/css";
import "swiper/css/navigation";

function SwiperComponents({ navigatior }) {
  const [productComponents, setProductComponents] = useState([]);

  useEffect(() => {
    const getProductsComponents = async () => {
      const data = await (await productAPI.getAllProductsCatargories()).data;
      setProductComponents(data);
    };
    getProductsComponents();
  }, []);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={6}
      navigation={navigatior}
    >
      {productComponents.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            style={{ textAlign: "center", width: "fit-content" }}
          >
            <Link
              to={`/page-colection/${item.uid}`}
              className="nav-link hover-a"
            >
              <div className="list-products flex">
                <img className="img" src={item.thumbnail} alt="" />
                <span className="title-list-product">{item.categoryName}</span>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperComponents;
