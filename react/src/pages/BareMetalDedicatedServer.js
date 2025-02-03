import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import OurVentures from '../components/shared/OurVentures';
import CtaRegister from '../components/shared/CtaRegister';
import { windowScroll } from '../utils/windowScroll';


const BareMetalDedicatedServer = () => {
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
                        <div className='md:text-left max-md:text-center'>
                            <h4 className='text-[#00A51A] font-semibold max-md:mb-[10px]'>Bare Metal Server</h4>
                            <h1 className='max-w-[535px] font-bold text-[#000] md:mb-[15px] max-md:mb-[10px]'>Dedicated Bare Metal Server</h1>
                            <p className='text-[#000] md:text-[18px] max-md:text-[17px] md:mb-[30px] max-md:mb-[20px]'>Bare metal servers are the cloud services in which a physical machine is being rented by the user from a bare metal server provider and this machine is not being shared with others.</p>
                            <Link onClick={windowScroll} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/contact-us'>Get Started<FaArrowRightLong className='ml-[10px]' /></Link>
                        </div>
                        <div>
                            <img src={ImageIcons.baremetalserver} alt='Bare Metal Server' className='w-full md:max-w-[500px] max-md:max-w-[400px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bare Metal Servers Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div className='max-md:order-2'>
                            <img src={ImageIcons.baremetalone} alt='plesk up' className='w-full md:max-w-[700px] max-md:max-w-[450px] mx-auto' />
                        </div>
                        <div className='max-md:order-1'>
                            <h2>Bare Metal Servers</h2>
                            <p className='mb-[20px]'>Bare metal servers are a kind of servers which offer impeccable performance and security. These servers provide many of the benefits to the users like raw processing power, no hypervisor overhead and dedicated resources.</p>
                            <h4 className='text-[20px]'>Achieve Peak Performance with Velosting Bare Metal Servers</h4>
                            <ul className='block lg:columns-2 lg:gap-x-[30px] pt-[5px] pl-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Dedicated Hardware
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Optimal Performance
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Scalable Solutions
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Round the clock Expert Support
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Network Redundancy
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Cost-Efficiency
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Full root access
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />High Customizability
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Advanced Security
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Rapid Deployment
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Data Integrity
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Enhanced Flexibility
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />IPM/KVM access
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Redundant power supply
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What are some of the features of Bare Metal Servers Section */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center'>
                        <h2>What are some of the features of Bare Metal Servers?</h2>
                        <p className='text-center md:mb-[40px] max-md:mb-[30px]'>Bare metal servers provide many benefits to the users which are mentioned below</p>
                    </div>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 xl:gap-[15px] max-xl:gap-[10px]'>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxsix} alt='Optimised Performance' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Optimised Performance</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>With bare metal servers, you are provided with direct access to the resources without any interruptions and without any hypervisor layer even if the task is resource intensive.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxfive} alt='Customisation and Control' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Customisation and Control</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>You are provided with complete control over the configuration of the bare metal servers such as choosing the operating system or hardware specifications.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxthree} alt='Dedicated Resources' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Dedicated Resources</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Users do not need to share the resources with others, as these are being dedicated to only one user.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxfour} alt='Reduced Overhead' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Reduced Overhead</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>The operation of bare metal servers is very efficient, as it offers impeccable performance without any overhead of virtualisation.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.securityfeaturesicon} alt='Enhanced Security' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Enhanced Security</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>As the data is being physically isolated, it remains safe from breaches and other attacks.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.costeffectiveness} alt='Predictable Costs' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Predictable Costs</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>They come with a fixed cost which does not fluctuate according to the usage.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxeleven} alt='Compliance' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Compliance</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>With bare metal servers, you can easily achieve the level of data protection and this proves to be beneficial for those organisations which operate in highly regulated industries.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CtaRegister/>

            {/* What are Bare Metal Servers? Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px] items-center'>
                        <div>
                            <h2>What are Bare Metal Servers?</h2>
                            <p>Bare metal servers are the cloud services in which a physical machine is being rented by the user from a bare metal server provider and this machine is not being shared with others. In these, users are provided with complete control over the infrastructure of their server and this further provides them the facility of choosing their own operating system and eliminating the noisy neighbourhoods.</p>
                        </div>
                        <div>
                            <img src={ImageIcons.baremetaldown} alt='Bare Metal Down' className='w-full md:max-w-[500px] max-md:max-w-[350px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='mb-[30px]'>Why Choose Velosting <span className='text-[#00A51A]'>Bare Metal Servers?</span></h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxthree} alt='Unparalleled Performance' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Unparalleled Performance</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>With us, you will experience impeccable speed and reliability, as our bare metal servers have been designed to provide the top most levels of performance especially for the challenging workloads. With us, your applications will always run seamlessly and efficiently.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.customizabilityicon} alt='Custom Configuration' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Custom Configuration</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Velosting provides its users with customisable solutions, allowing them to choose the processor and memory so that they can select the storage options. You will always have full control over the server configuration through which you can optimise your unique needs.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxfive} alt='Top-Tier Security' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Top-Tier Security</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We offer state-of-the-art security features in order to protect your data. As your data is isolated, it reduces the risk of any threats related to the security. Other than this, firewalls, intrusion detection systems and DDoS protection are also included.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.scalabilityiconone} alt='Scalability' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Scalability</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>As we offer scalable solutions, you are allowed to scale your resources according to your changing needs.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.sevensupport} alt='Dedicated Support' className='w-full max-w-[60px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Dedicated Support</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We, at Velosting, offer our users with round the clock expert support so that you can be assisted with any of the technical issues you face.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.acceleratedmachine} alt='High Availability' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>High Availability</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We assure maximum uptime and reliability with our robust infrastructure and redundant systems.</p>
                        </div>

                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.costeffectiveness} alt='Cost-Effective Solutions' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Cost-Effective Solutions</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We offer affordable solutions without any compromises with the quality, as we believe in offering excellent value for your money.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.managedservices} alt='Enhanced Control' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Enhanced Control</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We assure maximum uptime and reliability with our robust infrastructure and redundant systems.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Venture’s */}
            <OurVentures/>

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
                                <p dangerouslySetInnerHTML={{ __html: item.answer }} className='last:mb-0 mb-[15px] md:text-[16px] max-md:text-[15px]' />
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
      question: "How do dedicated bare metal servers differ from virtual servers?",
      answer: "In dedicated bare metal servers, users are provided with dedicated resources, however sharing of resources among multiple users is done in virtual servers.",
    },
    {
      question: "Who should choose bare metal servers?",
      answer: "Businesses which require high-performance computing, large-scale databases and applications with heavy workload, should go for bare metal server services.",
    },
    {
      question: "Is it possible to customise bare metal server configuration?",
      answer: "Yes, you are provided with fully customisable solutions where you can choose CPU, RAM, storage and other hardware components.",
    },
    {
      question: "Are bare metal servers secure?",
      answer: "Yes, they are completely secure because they are physically isolated from other customer servers. Moreover, we provide network and firewall security also.",
    },
    {
      question: "What support do you provide?",
      answer: "We provide round the clock expert support to our customers, where they can talk about the issues they are facing and our team ensures immediate solutions.",
    }
  ];

export default BareMetalDedicatedServer
