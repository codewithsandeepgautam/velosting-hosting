import React, { useState, useRef } from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import OurVentures from '../components/shared/OurVentures';
import RegisterForm from '../components/shared/RegisterForm';

const DigitalMarketingSeo = () => {
    const sectionRef = useRef(null);
    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    };
    const [openIndex, setOpenIndex] = useState(0);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[#00A51A]/[5%]" >
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div className='md:text-left text-center'>
                            <h4 className='text-[#00A51A] font-semibold max-md:mb-[10px]'>Most Trusted Digital Marketing & SEO</h4>
                            <h1 className='font-bold text-[#000] md:mb-[20px] max-md:mb-[15px]'>Digital Marketing & SEO</h1>
                            <p className='text-[#000] md:text-[18px] max-md:text-[17px] md:mb-[20px] max-md:mb-[15px]'>Empower your brand with Velosting Digital Marketing Solutions</p>
                            <ul className='block lg:columns-2 lg:gap-x-[30px] max-md:max-w-[335px] max-md:mx-auto pl-[30px] md:mb-[30px] max-md:mb-[20px]'>
                                <li className='max-md:text-left relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Analytics and Reporting
                                </li>
                                <li className='max-md:text-left relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Targeted PPC Campaigns
                                </li>
                                <li className='max-md:text-left relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Engaging Content Creation
                                </li>
                                <li className='max-md:text-left relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Data-Driven SEO Optimisation
                                </li>
                                <li className='max-md:text-left relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Customised Social Media strategies
                                </li>
                            </ul>
                            <button onClick={scrollToSection} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>Get Started<FaArrowRightLong className='ml-[10px]' /></button>
                        </div>
                        <div>
                            <img src={ImageIcons.digitalmarketingimg} alt='Web & App Development' className='w-full md:max-w-[550px] max-md:max-w-[400px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* What Is Digital Marketing? */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[10px] items-center'>
                        <div className='max-md:order-2'>
                            <img src={ImageIcons.whdmpic} alt='What Is Digital Marketing' className='w-full md:max-w-[450px] max-md:max-w-[350px] mx-auto' />
                        </div>
                        <div className='max-md:order-1'>
                            <h2>What Is Digital Marketing?</h2>
                            <p className='mb-[15px]'>Digital marketing involves marketing campaigns which can be seen on computers, phones, tablets etc. It is a type of marketing strategy which is done with the help of videos, SEO, display ads and social media. It is totally different from traditional marketing techniques in a way that instead of marketing in newspapers, magazines etc, it is done online.</p>
                            <p>With the help of digital marketing services, all the businesses, be it a startup or an established enterprise, get an opportunity to promote and market their brands round the clock as these services are provided at very affordable prices. Digital marketing providers like Velosting can help you expand your business and take it to new heights.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Velosting Digital Marketing Services? */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div>
                        <h2 className='text-center'>Why Choose Velosting Digital Marketing Services?</h2>
                        <p className='text-center md:mb-[40px] max-md:mb-[30px]'>We offer our users with multiple services which provide multiple advantages</p>
                    </div>
                    <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 xl:gap-[15px] max-xl:gap-[10px]'>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.dmsicon} alt='Data-Driven Digital Marketing Services' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Data-Driven Digital Marketing Services</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>For us, research and data are the important parts, so we believe in delivering the perfect message at the right time with the help of our services. The strength and weakness of your brand is analysed by us completely, so that we can provide actionable insights.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.industryicon} alt='Industry Experts' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Industry Experts</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>At Velosting, we have a professional team of experts, which ensures keeping close tabs on the recent trends in the market and innovations, so that search engine guidelines can be met by our all the campaigns.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.cdmficon} alt='Custom Digital Marketing Framework' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Custom Digital Marketing Framework</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>We take an all round approach to digital marketing, where current marketing strategies and digital presence of the company are being reviewed. We aim to create a structured marketing framework so that all your digital touchpoints can be optimised.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.omnichannelicon} alt='Omnichannel Personalisation' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Omnichannel Personalisation</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>We believe in analysing and assessing the needs of audiences in order to develop tailored strategies so that more business can be driven. It also helps in increasing the revenue and improving the loyalty of the brand.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.cmeicon} alt='Campaign Monitoring and Evaluation' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Campaign Monitoring and Evaluation</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>We also believe in establishing and monitoring campaign metrics, so that the success of your strategy can be determined. With the help of Google analytics, your online marketing tactics are being adjusted and your audience approach is also improved so that you can enter a strong financial position.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Start Make An Online Enquiry Form */}
            <section ref={sectionRef} className="md:py-[70px] max-md:py-[50px] after:bg-[#00A51A] relative bg-no-repeat bg-cover bg-center after:content-[''] after:absolute after:-z-10 after:left-0 after:right-0 after:top-0 after:w-full after:h-full" style={{ backgroundImage: `url(${ImageIcons.subscribebgmin})` }}>
               <RegisterForm/>
            </section>
            {/* End Make An Online Enquiry Form */}

            {/* What are the different types of Digital Marketing? */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div>
                        <h2 className='text-center'>What are the different types of <span className='text-[#00A51A]'>Digital Marketing?</span></h2>
                        <p className='text-center md:mb-[40px] max-md:mb-[30px]'>We offer our customers with a plethora of services and features which are mentioned below:</p>
                    </div>
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seoiconone} alt='Search Engine Optimisation' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Search Engine Optimisation</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>SEO is a kind of marketing tool which helps make the web pages attractive. In this type of marketing service, the factors which help reach the high ranking on SERP also called as Search Engine Result Pages are researched and weighed. Some of the factors which are considered to be important while improving and optimising a web page are:</p>
                            <ul className='block lg:columns-2 lg:gap-x-[30px] pl-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Content quality
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />User Engagement levels
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Mobile compatibility
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Inbound links’ number and quality
                                </li>
                            </ul>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seoicontwo} alt='Content Marketing' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Content Marketing</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Another important type of digital marketing is content marketing, as its quality is the key component of improving the ranking of the page. The main working of content marketing is to attract leads which can be converted into the customers. Content marketing is done with the help of:</p>
                            <ul className='block lg:columns-2 lg:gap-x-[30px] pl-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Blogs
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Newsletters
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Video and audio transcripts
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Infographics
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />E-books
                                </li>
                            </ul>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seoiconthree} alt='Social Media Marketing' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Social Media Marketing</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Social media marketing is the method of bringing customers with the help of brand awareness through online discussions, where the services, features and benefits of the brand can be highlighted. As almost everyone nowaday uses social media platforms, social media ads can prove to be very beneficial. The platforms for social media marketing are:</p>
                            <ul className='block lg:columns-2 lg:gap-x-[30px] pl-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Facebook
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Twitter
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Instagram
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />LinkedIn
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Youtube
                                </li>
                            </ul>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seoiconfour} alt='Pay-per-click Marketing' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Pay-per-click Marketing</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>It is a kind of digital marketing service through which you have to pay a fee every time someone clicks on your digital advertisement. You need not pay a particular amount to run advertisements on various social media platforms, as you just need to pay for those ads with which individuals are interacting. There are number of factors which are being considered such as:</p>
                            <ul className='block lg:columns-2 lg:gap-x-[30px] pl-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Ad quality
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Keyword relevance
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Quality of Landing page
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Bid amount
                                </li>
                            </ul>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seoiconfive} alt='Affiliate Marketing' className='w-full max-w-[60px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Affiliate Marketing</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>In affiliate marketing, people can make money by following certain tactics such as by promoting someone else’s business. You can either work as a promoter or the company which works with the promoters. In this type of marketing, revenue sharing model is being followed, as commission is provided whenever someone buys the item that you are promoting.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seoiconsix} alt='Native Advertising' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Native Advertising</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>It is a kind of advertising which matches the form of the platform on which it is shown. They just have to blend in with the content so that they can look less intrusive. With them, the content looks natural be it a video, article or anything.</p>
                        </div>

                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seoiconseven} alt='Influencer Marketing' className='w-full max-w-[60px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Influencer Marketing</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>In this, one has to work with an influencer who has a larger following. One can be a celebrity, a content creator or an expert in the industry. These influencers endorse your product to their followers on some social media platforms. It proves to be perfect for B2B and B2C companies which aim to reach a large audience.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seoiconeight} alt='Marketing Automation' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Marketing Automation</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>In this, a software is being used in order to power the campaigns of digital marketing along with enhancing the efficiency of advertising. With this, you become able to create a strategy for your digital marketing efforts, thereby avoiding time-consuming processes.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seoiconnine} alt='Email Marketing' className='w-full max-w-[60px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Email Marketing</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>In this, you need to send a promotional message with the hope of getting a click form the prospect. The execution of it is very complicated, as at first, you have to make sure that your emails are wanted.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seoicoten} alt='Mobile Marketing' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Mobile Marketing</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>With mobile marketing, you become able to engage with your target audience through SMS or MMS, mobile app alerts and much more.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Venture’s */}
            <OurVentures />

            {/* Frequently Asked Questions Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='flex lg:gap-10 max-lg:gap-5 max-md:flex-col'>
                        <div className='md:w-1/2 max-md:mb-[30px]'>
                            <h2 className='max-w-[390px]'>Got questions? Well, we've got answers.</h2>
                            <p className='max-w-[640px] mb-[30px]'>From 24/7 support that acts as your extended team to incredibly fast website performance</p>
                            <div className='w-full'>
                                <img src={ImageIcons.faqpic} alt='Faq Pic' className='w-full max-w-[400px]' />
                            </div>
                        </div>
                        <div className='md:w-1/2 max-md:w-full'>
                            <div>
                                {faqData.map((item, i) => (
                                    <div key={i} className='bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.25)_0%,_rgba(0,_165,_26,_0.1)_100%);] mb-[15px] rounded-md duration-500 overflow-hidden border-b-[1px] border-b-[#01A51A]/[30%]'>
                                        <button onClick={() => toggleAccordion(i)} className='lg:px-[25px] px-[15px] lg:py-[20px] py-[16px] w-full text-left cursor-pointer'>
                                            <div className='relative pr-[22px] flex justify-between items-start'>
                                                <h5 className={`md:text-[19px] max-md:text-[17px] mb-0 font-medium ${openIndex === i ? "text-[#00A51A]" : ""}`}>{item.question}</h5>
                                                {openIndex === i ? (
                                                    <FaChevronUp size="15" className='absolute right-0 text-[#00A51A]' />
                                                ) : (
                                                    <FaChevronDown size="15" className='absolute right-0' />
                                                )}
                                            </div>
                                        </button>
                                        <div className={`duration-300 faq-content ${openIndex === i ? "opacity-100 mt-[2px] pb-[20px]" : "opacity-0 mt-0 pb-0 max-h-[0px]"} lg:px-[25px] px-[15px]`}>
                                            <p dangerouslySetInnerHTML={{ __html: item.answer }} className='last:mb-0 md:text-[16px] max-md:text-[15px]' />
                                            {item.faqList && <ul className='list-disc'>
                                                {item.faqList.map((itemList, i) => (
                                                    <li className='mb-[5px] text-[15px] relative ml-[25px]'>
                                                        {itemList}</li>
                                                ))}
                                            </ul>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
const faqData = [
    {
        question: "What is Digital Marketing?",
        answer: "In digital marketing, digital channels and platforms are being used in order to endorse the products and services so that potential customers can be reached upon."
    },
    {
        question: "What is the working of a digital marketer?",
        answer: "A digital marketer develops and deploys online marketing strategies by connecting with online audiences, so that your brand can engage with customers."
    },
    {
        question: "What would be the benefit of Digital Marketing to my business?",
        answer: "As having an online business representation is important in this digital world, however, if marketing is not done effectively, there would not be any benefit of your online presence, but digital marketing strategies help you expand your online reach and bring more customers."
    },
    {
        question: "Is Digital Marketing more expensive than traditional marketing?",
        answer: "No, digital marketing is cost-effective, as only potential audiences are being targeted."
    },
    {
        question: "How can a successful Digital Marketing company be identified?",
        answer: "The company which completely assesses you needs both current and future. Rather than promising to boost your company immediately, it would identify the loopholes in the strategies and work with you in order to establish outcomes."
    }
];

export default DigitalMarketingSeo
