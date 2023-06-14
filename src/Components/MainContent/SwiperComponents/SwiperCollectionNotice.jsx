import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import productAPI from "../../../APIs/productAPI";

import "swiper/css";
import "swiper/css/navigation";

function SwiperCollectionNotice(props) {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const getCollections = async () => {
      const data = await (await productAPI.getAllCollections()).data;
      setCollections(data);
    };
    getCollections();
  }, []);

  return (
    <div className="colection-list">
      <div className="list-colection-group">
        <Swiper
          spaceBetween={24}
          slidesPerView={3}
          navigation={{}}
          modules={[Navigation]}
        >
          {collections.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="item-colection">
                  <div className="item-group">
                    <Link to={`/deal-product/${item.uid}`}>
                      <div className="item-group-flex">
                        <div className="title-colection">
                          <h3 className="text-h3 font-semibold an">
                            {item.title}
                          </h3>
                        </div>
                        <div className="img-colection">
                          <img src={item.thumbnail} alt="" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperCollectionNotice;
