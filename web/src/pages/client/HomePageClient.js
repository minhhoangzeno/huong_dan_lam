import React from 'react';
import HomeBanner from '../../components/home/HomeBanner';
import HomeBannerAds from '../../components/home/HomeBannerAds';
import HomeGiftChoose from '../../components/home/HomeGiftChoose';
import HomeNewFlower from '../../components/home/HomeNewFlower';
import HomePromotion from '../../components/home/HomePromotion';
import HomeServiceContent from '../../components/home/HomeServiceContent';
import HomeTreeChoose from '../../components/home/HomeTreeChoose';
import HomeViewMore from '../../components/home/HomeViewMore';
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
                <HomeViewMore />
                <HomeBannerAds />
                <HomeGiftChoose />
                <HomeTreeChoose />
                <HomeServiceContent />
            </section>
            <Footer />
        </>
    )
}