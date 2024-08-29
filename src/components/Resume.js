import React from 'react'
import img from '../images/bg.jpg'
const Resume = () => {
  return (
    <div id='resume'>
        <h2 className='mt-20 text-3xl head'>Resume</h2>
        <hr />
        <div className='flex flex-col gap-10 lg:m-10 justify-center items-center lg:flex-row '>
          <a target='_blank' rel="noreferrer" href={img} ><button className="h-12 head text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg mt-10" >
                      Resume
            </button></a>
            
            <div className='flex flex-wrap'>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>C</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>C++</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>Java</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>HTML</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>CSS</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>JavaScript</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>React</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>TailwindCSS</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>AWS</h6>
            </div>
        </div>
    </div>
  )
}

export default Resume