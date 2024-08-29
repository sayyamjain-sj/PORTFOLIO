import React from 'react'
import Contact from './Contact'
import Education from './Education'
import Project from './Projects'
import About from './About'
import Resume from './Resume'
import Navbar from './Navbar'
import {TypeAnimation} from 'react-type-animation'


const Home = () => {
  return (
    <div className='flex relative flex-col lg:flex-row' id='home'>
      
        <div className='lg:hidden flex justify-center w-screen sticky top-0 bg-gray-950 text-white'>
          <Navbar />
        </div>
        <div className=' imgbg text-white px-10 md:px-20 lg:px-20 flex h-screen justify-center flex-col lg:basis-1/2 lg:sticky lg:top-0 lg:left-0 '>
                <h1 className=' text-4xl md:text-6xl lg:text-6xl head'>Sayyam Jain</h1>
                {/* <h3 className=' text-2xl md:text-4xl lg:text-4xl mt-3'> MSCS Student </h3>
                <h3 className=' text-2xl md:text-4xl lg:text-4xl'>{">"} Software Developer</h3> */}
                <div className='text-2xl md:text-3xl lg:text-3xl mt-3 head'>
                  <span>I am {">"} </span>
                  <TypeAnimation 
                    sequence={[
                      'MSCS Student',
                      2000,
                      'Software Developer',
                      2000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className=''
                     />
                </div>
                <div className='hidden lg:flex'>
                    <Navbar />
                </div>
                
        </div>
            
          <div className=' basis-1/2 lg:m-20 m-10'>
            <About />
            <Resume />
            <Education />
            <Project />
            <Contact />
          </div>
        
    </div>
    
  )
}

export default Home