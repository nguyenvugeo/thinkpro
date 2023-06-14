import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { buttons } from "./dataDeal";
import { getProducts, filterProducts } from "./services";
import { Link } from "react-router-dom";

function PromotionProducts(props) {
  const [filtredProducts, setFiltredProducts] = useState(null);
  
  useEffect(() => {
    setFiltredProducts(getProducts());
  }, []);

  function handleFilter(e) {
    let itemProducts = e.target.value;
    itemProducts !== "all"
      ? setFiltredProducts(filterProducts(itemProducts))
      : setFiltredProducts(getProducts());
  }
  return (
    <div className="promo-product">
      <Container>
        <div className="banner-deal">
          <img
            className="t-img"
            src={"/Assets/ImageDeal/banner1.jpeg"}
            alt=""
          />
        </div>
        <div className="promo-product_group">
          <Row>
            <Col>
              <div className="flex flex-col">
                <h1 className="text-h3 font-semibold mg-0">Máy chơi game</h1>
                <div className="border-t border-solid mg-top-16 mg-bottom-16"></div>
                <div className="filter-promo flex gap-8">
                  {buttons &&
                    buttons.map((item, index) => (
                      <>
                        <button
                          key={index}
                          value={item.value}
                          defaultChecked
                          onClick={handleFilter}
                        >
                          {item.name}
                        </button>
                      </>
                    ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className="product-suggests_items">
          {filtredProducts &&
            filtredProducts.map((item) => (
              <div className="suggest-items" key={item.id}>
                <Link to="/detail-products" className="suggest-items-link">
                  <div className="list-products-suggest-image">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="suggest-product-item__info">
                    <div className="suggest-item__title">
                      {item.nameProduct}
                    </div>
                    <div className="suggest-item__price-wrapper">
                      <span class="suggest-item__secondary-text">Từ:</span>
                      <span class="suggest-item__price">{item.priceOld}</span>
                      <div class="tags-promotion">{item.tags}</div>
                    </div>
                    <div className="suggest-item__color-wrapper">
                      <span className="suggest-item__secondary-text">Màu:</span>
                      <div className="suggest-color"></div>
                    </div>
                    <div className="suggest-item__specs">
                      <div className="suggest-item__info">
                        <span class="info-products mg-top-12">
                          CPU: {item.cpu}
                        </span>
                      </div>
                      <div className="suggest-item__gift">
                        <span className="suggest-item__gift-text">
                          Quà tặng
                        </span>
                        <span className="suggest-item__gift-amount">
                          {item.gift}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}

export default PromotionProducts;
