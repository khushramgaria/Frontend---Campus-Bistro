import React from 'react'
import "./custom.css"

function Heading(props) {
  return (
    <>
    <h3 className='text-center custom-font text-4xl mt-5 text-[#cda575]'>{props.sideText}</h3>

    <h1 className='font-serif text-center text-8xl mt-6 text-[#4c423a]'>{props.title}</h1>
    </>
  )
}

export default Heading