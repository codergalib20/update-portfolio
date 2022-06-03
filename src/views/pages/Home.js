import React from 'react';
import Service from '../components/custom/Service';
import About from '../components/home/About';
import Banner from '../components/home/Banner';
import Portfolio from '../components/home/Portfolio';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Service />
            <Portfolio/>
        </div>
    );
};

export default Home;