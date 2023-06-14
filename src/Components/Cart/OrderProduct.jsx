import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import { cartFinallyPrice } from "./CartSelector";
import { useSelector, useDispatch } from "react-redux";
import { cartItemsSelector } from "../Cart/CartSelector";
import { cartPromoPrice } from "./CartSelector";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { clearCart } from "./CartSlice";

function OrderProduct(props) {
  const [key, setKey] = useState("home");
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = (item) => {
    const action = clearCart(item);
    dispatch(action);
    setShow(false);
    navigate("/");
  };

  const handleShow = () => setShow(true);

  const finallyPrice = useSelector(cartFinallyPrice);
  const cartItemsCount = useSelector(cartItemsSelector);
  const promoPrice = useSelector(cartPromoPrice);

  const giaTomTat = finallyPrice - promoPrice;

  const shipPrice = 50000;

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const cartItems = useSelector((state) => {
    localStorage.setItem("items", JSON.stringify(state.cart.cartItems));
    return state.cart.cartItems;
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const renderMiniCart = () => {
    return (
      <div className="mini_cart-products">
        {cartItems.length
          ? cartItems.map((item) => {
              return (
                <div class="list-products_order-group" key={item.id}>
                  <div class="list-products_order gap-12 w-full align-center">
                    <div class="list-products_order-img">
                      <a href="/" class="text-md block">
                        <img src={item.images[0]} alt="" />
                      </a>
                    </div>
                    <div class="list-products_order flex flex-col gap-8">
                      <div class="text-a-hover">
                        <a href="/" class="text-md block text-color-main">
                          {item.productName}
                        </a>
                      </div>
                      <div class="t-tag">White, Mới, Full box, Nhập khẩu</div>
                      <div class="flex">
                        <div class="font-size-14 font-semibold">
                          <span
                            style={{ marginRight: "5px" }}
                            className=" text-pink"
                          >
                            {item.productPromotionalPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="remove-item flex align-center gap-20px">
                      <div className="quantity">{item.quantity}x</div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  };

  return (
    <div className="order-product pd-bottom-60">
      <Container>
        <div className="order-product_title pd-top-16 mg-bottom-16">
          <h4 className="font-semibold text-20">Đặt hàng</h4>
        </div>
        <Row>
          <Col md={8}>
            <div className="order-product_group ">
              <h3 className="font-semibold text-20 mg-bottom-16">
                Phương thức nhận hàng
              </h3>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="home" title="Tại cửa hàng">
                  <h5 className="text-md mg-top-16">TP. Hồ Chí Minh</h5>
                  <div className="map-store flex gap-12">
                    <label className="infor-store-order flex gap-12">
                      <input type="radio" name="address_store" />
                      <div class="">
                        <div class="infor-store_address-local text-md">
                          Số 5 - 7 Nguyễn Huy Tưởng, F6, Q. Bình Thạnh
                        </div>
                        <div class="infor-store_address-time">
                          <div class="maps">
                            <a
                              aria-label="Chỉ đường đến Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh"
                              href="https://www.google.com/maps/place/ThinkPro+-+S%E1%BB%91+5+%2B+7+Nguy%E1%BB%85n+Huy+T%C6%B0%E1%BB%9Fng,+P6,+Q.B%C3%ACnh+Th%E1%BA%A1nh,+TP+HCM/@10.7984083,106.686565,15z/data=!4m12!1m6!3m5!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!2zVGhpbmtQcm8gLSBT4buRIDUgKyA3IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgUDYsIFEuQsOsbmggVGjhuqFuaCwgVFAgSENN!8m2!3d10.8041258!4d106.6893028!3m4!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!8m2!3d10.8041258!4d106.6893028"
                              class="text-sm"
                            >
                              <i
                                class="fas fa-map-marker-alt"
                                style={{ marginRight: "5px" }}
                              ></i>
                              Chỉ đường
                            </a>
                          </div>
                        </div>
                      </div>
                    </label>
                    <label className="infor-store-order flex gap-12">
                      <input type="radio" name="address_store" />
                      <div class="">
                        <div class="infor-store_address-local text-md">
                          95 Trần Thiện Chánh, F12, Q10, HCM
                        </div>
                        <div class="infor-store_address-time">
                          <div class="maps">
                            <a
                              aria-label="Chỉ đường đến Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh"
                              href="https://www.google.com/maps/place/ThinkPro+-+S%E1%BB%91+5+%2B+7+Nguy%E1%BB%85n+Huy+T%C6%B0%E1%BB%9Fng,+P6,+Q.B%C3%ACnh+Th%E1%BA%A1nh,+TP+HCM/@10.7984083,106.686565,15z/data=!4m12!1m6!3m5!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!2zVGhpbmtQcm8gLSBT4buRIDUgKyA3IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgUDYsIFEuQsOsbmggVGjhuqFuaCwgVFAgSENN!8m2!3d10.8041258!4d106.6893028!3m4!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!8m2!3d10.8041258!4d106.6893028"
                              class="text-sm"
                            >
                              <i
                                class="fas fa-map-marker-alt"
                                style={{ marginRight: "5px" }}
                              ></i>
                              Chỉ đường
                            </a>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>

                  <h5 className="text-md mg-top-16">Hà Nội</h5>
                  <div className="map-store flex">
                    <label class="infor-store-order flex gap-12">
                      <input type="radio" name="address_store" />
                      <div className="hay">
                        <div class="infor-store_address-local text-md">
                          53 Thái Hà, Trung Liệt, Đống Đa, Hà Nội
                        </div>
                        <div class="infor-store_address-time">
                          <div class="maps">
                            <a
                              aria-label="Chỉ đường đến Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh"
                              href="https://www.google.com/maps/place/ThinkPro+-+S%E1%BB%91+5+%2B+7+Nguy%E1%BB%85n+Huy+T%C6%B0%E1%BB%9Fng,+P6,+Q.B%C3%ACnh+Th%E1%BA%A1nh,+TP+HCM/@10.7984083,106.686565,15z/data=!4m12!1m6!3m5!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!2zVGhpbmtQcm8gLSBT4buRIDUgKyA3IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgUDYsIFEuQsOsbmggVGjhuqFuaCwgVFAgSENN!8m2!3d10.8041258!4d106.6893028!3m4!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!8m2!3d10.8041258!4d106.6893028"
                              class="text-sm"
                            >
                              <i
                                class="fas fa-map-marker-alt"
                                style={{ marginRight: "5px" }}
                              ></i>
                              Chỉ đường
                            </a>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="border-t mg-top-16 border-solid mg-bottom-16"></div>
                  <h3 className="text-md font-semibold">
                    Thông tin người nhận
                  </h3>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                        style={{ fontSize: "14px" }}
                      >
                        <Form.Label>Họ và Tên</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Nhập họ và tên"
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                        style={{ fontSize: "14px" }}
                      >
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control
                          placeholder="Nhập số điện thoại"
                          name="mobile"
                          type="number"
                          maxLength="10"
                        />
                      </Form.Group>
                    </Row>
                  </Form>
                </Tab>
                <Tab eventKey="profile" title="Giao tận nơi">
                  <h5 className="text-md mg-bottom-12">Thông tin người nhận</h5>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                        style={{ fontSize: "14px" }}
                      >
                        <Form.Label>Họ và Tên</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Nhập họ và tên"
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                        style={{ fontSize: "14px" }}
                      >
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control
                          placeholder="Nhập số điện thoại"
                          name="mobile"
                          type="number"
                          maxLength="10"
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                        style={{ fontSize: "14px", marginTop: "12px" }}
                      >
                        <Form.Label>Chọn khu vực</Form.Label>
                        <Form.Control
                          placeholder="Chọn khu vực"
                          name="area"
                          type="text"
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                        style={{ fontSize: "14px", marginTop: "12px" }}
                      >
                        <Form.Label>Địa chỉ nhận hàng</Form.Label>
                        <Form.Control
                          placeholder="Nhập địa chỉ cụ thể"
                          name="location"
                          type="text"
                        />
                        <span className="t-form-control__hint">
                          Có thể là số nhà, tên đường, tòa nhà. VD: Số 53 Thái
                          Hà
                        </span>
                      </Form.Group>
                    </Row>
                  </Form>
                </Tab>
              </Tabs>
            </div>
          </Col>
          <Col md={4}>
            <div className="price-discount-promo mg-bottom-16">
              <h5>Tóm tắt đơn hàng</h5>
              <div className="border-t border-solid"></div>
              <div className="flex justify-between text-sm pd-16">
                <span>Tạm tính</span>{" "}
                <span className="font-semibold">
                  {VND.format(giaTomTat)}
                </span>
              </div>
              <div className="flex justify-between text-sm pd-16">
                <span>Phí vận chuyển</span>{" "}
                <span className="font-semibold">{VND.format(shipPrice)}</span>
              </div>
              <div className="border-t border-dashed"></div>
              <div className="flex justify-between text-sm pd-16">
                <span>Tổng cộng</span>{" "}
                <span className="text-h4 text-pink font-semibold">
                  {VND.format(giaTomTat + shipPrice)}
                </span>
              </div>
              <div className="btn-send-order">
                <button
                  className="t-button-purchare t-button--block"
                  style={{ color: "#ffffff" }}
                  onClick={handleShow}
                >
                  Đặt hàng
                </button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Đặt hàng thành công !!!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Cảm ơn bạn đã ủng hộ và mua sắm tại ThinkPro ! Thông tin
                    đặt hàng của bạn đã được gửi qua mail !
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="order-product_quantity-order">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Sản phẩm trong đơn ({cartItemsCount})
                  </Accordion.Header>
                  <Accordion.Body>
                    {cartItems.length > 0 ? renderMiniCart() : null}

                    {/* <div className="border-t mg-top-16 border-solid mg-bottom-16"></div> */}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OrderProduct;
