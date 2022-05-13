import React from 'react';
import './Services.css';
const Services = () => {
    return (
        <div>
            <div className="text-3xl text-center mt-10 mb-10 font-bold underline underline-offset-8">Services</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[url('/src/images/Vector.png')] bg-no-repeat">
                <div className="ml-10 mr-10 mb-10 p-7 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 card">
                    <img className='mt-5 mb-5' src="https://i.ibb.co/19hbzb4/Frame1.png" width='50px' alt="" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Search doctor</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
                </div>
                <div className="ml-10 mr-10 mb-10 p-7 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 card">
                    <img className='mt-5 mb-5' src="https://i.ibb.co/9tJMf0K/Frame2.png" width='50px' alt="" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Online pharmacy</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Buy  your medicines with our mobile application with a simple delivery system</p>
                </div>
                <div className="ml-10 mr-10 mb-10 p-7 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 card">
                    <img className='mt-5 mb-5' src="https://i.ibb.co/hKRt2r4/Frame3.png" width='50px' alt="" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Consultation</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Free consultation with our trusted doctors and get the best recomendations</p>
                </div>
                <div className="ml-10 mr-10 mb-10 p-7 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 card">
                    <img className='mt-5 mb-5' src="https://i.ibb.co/wQ1QPN9/Frame4.png" width='50px' alt="" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Details info</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Check all the information and then decide what to do</p>
                </div>
                <div className="ml-10 mr-10 mb-10 p-7 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 card">
                    <img className='mt-5 mb-5' src="https://i.ibb.co/fDTCRz3/Frame5.png" width='50px' alt="" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Emergency care</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">You can get 24/7 urgent care for yourself or your children and your lovely family</p>
                </div>
                <div className="ml-10 mr-10 mb-10 p-7 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 card">
                    <img className='mt-5 mb-5' src="https://i.ibb.co/F3RtdV4/Frame6.png" width='50px' alt="" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tracking</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Track and save your medical history and health data</p>
                </div>
            </div>
        </div>
    );
};

export default Services;