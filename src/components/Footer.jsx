import React from 'react'
import logo from '../assets/logo.svg'
import {FaInstagram, FaTwitter, FaReddit} from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='w-full max-w-[1640px] mx-auto bg-orange py-4 lg:px-20'>
        <div className='flex flex-row justify-between items-center px-5'>
            {/* logo */}
            <div>
                <img src={logo} alt="" />
            </div>
            {/* copyright */}
            <div className='text-white font-semibold text-center'>
                ® Copyright 2022. All rights reserved.
            </div>
            {/* socials */}
            <div className='flex flex-row'>
                <FaInstagram size={30} className='text-white'/>
                <FaTwitter size={30} className='text-white mx-2'/>
                <FaReddit size={30} className='text-white'/>
            </div>
        </div>
    </section>
  )
}

export default Footer