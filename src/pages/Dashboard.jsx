import React, { useContext } from 'react'
import {RiShoppingBagFill } from "react-icons/ri";
import { ProductContext } from '../context/productContext';
import { FaTrash } from 'react-icons/fa';

const Dashboard = () => {
  const {product, cart} = useContext(ProductContext);
  const [cartValue, setCartValue] = cart;
  const [productValue, setProductValue] = product;

  const removeItem = (id) => {
    setProductValue((current) =>
      current.filter((item) => item.id !== id)
    );
  };
  
  return (
    <div>
      <div className='grid-layout container'>
        <div className=''>
          <div className='mb-6'>
                    <h2 className='uppercase text-blue-600 text-2xl font-bold flex gap-2 items-center'><span className='text-green-600'><RiShoppingBagFill /></span>repliq</h2>
          </div>
          <div className='w-full grid place-items-start gap-3'>
            <button className='w-full bg-green-300 text-gray-900 font-medium font-serif py-2 px-8 rounded-full cursor-pointer capitalize hover:bg-slate-800 hover:text-green-300 border-2 border-transparent hover:border-green-600'>Customers</button>
            <button className='w-full bg-green-300 text-gray-900 font-medium font-serif py-2 px-8 rounded-full cursor-pointer capitalize hover:bg-slate-800 hover:text-green-300 border-2 border-transparent hover:border-green-600'>Add Customers</button>
            <button className='w-full bg-green-300 text-gray-900 font-medium font-serif py-2 px-8 rounded-full cursor-pointer capitalize hover:bg-slate-800 hover:text-green-300 border-2 border-transparent hover:border-green-600'>Products</button>
            <button className='w-full bg-green-300 text-gray-900 font-medium font-serif py-2 px-8 rounded-full cursor-pointer capitalize hover:bg-slate-800 hover:text-green-300 border-2 border-transparent hover:border-green-600'>add Products</button>
          </div>
        </div>
        <div>
          <h2 className='capitalize mb-4 text-2xl font-bold font-mono'>total no of product is : {productValue.length}</h2>
          <div>
                      {
                          productValue.map(item => {
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
                                        <button className='text-red-400 hover:animate-bounce transition-all duration-200 ease-in-out hover:text-red-600 text-xl cursor-pointer' onClick={() => removeItem(id)}><FaTrash /></button>
                                      </div>
                                      </div>
                                  </div>
                              )
                          })
                      }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard