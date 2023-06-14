import React from "react";
import Container from "react-bootstrap/Container";
import SwiperCatagories from "./SwiperComponents/SwiperCatargories";
import SwiperCollectionNotice from "./SwiperComponents/SwiperCollectionNotice";
import SwiperPromotionProducts from "./SwiperComponents/SwiperPromotionProducts";
import InformationPage from "./Information/InformationPage";
import ProductsSuggest from "./ProductsSuggest/ProductsSuggest";

function MainContent({ productCategory }) {
  return (
    <div className="container-main-content">
      <div className="main-content">
        <Container>
          <div className="banner">
            <div className="banner-container">
              <div className="left-content px-6 py-8">
                <div className="father-group">
                  <h1 className="text-h2 font-semibold">
                    Giao diện mới, phục vụ bạn và người thân tốt hơn 💚💚💚
                  </h1>
                  <p className="mt-2">
                    Sau 6 tháng cải tiến, ThinkPro chính thức ra mắt phiên bản
                    Website mới. Đội ngũ ThinkPro luôn tự hào với sứ mệnh trở
                    thành thương hiệu bán lẻ Laptop và đồ công nghệ tốt cho bạn
                    và người thân!
                  </p>
                </div>
              </div>
              <div className="right-content overflow-hidden">
                <a href="/">
                  <img
                    alt="Giao diện mới, phục vụ bạn và người thân tốt hơn 💚💚💚"
                    src="https://images.thinkgroup.vn/unsafe/1600x600/https://media-api-beta.thinkpro.vn/media/core/categories/2023/3/16/329409720_776699303816616_5609673989706713871_n.jpeg"
                    className="t-img h-full w-full object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* danh muc */}
          <h2 className="title-catagories">Danh mục</h2>
          <SwiperCatagories />
        </Container>
        <Container>
          {/* bo suu tap dang chu y */}
          <h2 className="header-title-colection">Bộ sưu tập đáng chú ý</h2>
          <SwiperCollectionNotice />
        </Container>
        <Container>
          <SwiperPromotionProducts />
        </Container>
        <InformationPage />
        <ProductsSuggest productCategory={productCategory} />
      </div>
    </div>
  );
}

export default MainContent;
