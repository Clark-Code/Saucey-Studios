import React, { Fragment } from 'react';
import HomeSection from '../components/HomeSection';
import ServiceSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

const Home = () => {
    return (
        <Fragment>

            <HomeSection />
            <ServiceSection />
            <FaqSection />

        </Fragment>       
    )
}

export default Home;
