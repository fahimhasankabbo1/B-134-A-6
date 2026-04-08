import React from 'react';
import { toast, Bounce } from 'react-toastify';

const CartSection = ({p,g}) => {

    const a = () => {
        g(p)
        toast.success('Remove Cart!', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <div className='flex justify-between items-center flex-col lg:flex-row text-center lg:text-left gap-3 lg:gap-0 p-4 bg-gray-100 rounded-2xl border border-gray-300 hover:border-red-500'>
            <div className='flex flex-col lg:flex-row items-center gap-3'>
                <button className='px-1 py-2 lg:px-2 lg:py-3 border border-gray-300 bg-white rounded-full text-4xl'>{p.icon}</button>
                <div className=''>
                    <h2 className='text-xl font-bold'>{p.plan_name}</h2>
                    <p className='font-semibold text-lg'>$<span>{p.price}</span></p>
                </div>
            </div>
            <button onClick={a} className='text-red-500 btn'>Remove</button>
        </div>
    );
};

export default CartSection;