import React from 'react'
import "./custom.css"
import { SiPeakdesign } from "react-icons/si";
import { CgBorderStyleDotted } from "react-icons/cg";

function Canteens(props) {
  return (
    <> 
        <div className='md:w-[50%] home-bg-img1'>
            <div className='home-bg-transparency py-28'>
                <h1 className='text-5xl font-serif text-white'>{props.name}</h1>
                <div className='flex justify-center gap-2'>
                    <CgBorderStyleDotted className='text-white text-4xl font-bold' />
                    <SiPeakdesign className='text-white text-4xl font-bold' />
                    <CgBorderStyleDotted className='text-white text-4xl font-bold' />
                </div>
                <p className='w-[65%] mx-auto my-5 text-lg font-serif text-white'>{props.about}</p>
                <button className='py-3 px-6 uppercase font-sans bg-[#cda575] text-white' onClick={props.onClick}>Visit Our Canteen</button>
            </div>
        </div>
    </>
  )
}

export default Canteens