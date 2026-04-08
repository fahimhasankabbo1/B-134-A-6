import React from 'react';
import img1 from "../../../assets/user.png"
import img2 from "../../../assets/package.png"
import img3 from "../../../assets/rocket.png"

const MidContainerCart = () => {
    return (
        <div className='max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='p-4 space-y-3 rounded-2xl bg-white shadow-xl hover:scale-105 transition duration-500 hover:bg-blue-200'>
                <div className='flex justify-end'>
                    <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full p-2 text-xs font-bold'>01</button>
                </div>
                <div className='flex justify-center'>
                    <img className='p-3 bg-violet-200 rounded-full' src={img1} alt="" />
                </div>
                <h2 className='text-center text-2xl font-bold'>Create Account</h2>
                <p className='text-gray-400 font-semibold text-center mb-15'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            <div className='p-4 space-y-3 rounded-2xl bg-white shadow-xl hover:scale-105 transition duration-500 hover:bg-blue-200'>
                <div className='flex justify-end'>
                    <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full p-2 text-xs font-bold'>02</button>
                </div>
                <div className='flex justify-center'>
                    <img className='p-3 bg-violet-200 rounded-full' src={img2} alt="" />
                </div>
                <h2 className='text-center text-2xl font-bold'>Choose Products</h2>
                <p className='text-gray-400 font-semibold text-center mb-15'>Browse our catalog and select the tools that fit your needs.</p>
            </div>
            <div className='p-4 space-y-3 rounded-2xl bg-white shadow-xl hover:scale-105 transition duration-500 hover:bg-blue-200'>
                <div className='flex justify-end'>
                    <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full p-2 text-xs font-bold'>03</button>
                </div>
                <div className='flex justify-center'>
                    <img className='p-3 bg-violet-200 rounded-full' src={img3} alt="" />
                </div>
                <h2 className='text-center text-2xl font-bold'>Start Creating</h2>
                <p className='text-gray-400 font-semibold text-center mb-15'>Download and start using your premium tools immediately.</p>
            </div>
        </div>
    );
};

export default MidContainerCart;