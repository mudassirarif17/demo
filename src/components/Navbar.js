'use client'
import React from 'react'
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    function show(){
        document.getElementsByClassName("mblmenu")[0].style.left = "0%";
    }

    function close(){
        document.getElementsByClassName("mblmenu")[0].style.left = "-100%";
    }

    return (
        <>
            <div className='flex h-[9vh] md:h-[12vh] justify-between items-center w-[90vw] mx-auto'>
                <div className='flex items-center space-x-2'>
                    <FiMenu onClick={show} className='md:hidden block text-3xl font-semibold'/>
                    <h1 className='text-xl md:text-2xl font-semibold'>Similar <span className='bg-black text-white px-2 py-1 rounded-xl text-lg md:text-2xl'>Watch</span></h1>
                </div>

                <input className='hidden md:block w-[40vw] bg-gray-200 rounded-3xl px-4 py-2' placeholder='Search For Movies'/>

                <div className='hidden md:block'>
                <button className='text-lg mx-1'>Login</button>
                <button className='bg-blue-700 text-white px-2 py-1 rounded-3xl mx-2'>Sign Up</button>
                </div>
                <CiSearch className='md:hidden block text-3xl font-semibold ' />
            </div>
            <hr />
            <div className="transition-all delay-800 right-[-100%] mblmenu absolute top-0 bg-white w-full">
                <ul className='space-y-4 '>
                    <li></li>
                    <li className='text-gray-600 text-lg font-light px-4'>WishList</li>
                    <li className='text-gray-600 text-lg font-light px-4'>Movies</li>
                    <li className='text-gray-600 text-lg font-light px-4'>Tv Show</li>
                    <li className='text-gray-600 text-lg font-light px-4'>Clips</li>
                    <hr />
                    <li className='text-gray-600 text-xl font-semibold px-4'>SETTINGS</li>
                    <li className='text-gray-600 text-lg font-light px-4'>Sign In</li>
                    <li className='text-gray-600 text-lg font-light px-4'>Create Account</li>
                    <hr />
                    <li className='text-gray-600 text-lg font-semibold px-4'>SUPPORT</li>
                    <li className='text-gray-600 text-lg font-light px-4'>Help</li>
                    <li className='text-gray-600 text-lg font-light px-4'>Contact Us</li>
                    <hr />
                </ul>
                <RxCross2 onClick={close} className='absolute top-4 right-4 text-3xl font-semibold'/>
            </div>
        </>
    )
}

export default Navbar