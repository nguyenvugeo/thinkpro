import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CachedIcon from "@mui/icons-material/Cached";
import AddCardIcon from "@mui/icons-material/AddCard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LanguageIcon from "@mui/icons-material/Language";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import InfoIcon from "@mui/icons-material/Info";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

function Footer(props) {
  return (
    <div className="footer">
      <Container>
        <div className="footer-container">
          <div className="logo-brand">
            <img
              src="https://media-api-beta.thinkpro.vn/media/core/site-configs/2023/3/16/logo-thinkpro.svg"
              alt="logo"
              className="h-6 text-primary"
            />
          </div>
          <div className="group-support">
            <h2 className="font-size-24 ">Cần hỗ trợ thêm</h2>
            <span className="font-size-14">Nhận tư vấn miễn phí</span>
            <div className="icon-contact">
              <a href="/">
                <img src={"/Assets/SocialMedia/supportn.png"} alt="" />
              </a>
              <a href="/">
                <img src={"/Assets/SocialMedia/zalo.png"} alt="" />
              </a>
              <a href="/">
                <img src={"/Assets/SocialMedia/mess.png"} alt="" />
              </a>
              <a href="/">
                <img src={"/Assets/SocialMedia/telegram.png"} alt="" />
              </a>
            </div>
          </div>
          <Row>
            <Col>
              <div className="group-store">
                <h2 className="font-size-24 ">Hệ thống cửa hàng</h2>
                <Row>
                  <Col>
                    <div className="infor-store">
                      <div className="infor-store_address-city">
                        Thành phố Hồ Chí Minh
                      </div>
                      <div className="infor-store_address-local">
                        Số 5 - 7 Nguyễn Huy Tưởng, F6, Q. Bình Thạnh
                      </div>
                      <div className="infor-store_address-time">
                        <div className="times-open-door">
                          <div className="open-door">
                            <span className="open-door-text">Mở cửa</span>
                          </div>
                          <div className="open-time">
                            <span className="open-time-text">09:00 - 21:00</span>
                          </div>
                        </div>
                        <div className="maps">
                          <a
                            aria-label="Chỉ đường đến Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh"
                            href="https://www.google.com/maps/place/ThinkPro+-+S%E1%BB%91+5+%2B+7+Nguy%E1%BB%85n+Huy+T%C6%B0%E1%BB%9Fng,+P6,+Q.B%C3%ACnh+Th%E1%BA%A1nh,+TP+HCM/@10.7984083,106.686565,15z/data=!4m12!1m6!3m5!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!2zVGhpbmtQcm8gLSBT4buRIDUgKyA3IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgUDYsIFEuQsOsbmggVGjhuqFuaCwgVFAgSENN!8m2!3d10.8041258!4d106.6893028!3m4!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!8m2!3d10.8041258!4d106.6893028"
                            className="text-sm"
                          >
                            Chỉ đường
                            <ArrowOutwardIcon style={{ fontSize: "20px" }} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
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
                            <span className="open-door-text">Mở cửa</span>
                          </div>
                          <div className="open-time">
                            <span className="open-time-text">09:00 - 21:00</span>
                          </div>
                        </div>
                        <div className="maps">
                          <a
                            aria-label="Chỉ đường đến Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh"
                            href="https://www.google.com/maps/place/ThinkPro+-+S%E1%BB%91+5+%2B+7+Nguy%E1%BB%85n+Huy+T%C6%B0%E1%BB%9Fng,+P6,+Q.B%C3%ACnh+Th%E1%BA%A1nh,+TP+HCM/@10.7984083,106.686565,15z/data=!4m12!1m6!3m5!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!2zVGhpbmtQcm8gLSBT4buRIDUgKyA3IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgUDYsIFEuQsOsbmggVGjhuqFuaCwgVFAgSENN!8m2!3d10.8041258!4d106.6893028!3m4!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!8m2!3d10.8041258!4d106.6893028"
                            className="text-sm"
                          >
                            Chỉ đường
                            <ArrowOutwardIcon style={{ fontSize: "20px" }} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="infor-store">
                      <div className="infor-store_address-city">Hà Nội</div>
                      <div className="infor-store_address-local">
                        53 Thái Hà, Đống Đa
                      </div>
                      <div className="infor-store_address-time">
                        <div className="times-open-door">
                          <span className="open-door-text">Mở cửa</span>
                          <span className="open-time-text">09:00 - 21:00</span>
                        </div>
                        <div className="maps">
                          <a
                            aria-label="Chỉ đường đến Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh"
                            href="https://www.google.com/maps/place/ThinkPro+-+S%E1%BB%91+5+%2B+7+Nguy%E1%BB%85n+Huy+T%C6%B0%E1%BB%9Fng,+P6,+Q.B%C3%ACnh+Th%E1%BA%A1nh,+TP+HCM/@10.7984083,106.686565,15z/data=!4m12!1m6!3m5!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!2zVGhpbmtQcm8gLSBT4buRIDUgKyA3IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgUDYsIFEuQsOsbmggVGjhuqFuaCwgVFAgSENN!8m2!3d10.8041258!4d106.6893028!3m4!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!8m2!3d10.8041258!4d106.6893028"
                            className="text-sm"
                          >
                            Chỉ đường
                            <ArrowOutwardIcon style={{ fontSize: "20px" }} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <div className="group-payment">
            <h2 className="font-size-24 ">Đa dạng thanh toán</h2>
            <div className="group-payment_items">
              <div className="bank border-btn">
                <div className="group-bank">
                  <CachedIcon style={{ color: "#fa664c" }} />
                  <span className="font-semibold group-payment_items-span">
                    Chuyển khoản
                  </span>
                </div>
              </div>
              <div className="bank border-btn">
                <div className="group-bank">
                  <LocalAtmIcon style={{ color: "#3295fb" }} />
                  <span className="font-semibold group-payment_items-span">
                    Tiền mặt
                  </span>
                </div>
              </div>
              <div className="bank border-btn">
                <div className="group-bank">
                  <AddCardIcon style={{ color: "#fda633" }} />
                  <span className="font-semibold group-payment_items-span">
                    Thẻ ATM
                  </span>
                </div>
              </div>
              <div className="bank border-btn">
                <div className="group-bank">
                  <LanguageIcon style={{ color: "#712eff" }} />
                  <span className="font-semibold group-payment_items-span">
                    Thẻ Quốc Tế
                  </span>
                </div>
              </div>
              <div className="bank border-btn">
                <div className="group-bank">
                  <img src={"/Assets/SocialMedia/vietqr.png"} alt="" />
                </div>
              </div>
              <div className="bank border-btn">
                <div className="group-bank">
                  <div className="vnpay">
                    <img src={"/Assets/SocialMedia/vnpay.png"} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-social">
            <h2 className="font-size-24 ">Thông tin hữu ích</h2>
            <div className="information-social">
              <div className="border-social">
                <div className="group-social-item">
                  <VerifiedIcon style={{ color: "#0065ee" }} />
                  <span className="font-semibold group-social_item-span">
                    Chính sách bảo hành
                  </span>
                </div>
              </div>
              <div className="border-social">
                <div className="group-social-item">
                  <CachedIcon style={{ color: "#0065ee" }} />
                  <span className="font-semibold group-social_item-span">
                    Chính sách đổi trả
                  </span>
                </div>
              </div>
              <div className="border-social">
                <div className="group-social-item">
                  <LocalShippingIcon style={{ color: "#0065ee" }} />
                  <span className="font-semibold group-social_item-span">
                    Chính sách bảo mật
                  </span>
                </div>
              </div>
              <div className="border-social">
                <div className="group-social-item">
                  <SecurityIcon style={{ color: "#0065ee" }} />
                  <span className="font-semibold group-social_item-span">
                    Chính sách thanh toán
                  </span>
                </div>
              </div>
              <div className="border-social">
                <div className="group-social-item">
                  <CreditCardIcon style={{ color: "#0065ee" }} />
                  <span className="font-semibold group-social_item-span">
                    Chính sách mua hàng online
                  </span>
                </div>
              </div>
              <div className="border-social">
                <div className="group-social-item">
                  <QrCodeScannerIcon style={{ color: "#0065ee" }} />
                  <span className="font-semibold group-social_item-span">
                    Hướng dẫn kiểm hàng
                  </span>
                </div>
              </div>
              <div className="border-social">
                <div className="group-social-item">
                  <LocalMallIcon style={{ color: "#0065ee" }} />
                  <span className=" font-semibold group-social_item-span">
                    Hướng dẫn mua hàng online
                  </span>
                </div>
              </div>
              <div className="border-social">
                <div className="group-social-item">
                  <InfoIcon style={{ color: "#0065ee" }} />
                  <span className="font-semibold group-social_item-span">
                    về chúng tôi
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="group-payment">
            <h2 className="font-size-24 ">ThinkPro trên social networks</h2>
            <div className="group-payment_items">
              <div className="bank border-btn">
                <div className="group-bank">
                  <FacebookIcon style={{ color: "#0065ee" }} />
                  <span className="font-semibold group-payment_items-span">
                    Facebook
                  </span>
                </div>
              </div>
              <div className="bank border-btn">
                <div className="group-bank">
                  <YouTubeIcon style={{ color: "#0065ee" }} />
                  <span className="font-semibold group-payment_items-span">
                    Youtube
                  </span>
                </div>
              </div>
              <div className="bank border-btn">
                <div className="group-bank">
                  <InstagramIcon style={{ color: "#0065ee" }} />
                  <span className="font-semibold group-payment_items-span">
                    Instagram
                  </span>
                </div>
              </div>
              <div className="bank border-btn">
                <div className="group-bank">
                  <TelegramIcon style={{ color: "#0065ee" }} />
                  <span className="font-semibold group-payment_items-span">
                    Telegram
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group-certification">
            <h2 className="font-size-24 ">Chứng nhận</h2>
            <div className="group-certification_items">
              <div className="mt-4 flex space-x-2">
                <a
                  href="/"
                  title="DMCA.com Protection Status"
                  className="dmca-badge"
                >
                  <img
                    src="https://images.dmca.com/Badges/dmca_protected_sml_120l.png?ID=c865e414-1108-4c7b-ba63-b958f3edd661"
                    alt="DMCA.com Protection Status"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
