import React from 'react'
import { ProductContext } from '../context/productContext'
import { useContext } from 'react'

const Demo = () => {
    const [product, setProduct] = useContext(ProductContext);
console.log(product);
  return (
    <div>
        <div className='grid grid-cols-productLayout gap-4 place-content-center'>
            {
                product.map(pdt => {
                    const {id, image} = pdt;
                    return (
                        <div key={id} className='bg-[#ffff] rounded-md drop-shadow-md p-3 max-w-max'>
                            <div className='relative max-h-44 imgContainer'>
                                <img className='object-cover h-44 top-0 bottom-0 right-0 left-0 w-full m-auto' src={image} alt="randomImage" />
                            </div>
                            <div className='mt-4 capitalize text-left break-words'>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <h2>this is a demo image</h2>
                                <p>$45.65</p>
                                <p>men's pictures</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Demo