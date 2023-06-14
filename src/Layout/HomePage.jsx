import React from 'react';
import Header from '../Components/Header/Header';
import MainContent from '../Components/MainContent/MainContent';
import SwiperProducts from '../SwiperProducts';
import Footer from '../Components/Footer/Footer';
import { useParams } from "react-router-dom";


function HomePage(props) {
    let { productCategory } = useParams();

    return (
        <div>
            <Header />
            <SwiperProducts/>
            <MainContent productCategory={productCategory}/>
            <Footer/>
        </div>
    );
}

export default HomePage;