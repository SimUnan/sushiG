import React from 'react'

import menuSushi from '../assets/img/sushi-9.png'
import menuRamen from '../assets/img/sushi-8.png'
import menuUdon from '../assets/img/sushi-7.png'
import menuDanggo from '../assets/img/sushi-6.png'

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
            <div >

            </div>
            <p className='px-5 py-3 text-whiteColor bg-black rounded-full'>Explore More</p>
        </section>
    )
}

export default Popular
