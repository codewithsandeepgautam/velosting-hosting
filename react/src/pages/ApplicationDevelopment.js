import React, { useState, useRef } from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import OurVentures from '../components/shared/OurVentures';
import RegisterForm from '../components/shared/RegisterForm';
const ApplicationDevelopment = () => {
    const sectionRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(0);
    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative md:pt-[30px] md:pb-[35px] max-md:pt-[50px] max-md:pb-[30px] bg-[#00A51A]/[5%]" >
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[15px] items-center'>
                        <div className='md:text-left max-md:text-center'>
                            <h4 className='text-[#00A51A] font-semibold max-md:mb-[10px]'>Most Trusted Web & App Development</h4>
                            <h1 className='font-bold text-[#000] md:mb-[15px] max-md:mb-[10px]'>Web & App Development</h1>
                            <p className='text-[#000] md:mb-[30px] max-md:mb-[20px] md:text-[18px] max-md:text-[17px]'>Web app development is the service of designing, building and deploying applications which can be accessed by the users through the web browser.</p>
                            <button onClick={scrollToSection} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>Get Started<FaArrowRightLong className='ml-[10px]' /></button>
                        </div>
                        <div>
                            <img src={ImageIcons.appdevelpmentpic} alt='Web & App Development' className='w-full md:max-w-[470px] max-md:max-w-[400px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Web App Development Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px] items-center'>
                        <div className='max-md:order-2'>
                            <img src={ImageIcons.webapppictwo} alt='Web App' className='w-full md:max-w-[600px] max-md:max-w-[450px] mx-auto' />
                        </div>
                        <div className='max-md:order-1'>
                            <h2>Web App Development</h2>
                            <p className='md:mb-[30px] max-md:mb-[20px]'>Web app development is the service of designing, building and deploying applications which can be accessed by the users through the web browser. The functionality and complexity of these applications vary greatly, catering to a broad array of purposes from simple websites to advanced solutions.</p>
                            <h4 className='text-[20px]'>Enhance Your Digital Presence With Velosting WebApp Solutions</h4>
                            <ul className='block lg:columns-2 lg:gap-x-[30px] pt-[5px] pl-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Custom-Built Solutions
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Scalable Architecture
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Cutting-Edge Technology
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />User-Centric Design
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Robust Security
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Cross-Platform Compatibility
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Rapid Development
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Comprehensive Support
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What are the Features of Our Web App Development Services? */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div>
                        <h2 className='text-center'>What are the Features of Our Web App Development Services?</h2>
                        <p className='text-center md:mb-[40px] max-md:mb-[30px]'>There are many features of WebApp development services:</p>
                    </div>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 xl:gap-[15px] max-xl:gap-[10px]'>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.customappicon} alt='Custom Application Development' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Custom Application Development</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>WebApp Development services offer you customised solutions in order to help you meet the unique needs of your business.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.responsivedesignicon} alt='Responsive Design' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Responsive Design</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Our applications are designed in a way so that these can work smoothly on different devices and sizes of the screen.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.backenddevicon} alt='Backend Development' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Backend Development</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>WebApp development services provide users with robust and secure server-side development for the handling of business logics.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.apiintegration} alt='API Integration' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>API Integration</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>We offer integration with third-party services so that functionality and connectivity can be enhanced.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.securitymeasuresicon} alt='Security Measures' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Security Measures</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>We ensure providing advanced security protocols so that data can be protected and security of applications can be ensured.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.cloudintegrationicon} alt='Cloud Integration' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Cloud Integration</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>It involves usage of cloud services for the purpose of storage, computing power, and scalability.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.databaseicon} alt='Database Management' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Database Management</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>In these services, data storage, retrieval and management are handled efficiently with the help of different database technologies.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.qaiconpic} alt='Testing and Quality Assurance' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Testing and Quality Assurance</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Thorough testing is done in order to ensure that applications are bug free and can perform efficiently in various conditions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Start Make An Online Enquiry Form */}
            <section ref={sectionRef} className="md:py-[70px] max-md:py-[50px] after:bg-[#00A51A] relative bg-no-repeat bg-cover bg-center after:content-[''] after:absolute after:-z-10 after:left-0 after:right-0 after:top-0 after:w-full after:h-full" style={{ backgroundImage: `url(${ImageIcons.subscribebgmin})` }}>
                <RegisterForm />
            </section>
            {/* End Make An Online Enquiry Form */}

            {/* Why Choose Velosting WebApp Development Services Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div>
                        <h2 className='text-center'>Why Choose Velosting <span className='text-[#00A51A]'>WebApp Development Services?</span></h2>
                        <p className='text-center md:mb-[40px] max-md:mb-[30px]'>We offer our customers with a plethora of services and features which are mentioned below:</p>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.backendwebdevser} alt='Backend Web Application Development Services' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Backend Web Application Development Services</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>When Web app development services are provided, the focus of our back-end developers is always on managing complex business logics. Custom rules are being defined by us in order to regulate the exchange of information between the database and user interface along with developing new methods of streamlining the data processing.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.dedicatedicon} alt='Progressive Web App Development Services' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Progressive Web App Development Services</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>In order to provide native-like experience to the end-user, the power of PWA technology is being embraced by us. With our services, we help increase the engagement of the customers along with growing sales and improving the visibility of the brand.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.frontendwebdeser} alt='Frontend Web Application Development Services?' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Frontend Web Application Development Services?</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>While offering web application development services, fast-loading user interfaces are created by our team so that complex front-end challenges can be solved. Applications which are easy to interact with are also created by us so that customers can be retained by the clients.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.colocationservices} alt='SaaS Development Services' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>SaaS Development Services</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Companies are provided with a Software-as-a-service model with our high quality development services. Secure SaaS tools which are configurable are built by us so that businesses can save money which they would have spent on costly hardwares.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.wpappdevser} alt='WordPress Web Application Development Services' className='w-full max-w-[60px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>WordPress Web Application Development Services</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Building products and services with any complexity are supplied by our WordPress web app development services. Moreover, existing solutions can also be expanded by developing and integrating either plugins or third-party tools.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.globaldomainreach} alt='Web portal Development Services' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Web portal Development Services</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>With us, companies can work upon maximising their web presence with the help of interactive web portals.</p>
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
        question: "What are the benefits of web apps over native ones?",
        answer: "Web apps can be used on any of the devices with the help of a web browser. Their development cost is also very less and these can be updated easily without any need of downloading new versions.",
    },
    {
        question: "What are the advantages of Web Apps?",
        answer: "There are many advantages of web apps like-",
        faqList: ["Cross-platform compatibility", "Easy Maintenance", "Seamless Updates", "Cost-Effectiveness",]
    },
    {
        question: "Are Web Apps secure?",
        answer: "Yes, various security methods are being followed such as-",
        faqList: ["Coding practices", "Regular security audits", "Encryption Protocols",]
    },
    {
        question: "Do Web Apps work online?",
        answer: "Yes, offline capabilities can be turned on with the help of Progressive Web Apps."
    },
    {
        question: "What is the time required to develop a web app?",
        answer: "The time required totally depends upon the complexity and scope of the project. It can take weeks or sometimes months also."
    }
];

export default ApplicationDevelopment
