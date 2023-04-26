import React, { useEffect, useState } from 'react'
const fakeApi = "https://fakestoreapi.com/products";

const Products = () => {
    const [product, setMyProduct] = useState([]);
    const [button, setButton] = useState([]);
    const [filterProduct , setFilterProduct] = useState("All");
    const [filterProductData, setFilterProductData] = useState([]);
        // !! Fetching the Unique Category>>>
        const handleClick = e => {
            setFilterProduct(e.target.dataset.name);
        }
        
        const fetchCat = () => {
            let unique = product.map(but => but.category);
            unique = [...new Set(unique)]
            setButton(unique);
        }
        useEffect(() => {
            fetchCat();
        },[fetchCat])
        
        const filterCategory = () => {
            const fetchFilterProduct =  product.filter(cat => {
                return cat.category === filterProduct;
            })
            return setFilterProductData(fetchFilterProduct);
        }
        useEffect(() => {
            filterCategory();
        },[filterProductData])    

    const getProduct = async (url) => {
        const res = await fetch(url);
        const resData = await res.json();

        if(!res.ok) {
            throw new Error("There is some issue with the api🎇");
        }

        console.log(resData);
        setMyProduct(resData)
    }
    useEffect(() => {
        getProduct(fakeApi);
    },[])


  return (
    <div className='container py-20 px-8'>
        <div className='btn_container'>
        <button className='btn' onClick={handleClick} data-name="All">All</button>
            <div className='flex items-center justify-center flex-wrap gap-2'>
                {
                    button.map(btns => {
                        return (
                            <>
                            
                                <button className='btn' onClick={handleClick} data-name={btns}>{btns}</button>
                            </>
                        )
                    })
                }
            </div>
        </div>
        <div className='grid grid-cols-productLayout gap-4 mt-10'>
            {   filterProduct === "All" ? (
                product.map(singleProduct => {
                    const {id,title, description: desc,image:img,price,rating,category:cat} = singleProduct;

                    return (
                        <div key={id} className='border-2 drop-shadow-md z-10 bg-[#ffff] hover:scale-105 transition-transform ease-in-out duration-200 overflow-hidden text-left border-gray-300 rounded-md'>
                            <div className=" m-auto w-32 mb-4 p-4">
                                <img className="block object-cover w-full h-full" src={img} alt="" />
                            </div>
                            <div className='px-4 text-gray-700 pt-2 pb-4 z-20'>
                                <div>
                                    <h2>Name : {title}</h2>
                                </div>
                                <div className='flex items-center justify-between gap-4 py-2'>
                                    <h2>Price : <span className='font-bold text-yellow-400'>{price}$</span></h2>
                                    <p>Rating : <span className='font-bold text-yellow-400'>{rating.rate}</span></p>
                                </div>
                                    <h2>Category : {cat}</h2>
                                    {/* <p>Detail : {desc}$</p> */}
                            </div>
                        </div>
                    )
                })
            ) : (
                filterProductData.map(singleProduct => {
                    const {id,title, description: desc,image:img,price,rating,category:cat} = singleProduct;

                    return (
                        <div key={id} className='border-2 drop-shadow-md z-10 bg-[#ffff] hover:scale-105 transition-transform ease-in-out duration-200 overflow-hidden text-left border-gray-300 rounded-md'>
                            <div className=" m-auto w-32 mb-4 p-4">
                                <img className="block object-cover w-full h-full" src={img} alt="" />
                            </div>
                            <div className='px-4 text-gray-700 pt-2 pb-4 z-20'>
                                <div>
                                    <h2>Name : {title}</h2>
                                </div>
                                <div className='flex items-center justify-between gap-4 py-2'>
                                    <h2>Price : <span className='font-bold text-yellow-400'>{price}$</span></h2>
                                    <p>Rating : <span className='font-bold text-yellow-400'>{rating.rate}</span></p>
                                </div>
                                    <h2>Category : {cat}</h2>
                                    {/* <p>Detail : {desc}$</p> */}
                            </div>
                        </div>
                    )
                })
            )
            }
        </div>
    </div>
  )
}

export default Products