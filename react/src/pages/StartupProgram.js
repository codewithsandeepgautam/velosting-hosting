import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong } from "react-icons/fa6";

const StartupProgram = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[#00A51A]/[5%]" >
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div className='md:text-left text-center'>
                            <h4 className='text-[#00A51A] font-semibold mb-[10px]'>Accelerate Your Startup</h4>
                            <h1 className='font-bold text-[#000] md:mb-[20px] max-md:mb-[15px]'>Join Our Startup Program Free.</h1>
                            <p className='text-[#000] md:text-[18px] md:mb-[30px] max-md:mb-[20px]'>Are you ready to turn your innovative idea into a successful startup? Our program is designed specifically for early-stage entrepreneurs, offering essential free services to help you establish your business during its crucial initial phase. Get upto Rs 10,0000.00 /- credit and IT support to enhance your startup into multi fold growth.</p>
                            <Link className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/contact-us'>Join Now<FaArrowRightLong className='ml-[10px]' /></Link>
                        </div>
                        <div>
                            <img src={ImageIcons.affiliatesimage} alt='StartupProgram' className='w-full md:max-w-[450px] max-md:max-w-[350px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Overview Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='flex lg:gap-10 max-lg:gap-5 max-md:flex-col'>
                        <div className='md:w-1/2 max-md:w-full'>
                            <div className='w-full'>
                                <div class="relative">
                                    <img src={ImageIcons.startupprogrampic} alt='StartupProgram' className='w-full md:max-w-[450px] max-md:max-w-[400px] mx-auto' />
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2'>
                            <h2 className='mb-[15px]'>Program Overview</h2>
                            <p>Our Startup Support Program provides a robust suite of services tailored for startups in their early stages. We aim to eliminate barriers and provide you with the necessary tools to grow and succeed without the burden of upfront costs.</p>
                            <h4 className='text-[22px] font-semibold mb-[5px]'>Qualify Criterial</h4>
                            <ul className='block md:gap-x-[50px] pt-[15px] pl-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' /><span className='font-semibold'>Up to ₹5,000 credit:</span> For companies registered in India and, not older than 5 years old.</li>
                                <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' /><span className='font-semibold'>Up to ₹10,000 credit:</span> For companies registered under Startup India, and not older than 5 years.</li>
                                <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' /><span className='font-semibold'>Up to ₹50,000 credit:</span> For companies in fintech, e-commerce, bootstrap, or those with angel investment.</li>
                                <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' /><span className='font-semibold'>Up to ₹100,000 credit:</span> For VC-funded companies and not more than 3 years old.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Free Services Offered for all qualified startup */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='text-center md:mb-[35px] max-md:mb-[20px]'>Free Services Offered For All Qqualified Startup</h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[30px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.domainregicon} alt='Domain Registration' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Domain Registration</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Secure a unique domain name to establish your online identity. We provide one .COM/.IN domain for 1 year.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.responsivedesignicon} alt='Website Building' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Website Building</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Use intuitive tools to create a professional website that reflects your brand.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.dnsmanagementicon} alt='Web Hosting' className='w-full max-w-[40px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Web Hosting</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Reliable hosting services to keep your website running smoothly and accessible. We provide Linux/Windows hosting for 1 year.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxnine} alt='Professional Email Setup' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Professional Email Setup</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Get upto 10 email accounts using your domain for enhanced credibility. We will support 5 email free for 1st year.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.enhancedperformance} alt='VPS Server Access' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>VPS Server Access</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Free resources, including cloud hosting and VPS, for efficient data management. You can use in GPU and Dedicated server as well. Use your credit against server bill and enjoy free access</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.sevensupport} alt='IT Support' className='w-full max-w-[40px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>IT Support</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Ongoing technical support to resolve challenges and maintain system efficient.</p>
                        </div>

                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.infrastructurestability} alt='Cloud Storage Solutions' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Cloud Storage Solutions</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Secure, scalable storage for documents and data to keep your business organised. We provide 100 GB of Storage FREE for 1 years.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.remoteaccess} alt='Marketing Tools' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Marketing Tools</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Digital marketing resources to effectively promote your startup and reach your audience. We provide SEO/SMO advise to promote your site.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seoiconfive} alt='Free Consulting' className='w-full max-w-[40px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Free Consulting</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Access to CTO level expert advice and guidance to help navigate technology challenges and optimise your IT strategy to achieve your business goal.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='flex lg:gap-10 max-lg:gap-5 max-md:flex-col'>
                        <div className='md:w-1/2 max-md:mb-[30px]'>
                            <div className='w-full'>
                                <img src={ImageIcons.faqpic} alt='Faq Pic' className='w-full max-w-[500px] mx-auto' />
                            </div>
                        </div>
                        <div className='md:w-1/2 max-md:w-full'>
                            <h2>Got questions? Well, we've got answers.</h2>
                            <p className='mb-[10px]'>From 24/7 support that acts as your extended team to incredibly fast website performance</p>
                            <ul className='block md:gap-x-[50px] pt-[15px] pl-[30px] mb-[25px]'>
                                {faqData.map((item, i) => (
                                    <li key={i} className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />{item.question}</li>
                                ))}
                            </ul>
                            <h4 className='text-[#000] md:text-[20px] text-[18px] mb-[15px]'>Yes, We do provide web and app development.</h4>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="md:py-[70px] max-md:py-[50px] after:bg-[#00A51A] relative bg-no-repeat bg-cover bg-center after:content-[''] after:absolute after:-z-10 after:left-0 after:right-0 after:top-0 after:w-full after:h-full" style={{ backgroundImage: `url(${ImageIcons.subscribebgmin})` }}>
                <div className="lg:container mx-auto px-4">
                    <div className='flex gap-[30px] max-md:flex-col max-md:text-center items-center justify-between'>
                        <div className='md:w-[75%]'>
                            <h2 className='text-[#fff]'>How To Apply.</h2>
                            <p className="text-[#fff] text-[18px] mb-0">It's very simple. Fill out the registration form below and upload your required documents. Once your documents are verified, you will be enrolled in the startup incubator system. The credit amount will be reflected on your dashboard, where you can use it to launch your services from the hosting service protfolio.</p>
                        </div>
                        <div className='flex md:w-[25%] md:justify-end'>
                            <Link className='md:text-[18px] text-[16px] bg-[#fff] text-[#00A51A] hover:bg-[#000]/[85%] hover:text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/contact-us'>Join Now <FaArrowRightLong className='ml-[10px]' /></Link>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}
const faqData = [
    {
        question: "Can you help in registering my company and get in India"
    },
    {
        question: "Can you provide Accounting support"
    },
    {
        question: "Is the Credits is transferable? Or can I transfer to my bank account."
    },
    {
        question: "Is there any place we can meet and discuss"
    },
    {
        question: "Do you provide complete it support including web and mobile app development?"
    }
];


export default StartupProgram
