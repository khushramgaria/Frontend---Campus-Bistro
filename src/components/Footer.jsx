import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
    <>
    <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-around text-center py-10 border-t border-[#cda575]'>
        <div>
            <img src={logo} />
        </div>
        <div>
            <h1 className='text-3xl font-bold font-sans mb-2 text-[#cda575]'>Digital College Here</h1>
            <Link to="https://babafaridgroup.edu.in/" className='underline text-[#4c423a]'>https://babafaridgroup.edu.in/</Link>
        </div>
        <div>
            <h1 className='text-3xl font-bold font-sans mb-2 text-[#cda575]'>Social Links</h1>
            <div className='flex items-center gap-2 justify-center font-bold text-[#4c423a]'>
                <FaYoutube />
                <p>YouTube</p>
            </div>
            <div className='flex items-center gap-2 justify-center font-bold'>
                <FaInstagram />
                <p>Instagram</p>
            </div>
            <div className='flex items-center gap-2 justify-center font-bold'>
                <FaTwitter />
                <p>Twitter</p>
            </div>
        </div>
    </div>
    <div>
        <p className='text-center mb-6 font-sans'>Designed by <Link to="" className='font-bold hover:underline text-[#cda575]'>Khush Ramgaria</Link></p>
    </div>
    </>
  )
}

export default Footer