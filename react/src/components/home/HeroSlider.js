import React from 'react'
import { Link } from 'react-router-dom'
import ImageIcons from '../imageComponent/ImageIcons';
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import { windowScroll } from '../../utils/windowScroll';

const HeroSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        fade: true,
        speed: 300,
        autoplay: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <section className="hero-slider-info relative">
        <Slider {...settings}>
            {HomeSlider.map((item, i) => (
            <div key={i} className='relative w-full z-10'>
                <img src={item.img} alt={item.alt} className='bg-overlay-after absolute top-0 left-0 w-full h-full object-center object-cover'/>
                <div className='relative lg:container mx-auto px-4 md:py-[9%] max-md:pt-[70px] max-md:pb-[90px]'>
                    <div className='flex justify-between flex-wrap items-center '>
                        <div className={`lg:max-w-[750px] w-[100%] ${item.classlist}`}>
                            <h4 className='text-[#00A51A] font-semibold max-md:mb-[10px]'>{item.title}</h4>
                            <h1 className='font-bold text-[#fff] md:mb-[15px] max-md:mb-[10px]'>{item.subtitle}</h1>
                            <p className='text-[#fff] mb-[30px] md:text-[18px] text-[17px]'>{item.para}</p>
                            <Link onClick={windowScroll} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to={item.href}>{item.linkTitle}<FaArrowRightLong className='ml-[10px]'/></Link>
                        </div>
                    </div>
                </div>
            </div>
            ))}
          </Slider>
    </section>
  )
}

const HomeSlider = [
    {
        img: ImageIcons.herobannerone,
        alt: "Data Center Pic",
        title: "Reliable and Secure Data Solutions",
        subtitle: "Cutting-Edge Data Center Technology",
        para: "Want impeccable performance and reliability? Get our advanced VPS, GPU, Dedicated, and Bare Metal Server Solutions to take your business to new heights.",
        linkTitle: "Get Started",
        href: "/#hosting-plan",
        classlist: "md:text-left text-center",
    },
    {
        img: ImageIcons.herobannertwo,
        alt: "Data Center Pic",
        title: "Secure Data Solutions",
        subtitle: "Grow Your Business With Our Reliable Server Solutions",
        para: "Want impeccable performance and reliability? Get our advanced VPS, GPU, Dedicated, and Bare Metal Server Solutions to take your business to new heights.",
        linkTitle: "Get Started",
        href: "/#hosting-plan",
        classlist: "text-center mx-auto",
    },
    {
        img: ImageIcons.herobannerthree,
        alt: "Data Center Pic",
        title: "Velosting Domain Solutions",
        subtitle: "Get Your Space on the Web With Velosting Domain Solutions",
        para: "Experience best domain solutions for launching your website or enhancing your digital presence.",
        linkTitle:  "Get Started",
        href: "/#hosting-plan",
        classlist: "md:text-left text-center",
    }
]

export default HeroSlider
