import React from 'react'
import HamburgerMenu from '../Components/HamburgerMenu'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Products from '../Components/Products'


function Home() {
  return (
    <div>
    <Navbar>
        <HamburgerMenu />
      </Navbar>
     <Slider/>
     <div className='flex justify-center fw-bold text-white bg-red-400 mt-3'><span className='text-6xl p-3 '>OUR ART</span></div>
     <Products/>
    </div>
  )
}

export default Home;
