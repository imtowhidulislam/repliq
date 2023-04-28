import React, { useEffect, useContext, useState } from 'react'
import { ProductContext } from '../context/productContext';
import ProductCategory from '../components/Product/productCategory';
import ProductOfList from '../components/Product/ProductOfList';

const Products = () => {

    const {product, cart} = useContext(ProductContext);
    const [cartValue, setCartValue] = cart;
    const [productValue, setProductValue] = product;
    const [button, setButton] = useState([]);
    const [filterProduct , setFilterProduct] = useState("All");

        // !! Fetching the Unique Category>>>
        const handleClick = e => {
            setFilterProduct(e.target.dataset.name);
        }
        
        const fetchCat = () => {
            let unique = productValue.map(but => but.category);
            unique = [...new Set(unique)]
            setButton(unique);
        }
        useEffect(() => {
            fetchCat();
        },[])
        console.log(cartValue);
        console.log(productValue);
  return (
    <div className='container py-24 px-8 md:px-0'>
        <div className='btn_container'>
        <button className='btn' onClick={handleClick} data-name="All">All</button>
            <div className='flex items-center justify-center flex-wrap gap-2'>
                {
                    button.map(btns => {
                        return (
                            <>
                            
                                <button key={btns.id} className='btn' onClick={handleClick} data-name={btns}>{btns}</button>
                            </>
                        )
                    })
                }
            </div>
        </div>
        <div className='grid grid-cols-productLayout gap-4 mt-10'>
            {   
                filterProduct === "All" ? <ProductOfList filterProduct={filterProduct} cart={cartValue} setCart={setCartValue} product={productValue} setProduct={setProductValue} /> : <ProductCategory filterProduct={filterProduct} 
cart={cartValue} setCart={setCartValue} product={productValue} setProduct={setProductValue} />
            }
        </div>
    </div>
  )
}

export default Products