import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PortFolioCard from '../custom/PortFolioCard';
const Portfolio = () => {
    const [folios, setFolios] = useState([]);
    useEffect(() => {
        const getFolio = async () => {
            try {
                const {data} = await axios.get("/folio.json");
                await setFolios(data)
            } catch (err) {
                console.log(err.message);
            }
        }
        getFolio()
    },[])
    return (
        <div className='bg-[#111] py-20'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {folios.map((folio, index) =>
                        <PortFolioCard key={index} folio={ folio}/>
                )}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;