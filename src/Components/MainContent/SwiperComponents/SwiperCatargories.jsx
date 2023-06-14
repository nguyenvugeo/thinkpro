import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import productAPI from "../../../APIs/productAPI";

import "swiper/css";
import "swiper/css/navigation";

function SwiperCatargories(props) {
  const [productCatagories, setProductCatagories] = useState([]);

  useEffect(() => {
    const getProductsCatalor = async () => {
      const data = await (await productAPI.getAllProductsCatargories()).data;
      setProductCatagories(data);
    };
    getProductsCatalor();
  }, []);

  return (
    <div className="categories-list">
      <div className="list-catagories-group">
        <Swiper
          spaceBetween={20}
          slidesPerView={8}
          navigation={{}}
          modules={[Navigation]}
        >
          {productCatagories.map((item, index) => {
            return (
              <SwiperSlide
                style={{ textAlign: "center", width: "fit-content" }}
                key={index}
              >
                <Link
                  to={`/page-colection/${item.uid}`}
                  className="text-color-main"
                >
                  <div className="list-catagories">
                    <div className="img-catagories">
                      <img className="img" src={item.thumbnail} alt="" />
                    </div>
                    <span className="title-list-product block">
                      {item.categoryName}
                    </span>
                    <span className="quantity-product block">
                      {item.productCount} sản phẩm
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperCatargories;
