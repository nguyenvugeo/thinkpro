import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import productAPI from "../../../APIs/productAPI";

import "swiper/css";
import "swiper/css/navigation";

function SwiperPreOrder(props) {
  const [productsPreOrder, setProductsPreOrder] = useState([]);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const deadline = "July, 10, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getProductPre = async () => {
      const data = await (await productAPI.getProductPreOrder()).data;
      setProductsPreOrder(data);
    };

    getProductPre();
  }, []);

  return (
    <div className="swiper-pre-order mg-top-24">
      <div className="list-pre-group">
        <Swiper
          spaceBetween={12}
          slidesPerView={4}
          navigation={{}}
          modules={[Navigation]}
        >
          {productsPreOrder.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Link
                  to={`/detail-products/${item.uid}`}
                  className="text-color-main"
                >
                  <div className="list-pre-order">
                    <Card sx={{ position: "relative" }}>
                      <CardContent
                        className="inline-flex flex-col gap-4px"
                        sx={{ position: "absolute" }}
                      >
                        <Typography
                          variant="span"
                          style={{
                            fontWeight: "600",
                            fontSize: "12px",
                            backgroundColor: "blue",
                            color: "#ffffff",
                            padding: "2px 4px",
                            borderRadius: "5px",
                          }}
                          display="inline-block"
                        >
                          Còn 100 suất
                        </Typography>
                        {item.orderDate ? (
                          <Typography
                            variant="span"
                            style={{
                              fontWeight: "600",
                              fontSize: "12px",
                              backgroundColor: "red",
                              color: "#fff",
                              padding: "2px 4px",
                              borderRadius: "5px",
                              textAlign: "center",
                            }}
                            display="inline-block"
                          >
                            <div className="timer" role="timer">
                              <div className="box">
                                <span id="day">
                                  {days} ngày, {hours}h {minutes}p {seconds}s
                                </span>
                              </div>
                            </div>
                          </Typography>
                        ) : null}
                      </CardContent>
                      <CardMedia
                        component="img"
                        height="194"
                        image={item.images[0]}
                      />
                      <CardContent>
                        <Typography
                          variant="subtitle1"
                          style={{ fontWeight: "600", fontSize: "14px" }}
                          display="block"
                          gutterBottom
                        >
                          {item.productName}
                        </Typography>
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          Từ:{" "}
                          <span className="price-promo">
                            {VND.format(item.productPrice)}
                          </span>
                          <div className="tags-promotion">
                            {Math.floor(
                              ((item.productPrice -
                                item.productPromotionalPrice) /
                                item.productPrice) *
                                100
                            )}
                            %
                          </div>
                        </Typography>
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          Màu:{" "}
                          {item.colorList ? (
                            <div
                              className=" t-color-small"
                              style={{
                                display: "inline-block",
                                background: `${item.colorList}`,
                              }}
                            ></div>
                          ) : null}
                        </Typography>
                        <div className="tags-prommo">
                          <Chip
                            label={item.productStatus}
                            style={{ fontSize: "12px" }}
                          />
                        </div>
                      </CardContent>
                    </Card>
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

export default SwiperPreOrder;
