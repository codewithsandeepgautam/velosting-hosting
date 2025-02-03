import React from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import CtaRegister from '../components/shared/CtaRegister';
import LetsGetStarted from '../components/shared/LetsGetStarted';
import OurVentures from '../components/shared/OurVentures';
import TeamFounders from '../components/shared/TeamFounders';
const AboutUs = () => {
    return (
        <Layout>
           {/* Hero Banner Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[length:100%_100%] bg-top bg-no-repeat" style={{ backgroundImage: `url(${ImageIcons.domainsecbg})` }}>
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div className='md:text-left text-center'>
                            <h1 className='h2 font-bold md:mb-[20px] max-md:mb-[15px]'>Welcome to Velosting</h1>
                            <p className='mb-0'>Where we provide users with scalable and outstanding services. We are a preeminent domain hosting provider offering our users with innovative, reliable and scalable solutions, serving the varying needs of businesses and individuals. Our other services include VPS hosting, Shared hosting, Dedicated servers, GPU server, Fully managed on-premises dedicated server, Colocation services, DDoS, CDN accelerator, and Live streaming CDN. We are devoted to improving your digital journey with our cutting-edge technology, impeccable performance and customer support.</p>
                        </div>
                        <div>
                            <img src={ImageIcons.aboutuspictwo} alt='About Us pic' className='rounded-[90px_2px_90px_2px] w-full md:max-w-[700px] max-md:max-w-[450px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
             {/* Our Story */}
             <section className="pt-[20px] md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 md:gap-[30px] max-md:gap-[15px] items-center'>
                        <div className='max-md:order-2'>
                            <img src={ImageIcons.aboutuspic} alt='Data Center' className='rounded-[90px_2px_90px_2px] w-full md:max-w-[670px] max-md:max-w-[450px] mx-auto' />
                        </div>
                        <div className='max-md:order-1'>
                            <h2>Our Story</h2>
                            <p className='md:mb-[30px]'>We launched Velosting on July 1, 2024, with a vision to transform the industry of hosting. There was an emerging need for high-performance, scalable solutions in order to meet the growing demands of today’s businesses, so we introduced our transforming hosting services which provide users with the enhanced security, speed that will help take your business to new heights.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders of The Velosting Section */}
            <TeamFounders/>
            
            {/* Our Venture’s Section */}
            <OurVentures/>

            {/* Our Values */}
            <section className="py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[30px] items-center'>
                        <div className='max-md:order-2'>
                            <img src={ImageIcons.whyusimg1} alt='colocation enables' className='w-full md:max-w-[650px] max-md:max-w-[450px] mx-auto rounded-[2px_90px]' />
                        </div>
                        <div className='max-md:order-1'>
                          <h2 className='mb-[15px]'>Our Values</h2>
                           <ul className='block pt-[5px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <ul className='block pt-[15px] pl-[30px]'>
                                        <li className='relative text-[#000] mb-[10px]'>
                                            <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Velosting is devoted to investing in latest advancements in technology and infrastructure in order to offer state-of-the-art solutions so that you can keep your business abreast.
                                        </li>
                                        <li className='relative text-[#000] mb-[10px]'>
                                            <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Our superior performance servers provide strong and robust services, allowing you to run your applications and website smoothly.
                                        </li>
                                        <li className='relative text-[#000] mb-[10px]'>
                                            <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Velosting offers its users with scalable solutions adding flexibility to upgrade your services.
                                        </li>
                                        <li className='relative text-[#000] mb-[10px]'>
                                            <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />We give priority to the success of your business, so we provide 24/7 exceptional customer support to our customers.
                                        </li>
                                        <li className='relative text-[#000] mb-[10px]'>
                                            <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />We simplify the management of the data of the customers along with enhancing the operational efficiency, as our services can integrate with all the ISP CRM systems.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
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

export default AboutUs