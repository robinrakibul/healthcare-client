import React from 'react';
import Testimonials from '../Testimonials/Testimonials';
import Article from './Article';
import Banner from './Banner';
import Section from './Section/Section';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Section></Section>
            <Testimonials></Testimonials>
            <Article></Article>
        </div>
    );
};

export default Home;