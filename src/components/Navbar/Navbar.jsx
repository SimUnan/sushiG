import React, {useEffect} from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Search from "../../assets/img/search.svg";

const Navbar = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100
        });
        AOS.refresh();
    },[]);

    return (
        <section className="flex items-start justify-between">
                <h1 className="py-8 bg-primaryColor w-[43%]">
                    <span className="ml-5 md:ml-20 font-playFair text-xl uppercase font-bold text-whiteColor" data-aos="fade-down">Sushi G</span>
                </h1>
            <div data-aos="fade-down" className="mr-10 py-8 hidden md:flex items-center bg-creamSonColor justify-center md:gap-x-8 xl:gap-x-12 uppercase font-plusJakarta ">
                <a href="" className=''>Menu</a>
                <a href="">Food</a>
                <a href="">Services</a>
                <a href="">About Us</a>
                <a href="">
                <img src={Search} alt="" />
                </a>
            </div>
        </section>
    );
};

export default Navbar;
