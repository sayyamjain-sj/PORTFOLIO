import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'


const About = () => {
  return (
    <div id='about'>
        <h1 className='text-3xl head'>About</h1>
        <hr />
        <p className='mt-5 mb-20 font1 text-lg'>Enthusiastic MSCS student with a strong foundation in 
                    computer science principles and hands-on experience 
                    in software development.</p>

        
        {/* <h1 className='text-2xl'>MS in Computer Engineering</h1>
        <h3 className='text-3xl'>George Washington University</h3> */}

        <div className='flex justify-between flex-col lg:flex-row'>
            <div>
              <h4 className='m-2 head'>{">"} Website: <span className='font1'> sayyamjain.com</span></h4>
              <h4 className='m-2 head'>{">"} Phone:<span className='font1'> +1 {"("}202{")"} 438 3319</span></h4>
              <h4 className='m-2 head'>{">"} Location:<span className='font1'> Washinton, DC</span></h4>
            </div>
            <div>
              <h4 className=' m-2 head'>{">"} Degree:<span className='font1'> MS in CS</span> </h4>
              <h4 className=' m-2 head'>{">"} Email:<span className='font1'> sayyamrakesh.jain@gwu.edu</span></h4>
              <h4 className=' m-2 head'>{">"} Email:<span className='font1'> sayyam.sj@gmail.com</span></h4>
            </div>
        </div>
        
        <div className='flex gap-12 justify-center mt-10 text-2xl'>
            <a href="https://github.com/hanumantjain"  ><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/hanumant-jain-621745173" ><AiFillLinkedin /></a>
            <a href="https://instagram.com/hanu_0108?igshid=NzZlODBkYWE4Ng=="><AiFillInstagram /></a>
        </div>
        
        

    </div>
  )
}

export default About