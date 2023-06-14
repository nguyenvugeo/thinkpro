import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function ListCalalorBrandProducts({ products }) {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div className="group-list_products-colection">
      <Row style={{ padding: "0" }}>
        {products
          ? products.map((item, index) => {
              return (
                <Col
                  md={2}
                  key={index}
                  style={{
                    width: "20%",
                    paddingRight: "0",
                    margin: "0 0 12px 0",
                  }}
                >
                  <div className="colection-items">
                    <Link
                      to={`/detail-products/${item.uid}`}
                      className="colection-items-link"
                    >
                      <div className="list-products-colection-image">
                        <img src={item.images[0]} alt="" />
                      </div>
                      <div className="colection-product-item__info">
                        <div className="colection-item__title">
                          {item.productName}
                        </div>
                        <div className="colection-item__price-wrapper">
                          <span className="colection-item__secondary-text">
                            Từ:
                          </span>
                          <span className="colection-item__price">
                            {VND.format(item.productPromotionalPrice)}
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
                        </div>
                        <div className="colection-item__color-wrapper">
                          <span className="colection-item__secondary-text">
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
                        </div>
                      </div>
                    </Link>
                  </div>
                </Col>
              );
            })
          : null}
      </Row>
    </div>
  );
}

export default ListCalalorBrandProducts;
