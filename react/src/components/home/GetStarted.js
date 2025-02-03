import React from 'react'
import ImageIcons from '../imageComponent/ImageIcons';

const GetStarted = () => {
    return (
        <section className="md:pt-[70px] max-md:pt-[50px]">
            <div className="lg:container mx-auto px-4">
                <div className='grid md:grid-cols-2 grid-cols-1 gap-[30px] items-center'>
                    <div className='text-center max-md:order-2'>
                        <img src={getstartInfo.img} alt={getstartInfo.alt} className='w-full max-w-[500px] mx-auto' />
                    </div>
                    <div className='max-w-[620px] ml-auto max-md:order-1'>
                        <h2 className='md:text-right max-md:text-center mb-[15px]'>{getstartInfo?.title}</h2>
                        <p className='md:text-right max-md:text-center mb-[30px]'>{getstartInfo?.para}</p>
                        <div className='grid grid-cols-3 sm:gap-[20px] gap-[10px]'>
                            {getstartInfo?.contentItem?.map((item, i) => (
                                <div className={`${item.bgclrclass} rounded-[10px] sm:px-[15px] px-[10px] sm:py-[30px] py-[15px] `}>
                                    <div className='text-center mb-[15px]'>
                                        <img src={item?.icon} alt={item?.alt} className='w-full max-w-[35px] mx-auto' />
                                    </div>
                                    <h4 className='text-center sm:text-[18px] text-[15px] font-medium mb-0'>{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

const getstartInfo = {
    title: "Let’s Get Started!",
    para: "If there is any information you can't find on our web site or that we have not included here please submit a query",
    img: ImageIcons.ctaimgget,
    alt: "Get Started Pic",
    contentItem: [
        {
            icon: ImageIcons.emailsupporticon,
            alt: "Email Support",
            title: "Email Support",
            bgclrclass: "bg-[#F1FCCF]"
        },
        {
            icon: ImageIcons.callusnowicon,
            alt: "Call Us Now",
            title: "Call Us Now",
            bgclrclass: "bg-[#FDE4D7]"
        },
        {
            icon: ImageIcons.supportticketicon,
            alt: "Support Ticket",
            title: "Support Ticket",
            bgclrclass: "bg-[#D1DCFE]"
        }
    ]
}

export default GetStarted
