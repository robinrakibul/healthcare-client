import React from 'react';
import bannerImage from '../../images/illustration.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen p-10 bg-blue-200">
            <div className="bg-[url('/src/images/element.png')] bg-no-repeat bg-left-top">
            <div className="ml-3 hero-content flex-col lg:flex-row-reverse bg-[url('/src/images/element.png')] bg-no-repeat bg-right-bottom">
                <img src={bannerImage} className="max-w-sm rounded-2xl shadow-xl bg-indigo-300 p-5" />
                <div className='pr-10 w-1/2'>
                    <h1 className="text-5xl font-bold">We care about your health</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit odio tempora consectetur quasi, officiis velit voluptatum corporis repudiandae! Quasi nemo soluta nesciunt fugit nam hic ut, iusto iste ad, non iure quisquam tempore et corrupti doloribus</p>
                    <button className="btn btn-accent uppercase rounded-2xl font-medium text-white hover:bg-indigo-900">Consult Today</button>
                </div>
            </div>
        </div>
        </div >
    );
};

export default Banner;