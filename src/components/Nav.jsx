import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import "./custom.css"

function Nav() {
    const { carts } = useSelector((state) => state.allCart);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className={`flex items-center justify-between py-3 px-4 ${menuOpen ? "" : "shadow-md"} md:justify-center md:gap-20 font-bold uppercase font-serif text-[#4c423a] sticky top-0 bg-[#f9f3ed]`}>
                <div className='hidden md:flex items-center gap-2 hover:text-[#cda575]'>
                    <Link to="/" className='flex items-center gap-2'>
                        <IoMdHome className='text-xl' />
                        <h1>Home</h1>
                    </Link>
                </div>
                <div className='hidden md:flex items-center gap-2 hover:text-[#cda575]'>
                    <Link to="/about" className='flex items-center gap-2'>
                        <MdGroups className='text-xl' />
                        <h1>About Us</h1>
                    </Link>
                </div>
                <div className='flex items-center gap-2 md:hidden'>
                    <Link to="/" className='flex items-center gap-2'>
                        <img src={logo} className='md:w-10 h-10' />
                    </Link>
                </div>
                <div className='flex items-center md:hidden'>
                    <Link to="/cart" className='relative flex items-center'>
                        <FaShoppingCart className='text-xl' />
                        <div className="absolute -top-2 -right-2">
                            <small className="bg-red-500 rounded-full px-1 text-[12px] text-white font-sans">
                                {carts.length}
                            </small>
                        </div>
                    </Link>
                    <button onClick={() => setMenuOpen(!menuOpen)} className='ml-4'>
                        <GiHamburgerMenu className='text-xl' />
                    </button>
                </div>
                <div className='hidden md:flex gap-20'>
                    <div className='cursor-pointer hover:text-[#cda575]'>
                        <Link to="/" className='flex items-center gap-2'>
                            <img src={logo} className='w-40' />
                        </Link>
                    </div>
                </div>
                <div className='hidden md:flex gap-20'>
                    <div className='cursor-pointer hover:text-[#cda575]'>
                        <Link to="/cart" className='flex items-center gap-2'>
                            <FaShoppingCart className='text-xl' />
                            <div className="absolute top-3 ml-5">
                                <small className="bg-red-500 rounded-full px-1 text-[12px] text-white font-sans">
                                    {carts.length}
                                </small>
                            </div>
                            <h1>Cart</h1>
                        </Link>
                    </div>
                    <div className='hover:underline cursor-pointer hover:text-[#cda575]'>
                        <Link to="/contact" className='flex items-center gap-2'>
                            <FiPhoneCall className='text-xl' />
                            <h1>Contact</h1>
                        </Link>
                    </div>
                </div>
            </nav>
            {menuOpen && (
                <div className={`md:hidden flex flex-col items-center shadow-md py-3 text-[#4c423a] space-y-1 font-bold font-serif`}>
                    <div className='hover:underline cursor-pointer hover:text-[#cda575]'>
                        <Link to="/" className='flex items-center gap-2'>
                            <IoMdHome className='text-xl' />
                            <h1>Home</h1>
                        </Link>
                    </div>
                    <div className='hover:underline cursor-pointer hover:text-[#cda575]'>
                        <Link to="/about" className='flex items-center gap-2'>
                            <MdGroups className='text-xl' />
                            <h1>About Us</h1>
                        </Link>
                    </div>
                    <div className='hover:underline cursor-pointer hover:text-[#cda575]'>
                        <Link to="/contact" className='flex items-center gap-2'>
                            <FiPhoneCall className='text-xl' />
                            <h1>Contact</h1>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default Nav;
