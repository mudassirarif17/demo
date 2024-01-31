import React from 'react'
import { MdEditDocument } from "react-icons/md";
import { FaCrop } from "react-icons/fa6";
import { FaTextHeight } from "react-icons/fa";
import { MdOutlineCropRotate } from "react-icons/md";
import { FaRegFileWord } from "react-icons/fa";
import { BsFiletypePpt } from "react-icons/bs";
import { FaRegFileExcel } from "react-icons/fa";
import { AiOutlineFileJpg } from "react-icons/ai";
import { BiSolidFileTxt } from "react-icons/bi";

// import Slider from '../components/Slider';


const Main = () => {
    return (
        <div className='my-6'>
            <div className="main1 w-[85vw] mx-auto">
                <h1 className='text-xl font-semibold'>Your BookMarks</h1>
                <div className="cards flex space-x-4 ">
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <MdEditDocument className='text-orange-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>Edit PDF</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <FaCrop className='text-orange-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>Crop PDF</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <FaTextHeight className='text-orange-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>Replace Text</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <MdOutlineCropRotate className='text-orange-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>Rotate PDF</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                </div>
            </div>

            <div className="main2 w-[85vw] mx-auto">
                <h1 className='text-xl font-semibold'>Convert From PDF</h1>
                <div className="cards flex space-x-4 ">
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <FaRegFileWord className='text-blue-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to Word</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <BsFiletypePpt className='text-red-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to PPT</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <FaRegFileExcel className='text-green-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to Excel</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <AiOutlineFileJpg className='text-green-400 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to JPG</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <BiSolidFileTxt className='text-yellow-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to TXT</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                </div>
            </div>

            <div className="main2 w-[85vw] mx-auto">
                <h1 className='text-xl font-semibold'>Convert From PDF</h1>
                <div className="cards flex space-x-4 ">
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <FaRegFileWord className='text-blue-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to Word</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <BsFiletypePpt className='text-red-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to PPT</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <FaRegFileExcel className='text-green-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to Excel</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <AiOutlineFileJpg className='text-green-400 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to JPG</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <BiSolidFileTxt className='text-yellow-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to TXT</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                </div>
            </div>

            <div className="main2 w-[85vw] mx-auto">
                <h1 className='text-xl font-semibold'>Convert From PDF</h1>
                <div className="cards flex space-x-4 ">
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <FaRegFileWord className='text-blue-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to Word</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <BsFiletypePpt className='text-red-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to PPT</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <FaRegFileExcel className='text-green-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to Excel</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <AiOutlineFileJpg className='text-green-400 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to JPG</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        <BiSolidFileTxt className='text-yellow-600 text-4xl'/>
                        <h1 className='text-lg font-semibold'>PDF to TXT</h1>
                        <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main