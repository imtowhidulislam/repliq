import React from 'react'
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaLinkedin} from "react-icons/fa"
import {RiShoppingBagFill} from "react-icons/ri";
import { FaCopyright } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-blue-700 px-4 py-8'>
        <div className='container'>
        <div className='text-6xl flex items-center justify-center mb-10 text-gray-100'>
            <div>
                <Link to="/" className="cursor-pointer">
                    <h2 className='uppercase text-white text-2xl font-bold flex gap-2 items-center'><span className='text-white'><RiShoppingBagFill /></span>repliq</h2>
                </Link>
            </div>
        </div>
        <div className='grid grid-cols-footerLayout gap-4'>
            <div className='footerStyle'>
                <h2>services</h2>
                <p>branding</p>
                <p>design</p>
                <p>marketing</p>
                <p>advertisement</p>
            </div>
            <div className='footerStyle'>
                <h2>company</h2>
                <p>about us</p>
                <p>contact</p>
                <p>jobs</p>
                <p>press kit</p>
            </div>
            <div className='footerStyle'>
                <h2>address</h2>
                <p>house#2/1, road#2,</p>
                <p>block#c, section#2,</p>
                <p>mirpur,dhaka-1216</p>
                <p>
                    <span>email : </span>weerodigital@gmail.com 
                </p>
                <p>
                    <span>phone : </span>01634546443
                </p>
                <p>Social handls</p>
                <div className='flex text-2xl text-gray-300 gap-2 mt-2'>
                    <FaFacebookSquare />
                    <FaTwitterSquare/>
                    <FaInstagramSquare/>
                    <FaLinkedin/>
                </div>
            </div>
        </div>
        <div className='mt-12 capitalize text-gray-300 flex items-center justify-center gap-1'>
                <FaCopyright />
            <p className=''>
                copyright <span>2023. </span>all rights reserve to weero Digital</p>
        </div>
        </div>
    </div>
  )
}

export default Footer
