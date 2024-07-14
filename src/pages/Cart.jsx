import React, { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart, removeSingleItem, emptyCart } from "../redux/cartSlice";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function Cart() {
  const { carts } = useSelector((state) => state.allCart);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQnty, setTotalQnty] = useState(0)

  const handleIncrement = (e) => {
    dispatch(addToCart(e))

  }

  const handleDecrement = (e) => {
    dispatch(removeToCart(e))
    toast.success("Item is removed")
  }

  const handleSingleDecrement = (e) => {
    dispatch(removeSingleItem(e))
  }

  const handleEmptyCart = () => {
    dispatch(emptyCart())
    toast.success("Cart is empty")
  }

  const total = () => {
    let totalPrice = 0
    carts.map((data) => {
        totalPrice += data.price * data.qnty
    })
    setTotalPrice(totalPrice)
  }

  const Qnty = () => {
    let totalQnty = 0
    carts.map((data) => {
        totalQnty += data.qnty
    })
    setTotalQnty(totalQnty)
  }

  useEffect(() => {
    total()
  }, [total])

  useEffect(() => {
    Qnty()
  }, [Qnty])

  return (
    <>
      <section className="md:w-[60%] mx-auto mt-5 md:mt-10">
        <div className="flex bg-[#444] p-4 text-white justify-between">
          <div>
            <h1 className="text-2xl font-bold uppercase">Your Cart {carts.length >= 0 ? `(${carts.length})` : "" }</h1>
          </div>
          {carts.length !== 0 &&
          <div 
          className="flex gap-2 items-center bg-red-500 py-1 px-2 rounded font-bold text-sm cursor-pointer"
          onClick={handleEmptyCart}
          >
            <RiDeleteBin5Fill />
            <p>Empty Cart</p>
          </div>
          }
        </div>
        {carts.length === 0 ? (
          <div>
            <table className="w-full">
              <tr>
                <td colSpan={6}>
                  <div className="flex flex-col justify-center text-center mx-auto my-10">
                    <FaShoppingCart className="text-6xl text-gray-300 mx-auto" />
                    <p className="text-gray-300">Your cart is empty</p>
                  </div>
                </td>
              </tr>
              {carts.length === 0 &&
              <tr>
                <td colSpan={6}>
                  <div className="mx-auto text-center my-10">
                    <button className="py-3 px-8 uppercase font-sans bg-[#cda575] text-white hover:text-[#4c423a]" onClick={() => navigate("/menu")}>Add Items</button>
                  </div>
                </td>
              </tr>
              }
            </table>
          </div>
        ) : (
          <>
          {carts.map((data) => (
            <div className="flex mx-3 md:mx-5 items-center my-2" key={data.id}>
              <div>
                <img 
                src={data.imgdata}
                className="w-20 h-16 rounded-full"
                />
              </div>
            <div className="flex justify-between w-full px-3 md:px-5">
              <div>
                <h1 className="font-bold">{data.dish}</h1>
                <small className="text-red-600 font-bold">Price: Rs. {data.qnty * data.price}</small>
              </div>
              <div className="flex items-center gap-3">
                <p className="bg-red-600 text-white text-sm py-1 font-bold rounded">
                  <span className="p-3 text-base cursor-pointer" onClick={data.qnty <= 1 ? () => handleDecrement(data.id) : () => handleSingleDecrement(data)}>-</span>
                  <span className="p-1">{data.qnty}</span>
                  <span className="p-3 text-base cursor-pointer" onClick={() => handleIncrement(data)}>+</span>
                </p>
                <RiDeleteBin5Fill className="text-red-600 text-2xl cursor-pointer" onClick={() => handleDecrement(data.id)} />
              </div>
            </div>
          </div>
          ))}
          <div className="flex gap-8 my-5 md:my-3 font-bold justify-center">
              <p>Total Price: <span className="text-red-600">Rs. {totalPrice}</span></p>
              <p>Total Items: <span className="text-red-600">{totalQnty}</span></p>
          </div>
          </>
        )}
      </section>
    </>
  );
}

export default Cart;
