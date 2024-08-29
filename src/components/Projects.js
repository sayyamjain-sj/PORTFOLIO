import React from 'react'
import projectData from '../utils/ProjectData'

const Projects = () => {
   
  return (
    <div id='projects'>
        <h1 className=' text-3xl mt-20 head'>Projects</h1>
        <hr />
           <div className='flex flex-col gap-10 justify-center items-center lg:flex-row lg:flex-wrap md:flex-col m-10'>
              <div className='pb-10'>
                <ProjectData projectData = {projectData} />
              </div>
        </div>
    </div>
  )

  function ProjectData(props){
    const projectData = props.projectData
    return (
      <>
      {projectData.map((projectData) => (
        <div key={projectData.id}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10">
                <img className="w-full" src={projectData.image} alt="The Funder's Hub"/>
                <div className="px-6 py-4">
                  <div className="text-2xl mb-2 head ">{projectData.name}</div>
                  <p className="">
                  {projectData.description}
                  </p>
                </div>

                <div className="px-6 pt-4 pb-2">
                  <h2 className='head text-xl'>Tools Used : </h2>
                  <p>{projectData.tools}</p>
                </div>

                <div className="px-6 pt-4 pb-2 mb-10">
                  <h2 className='head text-xl'>Links :</h2>
                  <div className='flex justify-around'>
                    <a href={projectData.website} className=" text-blue-700">Demo</a>
                    <a href={projectData.github} className=" text-blue-700">Code</a>
                  </div>
                </div>
            </div>

        </div>
      )
      )}
      
      </>
    )
  }
}

export default Projects