import React from 'react'
import dogContact from '../assets/dogs/dog-contact.png'

const Contact = () => {
  return (
    <section className='w-full max-w-[1640px] bg-yellow-secondary mx-auto pt-6'>
        <div className='flex flex-col lg:flex-row justify-evenly lg:px-[250px]'>
            {/* picture */}
            <div className='order-1 w-full mx-auto flex justify-center lg:-order-1 mt-5 lg:mt-16  lg:mx-0'>
                <img src={dogContact} alt="imageDoggo" className='-mb-[12px]' />
                
            </div>
            {/* contact info */}
            <div className='flex flex-col w-full items-center lg:justify-center text-center'>
                <div className='text-orange text-3xl mb-3'>Contact</div>
                <div className='text-blue font-extrabold text-5xl font-primary'>+381 037 021</div>
                <div className='text-blue mt-2'>Opening Hours: Mon-Sun: 10:00 - 18:00</div>
                <button className='btn mt-5 hover:scale-105 duration-200'>Get an appointment</button>
            </div>
        </div>
    </section>
  )
}

export default Contact