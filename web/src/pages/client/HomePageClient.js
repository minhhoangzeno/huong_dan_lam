import React from 'react';
import HomeBanner from '../../components/home/HomeBanner';
import HomeGiftChoose from '../../components/home/HomeGiftChoose';
import HomeNewFlower from '../../components/home/HomeNewFlower';
import HomePromotion from '../../components/home/HomePromotion';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import '../../scss/home.scss';


export default () => {
    return(
        <>
            <Header />
            <section className='content' >
                <HomeBanner />
                <HomeNewFlower />
                <HomePromotion />
                <HomeGiftChoose />
            </section>
            <Footer />
        </>
    )
}