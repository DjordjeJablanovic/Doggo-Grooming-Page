import React from 'react'
import dogPic from '../assets/dogs/dog-appointment.png'

const Contact = () => {
  return (
    <section className='relative w-full max-w-[1640px] bg-yellow-secondary py-10 md:py-20 mx-auto'>
        {/* absolute doggo pic */}
        <div className='absolute w-full hidden md:flex -top-[15%] left-0 right-0 justify-center mx-auto'>
            <img src={dogPic} alt="absolute-doggo" />
        </div>
        {/* contact form for appointment */}
        <div>
            <form className='bg-yellow w-full max-w-[790px] h-[500px] mx-auto lg:-mt-5 rounded-[60px] py-8 px-6 text-center flex flex-col justify-start items-center gap-y-4'>
                <h2 className='h2 my-4'>Get an appointment</h2>
                <input type="text"
                className='input-control'
                placeholder='Enter Full Name' />
                <input type="text" 
                className='input-control'
                placeholder='Enter Email' />
                <input type="text"
                className='input-control'
                placeholder='Enter Time'/>
                <button className='btn w-[60%] hover:scale-105 duration-300 text-xl'>
                    Send
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact