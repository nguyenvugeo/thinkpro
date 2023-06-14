import React from "react";
import DetailProducts from "../Components/DetailProducts/DetailProducts";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SwiperProducts from "../SwiperProducts";
import { useParams } from "react-router-dom";

function DetailPage(props) {
  let { id } = useParams();
  return (
    <div className="detail-page">
      <Header />
      <SwiperProducts />
      <DetailProducts id={id} />
      <Footer />
    </div>
  );
}

export default DetailPage;
