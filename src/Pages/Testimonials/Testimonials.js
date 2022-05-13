import React from 'react';
import './Testimonials.css';
import doctor from '../../images/doctor_PNG16041.png';
const Testimonials = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <div className="card-testimonial rounded-xl bg-gradient-to-r from-[#67C3F3] to-[#5A98F2] text-white mb-10 flex">
                    <div className="card-body bg-[url('/src/images/element2.png')] bg-no-repeat bg-top-right">
                        <img className='doctor' width='500px' src={doctor} alt="" />
                    </div>
                    <div>
                        <h3 className='text-lg text-accent font-bold mt-10'>Appointment</h3>
                        <h3 className='text-3xl text-white mt-5 mb-5'>Make an appointment today</h3>
                        <p className='text-xl mb-5 mr-5'>Hello there, are you feeling sick? do you need a doctor to help you? I will appoint a doctor for you.</p>
                        <button className="btn btn-accent uppercase font-medium text-white hover:bg-indigo-900">Consult Today</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;