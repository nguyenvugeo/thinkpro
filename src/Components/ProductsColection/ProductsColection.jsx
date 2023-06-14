import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import productAPI from "../../APIs/productAPI";

import "swiper/css";

function ProductsColection({ productCategory }) {
  const [productByBrand, setProductByBrand] = useState([]);

  useEffect(() => {
    const getByBrands = async () => {
      const data = await (await productAPI.getByBrand(productCategory)).data;
      setProductByBrand(data);
    };

    getByBrands();
  }, [productCategory]);

  if (productByBrand.length > 0) {
    return (
      <Container>
        <div className="category-overview">
          <div className="category-overview-title">
            <Row>
              <Col md={6}>
                <h2>{productByBrand[0].categoryName}</h2>
                <p>{productByBrand[0].description}</p>
              </Col>
            </Row>
          </div>
          <div className="brand-list">
            <Row>
              <Col>
                <div className="brand-list_group">
                  <Swiper slidesPerView={8} spaceBetween={8}>
                    {productByBrand[0].brands.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <Link
                            to={`/catalor-brand/${item.uid}`}
                            className="nav-link"
                          >
                            <div className="brand-list-items">
                              <span className="brand-list-items_text">
                                {item.name}
                              </span>
                            </div>
                          </Link>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default ProductsColection;
