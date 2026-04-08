import React from 'react';
import MidContainerCart from './MidContainerCart';

const MidContainer = () => {
    return (
        <div className='bg-base-200 py-20'>
            <div className='text-center space-y-3 mb-10 max-w-[80%] mx-auto'>
                <h2 className=' text-3xl lg:text-4xl font-bold'>Get Started in 3 Steps</h2>
                <p className='text-gray-400 font-semibold'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <MidContainerCart></MidContainerCart>

        </div>
    );
};

export default MidContainer;