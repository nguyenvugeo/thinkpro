import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import SellIcon from "@mui/icons-material/Sell";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import AlarmIcon from "@mui/icons-material/Alarm";
import productAPI from "../../../APIs/productAPI";
import SwiperPreOrder from "./SwiperPreOrder";

import "swiper/css";
import "swiper/css/navigation";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function SwiperPromotionProducts(props) {
  const [expanded, setExpanded] = useState(false);
  const [contentPromo, setContentPromo] = useState([]);

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const getListContent = async () => {
      const data = await (await productAPI.getProductPromo()).data;
      setContentPromo(data);
    };

    getListContent();
  }, []);

  return (
    <div className="promotion-products_group">
      <h2 className="header-title-promotion mg-0">KHUYẾN MÃI</h2>
      <div className="promotion-products mg-top-24">
        <div className="section-pre-order">
          <div className="relative">
            <div className="title-pre-order">
              <AlarmIcon style={{ fontSize: "24px" }} />
              <span className="text-span font-weight-600">Pre-Order</span>
              <span className="text-span font-weight-600 opacity-7 ">
                Đặt sớm, giá ngon
              </span>
            </div>
          </div>
        </div>
        <SwiperPreOrder />
        <div className="section-promo-order">
          <div className="title-promo flex items-center">
            <SellIcon
              style={{ fontSize: "24px", color: "red", marginRight: "16px" }}
            />
            <span className="text-span-promo">Khuyến mãi nổi bật</span>
          </div>
          <div className="list-featured-products">
            <div className="swiper-list-promo">
              <Swiper
                spaceBetween={24}
                slidesPerView={3}
                navigation={{}}
                modules={[Navigation]}
              >
                {contentPromo.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="item-group">
                        <Link to="/promo-product">
                          <div className="item-group-promo">
                            <div className="img-promo">
                              <img src={item.thumbnail} alt="" />
                            </div>
                            <div className="title-promo-group">
                              <h4 className="text-promo">{item.title}</h4>
                              <span className="text-span-promo">
                                {item.subTitle}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwiperPromotionProducts;
