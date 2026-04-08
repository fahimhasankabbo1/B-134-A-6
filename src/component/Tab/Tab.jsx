import React, { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Tab = ({info,setI}) => {

    const [show, setS] = useState('product')

    const h = (e) => {
        const exist = info.find(v => v.id === e.id)
        if(!exist){
            setI(c => [...c,e])
        }
    }

    const total = info.reduce((x,y) => x + y.price, 0)

    const g = (e) => {
        setI(c => c.filter(v => v.id !== e.id))
    }

    return (
        <div className='mb-20'>
            <div className='flex justify-center mb-10'>
                <div className='flex gap-2'>
                    <button onClick={() => setS("product")} className={`btn rounded-full px-10 ${show === 'product' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'font-bold btn-outline btn-primary'}`}>Products</button>
                    <button onClick={() => setS("cart")} className={`btn rounded-full px-10 ${show === 'cart' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'btn-outline btn-primary font-bold'}`}>Cart(<span>{info.length}</span>)</button>
                </div>
            </div>

            {
                show === "product" && <Product h={h} info={info}></Product>
            }

            {
                show === "cart" && <Cart info={info} g={g} total={total} setI={setI}></Cart>
            }

        </div>
    );
};

export default Tab;