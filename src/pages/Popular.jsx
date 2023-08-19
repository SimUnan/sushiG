import React from 'react'

import menuSushi from '../assets/img/sushi-9.png'
import menuRamen from '../assets/img/sushi-8.png'
import menuUdon from '../assets/img/sushi-7.png'
import menuDanggo from '../assets/img/sushi-6.png'

import popularChezu from '../assets/img/sushi-12.png'
import popularOriginalSushi from '../assets/img/sushi-11.png'
import popularRamenLegendo from '../assets/img/sushi-10.png'

import star from '../assets/img/star.svg' 

const menuData = [
    {
        img: null,
        title: "All",
        selected: true
    },
    {
        img: menuSushi,
        title: "Sushi",
        selected: false
    },
    {
        img: menuRamen,
        title: "Ramen",
        selected: false
    },
    {
        img: menuUdon,
        title: "Udon",
        selected: false
    },
    {
        img: menuDanggo,
        title: "Danggo",
        selected: false
    },
    {
        img: null,
        title: "All",
        selected: false
    },
]

const popularMenuData = [
    {
        img: popularChezu,
        title: "Sushi Chezu",
        rate: '4.9',
        price: '$21.00',
        selected: false
    },
    {
        img: popularOriginalSushi,
        title: "Original Sushi",
        rate: '5.0',
        price: '$19.00',
        selected: true
    },
    {
        img: popularRamenLegendo,
        title: "Ramen Legendo",
        rate: '4.7',
        price: '$13.00',
        selected: false
    },
]

const Popular = () => {
    return (
        <section className='bg-primaryColor w-full py-16 px-4 flex flex-col items-center justify-center gap-y-8'>
            <h1 data-aos="fade-left" className='text-whiteColor text-4xl font-bold font-playFair'>Popular Food / 人気</h1>
            {/* Menu */}
            <div className='flex flex-wrap items-center justify-center gap-x-1 md:gap-x-3 gap-y-4 text-whiteColor font-plusJakarta'>
                {menuData.map((data) => (
                    <div data-aos="zoom-in" className={`flex gap-x-2 items-center justify-center cursor-pointer px-6 py-2 rounded-full ${data.selected ? "bg-gray-100" : "bg-gray-300"} ${data.selected ? "bg-opacity-100" : "bg-opacity-10"} border-gray-100 border-opacity-25 border-[1px]`}>
                        {data.img ? <img src={data?.img} alt="" className='w-7'/> : ""}
                        <p className={`${data.selected ? "text-black" : "text-whiteColor"}`}>{data.title}</p>
                    </div>
                ))}
            </div>
            {/* Card */}
            <div className='flex flex-wrap items-end justify-center gap-x-5 gap-y-5 w-full py-8 px-16'>
                {
                    popularMenuData.map((data) => (
                        <div className={`${data.selected ? "bg-white" : "bg-gray-300"} ${data.selected ? "bg-opacity-100" : "bg-opacity-30"} border-[1px] border-gray-200 ${data.selected ? "md:min-h-[16.5rem]" : "md:min-h-[14rem]"} min-w-[100%] ${data.selected ? "md:min-w-[33%]" : "md:min-w-[30%]"} border-opacity-30 ${data.selected ? 'text-black' : "text-white"} px-5 py-8 flex flex-col items-center justify-center gap-y-4 rounded-xl shadow-xl`}>
                            <img src={data.img} alt="Chezu" className={`${data.selected ? "w-[10rem]" : "w-[7rem]"} px-2`} />
                            <p className='font-playFair text-2xl font-semibold'>{data.title}</p>
                            <span className='w-full flex items-center justify-between'>
                                <span className='flex gap-x-2'><img src={star} alt="star" /><p className={`${data.selected ? 'text-gray_100' : "text-white"}`}>{data.rate}</p></span>
                                <p>{data.price}</p>
                            </span>
                        </div>
                    ))
                }
            </div>
            <p className='px-5 py-3 text-whiteColor bg-black rounded-full'>Explore More</p>
        </section>
    )
}

export default Popular
