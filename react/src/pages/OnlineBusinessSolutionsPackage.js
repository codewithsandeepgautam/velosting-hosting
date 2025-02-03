import React, { useState } from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import landingbanner from '../assets/images/landing-banner.png'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6"
import { IoSearch } from "react-icons/io5";
import { windowScroll } from '../utils/windowScroll';
import BusinessInquiry from '../components/shared/BusinessInquiry';
const OnlineBusinessSolutionsPackage = () => {
    const [domain, setDomain] = useState({
        domainName: "",
        domainExtension: ""
    })
    const nameHandler = (e) => {
        const inputValue = e.target.value;
        const alphaValue = inputValue.replace(/[^A-Za-z\s]/g, '');
        if (alphaValue.length <= 20) {
            setDomain(prevState => ({ ...prevState, domainName: alphaValue }));
        }
    };
    return (
        <Layout>
            <section className='relative py-[45px] max-lg:!pb-0 bg-[#E5F6EB]'>
                <div className='lg:container mx-auto px-4 relative z-10'>
                    <div className="max-w-[1190px] mx-auto md:mb-[40px] max-md:mb-[30px]">
                        <form>
                            <div className="w-full relative flex">
                                <input type="search" name="domainName" id="default-search" className="block w-full md:py-[20px] max-md:py-[15px] md:text-[16px] max-md:text-[15px] text-[#646773] md:ps-[26px] max-md:ps-[15px] md:pe-[280px] max-md:pe-[133px] rounded-full shadow-[0px_5px_15px_rgb(0_0_0_/_0.2)] focus:outline-none bg-[#fff]" value={domain.domainName} onChange={nameHandler} placeholder="Search domain name..." required />
                                <select id="countries" className="inline-block md:max-w-[110px] max-md:max-w-[80px] text-[#646773] md:text-[16px] max-md:text-[15px] bg-transparent py-[5px] md:px-[15px] max-md:px-[7px] focus:outline-none absolute md:right-[160px] max-md:right-[55px] top-[50%] -translate-y-[50%] border-s-[2px] border-[#EEEEEE]" onChange={(e) => {
                                    setDomain(data => ({
                                        ...data,
                                        domainExtension: e.target.value
                                    }));
                                }}>
                                    {domainData?.map((item, index) => (
                                        <option value={item?.value} key={index}>
                                            {item?.title}
                                        </option>
                                    ))}</select>
                                <Link to={`https://www.velosting.com/cart.php?a=add&domain=register&query=${domain.domainName + domain.domainExtension}`} className="inline-flex items-center justify-center gap-[8px] bg-[#00A51A] text-[#fff] text-[16px] md:py-[14px] md:px-[27px] max-md:p-[10px] rounded-full absolute md:right-[6px] max-md:right-[4px] top-[50%] -translate-y-[50%] md:ml-2 max-md:ml-1 hover:bg-[#00A51A]/[85%] hover:text-[#fff] duration-[400ms,700ms]"><IoSearch size={20} /><span className='max-md:hidden'>Search</span></Link>
                            </div>
                        </form>
                    </div>
                    <div className='max-w-[1190px] mx-auto'>
                        <div className='lg:flex lg:gap-[15px]'>
                            <div className='lg:w-1/2'>
                                <div className='lg:text-left text-center lg:px-[30px] lg:mt-[90px]'>
                                    <h4 className='text-[#00A51A] font-semibold mb-[10px]'>Domain Name</h4>
                                    <h1 className='font-bold text-[#000] max-w-[295px] max-lg:mx-auto md:mb-[20px] max-md:mb-[15px]'>Get a .com for ₹ 1.00/1st yr. </h1>
                                    <h4 className='font-semibold mb-[10px] md:text-[18px] text-[17px]'>Grab the world's most popular domain.</h4>
                                    <p className='mb-[30px]'>3-year purchase required. Additional year(s) ₹ 1.00</p>
                                </div>
                            </div>
                            <div className='lg:w-1/2'>
                                <div className='rounded-[20px] bg-black md:px-[24px] max-md:px-[15px] md:py-[30px] max-md:py-[20px]  '>
                                    <h2 className='text-white font-bold md:mb-[24px] max-md:mb-[15px] text-center'>Get in touch</h2>
                                    <div>
                                        <BusinessInquiry />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='lg:absolute lg:bottom-0 lg:left-0 w-full 2xl:max-w-[390px] max-2xl:max-w-[300px] max-lg:mt-[30px]' src={landingbanner} alt='banner' />
            </section>


            {/* Domain Services Section */}
            <section className="py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div>
                            <h2>Domain Services</h2>
                            <p className='mb-[25px]'>Velsoting offers users with a broad array of domain services which have been designed to offer you with a strong online presence. Our reliable domain services allow you to protect and promote your brand effortlessly.</p>
                            <h4 className='text-[20px] mb-[10px]'>Get Seamless Domain Services With Velosting</h4>
                            <ul className='block md:columns-2 md:gap-x-[50px] pt-[15px] pl-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Easy Domain Registration
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />DNS Management
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Domain Renewal Reminders
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Advanced Security Features
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Wide Range of TLDs
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Domain Privacy Protection
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Domain Transfer Assistance
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Bulk Domain Management
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src={ImageIcons.domainservices} alt='domain services' className='w-full md:max-w-[650px] max-md:max-w-[450px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Hosting Services Section */}
            <section className="md:pt-[70px] md:pb-[40px] max-md:py-[50px] bg-[#EEF5F7]">
                <div className="lg:container mx-auto px-4 py-[10px]">
                    <div className='text-center max-w-[992px] mx-auto'>
                        <h4 className='text-[#00A51A] text-[20px]'>What We Provide</h4>
                        <h2>Our Hosting Services</h2>
                        <p className='md:mb-[40px] max-md:mb-[30px]'>Hosting is what makes your site visible on the web. We offer fast, reliable plans for every need - from a basic blog to high-powered site. Designer? Developer? We have got you covered too.</p>
                    </div>
                    <div className='grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='relative md:py-[40px] max-md:py-[15px] md:px-[35px] max-md:px-[15px] rounded-[15px]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.cpanelhostingicon} alt='C-Panel Hosting' className='w-full max-w-[50px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>C-Panel Hosting</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>CPanel hosting simplifies website management with easy tools for controlling domains, emails, and more, letting you focus on growing your site with ease.</p>
                        </div>
                        <div className='relative md:py-[40px] max-md:py-[15px] md:px-[35px] max-md:px-[15px] rounded-[15px]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.wphostingicon} alt='Wordpress Hosting' className='w-full max-w-[50px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Wordpress Hosting</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>Our WordPress hosting plans offer optimized servers for fast performance, strong security, and custom features, tailored to meet the unique needs of your site.</p>
                        </div>
                        <div className='relative md:py-[40px] max-md:py-[15px] md:px-[35px] max-md:px-[15px] rounded-[15px]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.pleskhostingicon} alt='Plesk Hosting' className='w-full max-w-[50px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Plesk Hosting</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>Our Plesk hosting plan provides an intuitive control panel with powerful features, perfect for both beginners and advanced users, supporting a wide range of applications for seamless web hosting.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Servers Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4 py-[10px]">
                    <div className='text-center max-w-[992px] mx-auto'>
                        <h2>Our Servers</h2>
                        <p className='md:mb-[40px] max-md:mb-[30px]'>Server is what makes your website accessible on the web. We offer fast, reliable servers for every need—whether it's a simple blog or a high-powered site. Designer or developer? We've got you covered!</p>
                    </div>
                    <div className='grid sm:grid-cols-2 max-sm:grid-cols-1 md:gap-[30px] max-md:gap-[20px] max-w-[1024px] mx-auto'>
                        <div className='relative sm:py-[20px] max-sm:py-[15px] md:px-[35px] max-md:px-[20px] rounded-[15px]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.clouddedicatedservericon} alt='Cloud-Dedicated Server' className='w-full max-w-[50px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Cloud-Dedicated Server</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>Cloud Dedicated Server Hosting offers exclusive resources, high performance, ample storage, and enhanced security—perfect for high-traffic websites and demanding applications.</p>
                        </div>
                        <div className='relative sm:py-[20px] max-sm:py-[15px] md:px-[35px] max-md:px-[20px] rounded-[15px]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.dedicatedbaremetalserversicon} alt='Dedicated Bare Metal Servers' className='w-full max-w-[50px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Dedicated Bare Metal Servers</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>Dedicated Bare Metal Servers offer a physical machine with full control, customizable OS, and optimal performance, ensuring top security and reliability without resource competition.</p>
                        </div>
                        <div className='relative sm:py-[20px] max-sm:py-[15px] md:px-[35px] max-md:px-[20px] rounded-[15px]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.gpuservericon} alt='GPU Server' className='w-full max-w-[50px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>GPU Server</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>GPU Servers offer high-performance, customizable hardware for tasks like machine learning and graphics rendering. Choose your ideal GPU, CPU, and memory, and pay only for what you use.</p>
                        </div>
                        <div className='relative sm:py-[20px] max-sm:py-[15px] md:px-[35px] max-md:px-[20px] rounded-[15px]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.vpsservericon} alt='Vps Server' className='w-full max-w-[50px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Vps Server</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>A VPS splits a physical server into virtual servers with dedicated resources, providing an isolated environment for better performance and enhanced security for your websites and applications.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Offer Don't Miss It */}
            <section className="md:py-[70px] max-md:py-[50px] bg-[#2B2B2B]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[15px] items-center'>
                        <div className='text-center'>
                            <h4 className='text-[#00D752]'>Special Offer Don't Miss It</h4>
                            <h2 className='text-[#fff] lg:text-[44px] lg:leading-[60px]'>Web Hosting Secured Hosting from ₹199.00/mo.</h2>
                        </div>
                        <div>
                            <img src={ImageIcons.ctaspcialoffermiss} alt='Special Offer' className='w-full md:max-w-[500px] max-md:max-w-[450px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Velosting ? */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[992px] mx-auto'>
                        <h2>Why Choose Velosting ?</h2>
                        <p className='md:mb-[40px] max-md:mb-[30px]'>Velosting provides users with unmatched reliability, security, and exceptional customer support. Join thousands of satisfied customers and enjoy a seamless experience with our top-notch domain services.</p>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-[24px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.multilanguagesupportone} alt='Multi-Language Support' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>Multi-Language Support</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>With us, domain can be managed in your own preferred language, as we offer multi-language support.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.globaldomainreach} alt='Global Domain Reach' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>24/7 Network Security</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Velosting’s professional team of experts provides 24/7 support to the customers to help them out with any of the issues they are facing.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.freewhoisprivacy} alt='Free WHOIS Privacy' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>Free WHOIS Privacy</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We also offer our users a free WHOIS privacy so that you can safeguard your personal information.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seotoolsintegration} alt='SEO Tools Integration' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>SEO Tools Integration</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Our SEO integration tools help you boost the search engine ranking of your website.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.costeffectiveicon} alt='Cost- Effective' className='w-full max-w-[60px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>Cost- Effective</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We offer our services at highly affordable rates, without compromising on quality.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.controlcustomisationicon} alt='Full Control and Customisation' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>Full Control and Customisation</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>With us, you get full root access, giving you complete control over your server environment. Customize server settings and install your preferred software for a tailored experience.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.reliabitlityuptimeicon} alt='Reliability and Uptime' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>Reliability and Uptime</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Velosting state-of-the-art data centres have redundant power supplies and we ensure round the clock monitoring, preventing downtime issues.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.highperformanceserver} alt='High Performance Server' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>High Performance Server</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>You will get to experience high-speed and improved performance, as we have the latest hardware and software technologies which help applications to run smoothly and efficiently.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get your custom email address */}
            <section>
                <div className='relative w-full overflow-hidden'>
                    <div className="lg:container mx-auto sm:py-[80px] max-sm:mb-[20px]">
                        <div className='relative w-full h-full flex flex-col justify-center z-10 px-[15px] py-[15px]'>
                            <div className='sm:w-1/2'>
                                <h2 className='text-center max-w-[570px] mx-auto'>Get your custom email address: Build trust in your business.</h2>
                                <p className='text-center max-w-[570px] mx-auto mb-[30px]'>Send the right message to your customers and prospects by using a proafessional email address like yourname@example.com. Adding custom email addresses to your domain is easy and adds credibility to your company. Check out our email options.</p>
                                <div className='text-center max-w-[570px] mx-auto'>
                                    <Link onClick={windowScroll} className='md:text-[18px] text-[16px] bg-[#00A51A] text-[#fff] hover:bg-[#000]/[85%] hover:text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/contact-us'>Register Now <FaArrowRightLong className='ml-[10px]' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={ImageIcons.girlwithphonepic} alt='girl with phone pic' className='sm:absolute sm:top-[50%] sm:left-[50%] sm:translate-y-[-50%] sm:translate-x-[-50%] w-full h-full object-center object-cover' />
                </div>
            </section>

        </Layout>
    )
}

export default OnlineBusinessSolutionsPackage
const domainData = [
    {
        title: ".com",
        value: ".com"
    },
    {
        title: ".in",
        value: ".in"
    },
    {
        title: ".blog",
        value: ".blog"
    },
    {
        title: ".biz",
        value: ".biz"
    },
    {
        title: ".ca",
        value: ".ca"
    },
    {
        title: ".club",
        value: ".club"
    }
]
