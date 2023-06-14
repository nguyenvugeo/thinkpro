import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SwiperProducts from "../SwiperProducts";
import Cart from "../Components/Cart/Cart";

function CartPage(props) {
  return (
    <div>
      <Header />
      <SwiperProducts />
      <Cart />
      <Footer />
    </div>
  );
}

export default CartPage;
