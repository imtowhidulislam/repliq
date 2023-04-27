import React from 'react'
import {RiShoppingBagFill} from "react-icons/ri";

const Form = ({acctionType,handleSubmit,handleChange,toggleForm,formData, account ,signup}) => {
  return (
    <>
        <form onSubmit={handleSubmit} className='registerForm w-full max-w-lg px-4 rounded-md overflow-hidden py-8 border border-gray-500 bg-[#14141483] backdrop-filter backdrop-blur-md'>
                <div className='flex items-center justify-center text-6xl text-cyan-700 pb-6'>
                    <div>
                        <h2 className='uppercase text-blue-600 text-4xl font-bold flex gap-2 items-center'><span className='text-green-600'><RiShoppingBagFill /></span>repliq</h2>
                    </div>
                </div>
                <div className="pb-8">
                    <h2 className='text-center text-xl font-bold text-[#ffff] uppercase'>{signup}</h2>
                </div>

                <div className='w-full flex items-center justify-center gap-4'>
                    <label className='lableWidth text-gray-100 font-bold' htmlFor="Phone : ">Phone</label>
                    <input type="text" name='personPhone' onChange={handleChange} value={formData.personPhone} className='form w-full placeholder:capitalize pl-4' placeholder='enter your phone' />
                </div>

                <div className='w-full flex items-center justify-center gap-4'>
                    <label className='lableWidth text-gray-100 font-bold capitalize' htmlFor="password: ">password</label>
                    <input type="password" name='password' onChange={handleChange} value={formData.password} className='form w-full placeholder:capitalize pl-4' placeholder='enter your Occupation' />
                </div>

                <div className='mt-12 w-full '>
                    <button type='submit' onClick={handleSubmit} className='rounded-md capitalize w-full font-bold text-base bg-cyan-700 text-gray-100 hover:bg-cyan-300 hover:text-gray-700 transition-all duration-200 ease-out cursor-pointer py-4 px-8'>submit</button>
                </div>

                <div><p className='capitalize text-gray-300'>{account}<span><button onClick={toggleForm} type='button' className='uppercase text-sky-400 underline cursor-pointer'>{acctionType}</button></span></p></div>
            </form>
    </>
  )
}

export default Form