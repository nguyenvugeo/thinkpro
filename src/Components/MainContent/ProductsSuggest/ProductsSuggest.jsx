import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box } from "@mui/material";
import productAPI from "../../../APIs/productAPI";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

import "swiper/css";
import "swiper/css/navigation";

function ProductsSuggest(props) {
  const [productsSuggest, setProductsSuggest] = useState([]);
  const [productList, setProductList] = useState([]);
  const [filter, setFilter] = useState("laptop");
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
  });

  useEffect(() => {
    const getSuggestProducts = async () => {
      const data = (await productAPI.getAllBrand()).data;
      setProductsSuggest(data);
    };

    getSuggestProducts();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const response = (await productAPI.getByProducts(filter)).data;
      setPagination(response.pagination);
    };

    getProducts();
  }, [filter]);

  useEffect(() => {
    const getProducts = async () => {
      const response = (await productAPI.getByProducts(filter, pagination))
        .data;
      setProductList(response.data);
    };

    getProducts();
  }, [filter, pagination]);

  function handleFilter(e) {
    let productFilter = e.target.value;
    setFilter(productFilter);
  }

  const renderProductsSpec = (item) => {
    const { productCategory, productFeatures, giftValue } = item;
    if (productCategory == "laptop") {
      return (
        <div className="suggest-item__specs">
          <div className="border-t border-solid mg-top-12 mg-bottom-12"></div>
          <div className="suggest-item__info">
            <span className="info-products">
              CPU: {productFeatures.processor.CPUType}
            </span>
            <span className="info-products">
              RAM: {productFeatures.ram.capacity}
            </span>
            <span className="info-products">
              Ổ Cứng: {productFeatures.hardDrive.SSDCapacity}
            </span>
            <span className="info-products">
              Màn Hình: {productFeatures.screen.screen}
            </span>
            <span className="info-products">
              Card:{productFeatures.graphicsCard.cardOnboard}
            </span>
          </div>
          {giftValue ? (
            <div className="suggest-item__gift">
              <div className="border-t border-solid mg-top-12 mg-bottom-12"></div>
              <span className="suggest-item__gift-text">Quà tặng</span>
              <span className="suggest-item__gift-amount">{giftValue}</span>
            </div>
          ) : null}
        </div>
      );
    }
  };

  const paginationChange = (e, page) => {
    setPagination({
      ...pagination,
      _page: page,
    });
  };

  return (
    <div className="products-suggest">
      <Container>
        <div className="container-pr-sg">
          <h2 className="title-suggest">Gợi ý cho bạn</h2>
          <div className="swiper-products-suggest">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={"auto"}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
            >
              {productsSuggest.map((item, index) => {
                return (
                  <SwiperSlide
                    style={{ textAlign: "center", width: "fit-content" }}
                    key={index}
                  >
                    <div className="suggest-products">
                      <button
                        className="suggest-products_btn"
                        onClick={handleFilter}
                        value={item.uid}
                      >
                        {item.categoryName}
                      </button>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="swiper-navigation">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                <div className="swiper-prev">
                  <NavigateBeforeIcon />
                </div>
                <div className="swiper-next">
                  <NavigateNextIcon />
                </div>
              </Box>
            </div>
          </div>

          <div className="product-suggests_items">
            {productList.length &&
              productList.map((item, index) => {
                return (
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
                          <span className="suggest-item__secondary-text">
                            Từ:
                          </span>
                          <span className="suggest-item__price">
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
                        {renderProductsSpec(item)}
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>

          {productList.length ? (
            <div className="add_products-list">
              <Pagination
                count={Math.ceil(pagination._totalRows / pagination._limit)}
                color="primary"
                page={pagination._page}
                onChange={paginationChange}
              />
              {/* <button className="button-add_products">Xem thêm</button> */}
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}

export default ProductsSuggest;
