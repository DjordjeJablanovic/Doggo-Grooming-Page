import React from 'react'
//import hero data
import {heroSlider} from '../data';
//import slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";


const HeroSlider = () => {

    return (
        <section className='relative mx-auto max-w-[1640px] bg-white'>
            <div className='mt-[80px] h-[700px] max-w-[1640px] mx-auto'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={true}
                    pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    
                   {heroSlider.map((item,index)=> {
                    //destructure data
                    const {title, subtitle, image, buttonText} = item;
                    return (
                        <SwiperSlide>
                            <div className='container mx-auto text-center lg:text-left mt-20 md:mt-0 relative z-20'> 
                                <div className='flex flex-col justify-between items-center relative lg:flex-row'>
                                        <div className='flex-1'>
                                            <h1 className='text-blue mt-10 lg:mt-0 text-[36px] leading-tight lg:text-[72px] lg:leading-[78px] font-extrabold mb-4'>
                                            {title}
                                            </h1>
                                            <p className='text-base lg:text-[18px] lg:leading-8 max-w-[540px] mb-8'>
                                            {subtitle}
                                            </p>
                                            <button className='btn bg-orange text-white mb-8 lg:mb-0 font-semibold hover:scale-105 duration-300'>
                                            {buttonText}
                                            </button>
                                        </div>
                                        <div className='flex-1 flex justify-end'>
                                            <img className='max-w-[350px] lg:h-auto' src={image} alt={image.id} />
                                        </div>
                                    </div>
                            </div>
                            {/* pink circle */}
                            <div className='absolute w-[500px] h-[500px] bottom-0  lg:-top-[100px] lg:-right-[105px] lg:w-[700px] lg:h-[100%] rounded-full bg-pink'>

                            </div>
                        </SwiperSlide>
                    )
                   })}
                
                    
                </Swiper>
          </div>
          <div className='w-full max-w-[1640px] bg-white h-[0px] md:h-[150px]'>

          </div>
        </section>
      );
  
}

export default HeroSlider

