import React, { useEffect, useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/productContext';
import SearchButton from '../components/SearchButton'
import {FaShoppingCart,FaBars} from "react-icons/fa";
import {VscAccount} from "react-icons/vsc"
import {BsCartPlus} from "react-icons/bs"
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import {RiShoppingBagFill} from "react-icons/ri"
import {HiOutlineBars3CenterLeft} from "react-icons/hi"
import {RxCross1} from "react-icons/rx"

const Navbar = () => {
    const {cart,product} = useContext(ProductContext);
    const [cartValue,setCartValue] = cart;
    const navBar = useRef(null);
    const [toggleNav, setToggleNav] = useState(false);
    const [width , setWidth] = useState(window.innerWidth);
    const [navheight, setNavHeight] = useState(0);

    useEffect(() => {
        const height = navBar.current.getBoundingClientRect().height;
        setNavHeight(height);
      }, []);
 
    useEffect(() => {
    const calcSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", calcSize);
    return () => {
      window.removeEventListener("resize", calcSize);
    };
  }, []);

    // ? Navbar Toggle Functionality...
    const handleToggle = () => {
        setToggleNav(!toggleNav);
    }
  
  return (
    <div ref={navBar} className='bg-gray-200 px-8 flex items-center justify-center py-3'>
        {
            width > 768 ? (
                <nav className='flex items-center justify-between gap-2 max-w-7xl w-full'>
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
                    <span><VscAccount/>
                    </span>
                    <Link to="/account"> Account</Link>
                </li>
                <li className='flex items-center gap-2'>
                    <span className='countCart'>
                        <BsCartPlus/>
                        <p className='numberOfItem'>{cartValue.length}</p>
                    </span>
                    <Link to="/cart"> Cart</Link>
                </li>
            </div>
        </nav>
            ) : (
            <nav className='relative z-20 flex items-center justify-between gap-4 max-w-7xl w-full'>
                <div>
                    <h2 className='uppercase text-blue-600 text-2xl font-bold flex gap-2 items-center'><span className='text-green-600'><RiShoppingBagFill /></span>repliq</h2>
                </div>
                <div className='cursor-pointer' onClick={handleToggle}>{toggleNav ? <FaBars /> : <RxCross1 />}</div>
                <div className={toggleNav ? 'mobileNav z-10 py-20 fixed top left-0 px-32 backdrop-blur-md backdrop-filter bg-[#1e1e1c89]' :'mobileNav-active z-10 py-20 fixed top left-0 px-32 backdrop-blur-md backdrop-filter bg-[#1e1e1c89] '}>
                    <div className=''>
                        <div>
                            <li>
                                <SearchButton />
                            </li>
                        </div>
                        <div className='gap-2'>
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
                        <div className='gap-4 m-auto'>
                            <li className='flex items-center justify-center gap-2 py-2'>
                                <span><VscAccount/></span>
                                <Link to="/account"> Account</Link>
                            </li>
                            <li className='flex items-center justify-center gap-2 py-2'>
                                <span><BsCartPlus/></span>
                                <Link to="/cart"> Cart</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
            )
        }
         
    </div>
  )
}

export default Navbar