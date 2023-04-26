import React from 'react'
import { Link } from 'react-router-dom'
import SearchButton from '../components/SearchButton'
import {FaShoppingCart} from "react-icons/fa";
import {VscAccount} from "react-icons/vsc"
import {BsCartPlus} from "react-icons/bs"
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import {RiShoppingBagFill} from "react-icons/ri"
import {HiOutlineBars3CenterLeft} from "react-icons/hi"
import {RxCross1} from "react-icons/rx"

const Navbar = () => {
  return (
    <div className='bg-gray-200 px-8 flex items-center justify-center py-3'>
        <nav className='flex items-center justify-between gap-4 max-w-7xl w-full'>
            <div>
                <h2 className='uppercase text-blue-600 text-2xl font-bold flex gap-2 items-center'><span className='text-green-600'><RiShoppingBagFill /></span>repliq</h2>
            </div>
            <div className='flexRow gap-2'>
                <li className='navList'>
                    <Link className='navLink' to="/">Home</Link>
                </li>
                <li className='navList'>
                    <Link className='navLink' to="/product">Product</Link>
                </li>
                <li className='navList'>
                    <Link className='navLink' to="/dashboard">Dashboard</Link>
                </li>
            </div>
            <div className='flexRow gap-4'>
                <li>
                    <SearchButton />
                </li>
                <li className='flex items-center gap-2'>
                    <span><VscAccount/></span>
                    <Link to="/account"> Account</Link>
                </li>
                <li className='flex items-center gap-2'>
                    <span><BsCartPlus/></span>
                    <Link to="/cart"> Cart</Link>
                </li>
            </div>
        </nav> 
    </div>
  )
}

export default Navbar