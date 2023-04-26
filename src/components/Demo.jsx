import React from 'react'

const Demo = () => {
  return (
    <div>
        <div className='bg-gray-300 rounded-md drop-shadow-lg p-3 max-w-max'>
            <div className='relative max-h-44'>
                <img className='object-cover h-44 top-0 bottom-0 right-0 left-0 m-auto' src="https://unsplash.it/1000/1000?image=455" alt="randomImage" />
            </div>
            <div className='capitalize text-left break-words'>
                <p>Lorem ipsum dolor sit amet.</p>
                <h2>this is a demo image</h2>
                <p>$45.65</p>
                <p>men's pictures</p>
            </div>
        </div>
    </div>
  )
}

export default Demo