import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import productAPI from "../../../APIs/productAPI";
import Pagination from "@mui/material/Pagination";

function DealProducts({ uid, productCategory }) {
  const [dealProduct, setDealProduct] = useState([]);
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = (await productAPI.getDealProducts(uid)).data;
      setDealProduct(data);
    };

    getProducts();
  }, [uid]);

  useEffect(() => {
    const getListProducts = async () => {
      const response = (await productAPI.getAllDealProducts()).data;
      setListProduct(response);
    };

    getListProducts();
  }, []);

  return (
    <div className="deal-products">
      <Container>
        <div>
          {dealProduct &&
            dealProduct.map((item, index) => (
              <>
                <div className="banner-deal" key={index}>
                  <img className="t-img" src={item.banner} alt="" />
                </div>
                <div className="deal-product_group">
                  <Row>
                    <Col>
                      <div className="flex flex-col">
                        <h1 className="text-h3 font-semibold mg-0">
                          {item.title}
                        </h1>
                      </div>
                    </Col>
                  </Row>
                </div>
              </>
            ))}
        </div>
      </Container>
      <Container>
        <div className="product-suggests_items">
          {listProduct &&
            listProduct.map((item, index) => (
              <div className="suggest-items" key={index}>
                <Link
                  to={`/detail-products/${item.uid}`}
                  className="suggest-items-link"
                >
                  <div className="list-products-suggest-image">
                    <img src={item.images[0]} alt="" />
                  </div>
                  <div className="suggest-product-item__info">
                    <div className="suggest-item__title">
                      {item.productName}
                    </div>
                    <div className="suggest-item__price-wrapper">
                      <span className="suggest-item__secondary-text">Từ:</span>
                      <span className="suggest-item__price">
                        {item.productPrice}
                      </span>
                      <div className="tags-promotion">15%</div>
                    </div>
                    <div className="suggest-item__color-wrapper">
                      <span className="suggest-item__secondary-text">
                        Màu:{" "}
                        <div className="colection-color inline-block">
                          {item.colorList ? (
                            <div
                              className=" t-color-small"
                              style={{
                                display: "inline-block",
                                background: `${item.colorList}`,
                              }}
                            ></div>
                          ) : null}
                        </div>
                      </span>
                      <div className="suggest-color"></div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
        {/* <div>
          {listProduct.length ? (
            <div className="add_products-list">
              <Pagination
                count={Math.ceil(pagination._totalRows / pagination._limit)}
                page={pagination._page}
                color="primary"
                onChange={paginationChange}
              />
            </div>
          ) : null}
        </div> */}
      </Container>
    </div>
  );
}

export default DealProducts;
