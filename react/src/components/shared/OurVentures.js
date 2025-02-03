import React from 'react'
import ImageIcons from '../imageComponent/ImageIcons';
import Slider from "react-slick";

const OurVentures = () => {
    var settings = {
        dots: false,
        arrows: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
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
        <section className="testimonial-slider-info md:py-[70px] max-md:py-[50px] bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${ImageIcons.bgtestimonials})` }}>
            <div className="lg:container mx-auto px-4 py-[10px]">
                <div className='text-center max-w-[1024px] mx-auto'>
                    <h2 className='text-[#fff] md:mb-[40px] max-md:mb-[30px]'>Our Venture’s</h2>
                </div>
                <div className='relative max-w-[750px] mx-auto max-lg:px-[20px]'>
                    <Slider {...settings}>
                        <div className='bg-[#FFFFFF]/[85%] rounded-[10px] md:px-[30px] max-md:px-[20px] py-[50px]'>
                            <p className='text-center mb-[30px] md:text-[20px] italic'>"Skypro, we offer a fully managed cloud solutions to our customers by taking away their pain of IT Infrastructure management, we assure on delivering a managed hosting solution that is fast and reliable with 100% uptime guarantee"</p>
                            <div>
                                <h4 className='text-center md:text-[20px] max-md:text-[18px] text-[#00A51A] italic mb-[15px]'>Your Gatway to Limitless Entertainment</h4>
                                <img src={ImageIcons.skylogo} alt='Skypro Pic' className='mx-auto md:w-[120px] max-md:w-[70px]' />
                            </div>
                        </div>
                        <div className='bg-[#FFFFFF]/[85%] rounded-[10px] md:px-[30px] max-md:px-[20px] py-[50px]'>
                            <p className='text-center mb-[30px] md:text-[18px] italic'>"It's your chance to host an EV charging station (Without having to manage & invest in it)"</p>
                            <div>
                                <h4 className='text-center md:text-[20px] max-md:text-[18px] text-[#00A51A] italic mb-[15px]'>My EV Point</h4>
                                <img src={ImageIcons.evlogo} alt='My EV Point' className='mx-auto md:w-[120px] max-md:w-[70px]' />
                            </div>
                        </div>
                        <div className='bg-[#FFFFFF]/[85%] rounded-[10px] md:px-[30px] max-md:px-[20px] py-[50px]'>
                            <p className='text-center mb-[30px] md:text-[18px] italic'>"Introducing our product first time in the country Cloud based CCTV Service for unparalleled security and peace of mind."</p>
                            <div>
                                <h4 className='text-center md:text-[20px] max-md:text-[18px] text-[#00A51A] italic mb-[15px]'>Cloud based CCTV surveillance</h4>
                                <img src={ImageIcons.cloudcamlogo} alt='Cloud based CCTV surveillance' className='mx-auto md:w-[120px] max-md:w-[70px]' />
                            </div>
                        </div>
                        <div className='bg-[#FFFFFF]/[85%] rounded-[10px] md:px-[30px] max-md:px-[20px] py-[50px]'>
                            <p className='text-center mb-[30px] md:text-[18px] italic'>"Blazing Fast Internet refers to high-speed internet connectivity that delivers exceptional download and upload speeds, minimizing latency and buffering times."</p>
                            <div>
                                <h4 className='text-center md:text-[20px] max-md:text-[18px] text-[#00A51A] italic mb-[15px]'>Blazing Fast Internet</h4>
                                <img src={ImageIcons.myinternetlogo} alt='Blazing Fast Internet' className='mx-auto md:w-[120px] max-md:w-[70px]' />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default OurVentures
