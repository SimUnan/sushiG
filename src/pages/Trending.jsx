import React from 'react'

import Check from '../assets/img/check.svg'
import FirstPic from '../assets/img/sushi-5.png'
import FirstPic1 from '../assets/img/japanese_sushi.png'
import SecondPic from '../assets/img/sushi-4.png'
import SecondPic1 from '../assets/img/japanese_drinks.png'

const sushiData = [
    "Make Sushi",
    "Oshizushi",
    "Uramaki Sushi",
    "Nigiri Sushi",
    "Temaki Sushi",
    "Inari Sushi",
]

const Trending = () => {
    return (
        <section className='bg-creamSonColor w-full flex flex-col justify-center relative'>
            <div className='absolute flex items-center justify-center text-whiteColor bg-black w-[8rem] h-[8rem] rounded-full top-50 right-[50%] translate-x-[50%]'>
                DISCOVER
            </div>
            {/* first part */}
            <div className='grid md:grid-cols-2 items-center justify-center'>
                <div className='bg-transparent mx-auto w-10.5/12 py-[6rem] flex flex-col justify-center gap-y-8 border-b-[1px] border-gray_100'>
                    <p data-aos="fade-right" className='font-plusJakarta text-primaryColor'>What's Trending /</p>
                    <h1 data-aos="fade-left" className='font-playFair text-5xl font-bold'>Japanese Sushi</h1>
                    <p data-aos="fade-right" className='mt-2 text-gray_100 font-plusJakarta'>Feel the taste of the most delicious Sushi here.</p>
                    <div className='grid grid-cols-2 items-center justify-between gap-y-3 font-plusJakarta mt-3'>
                        {sushiData.map((data) => (
                            <span data-aos="zoom-out" className='flex items-center gap-x-3'>
                                <img src={Check} alt="" className='w-6 h-6 p-[0.30rem] rounded-full bg-primaryColor'/>
                                <p>{data}</p>
                            </span>
                        ))}
                    </div>
                </div>
                <div className='h-full bg-white hidden md:flex items-center justify-center'>
                    <div className='relative bg-white h-4/6 border-l-[1px] border-gray_100 w-full flex items-center justify-center overflow-hidden'>
                        <img src={FirstPic} alt="" data-aos="fade-left" className='w-[45%]'/>
                        <img src={FirstPic1} alt="" data-aos="zoom" className='absolute left-10 top-0'/>
                    </div>
                </div>
            </div>
            {/* second part */}
            <div className='grid md:grid-cols-2 items-center justify-center'>
                <div className='h-full bg-white hidden md:flex items-center justify-center'>
                    <div className='relative bg-white h-4/6 border-r-[1px] border-gray_100 w-full flex items-center justify-center overflow-hidden'>
                        <img src={SecondPic} alt="" data-aos="fade-right" className='w-[42%]'/>
                        <img src={SecondPic1} alt="" data-aos="zoom" className='absolute right-10 top-0'/>
                    </div>
                </div>  
                <div className='bg-transparent mx-auto w-10.5/12 py-[6rem] flex flex-col justify-center gap-y-8 border-t-[1px] border-gray_100'>
                    <p data-aos="fade-left" className='font-plusJakarta text-primaryColor'>What's Trending /</p>
                    <h1 data-aos="fade-right" className='font-playFair text-5xl font-bold'>Japanese Drinks</h1>
                    <p data-aos="fade-left" className='mt-2 text-gray_100 font-plusJakarta'>Feel the taste of the most delicious Drinks here.</p>
                    <div className='grid grid-cols-2 items-center justify-between gap-y-3 font-plusJakarta mt-3'>
                        {sushiData.map((data) => (
                            <span data-aos="zoom-out" className='flex items-center gap-x-3'>
                                <img src={Check} alt="" className='w-6 h-6 p-[0.30rem] rounded-full bg-primaryColor'/>
                                <p>{data}</p>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending
