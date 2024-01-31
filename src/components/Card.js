'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MdEditDocument } from "react-icons/md";



const Card = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const data = [
        {
            name: "hello",
            desc: "lelo"
        },
        {
            name: "hello",
            desc: "lelo"
        },
        {
            name: "hello",
            desc: "lelo"
        },
        {
            name: "hello",
            desc: "lelo"
        },
        {
            name: "hello",
            desc: "lelo"
        },
    ]
    return (
        <div>
            <div className="bg-black main1 w-[85vw] mx-auto">
                <h1 className='text-xl font-semibold'>Your BookMarks</h1>
            <Slider { ...settings }>
                {data.map((d)=>(
                    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
                    <MdEditDocument className='text-orange-600 text-4xl'/>
                    <h1 className='text-lg font-semibold'>Edit PDF</h1>
                    <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                </div>
                ))}
            </Slider>
        </div>
        </div>
    )
}

export default Card


// 'use client'
// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
