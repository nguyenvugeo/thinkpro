import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SwiperProducts from "../SwiperProducts";
import DealProducts from "../Components/MainContent/DealProducts/DealProducts";
import { useParams } from "react-router-dom";

function DealProductsPage(props) {
  let { uid } = useParams();
  let { productCategory } = useParams();
  return (
    <div>
      <Header />
      <SwiperProducts />
      <DealProducts uid={uid} productCategory={productCategory}/>
      <Footer />
    </div>
  );
}

export default DealProductsPage;
