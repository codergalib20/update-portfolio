/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import galibimage from '../../../assets/galib.jpg';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { FaDiscord } from 'react-icons/fa';
const About = () => {
    return ( 
    <div>
        <div className='py-12 bg-[#111]'>
            <div className="container mx-auto px-4">
                <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                    <div>
                        <div className='p-5 scale-75 bg-gray-900 -skew-x-12 rounded-lg py-8'>
                            <img className='w-full rounded-lg skew-x-12' src={ galibimage} alt="Galib image" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-6xl font-medium  pb-2 text-white hover:text-[#78f701] transition-all ease-linear duration-300 selection:text-[#78f701]'>Asadullah Hil Galib</h1>
                        <div className='w-[50%] h-[2px] bg-gray-600'></div>
                        <p className='py-3 text-base text-gray-400 hover:text-[#78f701] transition-all ease-linear duration-300 selection:text-[#78f701]' >Hello everyone! <br />
                            I'm an enthusiastic and detail-oriented Mern Stack developer to                          use my skills in coding, troubleshooting complex design, and                          assisting in the timely completion of projects. I love focusing                          smart concepts with creative, standards-based, accessible Front-end                          development. Also, I'm always looking for new challenges & new                          people to meet.</p>
                        <div className='flex items-center justify-start gap-4'>
                                <button className="flex items-center justify-center gap-3 connect-button">
                                    <span className='icon'><HiOutlineDocumentDownload />
                                    </span> <span>resume</span>
                                </button>
                                <button className="flex items-center justify-center gap-3 connect-button">
                                    <span className='icon'><FaDiscord /></span>
                                    <span>discord</span>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </div>
    );
};

export default About;