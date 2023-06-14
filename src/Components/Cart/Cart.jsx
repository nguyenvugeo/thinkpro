import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setQuantity } from "./CartSlice";
import { removeFromCart } from "./CartSlice";
import { cartItemsSelector } from "./CartSelector";
import { clearCart } from "./CartSlice";
import { cartFinallyPrice } from "./CartSelector";
import { cartPromoPrice } from "./CartSelector";

function Cart(props) {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  //increase counter
  const increase = (item) => {
    let quantity = item.quantity;
    quantity++;
    const action = setQuantity({ item, quantity });
    dispatch(action);
  };

  //decrease counter
  const decrement = (item) => {
    let quantity = item.quantity;
    if (quantity > 1) {
      quantity--;
      const action = setQuantity({ item, quantity });
      dispatch(action);
    }
  };

  const handleRemoveItem = (item) => {
    const action = removeFromCart(item);
    dispatch(action);
  };

  const handleClearCart = (item) => {
    const action = clearCart(item);
    dispatch(action);
  };

  const renderCartItem = () => {
    return (
      <div className="cart-item_render">
        <div className="list-products_buy-group ">
          {cart.map((item, index) => {
            return (
              <div className="list-products_buy gap-12 w-full align-center">
                <div className="list-products_buy-img">
                  <a href="/" className="text-md block">
                    <img src={item.images[0]} alt="" />
                  </a>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="list-products_buy-content flex justify-between">
                    <div className="text-a-hover flex align-center">
                      <a href="/" className="text-md block text-color-main">
                        {item.productName}
                      </a>
                      <div className="t-tag">{item.productVersion}</div>
                    </div>
                    <div className="flex items-center flex-col">
                      <div className="text-sm line-through">
                        {item.productPrice}
                      </div>
                      <div className="text-h4 text-pink font-semibold">
                        {item.productPromotionalPrice}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="t-input-number">
                      <button
                        aria-label="Giảm"
                        className="t-input-number__btn br-radis-left border-2 bg-white"
                        disabled={item.quantity == 1}
                        onClick={() => decrement(item)}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        placeholder={item.quantity}
                        value={item.quantity}
                        type="text"
                        className="t-input-number__input"
                      />
                      <button
                        aria-label="Tăng"
                        className="t-input-number__btn br-radis-right border-2 bg-white"
                        onClick={() => {
                          increase(item);
                        }}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="btn-none bg-white flex gap-8 items-center "
                    >
                      <span className="text-sm">Xóa</span>
                      <i className="fas fa-window-close"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="btn-clear_product mg-top-16 flex justify-end">
          <button
            onClick={handleClearCart}
            class="text-20 t-button-clear font-semibold"
          >
            Xóa toàn bộ giỏ hàng
          </button>
        </div>
      </div>
    );
  };

  const renderDefault = () => {
    return (
      <div className="empty-cart pd-40">
        <div className="empty-cart_img">
          <img src="/Assets/ImageCart/emtybox.jpg" alt="" />
        </div>
        <div className="empty-cart_content">
          <div className="empty-cart_content-text">
            <h5 className="block mg-0 font-semibold text-h5">Giỏ hàng trống</h5>
            <p className="text-md text-center mt-3">
              Hãy thoải mái lựa chọn sản phẩm nhé
            </p>
          </div>
          <div className="btn-cart_empty">
            <button className="t-button">
              <Link to="/">Khám phá ngay</Link>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const cartItemsCount = useSelector(cartItemsSelector);

  const finallyPrice = useSelector(cartFinallyPrice);

  const promoPrice = useSelector(cartPromoPrice);

  const giaTomTat = finallyPrice - promoPrice;

  return (
    <div className="cart-buyer">
      <div className="cart-group">
        <Container>
          <div className="cart-container">
            <div className="flex justify-between align-center mg-bottom-16">
              <h4 class="text-20 font-semibold">Giỏ hàng ({cartItemsCount})</h4>
            </div>
            <Row>
              <Col md={8}>
                {cart.length > 0 ? renderCartItem() : renderDefault()}
              </Col>
              <Col md={4}>
                <div className="price-discount-promo">
                  <h5>Tóm tắt đơn hàng</h5>
                  <div class="flex justify-between text-sm pd-16">
                    <span>Giảm giá</span>{" "}
                    <span class="font-semibold">{VND.format(promoPrice)}</span>
                  </div>
                  <div class="border-t border-dashed"></div>
                  <div class="flex justify-between text-sm pd-16">
                    <span>Tổng cộng</span>{" "}
                    <span class="text-h4 text-pink font-semibold">
                      {VND.format(giaTomTat)}
                    </span>
                  </div>

                  <button class="t-button-purchare t-button--block">
                    <Link style={{ color: "#ffffff" }} to="/order-product">
                      Đặt hàng
                    </Link>
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Cart;
