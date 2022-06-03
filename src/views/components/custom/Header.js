/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { IoIosMenu } from 'react-icons/io';
const Header = () => {
    return (
        <div className='header-style border-b border-gray-600 py-2 fixed w-full left-0 top-0 z-50'>
            <div className="container mx-auto px-4">
            <div className='flex items-center justify-between'>
                <div className='font-neon text-uppercase text-4xl font-bold text-white select-none'>Galib</div>
                    <div>
                        <span className='text-6xl font-bold text-white cursor-pointer'><IoIosMenu/></span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;