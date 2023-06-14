import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import SwiperDetailsImage from "../MainContent/SwiperComponents/SwiperDetailsImage";
import Marquee from "react-fast-marquee";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import productAPI from "../../APIs/productAPI";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Cart/CartSlice";
import { useNavigate } from "react-router-dom";

function DetailProducts(props) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { uid } = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [showMonth, setShowMonth] = useState(false);
  const [showConfiguration, setShowConfiguration] = useState(false);
  const [counter, setCounter] = useState(1);

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseConfiguration = () => setShowConfiguration(false);
  const handleShowConfiguration = () => setShowConfiguration(true);

  const handleCloseMonth = () => setShowMonth(false);
  const handleShowMonth = () => setShowMonth(true);

  const handleCloseAddress = () => setShowAddress(false);
  const handleShowAddress = () => setShowAddress(true);

  // const cart = useSelector(state => state.cart.cartItems);
  // console.log(cart);
  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
  };

  useEffect(() => {
    const getProductByID = async () => {
      const data = (await productAPI.getByID(uid)).data;
      setProducts(data);
    };

    getProductByID();
  }, [uid]);

  const handleAddToCart = (item, quantity) => {
    const product = {
      ...item,
      quantity: quantity,
    };
    const action = addToCart(product);
    dispatch(action);
  };

  const handleByToCart = (item, quantity) => {
    const product = {
      ...item,
      quantity: quantity,
    };
    const action = addToCart(product);
    dispatch(action);
    navigate("/cart-page");
  };

  const percentDiscount = (item) =>
    (
      (item.productPrice - item.productPromotionalPrice) /
      item.productPrice
    ).toFixed() * 100;

  const renderDetailProduct = (products) => {
    const { productFeatures } = products;
    if (productFeatures.processor) {
      return (
        <div>
          <div className="detailed_configuration-title">
            <h2 className="text-h5 font-semibold">Cấu hình đặc điểm</h2>
            <button
              onClick={handleShowConfiguration}
              className="flex items-center button-detail"
            >
              <span className="text-md text-primary">
                Xem cấu hình chi tiết
              </span>
              <i className="fas fa-chevron-right text-i"></i>
            </button>
            <Modal
              size="lg"
              show={showConfiguration}
              onHide={handleCloseConfiguration}
            >
              <Modal.Header closeButton>
                <Modal.Title>Cấu hình chi tiết</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col xs={12} md={6} style={{ marginBottom: "10px" }}>
                    <span className="font-semibold">Bộ xử lý</span>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Loại CPU:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.processor.CPUType}
                      </span>
                    </div>

                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Tốc độ:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.processor.speed}
                      </span>
                    </div>

                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Bộ nhớ đệm:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.processor.caching}
                      </span>
                    </div>
                  </Col>
                  <Col xs={12} md={6} style={{ marginBottom: "10px" }}>
                    <span className="font-semibold">RAM</span>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Dung lượng:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.ram.capacity}
                      </span>
                    </div>

                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Hỗ trợ tối đa:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.ram.maximumSupport}
                      </span>
                    </div>
                  </Col>
                  <Col xs={12} md={6} style={{ marginBottom: "10px" }}>
                    <span className="font-semibold">Màn hình</span>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Màn hình:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.screen.screen}
                      </span>
                    </div>

                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Tấm phủ:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.screen.coverPlate}
                      </span>
                    </div>

                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Thông số khác:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.screen.otherParameters}
                      </span>
                    </div>
                  </Col>
                  <Col xs={12} md={6} style={{ marginBottom: "10px" }}>
                    <span className="font-semibold">Pin</span>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        {productFeatures.pin.capacity}
                      </span>
                    </div>
                  </Col>
                  <Col xs={12} md={6} style={{ marginBottom: "10px" }}>
                    <span className="font-semibold">Card đồ họa</span>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Card onboard:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.graphicsCard.cardOnboard}
                      </span>
                    </div>

                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Card rời:
                      </span>
                      <span className="detailed_configuration-info--span">
                        Không
                      </span>
                    </div>
                  </Col>
                  <Col xs={12} md={6} style={{ marginBottom: "10px" }}>
                    <span className="font-semibold">Ổ cứng</span>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Dung lượng SSD:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.hardDrive.SSDCapacity}
                      </span>
                    </div>

                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Khả năng nâng cấp:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.hardDrive.upgradability}{" "}
                      </span>
                    </div>
                  </Col>
                  <Col xs={12} md={6} style={{ marginBottom: "10px" }}>
                    <span className="font-semibold">
                      Khối lượng & Kích thước
                    </span>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Khối lượng:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures["weight&Dimensions"].mass}
                      </span>
                    </div>

                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Kích thước:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures["weight&Dimensions"].size}
                      </span>
                    </div>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Chất liệu vỏ:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures["weight&Dimensions"].shellMaterial}
                      </span>
                    </div>
                  </Col>
                  <Col xs={12} md={6} style={{ marginBottom: "10px" }}>
                    <span className="font-semibold">Webcam và Âm thanh</span>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Webcam:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.webcamAndAudio.webcam}
                      </span>
                    </div>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Công nghệ âm thanh:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.webcamAndAudio.audioTechnology}
                      </span>
                    </div>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleCloseConfiguration}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="detailed_configuration-content">
            <Col>
              <span className="font-semibold">Bộ xử lý</span>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Loại CPU:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.processor.CPUType}
                </span>
              </div>

              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Tốc độ:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.processor.speed}
                </span>
              </div>

              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Bộ nhớ đệm:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.processor.caching}
                </span>
              </div>
            </Col>
            <Col>
              <span className="font-semibold">RAM</span>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Dung lượng:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.ram.capacity}
                </span>
              </div>

              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Hỗ trợ tối đa:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.ram.maximumSupport}
                </span>
              </div>
            </Col>
            <Col>
              <span className="font-semibold">Màn hình</span>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Màn hình:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.screen.screen}
                </span>
              </div>

              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Tấm phủ:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.screen.coverPlate}
                </span>
              </div>

              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Thông số khác:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.screen.otherParameters}
                </span>
              </div>
            </Col>
            <Col>
              <span className="font-semibold">Pin</span>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  {productFeatures.pin.capacity}
                </span>
              </div>
            </Col>
            <Col>
              <span className="font-semibold">Card đồ họa</span>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Card onboard:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.graphicsCard.cardOnboard}
                </span>
              </div>

              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Card rời:
                </span>
                <span className="detailed_configuration-info--span">Không</span>
              </div>
            </Col>
            <Col>
              <span className="font-semibold">Ổ cứng</span>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Dung lượng SSD:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.hardDrive.SSDCapacity}
                </span>
              </div>

              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Khả năng nâng cấp:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.hardDrive.upgradability}
                </span>
              </div>
            </Col>
            <Col>
              <span className="font-semibold">Khối lượng & Kích thước</span>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Khối lượng:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures["weight&Dimensions"].mass}
                </span>
              </div>

              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Kích thước:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures["weight&Dimensions"].size}
                </span>
              </div>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Chất liệu vỏ:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures["weight&Dimensions"].shellMaterial}
                </span>
              </div>
            </Col>
            <Col>
              <span className="font-semibold">Webcam và Âm thanh</span>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Webcam:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.webcamAndAudio.webcam}
                </span>
              </div>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Công nghệ âm thanh:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.webcamAndAudio.audioTechnology}
                </span>
              </div>
            </Col>
          </div>
        </div>
      );
    } else if (productFeatures.feautures) {
      return (
        <div>
          <div className="detailed_configuration-title">
            <h2 className="text-h5 font-semibold">Cấu hình đặc điểm</h2>
            <button
              onClick={handleShowConfiguration}
              className="flex items-center button-detail"
            >
              <span className="text-md text-primary">
                Xem cấu hình chi tiết
              </span>
              <i className="fas fa-chevron-right text-i"></i>
            </button>
            <Modal
              size="lg"
              show={showConfiguration}
              onHide={handleCloseConfiguration}
            >
              <Modal.Header closeButton>
                <Modal.Title>Cấu hình chi tiết</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col xs={12} md={6} style={{ marginBottom: "10px" }}>
                    <span className="font-semibold">Thông tin hàng hóa</span>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        {productFeatures.productInfo}
                      </span>
                    </div>
                  </Col>
                  <Col xs={12} md={6} style={{ marginBottom: "10px" }}>
                    <span className="font-semibold">Pin</span>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        {productFeatures.pin}
                      </span>
                    </div>
                  </Col>
                  <Col xs={12} md={6} style={{ marginBottom: "10px" }}>
                    <span className="font-semibold">Đặc điểm</span>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Kết nối qua:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.feautures.connect}
                      </span>
                    </div>

                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Loại kết nối:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.feautures.connectType}
                      </span>
                    </div>

                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Chất liệu khung:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.feautures.material}
                      </span>
                    </div>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Số nút bấm:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.feautures.numberOfKeys}
                      </span>
                    </div>

                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Loại bàn phím:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.feautures.keyboardType}
                      </span>
                    </div>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Layout:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.feautures.Layout}
                      </span>
                    </div>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Tương thích:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.feautures.compatible}
                      </span>
                    </div>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Đèn led:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.feautures.led}
                      </span>
                    </div>
                  </Col>
                  <Col xs={12} md={6} style={{ marginBottom: "10px" }}>
                    <span className="font-semibold">Pin</span>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        {productFeatures.pin.capacity}
                      </span>
                    </div>
                  </Col>
                  <Col xs={12} md={6} style={{ marginBottom: "10px" }}>
                    <span className="font-semibold">Kích thước</span>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Dài:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.productSize.width}
                      </span>
                    </div>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Rộng:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.productSize.length}
                      </span>
                    </div>
                    <div className="detailed_configuration-info">
                      <span className="detailed_configuration-info--span">
                        Cao:
                      </span>
                      <span className="detailed_configuration-info--span">
                        {productFeatures.productSize.height}
                      </span>
                    </div>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleCloseConfiguration}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="detailed_configuration-content">
            <Col>
              <span className="font-semibold">Thông tin hàng hóa</span>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  {productFeatures.productInfo}
                </span>
              </div>
            </Col>
            <Col>
              <span className="font-semibold">Đặc điểm</span>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Kết nối qua:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.feautures.connect}
                </span>
              </div>

              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Loại kết nối:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.feautures.connectType}
                </span>
              </div>

              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Chất liệu khung:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.feautures.material}
                </span>
              </div>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Số nút bấm:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.feautures.numberOfKeys}
                </span>
              </div>

              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Loại bàn phím:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.feautures.keyboardType}
                </span>
              </div>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Layout:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.feautures.Layout}
                </span>
              </div>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Tương thích:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.feautures.compatible}
                </span>
              </div>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  Đèn led:
                </span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.feautures.led}
                </span>
              </div>
            </Col>
            <Col>
              <span className="font-semibold">Pin</span>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">
                  {productFeatures.pin}
                </span>
              </div>
            </Col>
            <Col>
              <span className="font-semibold">Kích thước</span>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">Dài:</span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.productSize.width}
                </span>
              </div>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">Rộng:</span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.productSize.length}
                </span>
              </div>
              <div className="detailed_configuration-info">
                <span className="detailed_configuration-info--span">Cao:</span>
                <span className="detailed_configuration-info--span">
                  {productFeatures.productSize.height}
                </span>
              </div>
            </Col>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="details-container">
      <Container>
        <div className="detail-products">
          <div className="chance-page">
            <ul className="chance-page_list">
              <li>
                <Link to="/">
                  <span>Trang chủ</span>
                </Link>
              </li>
              <li>
                <span className="chance-page_list-link">/</span>
                <Link to="/page-colection">
                  <span>Bàn phím</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="detail-products_page">
            {Object.keys(products).length ? (
              <Row>
                <Col md={7}>
                  <Row>
                    <Col md={12}>
                      <SwiperDetailsImage images={products[0].images} />
                    </Col>
                    <Col md={12}>
                      <div onClick={handleShow} className="confidence-shopping">
                        <div className="confidence-shopping_group-1">
                          <div className="flex items-center">
                            <span className="font-semibold text-h4">
                              ThinkPro
                            </span>
                            <span className="font-semibold text-span">
                              Là nơi để bạn và người thân tin tưởng lựa chọn
                            </span>
                          </div>

                          <div className="slide-text-auto">
                            <Marquee>
                              <div className="notify-group">
                                <div className="notify">
                                  <div className="notify-icon">
                                    <i className="fas fa-clock"></i>
                                  </div>
                                  <span className="notify-text">
                                    Phục vụ 24/7
                                  </span>
                                </div>
                                <div className="notify">
                                  <div className="notify-icon">
                                    <i className="fa-solid fa-envelope"></i>
                                  </div>
                                  <span className="notify-text">
                                    Trung tâm hỗ trợ khách hàng
                                  </span>
                                </div>
                                <div className="notify">
                                  <div className="notify-icon">
                                    <i className="fas fa-headset"></i>
                                  </div>
                                  <span className="notify-text">
                                    Tận tâm tư vấn
                                  </span>
                                </div>
                                <div className="notify">
                                  <div className="notify-icon">
                                    <i className="fas fa-star"></i>
                                  </div>
                                  <span className="notify-text">
                                    Chất lượng hàng đầu
                                  </span>
                                </div>
                              </div>
                            </Marquee>
                          </div>
                        </div>
                      </div>
                      <Modal size="lg" show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>
                            Tự tin mua sắm cùng ThinkPro
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="show-grid">
                          <Container>
                            <Row>
                              <Col xs={12} md={12}>
                                <div className="board-mini_information">
                                  <span className="board-mini_information-title-modal">
                                    Một thành viên của
                                  </span>
                                  <div className="text-p-promo">
                                    <svg
                                      fill="none"
                                      height="16"
                                      viewBox="0 0 253 16"
                                      width="253"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.1 15.3C5.07333 15.3 3.49333 14.6667 2.36 13.4C1.24 12.1333 0.68 10.3533 0.68 8.06C0.68 6.52667 0.933333 5.21333 1.44 4.12C1.94667 3.01333 2.68 2.16667 3.64 1.58C4.61333 0.993333 5.76667 0.699999 7.1 0.699999C8.43333 0.699999 9.58 0.993333 10.54 1.58C11.5133 2.16667 12.2533 3.01333 12.76 4.12C13.2667 5.21333 13.52 6.52667 13.52 8.06C13.52 10.3533 12.9533 12.1333 11.82 13.4C10.7 14.6667 9.12667 15.3 7.1 15.3ZM3.14 8.06C3.14 9.62 3.48667 10.84 4.18 11.72C4.87333 12.6 5.84667 13.04 7.1 13.04C8.35333 13.04 9.32667 12.6 10.02 11.72C10.7133 10.84 11.06 9.62 11.06 8.06C11.06 6.48667 10.7067 5.26 10 4.38C9.30667 3.48667 8.34 3.04 7.1 3.04C5.84667 3.04 4.87333 3.48 4.18 4.36C3.48667 5.24 3.14 6.47333 3.14 8.06ZM20.1192 0.999999L25.0192 14.72H25.0792V0.999999H27.3392V15H22.6992L17.7992 1.22H17.7392V15H15.4992V0.999999H20.1192ZM28.6695 0.999999H31.1695L33.9495 14.66H34.0495L36.6695 0.999999H40.7495L43.3895 14.66H43.4695L46.2295 0.999999H48.7495L45.6295 15H41.3495L38.7295 1.34H38.6695L36.0695 15H31.7695L28.6695 0.999999ZM52.0516 0.999999H56.5116L60.8116 15H58.2916L57.3716 11.8H51.2116L50.2916 15H47.7516L52.0516 0.999999ZM56.8316 9.98L54.3116 1.26H54.2516L51.7316 9.98H56.8316ZM62.0031 0.999999L66.7231 0.979999C68.3765 0.979999 69.6765 1.38 70.6231 2.18C71.5831 2.96667 72.0631 4.04 72.0631 5.4C72.0631 6.46667 71.7365 7.36667 71.0831 8.1C70.4298 8.83333 69.5431 9.32667 68.4231 9.58L72.4631 15H69.8031L64.6031 7.98H66.7231C67.6298 7.98 68.3365 7.76667 68.8431 7.34C69.3631 6.9 69.6231 6.29333 69.6231 5.52C69.6231 4.73333 69.3631 4.12 68.8431 3.68C68.3365 3.24 67.6298 3.02 66.7231 3.02H64.4031V15H62.0031V0.999999ZM78.7139 0.999999C80.1539 0.999999 81.3939 1.28 82.4339 1.84C83.4872 2.4 84.2939 3.20667 84.8539 4.26C85.4139 5.31333 85.6939 6.56 85.6939 8C85.6939 9.44 85.4139 10.6867 84.8539 11.74C84.2939 12.7933 83.4872 13.6 82.4339 14.16C81.3939 14.72 80.1539 15 78.7139 15H74.0539V0.999999H78.7139ZM78.6939 12.82C80.1339 12.82 81.2539 12.3933 82.0539 11.54C82.8539 10.6867 83.2539 9.50667 83.2539 8C83.2539 6.49333 82.8539 5.31333 82.0539 4.46C81.2539 3.60667 80.1339 3.18 78.6939 3.18H76.4539V12.82H78.6939ZM94.4111 3.18H90.4911V0.999999H100.771V3.18H96.8111V15H94.4111V3.18ZM107.432 15.3C105.405 15.3 103.825 14.6667 102.692 13.4C101.572 12.1333 101.012 10.3533 101.012 8.06C101.012 6.52667 101.265 5.21333 101.772 4.12C102.279 3.01333 103.012 2.16667 103.972 1.58C104.945 0.993333 106.099 0.699999 107.432 0.699999C108.765 0.699999 109.912 0.993333 110.872 1.58C111.845 2.16667 112.585 3.01333 113.092 4.12C113.599 5.21333 113.852 6.52667 113.852 8.06C113.852 10.3533 113.285 12.1333 112.152 13.4C111.032 14.6667 109.459 15.3 107.432 15.3ZM103.472 8.06C103.472 9.62 103.819 10.84 104.512 11.72C105.205 12.6 106.179 13.04 107.432 13.04C108.685 13.04 109.659 12.6 110.352 11.72C111.045 10.84 111.392 9.62 111.392 8.06C111.392 6.48667 111.039 5.26 110.332 4.38C109.639 3.48667 108.672 3.04 107.432 3.04C106.179 3.04 105.205 3.48 104.512 4.36C103.819 5.24 103.472 6.47333 103.472 8.06ZM117.671 8.18C117.671 9.68667 117.945 10.8667 118.491 11.72C119.051 12.5733 119.825 13 120.811 13C121.665 13 122.345 12.7067 122.851 12.12C123.371 11.5333 123.671 10.7 123.751 9.62H121.251V7.58H126.311V15H125.031L124.071 9.62H124.031C124.018 11.4333 123.651 12.8333 122.931 13.82C122.225 14.8067 121.245 15.3 119.991 15.3C119.031 15.3 118.191 15.0133 117.471 14.44C116.751 13.8667 116.191 13.0467 115.791 11.98C115.405 10.9 115.211 9.63333 115.211 8.18C115.211 6.62 115.485 5.28 116.031 4.16C116.591 3.04 117.378 2.19333 118.391 1.62C119.418 1.03333 120.625 0.739999 122.011 0.739999C122.705 0.739999 123.398 0.819999 124.091 0.979999C124.785 1.14 125.411 1.36667 125.971 1.66L125.831 4.16C125.258 3.81333 124.631 3.54 123.951 3.34C123.271 3.14 122.605 3.04 121.951 3.04C120.591 3.04 119.538 3.48667 118.791 4.38C118.045 5.27333 117.671 6.54 117.671 8.18ZM137.65 0.999999V3.18H130.79V6.94H136.23V8.96H130.79V12.82H137.85V15H128.39V0.999999H137.65ZM142.341 3.18H138.421V0.999999H148.701V3.18H144.741V15H142.341V3.18ZM161.148 0.999999V15H158.748V9.08H152.528V15H150.128V0.999999H152.528V6.9H158.748V0.999999H161.148ZM172.982 0.999999V3.18H166.122V6.94H171.562V8.96H166.122V12.82H173.182V15H163.722V0.999999H172.982ZM174.679 0.999999L179.399 0.979999C181.052 0.979999 182.352 1.38 183.299 2.18C184.259 2.96667 184.739 4.04 184.739 5.4C184.739 6.46667 184.412 7.36667 183.759 8.1C183.106 8.83333 182.219 9.32667 181.099 9.58L185.139 15H182.479L177.279 7.98H179.399C180.306 7.98 181.012 7.76667 181.519 7.34C182.039 6.9 182.299 6.29333 182.299 5.52C182.299 4.73333 182.039 4.12 181.519 3.68C181.012 3.24 180.306 3.02 179.399 3.02H177.079V15H174.679V0.999999ZM192.574 8.18C192.574 9.68667 192.847 10.8667 193.394 11.72C193.954 12.5733 194.727 13 195.714 13C196.567 13 197.247 12.7067 197.754 12.12C198.274 11.5333 198.574 10.7 198.654 9.62H196.154V7.58H201.214V15H199.934L198.974 9.62H198.934C198.92 11.4333 198.554 12.8333 197.834 13.82C197.127 14.8067 196.147 15.3 194.894 15.3C193.934 15.3 193.094 15.0133 192.374 14.44C191.654 13.8667 191.094 13.0467 190.694 11.98C190.307 10.9 190.114 9.63333 190.114 8.18C190.114 6.62 190.387 5.28 190.934 4.16C191.494 3.04 192.28 2.19333 193.294 1.62C194.32 1.03333 195.527 0.739999 196.914 0.739999C197.607 0.739999 198.3 0.819999 198.994 0.979999C199.687 1.14 200.314 1.36667 200.874 1.66L200.734 4.16C200.16 3.81333 199.534 3.54 198.854 3.34C198.174 3.14 197.507 3.04 196.854 3.04C195.494 3.04 194.44 3.48667 193.694 4.38C192.947 5.27333 192.574 6.54 192.574 8.18ZM203.292 0.999999L208.012 0.979999C209.666 0.979999 210.966 1.38 211.912 2.18C212.872 2.96667 213.352 4.04 213.352 5.4C213.352 6.46667 213.026 7.36667 212.372 8.1C211.719 8.83333 210.832 9.32667 209.712 9.58L213.752 15H211.092L205.892 7.98H208.012C208.919 7.98 209.626 7.76667 210.132 7.34C210.652 6.9 210.912 6.29333 210.912 5.52C210.912 4.73333 210.652 4.12 210.132 3.68C209.626 3.24 208.919 3.02 208.012 3.02H205.692V15H203.292V0.999999ZM221.143 15.3C219.116 15.3 217.536 14.6667 216.403 13.4C215.283 12.1333 214.723 10.3533 214.723 8.06C214.723 6.52667 214.976 5.21333 215.483 4.12C215.99 3.01333 216.723 2.16667 217.683 1.58C218.656 0.993333 219.81 0.699999 221.143 0.699999C222.476 0.699999 223.623 0.993333 224.583 1.58C225.556 2.16667 226.296 3.01333 226.803 4.12C227.31 5.21333 227.563 6.52667 227.563 8.06C227.563 10.3533 226.996 12.1333 225.863 13.4C224.743 14.6667 223.17 15.3 221.143 15.3ZM217.183 8.06C217.183 9.62 217.53 10.84 218.223 11.72C218.916 12.6 219.89 13.04 221.143 13.04C222.396 13.04 223.37 12.6 224.063 11.72C224.756 10.84 225.103 9.62 225.103 8.06C225.103 6.48667 224.75 5.26 224.043 4.38C223.35 3.48667 222.383 3.04 221.143 3.04C219.89 3.04 218.916 3.48 218.223 4.36C217.53 5.24 217.183 6.47333 217.183 8.06ZM240.502 9.2C240.502 10.4533 240.269 11.54 239.802 12.46C239.349 13.38 238.689 14.0867 237.822 14.58C236.969 15.06 235.949 15.3 234.762 15.3C233.576 15.3 232.549 15.06 231.682 14.58C230.829 14.0867 230.169 13.38 229.702 12.46C229.249 11.54 229.022 10.4533 229.022 9.2V0.999999H231.422V9.2C231.422 10.4533 231.716 11.44 232.302 12.16C232.902 12.88 233.722 13.24 234.762 13.24C235.802 13.24 236.616 12.88 237.202 12.16C237.802 11.44 238.102 10.4533 238.102 9.2V0.999999H240.502V9.2ZM247.209 8.5C248.196 8.5 248.962 8.26 249.509 7.78C250.069 7.3 250.349 6.62667 250.349 5.76C250.349 4.90667 250.069 4.24 249.509 3.76C248.962 3.28 248.196 3.04 247.209 3.04H244.989V8.5H247.209ZM242.589 0.999999H247.209C248.969 0.999999 250.342 1.42 251.329 2.26C252.316 3.08667 252.809 4.25333 252.809 5.76C252.809 7.26667 252.316 8.44 251.329 9.28C250.342 10.1067 248.969 10.52 247.209 10.52H244.989V15H242.589V0.999999Z"
                                        fill="#00D4FF"
                                      ></path>
                                    </svg>
                                  </div>
                                  <span className="board-mini_information-content--span-modal">
                                    Tập đoàn bán lẻ phục vụ khách hàng tốt nhất.
                                  </span>
                                </div>
                              </Col>
                            </Row>
                            <div className="information-page_group-modal">
                              <Row>
                                <Col xs={12} md={12}>
                                  <div className="flex align-baseline gap-12px">
                                    <div className="icon-info-modal">
                                      <AdsClickIcon
                                        style={{ color: "#00d4ff" }}
                                      />
                                    </div>
                                    <div className="group-content-infor-modal">
                                      <div className="information-page_group-text--item-header">
                                        Được trải nghiệm thực tế sản phẩm, lựa
                                        chọn đúng hơn.
                                      </div>
                                      <div className="information-page_group-text--item-sub">
                                        Không còn bọc nilon, hạn chế quyền được
                                        trải nghiệm trước mua hàng của người
                                        dùng.
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                                <Col xs={12} md={12}>
                                  <div className="flex align-baseline gap-12px">
                                    <div className="icon-info-modal">
                                      <MailOutlineIcon
                                        style={{ color: "#00d4ff" }}
                                      />
                                    </div>
                                    <div className="group-content-infor-modal">
                                      <div className="information-page_group-text--item-header">
                                        Bạn gặp khó khi gặp lỗi hỏng, ThinkPro
                                        có Trung tâm bảo vệ quyền lợi khách hàng
                                      </div>
                                      <div className="information-page_group-text--item-sub">
                                        Để không bỏ sót bất kỳ một trải nghiệm
                                        không tốt nào của khách hàng, Ban Lãnh
                                        Đạo Tập đoàn có chuyên trang bảo vệ
                                        quyền lợi khách hàng.
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                                <Col xs={12} md={12}>
                                  <div className="flex align-baseline gap-12px">
                                    <div className="icon-info-modal">
                                      <HeadphonesIcon
                                        style={{ color: "#00d4ff" }}
                                      />
                                    </div>
                                    <div className="group-content-infor-modal">
                                      <div className="information-page_group-text--item-header">
                                        Bạn lo lắng khi không biết sản phẩm nào
                                        phù hợp? ThinkPro có đội ngũ tư vấn tận
                                        tâm và có chuyên môn.
                                      </div>
                                      <div className="information-page_group-text--item-sub">
                                        Giúp khách hàng lựa chọn sản phẩm đúng
                                        nhu cầu là trách nhiệm đầu tiên của Nhân
                                        viên tư vấn tại ThinkPro.
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                                <Col xs={12} md={12}>
                                  <div className="flex align-baseline gap-12px">
                                    <div className="icon-info-modal">
                                      <AccessTimeFilledIcon
                                        style={{ color: "#00d4ff" }}
                                      />
                                    </div>
                                    <div className="group-content-infor-modal">
                                      <div className="information-page_group-text--item-header">
                                        Bạn bận, ThinkPro phục vụ từ sáng tới
                                        khuya.
                                      </div>
                                      <div className="information-page_group-text--item-sub">
                                        Khách hàng bận bịu. Cán bộ, nhân viên
                                        ThinkPro càng phải phục vụ ngoài giờ để
                                        trải nghiệm của khách hàng được thông
                                        suốt.
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Container>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            style={{
                              padding: "10px 100px",
                              backgroundColor: "#0a2540",
                            }}
                            variant="primary"
                            onClick={handleClose}
                          >
                            Đóng
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Col>
                    <Col md={12}>
                      <div className="detailed_configuration">
                        {renderDetailProduct(products[0])}
                        <div className="section-retails mg-top-20 border-1 pd-top-20">
                          <div className="detailed_configuration-title">
                            <h2 className="text-h5 font-semibold">
                              Sẵn hàng & Trưng bày
                            </h2>
                            <button
                              onClick={handleShowAddress}
                              className="flex items-center button-detail"
                            >
                              <span className="text-md text-primary">
                                1 chi nhánh
                              </span>
                              <i className="fas fa-chevron-right text-i"></i>
                            </button>
                            <Modal
                              show={showAddress}
                              onHide={handleCloseAddress}
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>Sẵn hàng và Trưng bày</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Row>
                                  <Col xs={12} md={12}>
                                    <div className="infor-store">
                                      <div className="infor-store_address-city">
                                        Thành phố Hồ Chí Minh
                                      </div>
                                      <div className="infor-store_address-local">
                                        Số 5 - 7 Nguyễn Huy Tưởng, F6, Q. Bình
                                        Thạnh
                                      </div>
                                      <div className="infor-store_address-time">
                                        <div className="times-open-door">
                                          <div className="open-door">
                                            <span className="open-door-text">
                                              Mở cửa
                                            </span>
                                          </div>
                                          <div className="open-time">
                                            <span className="open-time-text">
                                              09:00 - 21:00
                                            </span>
                                          </div>
                                        </div>
                                        <div className="maps">
                                          <a
                                            aria-label="Chỉ đường đến Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh"
                                            href="https://www.google.com/maps/place/ThinkPro+-+S%E1%BB%91+5+%2B+7+Nguy%E1%BB%85n+Huy+T%C6%B0%E1%BB%9Fng,+P6,+Q.B%C3%ACnh+Th%E1%BA%A1nh,+TP+HCM/@10.7984083,106.686565,15z/data=!4m12!1m6!3m5!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!2zVGhpbmtQcm8gLSBT4buRIDUgKyA3IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgUDYsIFEuQsOsbmggVGjhuqFuaCwgVFAgSENN!8m2!3d10.8041258!4d106.6893028!3m4!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!8m2!3d10.8041258!4d106.6893028"
                                            className="text-sm"
                                          ></a>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col xs={12} md={12}>
                                    <div className="infor-store">
                                      <div className="infor-store_address-city">
                                        Thành phố Hồ Chí Minh
                                      </div>
                                      <div className="infor-store_address-local">
                                        95 Trần Thiện Chánh, Q10
                                      </div>
                                      <div className="infor-store_address-time">
                                        <div className="times-open-door">
                                          <div className="open-door">
                                            <span className="open-door-text">
                                              Mở cửa
                                            </span>
                                          </div>
                                          <div className="open-time">
                                            <span className="open-time-text">
                                              09:00 - 21:00
                                            </span>
                                          </div>
                                        </div>
                                        <div className="maps">
                                          <a
                                            aria-label="Chỉ đường đến Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh"
                                            href="https://www.google.com/maps/place/ThinkPro+-+S%E1%BB%91+5+%2B+7+Nguy%E1%BB%85n+Huy+T%C6%B0%E1%BB%9Fng,+P6,+Q.B%C3%ACnh+Th%E1%BA%A1nh,+TP+HCM/@10.7984083,106.686565,15z/data=!4m12!1m6!3m5!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!2zVGhpbmtQcm8gLSBT4buRIDUgKyA3IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgUDYsIFEuQsOsbmggVGjhuqFuaCwgVFAgSENN!8m2!3d10.8041258!4d106.6893028!3m4!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!8m2!3d10.8041258!4d106.6893028"
                                            className="text-sm"
                                          ></a>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col xs={12} md={12}>
                                    <div className="infor-store">
                                      <div className="infor-store_address-city">
                                        Hà Nội
                                      </div>
                                      <div className="infor-store_address-local">
                                        53 Thái Hà, Đống Đa
                                      </div>
                                      <div className="infor-store_address-time">
                                        <div className="times-open-door">
                                          <span className="open-door-text">
                                            Mở cửa
                                          </span>
                                          <span className="open-time-text">
                                            09:00 - 21:00
                                          </span>
                                        </div>
                                        <div className="maps">
                                          <a
                                            aria-label="Chỉ đường đến Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh"
                                            href="https://www.google.com/maps/place/ThinkPro+-+S%E1%BB%91+5+%2B+7+Nguy%E1%BB%85n+Huy+T%C6%B0%E1%BB%9Fng,+P6,+Q.B%C3%ACnh+Th%E1%BA%A1nh,+TP+HCM/@10.7984083,106.686565,15z/data=!4m12!1m6!3m5!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!2zVGhpbmtQcm8gLSBT4buRIDUgKyA3IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgUDYsIFEuQsOsbmggVGjhuqFuaCwgVFAgSENN!8m2!3d10.8041258!4d106.6893028!3m4!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!8m2!3d10.8041258!4d106.6893028"
                                            className="text-sm"
                                          ></a>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </Modal.Body>
                            </Modal>
                          </div>
                        </div>
                        <div className="section-transport mg-top-20 border-1 pd-top-20">
                          <div className="detailed_configuration-title">
                            <h2 className="text-h5 font-semibold">
                              Vận chuyển
                            </h2>
                            <button className="flex items-center button-detail">
                              <span className="text-md text-primary">
                                Chọn địa chỉ giao hàng
                              </span>
                              <i className="fas fa-chevron-right text-i"></i>
                            </button>
                          </div>
                          <div className="color-transport">
                            <span>Miễn phí HN, TP HCM</span>
                          </div>
                        </div>
                        <div className="section-guarantee mg-top-20 border-1 pd-top-20">
                          <div className="detailed_configuration-title">
                            <h2 className="text-h5 font-semibold">
                              Bảo hành & đổi trả
                            </h2>
                            <button
                              onClick={handleShowMonth}
                              className="flex items-center button-detail"
                            >
                              <span className="text-md text-primary">
                                12 tháng
                              </span>
                              <i className="fas fa-chevron-right text-i"></i>
                            </button>
                            <Modal
                              size="lg"
                              show={showMonth}
                              onHide={handleCloseMonth}
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>Bảo hành</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Row>
                                  <Col xs={12} md={12}>
                                    <div className="t-dialog__body t-dialog__body-scroll">
                                      <div className="description px-6 py-4">
                                        <p>
                                          Bảo hành 12 tháng tại ThinkPro với
                                          linh kiện phần cứng (Đối với Pin và
                                          Màn hình 06 tháng)
                                        </p>
                                        <p>
                                          <a href="https://thinkpro.vn/noi-dung/chinh-sach-bao-hanh-thinkpro">
                                            Xem thêm chi tiết Chính sách bảo
                                            hành tại ThinkPro
                                          </a>
                                        </p>
                                        <p>
                                          <strong>
                                            Chính sách đổi trả tại ThinkPro:
                                          </strong>
                                        </p>
                                        <p style={{ paddingLeft: "40px" }}>
                                          <strong>
                                            1. Lỗi do nhà sản xuất:
                                          </strong>
                                        </p>
                                        <ul>
                                          <li>
                                            Trong 15 ngày đầu 1 đổi 1 sản phẩm
                                            nếu xảy ra lỗi của nhà sản xuất, quý
                                            khách có thể đổi tại toàn bộ các chi
                                            nhánh thuộc hệ thống của ThinkPro.
                                            Trong trường hợp ThinkPro hết hàng
                                            để đổi, cửa hàng sẽ hoàn 100% giá
                                            trị trên hóa đơn mua hàng của Quý
                                            khách.&nbsp;
                                          </li>
                                        </ul>
                                        <p style={{ paddingLeft: "40px" }}>
                                          <strong>
                                            2. Sản phẩm không lỗi:
                                          </strong>
                                        </p>
                                        <ul>
                                          <li>
                                            Đối với sản phẩm mới: Trong 15 ngày
                                            đầu tiên, nếu sản phẩm không lỗi Quý
                                            khách muốn đổi sản phẩm khác
                                            ThinkPro sẽ tính phí đổi sản phẩm là
                                            15%, trong trường hợp Quý khách muốn
                                            trả lại sản phẩm ThinkPro sẽ tính
                                            phí 25% giá trị sản phẩm.
                                          </li>
                                          <li>
                                            Đối với sản phẩm qua sử dụng: Trong
                                            15 ngày đầu tiên, ThinkPro cung cấp
                                            dịch vụ dùng thử miễn phí, Quý khách
                                            có thể đổi sản phẩm khác nếu thấy
                                            sản phẩm mình đang sử dụng chưa phù
                                            hợp với nhu cầu. Trong trường hợp
                                            Quý khách muốn trả lại sản phẩm
                                            ThinkPro sẽ tính phí 15% giá trị sản
                                            phẩm.
                                          </li>
                                        </ul>
                                        <p style={{ paddingLeft: "40px" }}>
                                          <strong>
                                            3. Sản phẩm lỗi do người sử dụng
                                          </strong>
                                        </p>
                                        <ul>
                                          <li>
                                            Trong trường hợp sản phẩm xảy ra lỗi
                                            do người sử dụng, vi phạm các chính
                                            sách bảo hành tại ThinkPro (Quý
                                            khách có thể tham khảo chi tiết tại{" "}
                                            <a href="https://thinkpro.vn/noi-dung/chinh-sach-bao-hanh-thinkpro">
                                              Chính sách bảo hành
                                            </a>
                                            ), ThinkPro không hỗ trợ đổi/trả sản
                                            phẩm. ThinkPro sẽ hỗ trợ Quý khách
                                            sửa chữa dịch vụ đối với sản phẩm
                                            này.
                                          </li>
                                        </ul>
                                        <p>
                                          <a href="https://thinkpro.vn/noi-dung/chinh-sach-doi-tra-thinkpro">
                                            Xem thêm chi tiết Chính sách đổi trả
                                            sản phẩm tại ThinkPro
                                          </a>
                                          .
                                        </p>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  style={{ width: "100%" }}
                                  variant="primary"
                                  onClick={handleCloseMonth}
                                >
                                  Close
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </div>
                          <div className="description">
                            <ul>
                              <li>Bảo hành 12 tháng tại chuỗi cửa hàng</li>
                              <li>Đổi mới trong 15 ngày đầu tiên</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={5}>
                  <div className="details-right h-full sticky overflow-visible">
                    <div className="section-discount-status">
                      <div className="banner-sale-discount">
                        <i className="fas fa-tags"></i>
                        <div className="banner-sale-discount_t font-semibold">
                          HOT DEAL LAPTOP THÁNG 5
                        </div>
                      </div>
                    </div>
                    <div className="section-information">
                      <div className="section-information_divide">
                        <div className="flex flex-col">
                          <div className="flex gap-8 items-center text-md">
                            <span>SKU: {products[0].productSKU}</span>
                            <button className="btn-none color-icon bg-white">
                              <i className="fas fa-clone"></i>
                            </button>
                          </div>
                          <div className="mt-2">
                            <h1 className="text-h6 font-semibold">
                              {products[0].productName}
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="infor-sample border-1 pd-top-20">
                        <div className="text-infor-sample">Phiên bản</div>
                        <div className="input-infor-sample">
                          <a href="/">
                            <span className="block text-sm font-semibold text-center">
                              {products[0].productVersion
                                ? products[0].productVersion
                                : "New"}
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="infor-sample mg-top-12">
                        <div className="text-infor-sample">Màu</div>
                        <div className="input-infor-sample">
                          <a href="/">
                            <span className="block text-sm font-semibold text-center">
                              {products[0].productColors}
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="infor-sample mg-top-12">
                        <div className="text-infor-sample">Loại hàng</div>
                        <div className="input-infor-sample_group">
                          <div className="input-infor-sample_white">
                            <a href="/">
                              <span className="block text-sm font-semibold text-center">
                                Mới, Sealed, Nhập khẩu
                              </span>
                            </a>
                          </div>
                          <div className="input-infor-sample">
                            <a href="/">
                              <span className="block text-sm font-semibold text-center">
                                {products[0].productStatus}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="infor-sample mg-top-12">
                        <div className="text-infor-sample mg-bottom-4">
                          Số lượng
                        </div>
                        <div className="t-input-number">
                          <button
                            aria-label="Giảm"
                            className="t-input-number__btn br-radis-left border-2 bg-white"
                            disabled={counter == 1}
                            onClick={decrease}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <input
                            placeholder={counter}
                            value={counter}
                            type="text"
                            className="t-input-number__input"
                          />
                          <button
                            aria-label="Tăng"
                            className="t-input-number__btn br-radis-right border-2 bg-white"
                            onClick={increase}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-1 mg-top-16 pd-top-20">
                        {products[0].productPromotionalPrice > 0 ? (
                          <div className="flex flex-col">
                            <span className="text-h4 text-pink font-semibold">
                              {VND.format(products[0].productPromotionalPrice)}
                            </span>
                            <div className="flex gap-8 items-center space-x-1 text-sm">
                              <span className="line-through">
                                {VND.format(products[0].productPrice)}
                              </span>

                              <span className="text-pink">
                                {Math.floor(
                                  ((products[0].productPrice -
                                    products[0].productPromotionalPrice) /
                                    products[0].productPrice) *
                                    100
                                )}
                                %
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex gap-8 items-center space-x-1 text-sm">
                            <span className="text-h4 text-pink font-semibold">
                              {VND.format(products[0].productPrice)}
                            </span>
                          </div>
                        )}
                        <div className="flex w-full justify-end gap-8">
                          <button
                            onClick={() =>
                              handleAddToCart(products[0], counter)
                            }
                            className="t-button-add btn-none "
                          >
                            <span>Thêm vào giỏ</span>
                          </button>
                          <button
                            onClick={() => handleByToCart(products[0], counter)}
                            className="t-button-buy btn-none "
                          >
                            <span>Mua ngay</span>
                          </button>
                        </div>
                      </div>
                      <div className="section-retails mg-top-20 border-1 pd-top-20">
                        <div className="detailed_configuration-title align-center">
                          <div className="flex align-center gap-12">
                            <div className="logo-brand">
                              <img
                                src="/Assets/ImageLogoBrand/dell.png"
                                alt=""
                              />
                            </div>
                            <h2 className="text-md font-semibold mg-0">
                              {products[0].productName}
                            </h2>
                          </div>
                          <button className="flex items-center button-detail">
                            <span className="text-md ">Xem tất cả</span>
                            <i className="fas fa-chevron-right text-i"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            ) : null}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DetailProducts;
