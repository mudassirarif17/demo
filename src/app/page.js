import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Card from "@/components/Card";
import Main from "@/components/Main";
import { MdEditDocument } from "react-icons/md";
import { FaCrop } from "react-icons/fa6";
import { FaTextHeight } from "react-icons/fa";
import { MdOutlineCropRotate } from "react-icons/md";
import { FaRegFileWord } from "react-icons/fa";
import { BsFiletypePpt } from "react-icons/bs";
import { FaRegFileExcel } from "react-icons/fa";
import { AiOutlineFileJpg } from "react-icons/ai";
import { BiSolidFileTxt } from "react-icons/bi";

export default function Home() {
  const data1 = [
    {
        name: "Edit PDF",
        brand : <MdEditDocument className='text-orange-600 md:text-4xl text-2xl' />
    },
    {
        name: "Crop PDF",
        brand : <FaCrop className='text-orange-600 md:text-4xl text-2xl'/>
    },
    {
        name: "Replace Text",
        brand : <FaTextHeight className='text-orange-600 md:text-4xl text-2xl'/>
    },
    {
        name: "Rotate PDF",
        brand : <MdOutlineCropRotate className='text-orange-600 md:text-4xl text-2xl'/>
    },
]

const data2 = [
  {
      name: "PDF to Word",
      brand : <FaRegFileWord className='text-blue-600 text-4xl'/>
  },
  {
      name: "PDF to PPT",
      brand : <BsFiletypePpt className='text-red-600 text-4xl'/>
  },
  {
      name: "PDF to Excel",
      brand : <FaRegFileExcel className='text-green-600 text-4xl'/>
  },
  {
      name: "PDF to JPG",
      brand : <AiOutlineFileJpg className='text-green-400 text-4xl'/>
  },
  {
      name: "PDF to TXT",
      brand : <BiSolidFileTxt className='text-yellow-600 text-4xl'/>
  },
]
  return (
    <>
    <Navbar/>
    <Card heading="Your BookMarks" data={data1}/>
    <Card heading="Convert From PDF" data={data2}/>
    <Card heading="Convert From PDF" data={data2}/>
    <Card heading="Convert From PDF" data={data2}/>
    <Footer/>
    </>
      );
}
