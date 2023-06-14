import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import productAPI from "../../APIs/productAPI";

import "swiper/css";

function CatalorBrandProducts({ catalor }) {
  const [childBrand, setChildBrand] = useState({});

  useEffect(() => {
    const getChildBrands = async () => {
      const data = await (await productAPI.getAllBrand()).data;
      data.forEach((element) => {
        if (element.brands) {
          let x = element.brands.filter((item) => item.uid == catalor);
          if (x.length > 0) {
            setChildBrand(x[0]);
          }
        }
      });
    };

    getChildBrands();
  }, []);

  const renderModel = () => {
    if (childBrand.hasOwnProperty("models")) {
      return childBrand.models.map((item, index) => {
        return (
          <SwiperSlide
            style={{ textAlign: "center", width: "fit-content" }}
            key={index}
          >
            <Link to="/catalor-brand" className="nav-link">
              <div className="brand-list-items">
                <span className="brand-list-items_text">{item.modelName}</span>
              </div>
            </Link>
          </SwiperSlide>
        );
      });
    }
  };
  if (Object.getOwnPropertyNames(childBrand).length) {
    return (
      <div className="catalor-brands-product">
        <div className="catalor-brands-produc_title flex gap-24">
          <div className="catalor-brand-products_image">
            <img
              src={childBrand.image}
              className="t-img w-full h-full object-contain block"
            />
          </div>
          <div className="catalor-brand-products_content overflow-hidden flex-1">
            <h2 className="text-h3 font-semibold">{childBrand.name}</h2>
            <div className="flex items-center gap-4px">
              <i className="fa-solid fa-star" style={{ color: "#3bb346" }}></i>
              <span className="text-sm">ThinkPro là nhà bán lẻ chính thức</span>
            </div>
            <p className="mt-2 text-md max-width-600">
              {childBrand.description}
            </p>
            <div className="line-straight my-4"></div>
            <Row>
              <Col>
                <Swiper slidesPerView={"auto"} spaceBetween={20}>
                  {renderModel()}
                </Swiper>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default CatalorBrandProducts;
