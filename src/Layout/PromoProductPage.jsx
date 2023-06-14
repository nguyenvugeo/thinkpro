import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import SwiperProducts from '../SwiperProducts';
import PromotionProducts from '../Components/MainContent/PromotionProducts/PromotionProducts';

function PromoProductPage(props) {
    return (
        <div className='promo-product-page'>
            <Header/>
            <SwiperProducts/>
            <PromotionProducts  />
            <Footer/>
        </div>
    );
}

export default PromoProductPage;