import React from 'react';
import bannerImage from '../../images/illustration.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen p-10 bg-slate-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} className="max-w-sm rounded-2xl shadow-xl bg-slate-100" />
                <div className='pr-10 w-1/2'>
                    <h1 className="text-5xl font-bold">We care about your health</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit odio tempora consectetur quasi, officiis velit voluptatum corporis repudiandae! Quasi nemo soluta nesciunt fugit nam hic ut, iusto iste ad, non iure quisquam tempore et corrupti doloribus</p>
                    <button className="btn btn-accent uppercase rounded-2xl font-medium text-white hover:bg-indigo-900">Consult Today</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;