import React from 'react'
import projects from '../constants/projects'

const Projects = () => {
  return (
    <div className='border-b border-x-neutral-900 pb-4'>
        <h2 className='text-4xl text-center my-20 '>Projects</h2>
        <div className=" ">

            {projects.map((exp,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center lg:items-center ">
                    <div className="w-full lg:w-1/4">
                        <img className='"w-full h-32 object-cover rounded-lg' src={exp.img} alt={exp.title} />
                    </div>
                    
                    <div className="w-full max-w-xl lg:w-3/4 flex flex-wrap my-2 mx-3">
                        <p className='text-lg font-semibold mb-2'>{exp.title}</p>
                        <p className='text-sm text-neutral-400 mb-4'>{exp.description}</p>
                        <div className="flex flex-wrap">
                            {exp.technologies.map((tech,ind)=>(
                                <span key={ind} className="rounded bg-neutral-900 text-sm text-purple-800 py-1 px-2 mr-2 mt-4  ">
                                    {tech}
                                </span>
                            )
                            )}
                        </div>
                        
                    </div>
                    
                </div>
            ))}

        </div>

    </div>
  )
}

export default Projects