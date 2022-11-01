import React, {useState} from 'react'
import logo from '../assets/logo.svg'
import phone from '../assets/phone.svg'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
//import nav data
import {navigation} from '../data.js'


const Nav = () => {

    const [nav, setNav] = useState(false)

  return (
    <section className='max-w-[1640px] mx-auto'>
        <div className='absolute bg-white top-0 w-full max-w-[1640px] md:px-5 px-3 flex flex-row justify-between shadow-lg items-center h-[80px]'>
            {/* left side, log */}
            <div>
                <img src={logo} alt="logo" />
            </div>
            {/* central sice, navbar */}
            <div className='text-[18px] md:flex hidden'>
                <ul className='flex gap-x-10'>
                    {navigation.map((item, index)=>{
                        return(
                            <li key={index} className='hover:scale-105 duration-300'>
                                <a href={item.href} className='capitalize hover:text-orange transition'>{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* right side, phone number */}
            <div className='bg-black flex justify-center'>
                <div className='pr-3 md:p-0 flex flex-col'>
                    {/* upper */}
                    <div className='flex lg:gap-x-[10px] items-center'>
                        <img src={phone} alt="phone" className='w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]'/>
                        <div className='lg:text-[23px] text-blue font-extrabold'>
                            +381 65 669 778
                        </div>
                    </div>
                    {/* lower */}
                    <div className='text-sm'>
                        <div className='hidden lg:flex'>
                            Opening Hours: Mon-Sat: 10:00 - 18-00
                        </div>
                        <div className='lg:hidden text-right'>Mon - Sun: 10:00 - 18-00</div>
                    </div>
                </div>
            </div>
            {/* mobile nav */}
            <div className='flex md:hidden'>
                    {nav ? <AiOutlineClose size={35} onClick={()=> setNav(!nav)} /> : <AiOutlineMenu size={35} onClick={()=> setNav(!nav)}/> } 
            </div>
            <div className={nav ? 'fixed top-0 w-full bg-white z-20 ease-in-out duration-500 mt-[81px]' : 'fixed top-[-100%]'}>
                <ul className='flex flex-col items-center pt-2'>
                        {navigation.map((item, index)=>{
                            return(
                                <li key={index} className='w-full items-center justify-center flex py-2 border-b'>
                                    <a href={item.href} className='uppercase hover:text-orange transition'>{item.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
        </div>
    </section>
  )
}

export default Nav