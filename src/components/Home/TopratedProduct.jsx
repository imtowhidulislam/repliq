import React, { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
import {Link} from "react-router-dom";

const TopratedProduct = ({product}) => {
    const [topRate, setTopRate] = useState([]);

    const findTopRatedProduct = (arr) => {
        const heightRate = arr.filter(item => item.rating.rate >= 4.0);
        setTopRate(heightRate);
    } 
    useEffect(() => {
        findTopRatedProduct(product);
    },[])

  return (
    <div>
        <div>
            <div className='container py-20'>
                <h2 className='text-xl mb-6 sm:text-2xl md:text-3xl font-bold font-mono text-left text-[#13194a]'>Top Rated Items</h2>
                <div className='grid place-items-center grid-cols-productLayout gap-8'>
                    {
                        topRate.map(topProduct => {
                            const {id, title, price, rating,image} = topProduct;

                            return (
                                <Link key={id} to={`/home/${id}`}>
                                <div className='flex items-start justify-between flex-col topCard w-72 p-4 shadow-lg rounded-md overflow-hidden'>

                                        <div className='topImgCon'>
                                            <img className='topImg' src={image} alt="randomImage" />
                                        </div>
                                        <div className='text-left mt-4 w-full'>
                                            <h2 className='text-base capitalize font-bold'>{title}</h2>
                                            <h2 className='text-sm font-bold  capitalize my-3'>$<span className='text-yellow-500'>{price}</span> USD</h2>
                                            <h2 className='text-sm capitalize '>rating : {rating.rate}<span className='capitalize text-blue-600 font-bold ml-4' >({rating.count})</span></h2>
                                            <div>
                                                <button className='capitalize font-base cursor-pointer py-2 px-8 rounded-full w-full mt-4 bg-[#44ffee] hover:bg-[#1e9a8f] hover:text-gray-50 transition-all duration-200 ease-in-out font-bold font-serif'>add to cart</button>
                                            </div>
                                        </div>
                                </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopratedProduct