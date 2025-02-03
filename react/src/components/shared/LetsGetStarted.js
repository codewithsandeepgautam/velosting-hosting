import React from 'react'
import { Link } from 'react-router-dom'
import ImageIcons from '../imageComponent/ImageIcons';
import { windowScroll } from '../../utils/windowScroll';

const LetsGetStarted = () => {
    return (
        <section>
            <div className="lg:container mx-auto px-4">
                <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                    <div className='text-center max-md:order-2'>
                        <img src={getstartData.img} alt={getstartData.alt}  className='w-full md:max-w-[500px] max-md:max-w-[350px] mx-auto' />
                    </div>
                    <div className='max-w-[620px] md:pb-[30px] md:ml-auto max-md:mx-auto max-md:order-1'>
                        <h2 className='md:text-right max-md:text-center mb-[15px]'>{getstartData.title}</h2>
                        <p className='md:text-right max-md:text-center mb-[30px]'>{getstartData.para}</p>
                        <div className='grid grid-cols-3 sm:gap-[20px] gap-[10px]'>
                            {getstartData.contentItem.map((item, i) => (
                                <Link onClick={windowScroll} key={i} target={item.target} to={item.boxLink}>
                                    <div className={`${item.bgclrclass} rounded-[10px] sm:px-[15px] px-[10px] sm:py-[30px] py-[15px]`}>
                                            <div className='text-center mb-[15px]'>
                                                <img src={item.icon} alt={item.alt} className='w-full max-w-[35px] mx-auto' />
                                            </div>
                                            <h4 className='text-center sm:text-[18px] text-[15px] font-medium mb-0'>{item.title}</h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


const getstartData = {
    title: "Let’s Get Started!",
    para: "If there is any information you can't find on our web site or that we have not included here please submit a query",
    img: ImageIcons.ctaimgget,
    alt: "Get Started Pic",
    contentItem: [
        {
            icon: ImageIcons.emailsupporticon,
            alt: "Email Support",
            title: "Email Support",
            boxLink: "mailto:help@velosting.com",
            target: "_blank",
            bgclrclass: "bg-[#F1FCCF]"
        },
        {
            icon: ImageIcons.callusnowicon,
            alt: "Call Us Now",
            title: "Call Us Now",
            boxLink: "tel:+919056111675",
            target: "_blank",
            bgclrclass: "bg-[#FDE4D7]"
        },
        {
            icon: ImageIcons.supportticketicon,
            alt: "Support Ticket",
            title: "Support Ticket",
            boxLink: "/contact-us",
            target: "_self",
            bgclrclass: "bg-[#D1DCFE]"
        }
    ]
}

export default LetsGetStarted
