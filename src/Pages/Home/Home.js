import React from 'react';
import Banner from './Banner/Banner';
import Recommendation from './Recommendation/Recommendation';
import Cars from './Cars/Cars';
import Disclaimer from './Disclaimer/Disclaimer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className='container'>
                    <h1 className='fs-1 text-center mb-5 mt-5'>Smart Electronics</h1>
                    <p className='fs-5'>Local television manufacturers and assemblers, now focusing on research and development, have made inroads into the burgeoning domestic market.</p>
                    <p className='fs-5'>They expected Bangladesh to grow to a billion-dollar market by 2025, and prepare their business plans accordingly for both home and overseas markets.</p>
                    <p className='fs-5'>The home-grown electronics companies say they have attained abilities to have a foothold on the global television market with policy support from the government, tax exemption, and cash incentives on export</p>
                    <p className='fs-5'>
                    Currently, 'Made in Bangladesh' televisions account for about 40 per cent of the local market while imported or assembled foreign brands hold over 60 per cent, according to a recent study by Marketing Watch Bangladesh (MWB).


                    </p>
                </section>
            <Recommendation></Recommendation>
            <Cars></Cars>
            <Disclaimer></Disclaimer>
        </div>
    );
};

export default Home;