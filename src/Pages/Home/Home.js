import React from 'react';
import Banner from './Banner/Banner';
import Recommendation from './Recommendation/Recommendation';
import Cars from './Cars/Cars';
import Disclaimer from './Disclaimer/Disclaimer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Recommendation></Recommendation>
            <Cars></Cars>
            <Disclaimer></Disclaimer>
        </div>
    );
};

export default Home;