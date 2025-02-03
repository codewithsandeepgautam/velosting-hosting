import React from 'react'
import { Link } from 'react-router-dom'
import ImageIcons from '../imageComponent/ImageIcons';
import { FaArrowRightLong } from "react-icons/fa6";
import { windowScroll } from '../../utils/windowScroll';

const AboutVelosting = () => {
  return (
    <section className="md:py-[70px] max-md:py-[50px]">
        <div className="lg:container mx-auto px-4 md:py-[10px]">
            <div className='flex lg:gap-10 max-lg:gap-5 max-md:flex-col items-center'>
                <div className='md:w-1/2 max-md:mb-[10px]'>
                    <h2>{aboutData.title}</h2>
                    <p className='max-w-[640px] md:mb-[30px] max-md:mb-[20px]'>{aboutData.para}</p>
                    <div>
                        <Link onClick={windowScroll} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to={aboutData.btnLink}>{aboutData.btnName}<FaArrowRightLong className='ml-[10px]'/></Link>
                    </div>
                </div>
                <div className='md:w-1/2 max-md:w-full'>
                    <img src={aboutData.aboutimg} alt={aboutData.alt} className='w-full max-w-[680px] mx-auto' />
                </div>
            </div>
        </div>
    </section>
  )
}

const aboutData = {
    title: "About Velosting",
    para: "Velosting, which is a leading provider of a wide range of services, is committed to empower your business with reliable, secure and high-performance services. We offer a comprehensive range of hosting services and other than this, we also offer domain services, cPanel hosting, Plesk hosting, GPU servers, VPS, and cloud dedicated servers. As we are focused towards customer satisfaction, we esure providing you with seamless digital experience so that you can grow your business.",
    btnName: "Read more",
    btnLink: "/about-us",
    aboutimg: ImageIcons.aboutimg,
    alt: "About Img"
}

export default AboutVelosting
