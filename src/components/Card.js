'use client'
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Card = (props) => {
    
const [slide , setSlide] = useState(2);
const mediaQuery = window.matchMedia('(min-width: 768px)')

function handleTabletChange(e) {
  // Check if the media query is true
  
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
    setSlide(4)
  }
  else{
    setSlide(2)
  }
}


useEffect(()=>{
// Initial check
handleTabletChange(mediaQuery)
} , [slide])
// Register event listener
mediaQuery.addListener(handleTabletChange)


    
    

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slide,
        slidesToScroll: 1,
    };

    
    return (
        <div className='w-[85vw] m-auto -z-[10] '>
        <div className="my-8">
            <h1 className='text-xl font-semibold'>{props.heading}</h1>
        <Slider {...settings}>
          {props.data.map((d) => (
            <div key={d.name} className="h-[200px] text-black rounded-xl px-2">
               <div className='card w-[80%] md:w-[17vw]  bg-gray-100 flex flex-col justify-center p-4 my-5'>
                        {d.brand}
                        <h1 className='text-sm md:text-lg font-semibold'>{d.name}</h1>
                        <p className='text-[8px] md:text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
                    </div>
            </div>
          ))}
        </Slider>
        </div>
        
      </div>
    )
}

export default Card



