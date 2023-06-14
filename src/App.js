import "./App.css";
import HomePage from "./Layout/HomePage";
import { Routes, Route } from "react-router-dom";
import PageColection from "./Layout/PageColection";
import DetailPage from "./Layout/DetailPage";
import CartPage from "./Layout/CartPage";
import CatalorBrandProductsPage from "./Layout/CatalorBrandProductsPage";
import OrderProductPage from "./Layout/OrderProductPage";
import DealProductsPage from "./Layout/DealProductsPage";
import RegisterPage from "./Layout/RegisterPage";
import ResetPassword from "./Components/Authenciation/ResetPassword/ResetPassword";
import PromoProductPage from "./Layout/PromoProductPage";
import LoginPage from "./Layout/LoginPage";
import SwiperImages from "./Components/MainContent/SwiperComponents/SwiperImages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/page-colection/:productCategory"
          element={<PageColection />}
        />
        <Route path="/detail-products/:uid" element={<DetailPage />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route
          path="/catalor-brand/:catalor"
          element={<CatalorBrandProductsPage />}
        />
        <Route path="/order-product" element={<OrderProductPage />} />
        <Route path="/deal-product/:uid" element={<DealProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/promo-product" element={<PromoProductPage />} />
        <Route path="/swiper" element={<SwiperImages />} />
      </Routes>
    </div>
  );
}

export default App;
