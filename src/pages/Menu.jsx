import React from 'react'
import Heading from '../components/Heading'
import "../components/custom.css"
import Cardsdata from '../components/CardsData'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import toast from 'react-hot-toast'

function Menu() {
    const dispatch = useDispatch()
    const addToCartHandler = (data) => {
        dispatch(addToCart(data))
        toast.success("Item added Successfully")
    }
    return (
    <>
        <Heading title="Our Menu" sideText="Have a look at" />

        <div className='flex md:flex-row flex-col flex-wrap justify-center my-10'>
            {Cardsdata.map((data) => (
                <div className='flex items-center md:w-[45%] pl-4 md:pl-10 pr-4 md:pr-14 border-r border-[#cda575] mt-8'>
                    <div>
                        <img src={data.imgdata} className='w-24 md:w-28 h-[70px] md:h-[90px] rounded-full' />
                    </div>
                    <div className='w-full pl-4 md:pl-8'>
                        <div  className='flex justify-between gap-3 md:gap-0'>
                            <h1 className='font-bold custom-font text-2xl md:text-3xl'>{data.dish}</h1>
                            <h1 className='font-bold text-[#cda575] font-serif'>Rs. {data.price}</h1>
                        </div>
                        <div className='flex justify-between'>
                            <p className='bg-green-600 text-white py-1 px-2 rounded font-bold'>{data.rating}</p>
                            <button 
                            className='bg-[#633812] text-white py-1 px-2 rounded font-bold hover:text-[#cda575]'
                            onClick={() => addToCartHandler(data)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default Menu