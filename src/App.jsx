import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  )
}

export default App