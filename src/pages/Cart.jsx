import React, { useContext, useEffect, useRef, useState } from 'react'
import { ProductContext } from '../context/productContext'
import Counter from '../components/Counter';
import {CounterContextProvider,CounterContext} from '../context/counterContext';

const Cart = () => {
    const {cart, product} = useContext(ProductContext);
    const [cartValue, setCartValue] = cart;
    const [uniqueCart, setUniqueCart] = useState([]);
    const counterRef = useRef(null);

    const deleteItem = () =>  {
        setCartValue([]);
        setUniqueCart([]);
    }
    const fetchUniqueCart = () => {
        let uniqueItem = cartValue.map(item => item);
        uniqueItem = [...new Set(uniqueItem)];
        
        setUniqueCart(prevItem => [...prevItem, ...uniqueItem]);
    }
    useEffect(() => {
        fetchUniqueCart();
        console.log(uniqueCart);
        console.log(cartValue);
    },[]);
console.log(uniqueCart);
    
  return (
    <div className='bg-red-200 py-16 cartHeight'>
        <div className='p-4 md:p-0 container '>
            <div className='flex items-center justify-between gap-8 mb-8'>
                <h2 className='cartTitle capitalize text-4xl font-bold font-mono text-left '>Your Cart</h2>
                <button type='button' onClick={deleteItem} className='bg-red-400 cursor-pointer py-2 px-4 rounded-md capitalize'>Delete All</button>
            </div>
            <div className='grid grid-cols-homepageLayoutHero gap-4'>
                <div>
                    {
                        uniqueCart.map(item => {
                            const {id,title,price,image,category} = item;

                            return (
                                <div key={id} className='flex items-center justify-between gap-8 p-3 rounded-md drop-shadow-md mb-2 bg-slate-200 border-b border-gray-400'>
                                    <div className='flex items-center gap-6'>
                                        <div className='h-20 w-20 rounded-md overflow-hidden'>
                                            <img className='object-cover h-20 w-full' src={image} alt="image" />
                                        </div>
                                        <div>
                                            <h2 className='text-xs md:text-base font-medium capitalize text-left'>{title}</h2>
                                        <h2 className='text-xs md:text-base font-medium capitalize text-left text-cyan-400'>{category}</h2>
                                            <h2 className="text-xs md:text-base font-medium capitalize text-left">${price} USD</h2>
                                        </div>
                                    </div>
                                    <div>
                                    <div>
                                        <Counter />
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                
                <div className='max-h-max flex items-start flex-col'>
                    <div className='border-b pb-4 mb-2 border-gray-500 w-full'>
                        <div className='flex items-center justify-between gap-4'>
                            <h2 className='text-base font-medium capitalize text-left'>subtotal</h2>
                            <h2 className='text-base font-medium capitalize text-left'>$34.42</h2>
                            
                        </div>
                        <div className='flex items-center justify-between gap-4'>
                            <h2 className='text-base font-medium capitalize text-left'>shipping</h2>
                            <h2 className='text-base font-medium capitalize text-left'>$3.45</h2>
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-between gap-4'>
                        <h2 className='text-base font-medium capitalize text-left'>total</h2>
                        <h2 className='text-base font-medium capitalize text-left'>$456.56</h2>
                    </div>
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Cart