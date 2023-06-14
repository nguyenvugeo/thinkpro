import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SwiperProducts from "../SwiperProducts";
import OrderProduct from "../Components/Cart/OrderProduct";

function OrderProductPage(props) {
  return (
    <div>
      <Header />
      <SwiperProducts />
      <OrderProduct />
      <Footer />
    </div>
  );
}

export default OrderProductPage;
