import React from 'react'
import Navbar from '../component/Navbar'
import "../Home.css"
import Hero from '../component/Hero'


function Home() {
  return (
    <div className='home-background lg:h-[44.5em] md:h-[44em] h-[36em]'>
    <Navbar/>
    <Hero/>
    </div>
  )
}

export default Home