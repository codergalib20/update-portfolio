import React from 'react';
import cardBg from '../../../assets/contact-shape.png';
const PortFolioCard = ({ folio }) => {    
    const showTitle = folio?.title?.length > 60 ? folio?.title?.slice(0, 60) + " ..." : folio?.title?.slice(0, 60);
    const showPara = folio?.para?.length >= 120 ? folio?.para?.slice(0, 120) + " ..." : folio?.para?.slice(0, 120)
    const serviceCardStyle = {
        background: `url(${cardBg}) no-repeat center center`,
        backgroundAttachment: "fixed",
        backgroundSize: 'cover'
    }
    return (
        <div style={serviceCardStyle} className="shadow-md rounded-lg shadow-slate-900 border-8 border-[#111]">
            <div>
                <div className='h-[340px] rounded-t-lg overflow-hidden'>
                    <img className='scale-100 hover:scale-105 transition-all duration-300 ease-linear' src={ folio?.images[0]} alt="" />
                </div>
                <div className='py-4 px-4'>
                    <h2 className='text-xl font-medium text-gray-300 transition-all duration-300 ease-linear hover:text-[#78f701]'>{showTitle}</h2>
                    <p className='font-medium text-base text-gray-400 pt-2 transition-all duration-300 ease-linear hover:text-[#78f701]'>{ showPara}</p>
                </div>
             </div>
        </div>
    );
};

export default PortFolioCard;