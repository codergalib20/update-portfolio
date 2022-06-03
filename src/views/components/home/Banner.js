import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
const Banner = () => {
    return (
        <div>
            <div className="container mx-auto px-4">
                <div className='flex items-center min-h-screen justify-center'>
                    <div>
                    <div>
                        <h1 className='font-neon text-white text-center text-8xl selection:text-[#78f701]'>Asadullah Hil Galib</h1>
                        <h3 className='text-center text-gray-400 text-4xl py-2 selection:text-[#78f701]'>Mern Stack Developer</h3>
                    </div>
                    <div className='flex items-center justify-center mt-20 bottom-scroll-button'>
                        <button className='flex flex-col text-center items-center justify-center '><span className='text-white text-4xl scroll-icon hover:text-[#78f701] transition-all ease-linear duration-300'><BsArrowDown />
                        </span>
                        <span className='text-white scroll-text w-32 hover:text-[#78f701] transition-all ease-linear duration-300'>SCROLL DOWN</span></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;