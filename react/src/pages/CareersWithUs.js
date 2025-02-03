import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong } from "react-icons/fa6";
import CtaRegister from '../components/shared/CtaRegister';
import LetsGetStarted from '../components/shared/LetsGetStarted';

const CareersWithUs = () => {
    return (
        <Layout>
            {/* Hero Banner Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[length:100%_100%] bg-top bg-no-repeat" style={{ backgroundImage: `url(${ImageIcons.domainsecbg})` }}>
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[40px] items-center'>
                        <div className='md:text-left text-center'>
                            <h1 className='h2 font-bold md:mb-[15px] max-md:mb-[10px]'>Careers With Us</h1>
                            <p className='mb-[10px]'>Leave an everlasting impact on your Career! Join velosting</p>
                            <p className='mb-[10px]'>We, at Velosting provide both a challenging and rewarding working environment, encouraging open communication, consistent improvement and respect for each other. No matter, be it a collaborator on projects or a participant in team building activities, there will always be a sense of purpose and fulfilment.</p>
                            <p className='md:mb-[30px] max-md:mb-[20px]'>We encourage you to join us and become a part of our organisation, where you will be provided with a wide range of opportunities.</p>
                            <Link className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='https://www.thevpgroup.in/careers' target='_blank'>Join Now<FaArrowRightLong className='ml-[10px]' /></Link>
                        </div>
                        <div>
                            <img src={ImageIcons.careerswithuspic} alt='Careers With Us' className='rounded-[90px_2px_90px_2px] w-full md:max-w-[700px] max-md:max-w-[450px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='max-w-[990px] mx-auto text-center'>
                        <div className='max-md:order-1'>
                            <h2>We are Hiring!</h2>
                            <p className='mb-[10px]'>We are on the hunt for the next generation of innovators with new ideas and visions to make this world a better place for everyone. If you’re one of those who knows how to carve new paths in a crowded territory, our company would love to talk to you.</p>
                            <p className='mb-[10px]'>So, what are you waiting for?</p>
                            <p className='md:mb-[30px] max-md:mb-[20px]'>Grab the opportunity to become a part of our organization. We want to hear from your side.</p>
                            <Link className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='https://www.thevpgroup.in/careers' target='_blank'>Join Now<FaArrowRightLong className='ml-[10px]' /></Link>
                        
                        </div>
                    </div>
                </div>
            </section>

            {/* Let’s Get Started Section */}
            <LetsGetStarted/>

            {/* CTA Section */}
            <CtaRegister/>
        </Layout>
    )
}

export default CareersWithUs
