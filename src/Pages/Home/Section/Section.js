import React from 'react';
import sectionImage1 from '../../../images/sec2.png';
import sectionImage2 from '../../../images/sec3.png';
import './Section.css';
const Section = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={sectionImage1} class="max-w-lg rounded-lg shadow-2xl bg-slate-100 p-10 mb-10" alt='' />
                    <div className="section1 ml-16 bg-[url('/src/images/element2.png')] bg-no-repeat bg-right-bottom order-0">
                        <h1 class="text-5xl font-bold">Leading healthcare provider</h1>
                        <p class="py-6">Our healthcare is progressive, and an affordable healthcare and is accessible on mobile and online for everyone. To us, it is not just work. We take pride in the solutions we deliver</p>
                        <button class="btn btn-accent uppercase rounded-2xl font-medium text-white hover:bg-indigo-900">Learn More</button>
                    </div>
                </div>
            </div>
            <div className='hero min-h-screen bg-white'>
                <div class="hero-content flex-col lg:flex-row-reverse bg-[url('/src/images/element2.png')] bg-no-repeat bg-left-top">
                    <img src={sectionImage2} class="max-w-lg rounded-lg shadow-2xl bg-slate-100 p-10 mb-10" alt='' />
                    <div className="section1 mr-16 section1 ml-16">
                        <h1 class="text-5xl font-bold">Dedicated and secure portal</h1>
                        <p class="py-6">Our dedicated web portal allow you to access information instantaneously and securely, visit and check our web portal thoroughly</p>
                        <button class="btn btn-accent uppercase rounded-2xl font-medium text-white hover:bg-indigo-900">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;