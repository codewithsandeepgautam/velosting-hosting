import React from 'react'
import ImageIcons from '../imageComponent/ImageIcons';

const InformationCta = () => {
    return (
        <section className="md:py-[40px] max-md:py-[30px] after:bg-[#00A51A] relative bg-no-repeat bg-cover bg-center after:content-[''] after:absolute after:-z-10 after:left-0 after:right-0 after:top-0 after:w-full after:h-full" style={{ backgroundImage: `url(${ImageIcons.vpsbgbanner})` }}>
            <div className="lg:container mx-auto px-4">
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[20px]'>
                    {informationData.map((item, i) => (
                        <div className='flex items-center justify-center gap-[10px]'>
                            <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                <img src={item.iconImg} alt={item.iconAlt} className='w-full max-w-[30px] mx-auto' />
                            </div>
                            <h4 className='md:text-[20px] max-md:text-[17px] text-[#fff] mb-0'>{item.titleh4}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const informationData = [
    {
        iconImg: ImageIcons.twofourhras,
        iconAlt: "24 Hrs",
        titleh4: "DEDICATED 24/7 LIVE SUPPORT"
    },
    {
        iconImg: ImageIcons.clockicon,
        iconAlt: "Clock Icon",
        titleh4: "99.9% UPTIME GUARANTEE"
    },
    {
        iconImg: ImageIcons.dollericon,
        iconAlt: "Doller Icon",
        titleh4: "TRY FOR 10 DAYS RISK-FREE!"
    }
]
export default InformationCta
