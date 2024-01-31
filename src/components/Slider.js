'use client'
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { MdEditDocument } from "react-icons/md";

let productsp = [
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
];
var $ = require("jquery");
if (typeof window !== "undefined") {
window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = () => {
const options = {
margin: 30,
responsiveClass: true,
nav: true,
dots: true,
autoplay: false,
smartSpeed: 1000,
navClass: ["owl-prev", "owl-next"],
navText: [
'',
'',
],
responsive: {
0: {
items: 1,
},
400: {
items: 1,
},
600: {
items: 2,
},
700: {
items: 3,
},
1000: {
items: 4,
},
},
};

return (
<div className="row no-gutters">
<div
className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
id="owl-carousel-products"
>
<h3 className="text-center">
</h3>
<ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
<OwlCarousel
className="owl-theme"
loop
margin={4}
nav={true}
navText={[
'<img src="/images/Arrow_left.png" />',
'<img src="/images/Arrow_right.png" />',
]}
dots={false}
animateIn={true}
{...options}
>
{productsp && productsp.length > 0
? productsp.map((product) => {
return (
    <div className='card w-[17vw] h-[26vh] bg-gray-100 flex flex-col justify-center p-4 my-5'>
        <MdEditDocument className='text-orange-600 text-4xl'/>
            <h1 className='text-lg font-semibold'>Edit PDF</h1>
            <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta, fugit, laudantium ipsa </p>
    </div>

);
})
: ""}
</OwlCarousel>
</ul>
</div>
</div>
);
};

export default Slider;