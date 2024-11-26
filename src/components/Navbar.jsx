import React from 'react'
import logo from '../assets/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=' flex items-center justify-between mb-20 py-6'>
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} className='mx-2 w-20' alt="" />
        </div>
        <div className="m-8 flex justify-between gap-4 items-center text-2xl">
            <FaGithub/>
            <FaInstagram/>
            <FaLinkedin/>
            <FaTwitter/>
        </div>
    </nav>
  )
}

export default Navbar