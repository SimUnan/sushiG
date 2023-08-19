import React from 'react'

import BGPic from '../assets/img/subscribe_bg.png'

const Newsletter = () => {
    return (
        <section style={{backgroundImage: `url(${BGPic})`, backgroundSize: "cover"}} className='w-full flex flex-col items-center justify-center gap-y-5 py-16 text-white bg-transparent'>
            <h1 data-aos="fade-left" className='text-4xl md:text-6xl font-semibold font-playFair'>Get offers straight</h1>
            <h1 data-aos="fade-right" className='text-3xl md:text-5xl font-semibold font-playFair'>to your inbox</h1> 
            <p data-aos="fade-out" className='font-plusJakarta '>Sign up for the Sushi G newsletter.</p>
            <div data-aos="zoom-out" className='px-3 py-2 bg-transparent rounded-full border-[1px] border-white border-opacity-50'>
                <input type="email" placeholder='Enter your email address' className='bg-transparent px-4 focus:outline-none text-white placeholder:text-gray-100 placeholder:text-opacity-50 '/>
                <button className='bg-black py-3 px-6 rounded-full ml-8'>Get Started</button>
            </div>
        </section>
    )
}

export default Newsletter
