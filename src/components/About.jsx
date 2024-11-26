import React from 'react'
import aboutme from '../assets/avatar.jpg'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'> About me</h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className='rounded-2xl' src={aboutme} alt="about" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className='my-2 max-w-xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse assumenda quam harum pariatur.
                         Autem earum harum laboriosam a ut modi non voluptatem. 
                         Cumque adipisci id sapiente quis fugiat doloremque?
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About