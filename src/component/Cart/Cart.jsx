import React from 'react';
import CartSection from './CartSection';
import { BsCart2 } from "react-icons/bs";
import { toast, Bounce } from 'react-toastify';

const Cart = ({info,g,total,setI}) => {

    const a = () => {
        setI([])
        toast.success(`Payment Successfully! $${total}`, {
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
        <div className='max-w-[70%] mx-auto mb-20 border border-gray-300 shadow-xl rounded-2xl p-6'>
            <div className='mb-5'>
                <h2 className='text-3xl font-bold text-black'>Your Cart</h2>
            </div>
            <div className='flex flex-col gap-4'>
                {
                    info.map(v => <CartSection key={v.id} p={v} g={g}></CartSection>)
                }
            </div>

            {
                info.length !== 0 && (
                    <div>
                        <div className='text-2xl font-bold flex justify-between items-center mt-10 mb-5'>
                            <h2 className='text-black'>Total</h2>
                            <h2 className='text-black'>$<span>{total}</span></h2>
                        </div>
                        <div>
                            <button onClick={a} className='btn bg-gradient-to-r from-[#4F39F6] py-7 to-[#9514FA] text-white rounded-2xl w-full text-lg lg:text-xl'>Proceed to Checkout</button>
                        </div>
                    </div>
                )
            }

            {
                info.length === 0 && (
                    <div className='font-bold py-15 bg-white rounded-2xl'>
                        <h2 className='flex justify-center text-6xl mb-4 text-black'><BsCart2 /></h2>
                        <h2 className='text-center text-2xl text-black'>Your Cart is empty</h2>
                    </div>
                )
            }
            
        </div>
    );
};

export default Cart;