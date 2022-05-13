import React from 'react';
import Banner from './Banner';
import Treatment from './Treatment';
import Info from './Info';
import Services from './Services';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';
import Contract from './Contract';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contract></Contract>
            <Footer></Footer>
        </div>
    );
};

export default Home;