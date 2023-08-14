import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Sushi1 from '../assets/img/sushi-1.png'
import Play from '../assets/img/play-circle.svg'
import UserPf from '../assets/img/user.png'

const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100
        });
        AOS.refresh();
    },[]);

    return (
        <section id="hero" className="flex items-start justify-between">
            <div className="h-[91vh] px-8 flex w-[43%] bg-primaryColor relative">
                <img src={Sushi1} alt="Sushi_1" className='absolute object-cover min-w-[120%] top-[15%] left-0 ' data-aos="fade-right"/>
                <p data-aos="fade-up" className='absolute text-whiteColor text-8xl font-bold bottom-[3%]'>
                    日 <br />
                    本 <br />
                    食
                </p>
            </div>
            <div className="h-[91vh] flex flex-col items-center justify-between pt-[19%] md:pt-[18%] w-[57%] bg-creamSonColor">
                <div className="w-full px-6 md:px-10 flex flex-col items-center justify-start ">
                    <h1 className="px-8 md:px-0 text-6xl md:text-7xl  font-playFair font-bold">Feel the taste<br/> of <span className="hidden md:inline">japanese food</span></h1>
                    <span className="md:hidden block text-6xl font-playFair font-bold">
                        <h1 className="absolute top-[48%] left-[22%] text-7xl z-10 ">japanese <span><p className="text-right">food</p></span></h1>
                        {/* <h1>food</h1> */}
                    </span>
                    <div className="mt-[10rem] md:px-8 md:mt-6 md:flex md:flex-col md:items-center text-sm md:text-normal">
                        <p>Feel the taste of the most popular japanese food from anywhere and anytime</p>
                        <div className="flex items-center justify-center mt-4 gap-x-10">
                            <button className="bg-black px-5 py-3 text-whiteColor rounded-full ">Order Now</button>
                            <button className="hidden md:flex items-center justify-center gap-x-5"><img src={Play} alt="play" className="w-10" />How to Order</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full h-[9rem] flex items-center justify-between">
                    <span className=" ml-12 min-w-[40%]">
                        <h1 className="text-6xl font-playFair">24k+</h1>
                        <p className="text-gray_100 font-plusJakarta mt-2 text-sm">Happy Customers</p>
                    </span>
                    <div className="w-[60%] h-[60%] px-4 border-l hidden md:flex items-center justify-around">
                        <img src={UserPf} alt="userPF" className="h-12 w-12"/>
                        <p className="text-xs px-3 font-playFair">"This is the best Japanese food delivery service that ever existed."</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
