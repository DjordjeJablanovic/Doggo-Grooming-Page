import React, {useState} from 'react'
//import bundle data
import {bundleData} from '../data'
import {pricingData} from '../data'
// import services data
import { servicesData } from '../data'
import img1 from '../assets/dogs/dog-categ-1.png'
import img2 from '../assets/dogs/dog-categ-2.png'
import img3 from '../assets/dogs/dog-categ-3.png'
import img4 from '../assets/dogs/dog-categ-4.png'

import {BsCheckCircleFill} from 'react-icons/bs'

const Prices = () => {


    const [getPrice, setGetPrice] = useState('small')

    const clickHandler=(services) =>{
        setGetPrice(services)
        console.log(services)
    }

  return (
    <section className='py-12 lg:py24 bg-white max-w-[1640px] mx-auto'>
        <div className='container mx-auto'>
            <div className='text-center mb-20'>
                <div className='text-orange text-semibold mb-3 md:text-xl'>Our Prices</div>
                <h2 className='h2 mb-3'>How Big is Your Doggo?</h2>
                <p className='text-lg text-blue'>Chose your doggo type</p>
            </div>
            {/* boundle */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-[30px]'>
                {bundleData.map((bundle,index)=> {
                    const {image,name,dogCategory,services} = bundle;
                    return (
                        <div key={index} className='w-full flex flex-col justify-center items-center cursor-pointer '>
                            {/* images */}
                            <div id='image-holder'>
                                <ul className='flex flex-col items-center'>
                                    <li className='mb-2 lg:mb-8 hover:scale-105 transition-all duration-300'
                                        onClick={() => console.log(services)}
                                    
                                    ><img src={image.type} alt={name} /></li>
                                    <li><h3 className='lg:text-2xl capitalize font-semibold text-blue lg:mb-2'>{name}</h3></li>
                                    <li className='text-xl capitalize font-bold'>{dogCategory}</li>
                                </ul>
                            </div>
                            {/* services */}
                            
                        </div>
                        
                    )
                })}
            </div>
            {/* prices */}
            <div id='service-holder' className=' mt-20 w-full mx-auto max-w-[1640px] flex flex-col md:flex-row justify-between text-center'>
               {servicesData.map((item,index)=>{
                    const {name,list,price} = item
                        return (
                            <div className='flex flex-col mx-3 lg:mx-5 '>
                                <div className=' flex flex-col justify-between rounded-lg md:px-10 my-5 shadow-box hover:scale-105 duration-300'>
                                    {/* price */}
                                    <div className='text-blue text-5xl md:text-6xl py-2 md:py3 font-bold'>{`$${price}`}</div>
                                    {/* name */}
                                    <div className='text-3xl md:py-4 capitalize font-bold text-orange '>{name}</div>
                                    {/* list */}
                                    <div className='py-4'>
                                        {list.map((item,index)=>{
                                            return(
                                                <div key={index} className='flex flex-row capitalize items-center text-left lg:text-center  text-xl '>
                                                    <BsCheckCircleFill className='text-orange mr-1 md:mr-2'/>
                                                    {item}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>    
                            </div>
                    )  //end of return
                    })}
            </div>
        </div>

    </section>
  )
}

export default Prices