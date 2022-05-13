import React from 'react';
import Banner from './Banner';
import Section from './Section/Section';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Section></Section>
        </div>
    );
};

export default Home;