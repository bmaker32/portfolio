import React from 'react'
import EXPERIENCES from '../constants/EXPERIENCES'

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>Experience</h2>
        <div className="">
            {EXPERIENCES.map((exp,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
                    <div className="w-full lg:w-1/4">
                        <p className='mb-2 text-sm text-neutral-400'>{exp.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:3/4 flex flex-wrap">
                        <h6 className="mb-2 font-semibold">
                            {exp.role} - <span className='text-sm text-purple-100'>{exp.company}</span>
                        </h6>
                        <p className='mb-4 text-neutral-400'>{exp.description}</p>
                        {exp.technologies.map((tech,index)=>(
                            <span key={index}className=" rounded text-sm font-medium bg-neutral-900 text-purple-800 px-2 py-1 mr-2 mt-4">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience