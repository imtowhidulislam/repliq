import React from 'react'

const Button = ({actionType,productId}) => {
    const getProduct = (id) => {
        console.log(`The product id is ${id}`);
    }
  return (
    <>
        <button type='button' onClick={getProduct(productId)} className='capitalize font-bold text-sm text-gray-100 bg-blue-600 cursor-pointer py-2 px-4 rounded-md hover:drop-shadow-md transition-all duration-200 ease-in-out hover:text-slate-50 hover:bg-blue-700'>{actionType}</button>
    </>
  )
}

// export default Button