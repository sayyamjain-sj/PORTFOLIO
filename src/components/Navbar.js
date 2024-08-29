import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="">
      <div className='hidden lg:flex lg:flex-col mt-20 lg:gap-2 head'>
            <Link className=' cursor-pointer' to="about" spy={true} smooth={true} offset={-40} duration={500} >----- About</Link>
            <Link className=' cursor-pointer' to="resume" spy={true} smooth={true} offset={-40} duration={500} >----- Resume</Link>
            <Link className=' cursor-pointer' to="education" spy={true} smooth={true} offset={-40} duration={500} >----- Education</Link>
            <Link className=' cursor-pointer' to="projects" spy={true} smooth={true} offset={-40} duration={500} >----- Projects</Link>
            <Link className=' cursor-pointer' to="contact" spy={true} smooth={true} offset={-40} duration={500} >----- Contact</Link>
      </div>
      <div className='lg:hidden hidden md:flex md:gap-12 md:p-7  head'>
            <Link className=' cursor-pointer' to="home" spy={true} smooth={true} offset={-120} duration={500} >Home</Link>
            <Link className=' cursor-pointer' to="about" spy={true} smooth={true} offset={-120} duration={500} >About</Link>
            <Link className=' cursor-pointer' to="resume" spy={true} smooth={true} offset={-120} duration={500} >Resume</Link>
            <Link className=' cursor-pointer' to="education" spy={true} smooth={true} offset={-120} duration={500} >Education</Link>
            <Link className=' cursor-pointer' to="projects" spy={true} smooth={true} offset={-120} duration={500} >Projects</Link>
            <Link className=' cursor-pointer' to="contact" spy={true} smooth={true} offset={-120} duration={500} >Contact</Link>
      </div>
    </div>
  )
}

export default Navbar