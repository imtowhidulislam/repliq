import React, {createContext,useState,useEffect} from 'react'
const fakeApi = "https://fakestoreapi.com/products";

// !! Creating a Product Context.
export const ProductContext = createContext();

// ?? Setting up the Provider to serve data.
export const ProductContextProvider = ({children}) => {
    const [product, setProduct] = useState([]);
    const getProduct = async (url) => {
        const res = await fetch(url);
        const resData = await res.json();
        if(!res.ok) {
            throw new Error("There is some issue with the api🎇");
        }
        setProduct(resData)
    }
    useEffect(() => {
        getProduct(fakeApi);
    },[])
    return (
        <ProductContext.Provider value={[product, setProduct]}>
            {children}
        </ProductContext.Provider>
    )
}
