import React from 'react'
import ImageIcons from '../imageComponent/ImageIcons';

const VelostingAdvantage = () => {
    return (
        <section className="md:pb-[70px] max-md:pb-[50px]">
            <div className="lg:container mx-auto px-4 md:py-[10px]">
                <div className='text-center max-w-[690px] mx-auto'>
                    <h2>{vadvantageData.title}</h2>
                    <p className='text-[#00A51A] md:mb-[35px] max-md:mb-[0px]'>{vadvantageData.para}</p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 xl:gap-[30px] max-xl:gap-[20px] md:mt-[40px] max-md:mt-[30px]'>
                    {vadvantageData.advantageitem.map((item, i) => ( 
                        <div key={i} className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={item.icon} alt={item.alt} className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='mb-[15px]'>{item.title}</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>{item.para}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const vadvantageData = {
    title: "The Velosting Advantage",
    para: "Key Benefits for Businesses",
    advantageitem: [
        {
            icon: ImageIcons.highperformance,
            alt: "High-Speed Performance",
            title: "High-Speed Performance",
            para: "With us, you will get to experience lightning-fast loading times and improved performance. Join us today and ensure that your website runs seamlessly and provides you an impeccable user experience."
        },
        {
            icon: ImageIcons.scalableicon,
            alt: "Scalability",
            title: "Scalability",
            para: "There is no doubt that with the growth of your business, your business needs also grow, so Velosting offers scalable solutions to you so that you can fulfil your resource demand easily."
        },
        {
            icon: ImageIcons.encryptedicon,
            alt: "Security",
            title: "Security",
            para: "With us, you can protect your business, as we implement robust security measures like DDoS protection, SSL certificates and other security updates."
        },
        {
            icon: ImageIcons.hourssupport,
            alt: "24/7 Support",
            title: "24/7 Support",
            para: "We ensure providing our customers round the clock support from our professional team, assisting you with technical issues."
        },
        {
            icon: ImageIcons.userfriendlyinterface,
            alt: "User-Friendly Interface",
            title: "User-Friendly Interface",
            para: "We allow you to handle all aspects of your hosting hassle-free with our intuitive interface."
        }
    ]
}

export default VelostingAdvantage
