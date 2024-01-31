import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";


const Footer = () => {
    return (
        <div className='footer bg-gray-300'>

            <div className="w-[90vw] mx-auto footer-top flex items-center space-x-6 h-[13vh]">
                <h1 className='font-bold text-xl'>Follow us</h1>
                <FaYoutube className='text-3xl ' />
                <FaTwitter className='text-3xl ' />
                <FaFacebookF className='text-3xl' />
            </div>
            <hr className='bg-gray-300 w-full h-[2px]' />

            <div className="footer-mid w-[90vw] mx-auto md:h-[73vh] h-full flex flex-col md:flex-row md:py-20 justify-around py-10">
                <div className="mid mid1">
                    <h1 className='text-lg font-bold mb-6'>Internal Links</h1>
                    <p className='text-sm mb-4'>Documentries</p>
                    <p className='text-sm mb-4'>Themes</p>
                    <p className='text-sm mb-4'>Chrome cast</p>
                </div>
                <div className="mid mid2">
                    <h1 className='text-lg font-bold mb-6'>EnterPrise</h1>
                    <p className='text-sm mb-4'>Download Chrome Browser</p>
                    <p className='text-sm mb-4'>Chrome Browser for Enterprise</p>
                    <p className='text-sm mb-4'>Chrome Browser for Devices</p>
                    <p className='text-sm mb-4'>Chrome OS</p>
                    <p className='text-sm mb-4'>Goggle Cloud</p>
                    <p className='text-sm mb-4'>Google Workspace</p>

                </div>
                <div className="mid mid3">
                    <h1 className='text-lg font-bold mb-6'>Internal Links</h1>
                    <p className='text-sm mb-4'>Documentries</p>
                    <p className='text-sm mb-4'>Themes</p>
                    <p className='text-sm mb-4'>Chrome cast</p>
                </div>
                <div className="mid mid4">
                    <h1 className='text-lg font-bold mb-6'>EnterPrise</h1>
                    <p className='text-sm mb-4'>Download Chrome Browser</p>
                    <p className='text-sm mb-4'>Chrome Browser for Enterprise</p>
                    <p className='text-sm mb-4'>Chrome Browser for Devices</p>
                    <p className='text-sm mb-4'>Chrome OS</p>
                    <p className='text-sm mb-4'>Goggle Cloud</p>
                    <p className='text-sm mb-4'>Google Workspace</p>

                </div>
                <div className="mid mid5">
                    <h1 className='text-lg font-bold mb-6'>Internal Links</h1>
                    <p className='text-sm mb-4'>Documentries</p>
                    <p className='text-sm mb-4'>Themes</p>
                    <p className='text-sm mb-4'>Chrome cast</p>
                </div>
            </div>

            <hr className='bg-gray-300 w-full h-[2px]' />

            <div className="w-[90vw] mx-auto flex md:flex-row flex-col  justify-around md:justify-between footer-bootom h-[20vh] md:h-[13vh] items-center">

                <div className='flex items-center justify-between md:justify-around w-full'>
                    
                    <h1 className='text-xl md:text-2xl font-semibold'>Similar <span className='bg-black text-white px-2 py-1 rounded-xl text-xl md:text-2xl'>Watch</span></h1>

                    <div className='md:flex space-x-4 ml-6 hidden'>
                        <p className='text-sm'>Privicy Policy</p>
                        <p className='text-sm'>Terms & Conditions</p>
                        <p className='text-sm'>Cookies Policy</p>
                        <p className='text-sm'>About us</p>
                        <p className='text-sm'>EULA</p>
                        <p className='text-sm'>Contat us</p>
                    </div>

                    <div className='bg-gray-200 p-4 rounded-3xl block md:hidden'>
                        <IoMoonOutline />
                    </div>
                </div>

                <div className='bg-gray-200 h-[50px] w-[52px] rounded-3xl hidden md:flex items-center justify-center'>
                    <IoMoonOutline />
                </div>

                <div className='md:hidden space-x-4 flex'>
                    <p className='text-sm'>Privicy Policy</p>
                    <p className='text-sm'>Terms & Conditions</p>
                    <p className='text-sm'>Cookies Policy</p>
                    <p className='text-sm'>About us</p>
                    <p className='text-sm'>EULA</p>
                    <p className='text-sm'>Contat us</p>
                </div>
            </div>


        </div>
    )
}

export default Footer
