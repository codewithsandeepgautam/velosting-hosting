import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import OurVentures from '../components/shared/OurVentures';
import RegisterForm from '../components/shared/RegisterForm';
const ColocationServices = () => {
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
                            <h4 className='text-[#00A51A] font-semibold mb-[5px]'>Colocation Services</h4>
                            <h1 className='font-bold text-[#000] md:mb-[20px] max-md:mb-[15px]'>Colocation Services Providers</h1>
                            <h4 className='text-[#000] md:text-[20px] text-[18px] mb-[15px]'>Get a chance to empower your business with our secure and reliable colocation data centre solutions.</h4>
                            <p className='text-[#000] md:mb-[30px] max-md:mb-[20px]'>Experience cutting-edge data centre services which have been designed to meet the growing needs of modern businesses. Trust our robust infrastructure and advanced security measures to make your IT operations run seamlessly.</p>
                            <button onClick={scrollToSection} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>Get Started<FaArrowRightLong className='ml-[10px]'/></button>
                        </div>
                        <div>
                            <img src={ImageIcons.colocationserpic} alt='Colocation Services' className='w-full md:max-w-[450px] max-md:max-w-[400px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Colocation Services */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[15px] items-center'>
                        <div className='max-md:order-2'>
                            <img src={ImageIcons.colocationservicepic} alt='Colocation Services' className='w-full md:max-w-[550px] max-md:max-w-[450px] mx-auto' />
                        </div>
                        <div className='max-md:order-1'>
                            <h2>Data Center Colocation Services</h2>
                            <p className='mb-[15px]'>Data center colocation services are the services which allow you to rent a space for housing your own infrastructure. These services eliminate the need for you to build and manage your own facility, thereby resulting in saving costs associated.</p>
                            <p className='mb-[15px]'>At velosting, we offer Data center colocation services which have especially been designed to meet the unique and growing needs of the businesses. We ensure complete security, reliability, and scalability of your IT infrastructure at our data colocation center, as it plays a paramount role for every business. With our advanced facilities and comprehensive services, you can stay focused towards the core activities of your business.</p>
                            <p>The landscape of IT infrastructure is evolving rapidly and businesses are looking for some of the ways in order to optimise their operation while simultaneously taking care of security, reliability and scalability. In this race, data center server colocation services have gained a lot of popularity.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div>
                        <h2 className='text-center'>Our Services</h2>
                        <p className='text-center max-w-[800px] mx-auto md:mb-[40px] max-md:mb-[30px]'>At Velosting, we provide our users with a wide range of services which have especially been designed to meet the unique needs of your business. We aim to provide you with secure, reliable and scalable solutions for your IT infrastructure.</p>
                    </div>
                    <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 xl:gap-[15px] max-xl:gap-[10px]'>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.colocationiconone} alt='Data Centre Colocation' className='w-full max-w-[40px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Data Centre Colocation</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>We offer businesses secure and reliable space, so that they can accommodate their IT infrastructure within our cutting-edge data centres. Our Colocation Services Include</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.colocationicontwo} alt='Data Centre Smart Racks' className='w-full max-w-[40px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Data Centre Smart Racks</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>At Velosting, we offer you a portion of resilient, secure and ready-to-onboard white space according to your needs. We also provide users with personalised smart racks with biometric or password based access. Besides this, our racks are equipped with fire suppression, cooling systems, and other sensors.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.colocationiconthree} alt='Data Centre Power Shells' className='w-full max-w-[40px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Data Centre Power Shells</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>We provide ready-to-move -in buildings with sustainable practices, providing you with the flexibility of mechanical, electrical and automation setup.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.colocationiconfour} alt='Physical Migration' className='w-full max-w-[40px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Physical Migration</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>At velosting, we offer our customer comprehensive physical migration services so that you can relocate your equipment seamlessly in our data centres.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.colocationiconfive} alt='Cross Connects' className='w-full max-w-[40px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Cross Connects</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>We offer secure and high-speed connections between your equipment and other network providers with our cross-connect services at our data centre.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.colocationiconsix} alt='Smart Hands' className='w-full max-w-[40px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Smart Hands</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Our Smart Hands services provide technical support on your demand for your different tasks like installation, configuration etc.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.colocationiconseven} alt='Secure Cage With Multi Factor Authentication' className='w-full max-w-[35px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Secure Cage With Multi Factor Authentication</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Those businesses which require extra security, we offer them cages which are equipped with multi factor authentication like biometrics and password based access.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.colocationiconeight} alt='Secure Office Space' className='w-full max-w-[40px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Secure Office Space</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>At velosting, we offer secure office space which is perfect for those businesses which need a physical presence close to their own infrastructure.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.colocationiconnine} alt='Value-Added Services' className='w-full max-w-[40px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Value-Added Services</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Our value-added services are designed to improve your IT operations and these include managed colocation, consulting and backup and recovery services.</p>
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

            {/* Our Data Center's Located */}
            <section className="md:pt-[70px] max-md:pt-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div>
                        <h2 className='text-center'>Where Are Our <span className='text-[#00A51A]'>Data Center's Located?</span></h2>
                        <p className='text-center max-w-[900px] mx-auto md:mb-[40px] max-md:mb-[30px]'>As the location of data centres is always important in order to ensure optimal performance, reliability and security for your infrastructure, our data centres are located strategically at multifarious locations so that customers can be provided with impeccable services.</p>
                    </div>
                    <div className='max-w-[992px] mx-auto shadow-[0_0_10px_#e5e5e5] rounded-[10px]'>
                        <div className='flex lg:gap-10 max-lg:gap-5 max-md:flex-col'>
                            <div className='md:w-1/2'>
                                <img src={ImageIcons.indiamap} alt='location img' className='w-full md:max-w-[400px] max-md:max-w-[330px] mx-auto' />
                            </div>
                            <div className='md:w-1/2 max-md:w-full md:py-[60px] max-md:pt-[10px] max-md:pb-[30px] pr-[15px]'>
                                <div className='h-[270px] overflow-auto scrollbar-sm-w pr-[10px] max-md:pl-[15px]'>
                                    {datacenterlinks.map((link, i) => (
                                        <div key={i} className="mb-[15px]">
                                            <Link className="flex items-center gap-[10px]" to={link.handle}>
                                                <div className="flex items-center rounded-full justify-center min-w-[25px] text-center mb-0">
                                                    <img src={ImageIcons.locationicon} alt="location icon" class="w-full max-w-[25px] mx-auto" />
                                                </div>
                                                <h4 class="text-[20px] mb-0">{link.title}</h4>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Velosting for Colocation Services? */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div>
                        <h2 className='text-center'>Why Choose Velosting for <span className='text-[#00A51A]'>Colocation Services?</span></h2>
                        <p className='text-center max-w-[992px] mx-auto md:mb-[40px] max-md:mb-[30px]'>It is important to select the right data colocation centre services provider for the purpose of ensuring success and efficiency of all of your IT operations. Velosting provides a comprehensive range of benefits, making ourselves a perfect partner for all your collocation needs. Below given are some compelling reasons behind why you need to choose us.</p>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.infrastructurestability} alt='Cutting-Edge Facilities' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Cutting-Edge Facilities</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Our data centre server colocation services which are equipped with advanced technology, ensure providing optimal conditions for your IT infrastructure. We leverage efficient cooling systems and redundant power supplies in order to make sure that your infrastructure runs seamlessly, efficiently and reliably.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.securityfeaturesicon} alt='Robust Security' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Robust Security</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Velosting, the colocation service providers give priority to your security and our data centres are being safeguarded by multiple layers of security including both physical and digital. We ensure providing features like round the clock surveillance, biometric controls and advanced fire detection system, so that your data always remains safeguarded from any of the cyber or any other threats.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.sevensupport} alt='High Availability and Uptime' className='w-full max-w-[40px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>High Availability and Uptime</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Our multiple redundant power sources and backup generators guarantee high availability and minimal downtime. Our infrastructure at data centres has been designed to ensure that your operations always run seamlessly even during the times of local outages.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seoiconone} alt='Strategic Locations' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Strategic Locations</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Our colocation data centre services are located at strategic locations in Mohali, Mumbai and Noida, ensuring excellent connectivity. Our services ensure low latency, improved performance and better compliance with all the rules and regulations.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.scalabilityicon} alt='Scalability and Flexibility' className='w-full max-w-[40px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Scalability and Flexibility</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>As the needs of the businesses keep on changing, we offer our customers with scalable services, wherein they are allowed to get resources and deallocate them. If you need extra space, power or anything, our services can be customised according to your evolving needs.</p>
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

const datacenterlinks = [
    {
        title: "Mumbai India",
        handle: "/mumbai-data-center"
    },
    {
        title: "Delhi Noida",
        handle: "/noida-data-center"
    },
    {
        title: "Ambala Haryana",
        handle: "/ambala-data-center"
    },
    {
        title: "Mohali India",
        handle: "/mohali-data-center"
    },
    {
        title: "Bathinda Punjab",
        handle: "/bathinda-data-center"
    },
    {
        title: "Karnal Haryana",
        handle: "/karnal-data-center"
    },
    {
        title: "Yamuna Nagar",
        handle: "/yamuna-nagar-data-center"
    },
    {
        title: "Moga Punjab",
        handle: "/moga-data-center"
    },
    {
        title: "Barnala Punjab",
        handle: "/barnala-data-center"
    }
];


const faqData = [
    {
        question: "Is it possible to take a tour of the data centre before choosing your colocation services?",
        answer: "Yes, we allow our customers to visit our data centre so that they can check our advanced security measures, cooling systems and other advanced services."
    },
    {
        question: "What are the benefits of choosing colocation services over building my own data centre?",
        answer: "Colocation services provide you with multiple advantages such as",
        faqList: ["Reduced Costs", "Advanced Infrastructure", "Enhanced Security", "Scalability"]
    },
    {
        question: "What security measures are used by colocation data centres?",
        answer: "Multiple layers of security are provided by data centre colocation service providers including round the clock surveillance, biometric access control and other advanced fire detection systems."
    },
    {
        question: "Is it possible to access my infrastructure at the data centre whenever I want to?",
        answer: "Yes our services are available round the clock, allowing you to access your infrastructure at any time you want."
    },
    {
        question: "Is it possible to customise colocation services to meet my specific needs?",
        answer: "Yes, we offer customisable services and we offer flexible and scalable services along with cooling configurations."
    }
];

export default ColocationServices
