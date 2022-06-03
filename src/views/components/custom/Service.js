import React from 'react';
import icon1 from '../../../assets/services/icons-01.png';
import icon2 from '../../../assets/services/icons-02.png';
import icon3 from '../../../assets/services/icons-03.png';
import icon4 from '../../../assets/services/icons-04.png';
import bg from '../../../assets/bg.jpg';
import cardBg from '../../../assets/contact-shape.png';
const Service = () => {
    const serviceStyle = {
        background: `linear-gradient(rgba(0,0,0,.90),rgba(0,0,0,.90)),url(${bg}) no-repeat top center`,
        backgroundAttachment: "fixed"
    }
    const serviceCardStyle = {
        background: `url(${cardBg}) no-repeat center center`,
        backgroundAttachment: "fixed",
    }
    const services = [
        {
            _id: "3223",
            title: "Fast Performance",
            icon: icon1,
            para : "Optimized for a smaller build size, faster dev compilation and dozens of other improvements."
        },
        {
            _id: "3224",
            title: "Perfect Responsive",
            icon: icon2,
            para : "Our theme is full perfect for all device. You can visit our theme all device easily."
        },
        {
            _id: "3225",
            title: "Fast & Friendly Support",
            icon: icon3,
            para : "We are provide 24 hours support for all clients.You can purchase without hesitation."
        },
        {
            _id: "3226",
            title: "No Coding Skills Required",
            icon: icon4,
            para : "Create any site you can imagine without knowing any coding. There is no limit to your creativity!"
        }
    ]
    return (
        <div style={serviceStyle} className='py-20'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <div style={serviceCardStyle} key={index} className="p-4 shadow-black shadow rounded-md">
                            <img src={service.icon} alt="" />
                            <h3 className='text-xl font-medium text-gray-300 pt-4'>{service.title}</h3>
                            <p className='text-base text-gray-500 pt-3'>{service.para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;