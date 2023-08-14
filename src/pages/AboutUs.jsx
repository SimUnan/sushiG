import React from 'react'

import Sushi2 from '../assets/img/sushi-2.png'
import Sushi3 from '../assets/img/sushi-3.png'
import AboutBg1 from '../assets/img/about_bg1.png'
import AboutBg2 from '../assets/img/about_bg2.png'



const AboutUs = () => {
    return (
        <section className='h-[50vh] md:h-[60vh] xl:h-[65vh] w-full flex items-center justify-center'>
            <div className='relative h-full max-w-[43%] bg-creamSonColor grid grid-rows-2 items-center gap-y-2'>
                <div className='relative p-3 md:px-10 bg-white grid md:grid-cols-2 items-center justify-around h-full w-full'>
                    <img src={Sushi3} alt="" data-aos="fade-right" className='w-full h-[70%] md:w-[100%] md:h-fit'/>   
                    <img src={AboutBg1} alt="" data-aos="fade-left" className='hidden md:flex absolute top-5 w-[100%] h-[100%]'/>   
                </div>
                <div className='bg-black text-whiteColor px-10 py-3 rounded-l-full absolute top-[50%] -translate-y-[50%] right-0'>
                    Learn More
                </div>
                <div className='p-3 md:px-10 bg-white grid md:grid-cols-2 items-center justify-around h-full w-full'>
                    <img src={Sushi2} alt="" data-aos="fade-right" className='w-[100%]'/>   
                    <img src={AboutBg2} alt="" data-aos="fade-left" className='hidden md:flex absolute bottom-0 w-[100%] h-[50%]'/>   
                </div>
            </div>
            <div className='h-full w-[57%] bg-creamSonColor flex flex-col items-start justify-center gap-y-4 md:gap-y-8 px-6 md:px-10 xl:px-[6rem]'>
                <span className='text-primaryColor font-plusJakarta'>
                    <p data-aos="fade-in" data-aos-duration="3000s" className=''>About Us <span className='hidden md:inline-block'>/ 私たちに関しては</span></p>
                    <p className='md:hidden'>私たちに関しては</p>
                </span>
                <h1 data-aos="fade-left" className='font-playFair text-[1.6rem] md:text-[3.5rem] font-bold leading-9 md:leading-[5rem]'>Our mission is to bring true Japanese flavours to you</h1>
                <p data-aos="fade-left" data-aos-duration="3000s" className='text-gray_100 font-plusJakarta text-xs md:text-[0.9rem] leading-5 md:leading-7'>We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our shopping and dining for our customers.</p>
            </div>
        </section>
    )
}

export default AboutUs
