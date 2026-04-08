import React, { useState } from 'react';
import { toast, Bounce } from 'react-toastify';

const ProductCart = ({p,h,info}) => {

    const [bool, setBool] = useState(false)

    const a = () => {
        h(p)
        setBool(true)
        const exist = info.find(v => v.id === p.id)
        if(exist){
            toast.error('Item already added to cart!', {
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
        else{
            toast.success(`Item add to cart $${p.price}`, {
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
    }

    return (
        <div>
            <div className='border border-gray-300 p-4 rounded-2xl h-full shadow-xl hover:scale-105 transition duration-500'>
                <div className='text-right'>
                    <span className={`badge ${p.badge === 'Popular' && "text-green-600 bg-green-200 border border-green-500" || p.badge === 'New' && "text-yellow-600 bg-yellow-200 border border-yellow-600" || p.badge === 'Best Seller' && "text-red-600 bg-red-200 border border-red-500"} font-semibold`}>{p.badge}</span>
                </div>
                <button className='px-2 py-3 border border-gray-300 rounded-full text-4xl mb-3'>{p.icon}</button>
                <h2 className='text-2xl font-bold mb-2'>{p.plan_name}</h2>
                <p className='text-gray-400 font-semibold mb-2'>{p.description}</p>
                <p className='text-gray-500 font-semibold mb-3'><span className='text-2xl text-black font-bold'>$<span>{p.price}</span></span>{p.duration}</p>

                <ul className="flex flex-col gap-2 text-sm font-semibold text-gray-500 mb-4">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{p.feature_1}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{p.feature_2}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{p.feature_3}</span>
                    </li>
                </ul>
                <button onClick={a} className={`btn text-white rounded-full w-full ${bool ? 'bg-green-600' : 'bg-gradient-to-r from-[#4F39F6] py-6 to-[#9514FA] '}`}>{bool ? "Added to Cart" : "Buy Now"}</button>
            </div>
        </div>
    );
};

export default ProductCart;