import React from 'react'
import ImageIcons from '../imageComponent/ImageIcons';
import Slider from "react-slick";



const OurTestimonials = () => {
    var settings = {
        dots: false,
        arrows: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <section className="testimonial-slider-info md:py-[70px] max-md:py-[50px] bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${testimonialData.bgimgtest})` }}>
            <div className="lg:container mx-auto px-4 py-[10px]">
                <div className='text-center max-w-[1024px] mx-auto'>
                    <h2 className='text-[#fff] max-md:mb-[15px]'>{testimonialData.title}</h2>
                    <p className='text-[#fff] md:mb-[40px] max-md:mb-[30px]'>{testimonialData.para}</p>
                </div>
                <div className='relative max-w-[1140px] mx-auto max-lg:px-[20px]'>
                    <Slider {...settings}>
                        {testimonialData.testimonialItem.map((item, i) => (
                            <div key={i} className='bg-[#FFFFFF]/[85%] rounded-[10px] md:px-[30px] max-md:px-[20px] py-[30px]'>
                                <div className='mb-[20px]'>
                                    <img src={item.staricon} alt={item.staralt} className='w-full max-w-[90px]' />
                                </div>
                                <p className='mb-[20px] md:text-[20px] italic'>"{item.pragrph}"</p>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='md:min-w-[95px] max-md:min-w-[75px]'>
                                        <img src={item.propic} alt='Profile Pic' className='md:w-[90px] max-md:w-[70px] md:h-[90px] max-md:h-[70px] rounded-[90px] object-center object-cover' />
                                    </div>
                                    <div>
                                        <h4 className='md:text-[20px] max-md:text-[18px] text-[#00A51A] italic mb-0'>{item.proname}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>

    )
}

const testimonialData = {
    title: "Our Customers Love Us",
    para: "Find out what our customers says about our products and services.",
    bgimgtest: ImageIcons.bgtestimonials,
    testimonialItem: [
        {
           staricon: ImageIcons.staricon,
           staralt: "Star Icon",
           pragrph: "I run a small business and came to know about Velosting VPS solutions. To be honest, their services proved to quite beneficial for the growth of my business.",
           propic: ImageIcons.testimonialpic,
           proname: "Aditya Gupta"
        },
        {
            staricon: ImageIcons.staricon,
            staralt: "Star Icon",
            pragrph: "I've always needed high-performance computing power to handle my projects efficiently. After extensive research and comparisons, I decided to try Velosting's GPU server, and I must say, the experience has been outstanding.",
            propic: ImageIcons.testimonialpic1,
            proname: "Rajesh Mehta"
        },
        {
            staricon: ImageIcons.staricon,
            staralt: "Star Icon",
            pragrph: "I have been using Velosting colocation services for months and I must say, I have never faced any issues and never felt so easy about my infrastructure, as I know they are taking care of proper management of everything. Best services!",
            propic: ImageIcons.testimonialpic2,
            proname: "Vikram Singh"
        },
        {
            staricon: ImageIcons.staricon,
            staralt: "Star Icon",
            pragrph: "Velosting's domain name registration services are completely reliable and fast, making them a top choice for everyone. I have recently tranfered my domain to Velosting and I got best services from them.",
            propic: ImageIcons.testimonialpic3,
            proname: "Naveen Kapoor"
        },
        {
            staricon: ImageIcons.staricon,
            staralt: "Star Icon",
            pragrph: "One of my friends recommended me Velosting dedicated bare metal server solutions and I must say I have seen incredible growth in my business after renting their solutions, as they have offered unmatched performance and security, making my business run smoothly and efficiently.",
            propic: ImageIcons.testimonialpic4,
            proname: "Siddharth Khanna"
        }
    ]
}

export default OurTestimonials
