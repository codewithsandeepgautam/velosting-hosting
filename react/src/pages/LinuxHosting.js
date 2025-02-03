import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import CtaRegister from '../components/shared/CtaRegister';
import { useSelector } from 'react-redux';
import Main from '../utils/main';
import { setData } from '../store/counter/counterSlice';
import { PostRequest } from '../utils/requests';

const LinuxHosting = () => {
    const sectionRef = useRef(null);
    const [tab, setTab] = useState(0)
    const [lData, setLdata] = useState([])
    const [openIndex, setOpenIndex] = useState(0);
    const linuxData = useSelector((state) => state.planPrize.data);
    const prizesign = useSelector((state) => state.planPrize.prize);
    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    const getProductsData = async () => {
        try {
          const response = await PostRequest(`${process.env.REACT_APP_URL}/products`);
          setLdata("ldata<<",response);
        } catch (error) {
          console.error('Error fetching data from API:', error);
        }
      };
      useEffect(() => {
        getProductsData();
        // eslint-disable-next-line 
      }, []);
    const updateToggle = (id) => {
        setTab(id)
    }
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const productData = linuxData.filter((product) => {
        return product?.products?.product.some(p => [17, 18, 19, 20].includes(p?.pid));
    })
    console.log("ldata<<",lData);
    return (
        <Layout>
            <Main />
            {/* Hero Section */}
            <section className="relative md:pt-[50px] md:pb-[40px] max-md:py-[50px] bg-[#00A51A]/[5%]" >
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-[30px] items-center'>
                        <div className='md:text-left text-center'>
                            <h4 className='text-[#00A51A] font-semibold max-md:mb-[10px]'>Most Trusted Linux Web Hosting</h4>
                            <h1 className='font-bold text-[#000] md:mb-[20px] max-md:mb-[15px]'>Linux Shared Hosting for Online Excellence</h1>
                            <p className='text-[#000] md:mb-[30px] max-md:mb-[20px] md:text-[18px] text-[17px]'>Get the power and reliability you need with high-speed Linux web servers. A2 Hosting offers CloudLinux on our Managed VPS and Dedicated hosting plans and AlmaLinux, Debian, and Ubuntu on our Unmanaged VPS plans.</p>
                            <button onClick={scrollToSection} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>View Plans<FaArrowRightLong className='ml-[10px]' /></button>
                        </div>
                        <div>
                            <img src={ImageIcons.vpslinuxcadre} alt='vps linux cadre' className='w-full md:max-w-[600px] max-md:max-w-[450px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
            {/* Simple and Transparent Pricing Section */}
            <section ref={sectionRef} className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[690px] mx-auto'>
                        <h2>Choose Your <span className='text-[#00A51A]'>Simple and Transparent</span> Pricing</h2>
                        <p className='md:mb-[35px] max-md:mb-[20px]'>Check out our new range of great value web hosting plans with dozens of new features.</p>
                    </div>
                    <div className="mb-4">
                        <ul className="flex flex-wrap gap-[10px] max-w-[600px] mx-auto justify-center lg:shadow-[0px_8px_25px_rgb(0_0_0_/_0.10)] rounded-full p-[10px]">
                            {hostingOptions.map((item, i) => (
                                <li key={i}>
                                    <button onClick={() => updateToggle(i)} className={`inline-block rounded-full px-[20px] py-[10px] bg-[#fff] text-[#00A51A] w-[185px] border border-[#00A51A] hover:text-[#fff] hover:bg-[#00A51A] ${tab === i ? 'text-white !bg-[#00A51A]' : null}`}>{item.text}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 max-md:grid-cols-1 gap-[20px] md:mt-[30px]'>
                        {productData.map((item, index) => (
                            <div key={index} className="relative bg-[#F3F7FB] rounded-[15px] pt-[24px]">
                                {item?.products?.product.map((plan, index) => (
                                    <div key={index}>
                                        <div className='flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-full p-[5px] mx-auto'>
                                            <div className='bg-[#F3F7FB] flex items-center justify-center w-[70px] h-[70px] rounded-full p-[5px]'>
                                                <img src={ImageIcons.cloudiconone} alt='Domain icon' className='w-full max-w-[45px]' />
                                            </div>
                                        </div>
                                        <div className='flex max-sm:flex-col justify-between max-sm:text-center gap-[10px] px-[15px] pt-[24px] pb-[30px]'>
                                            <div>
                                                <h4 className='text-[24px] mb-[5px]'>{plan.name}</h4>
                                                <p className='text-[#646773] text-[14px] mb-0'>Starting From</p>
                                            </div>
                                            <div>
                                                {prizesign === "INR" ? (<h2 className='text-[24px] text-[#00A51A] font-bold mb-[2px]'>₹
                                                    {
                                                        tab === index
                                                            ? plan?.pricing?.INR?.monthly
                                                            : tab === 2
                                                                ? plan?.pricing?.INR?.annually
                                                                : plan?.pricing?.INR?.semiannually
                                                    }

                                                </h2>) : (<h2 className='text-[24px] text-[#00A51A] font-bold mb-[2px]'>$
                                                    {
                                                        tab === index
                                                            ? plan?.pricing?.USD?.monthly
                                                            : tab === 2
                                                                ? plan?.pricing?.USD?.annually
                                                                : tab === 3
                                                                    ? plan?.pricing?.USD?.semiannually
                                                                    : plan?.pricing?.USD?.semiannually
                                                    }

                                                </h2>)}
                                                {prizesign === "INR" ? (<p className='text-[#646773] font-semibold text-[15px] sm:text-right line-through mb-0'>₹
                                                    {tab === 1
                                                        ? plan?.pricing?.INR?.annually
                                                        : plan?.pricing?.INR?.triennially
                                                    }
                                                </p>) : (
                                                    <p className='text-[#646773] font-semibold text-[15px] sm:text-right line-through mb-0'>$
                                                        {tab === 1
                                                            ? plan?.pricing?.USD?.annually
                                                            : plan?.pricing?.USD?.triennially
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className='border-t-[1px] border-[#00A51A]/[20%] mx-[20px]'>
                                            {/* Discount Offer Code */}
                                            <div className="relative">
                                                <span className="wdp-ribbon h-[28px] text-[14px] leading-[24px] text-[#fff] bg-[#00A51A] text-center whitespace-nowrap inline-block px-[15px] py-[2px] absolute -top-[15px] -right-[20px] before:content-[''] before:inline-block before:absolute before:top-0 before:-left-[9px] before:border-x-[8px] before:border-y-[14px] before:border-[#00A51A] before:border-l-transparent before:border-solid before:h-[28px]">Upto 40% Off</span>
                                            </div>
                                            <ul className='max-w-[300px] mx-auto md:py-[40px] max-md:py-[30px] px-[30px]'>
                                                <li className='relative text-[#000] mb-[10px]'>
                                                    <div className="ul-tag-circle"
                                                        dangerouslySetInnerHTML={{ __html: plan?.description }}
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='pb-[40px]'>
                                            <Link to={`${plan?.product_url}&currency=${prizesign === "USD" ? "4" : "1"}`}><button className="block w-full max-w-[165px] mx-auto rounded-[5px] px-[20px] py-[12px] border border-[#00A51A] font-medium text-[#00A51A] bg-transparent hover:text-[#fff] hover:bg-[#00A51A] shadow-[0px_4px_5px_rgb(0_0_0_/_0.10)]">Buy Now</button></Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className='text-center md:mt-[40px] max-md:mt-[20px]'>
                        <p className='text-center font-medium mb-0'>All prices exclude VAT at 18% GST (GST is exclude) Compare features</p>
                    </div>
                </div>
            </section>
            {/* Best cPanel Hosting Services Provider Section */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[30px] items-center'>
                        <div className='max-md:order-2'>
                            <img src={ImageIcons.linuxheroimage} alt='vps linux cadre' className='w-full md:max-w-[550px] max-md:max-w-[450px] mx-auto' />
                        </div>
                        <div className='max-md:order-1'>
                            <h2>Best <span className='text-[#00A51A]'>cPanel Hosting</span> Services Provider</h2>
                            <p className='md:mb-[30px] max-md:mb-[20px]'>In Cpanel hosting, cpanel control is used in order to simplify the management of your website. These are user-friendly services, with which you can take care of different aspects of your hosting environment like managing your domains, emails and much more.</p>
                            <h4 className='text-[20px]'>Get Seamless Hosting Services & Impeccable Features</h4>
                            <ul className='block lg:columns-2 lg:gap-x-[30px] pt-[5px] pl-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />User-friendly interface
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Hassle-free domain management
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Easy database administration
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Wide ranging file management
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Advanced security
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Round the clock monitoring
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Scalable hosting
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Reliability and high-uptime
                                </li>
                                <li className='relative text-[#000]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Affordable services
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Boosting the Security of cPanel Server Section */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[690px] mx-auto'>
                        <h2 className='md:mb-[40px] max-md:mb-[30px]'>Boosting the Security of cPanel Server - Key Practices and Advanced Tools</h2>
                    </div>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 xl:gap-[15px] max-xl:gap-[10px]'>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxone} alt='Performance icon' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Firewall Configuration Imunify360 or CSF</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>It leverages a robust firewall like configServer security and firewall in order to keep tabs on traffic along with controlling the coming and going traffic. It keeps your server safe from any of the illegal accesses.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxtwo} alt='Scalability icon' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Regular Updates</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>With regular updates, it is made sure that cPanel, its plugins and all software are being updated consistently. These also help in patching security vulnerabilities and offering users with the latest and advanced security, allowing you to keep your server safeguarded.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxthree} alt='Security icon' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Secure Hosting Environment</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>By updating your servers’ operating system regularly and disabling unnecessary services and features, you can easily reduce all the risks related to possible attacks along with improving the overall security of the servers.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxfour} alt='Security icon' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Two-Factor Authentication (2FA)</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>It adds an extra layer of security and the secondary method of verification like sending a code to your phone improves the security of the process of logging in. This also helps in maintaining the integrity of the website.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxfive} alt='Security icon' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Mod Security</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>By setting up and configuring ModSecurity, it becomes easy to safeguard apps and websites against attacks. Although it has a set of rules by default, it can easily be customised to the unique needs of your apps.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxsix} alt='Security icon' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Weekly Backup</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>With us, you will be able to backup your website regularly, as backups are stored offsite in order to ensure that data is recovered easily in cases of security breach and other issues.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxseven} alt='Security icon' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Imunify 360</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>The main working of Imunify 360 is to scan files and directories, so that infected files can be quarantined or removed.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxeight} alt='Security icon' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Disabled PHP dangerous functions</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>With cPanel hosting, some of the PHP functions can be disabled and security of the web applications can be improved. It helps in avoiding vulnerabilities of security, as these can easily be exploited by attackers.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxnine} alt='Security icon' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Third-party software</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>By establishing security policies, which involve rules, guarantee confidentiality, integrity, and availability, the risk related to attacks can easily be mitigated and data can be protected.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxten} alt='Security icon' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>SSL/TLS Certificates</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>With these protocols, data b/w the browser of the user and the server is being encrypted, and is kept private during travel. If HTTPS is used, the website is secure with SSL/TLS certificate for the purpose of secure communication.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxeleven} alt='Security icon' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Directory Permissions</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>In order to prevent files from unauthorised access, you can apply suitable permissions, as these control some of the actions like reading, creating and deleting the data. Their configuration is important for the purpose of maintaining security and integrity.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinux12} alt='Security icon' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>SSH Security</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>For secure remote access, always use SSH keys rather than passwords. We provide browser based terminal access via SSH and by changing the SSH port which is default.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CtaRegister />

            {/* Why Should You Choose Our cPanel Hosting Services Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[30px] items-center'>
                        <div>
                            <h2>Why Should You Choose Our cPanel Hosting Services?</h2>
                            <p className='md:mb-[30px] max-md:mb-[15px]'>Velosting is devoted to offer best cPanel hosting, serving different individuals. We aim to deliver a smooth focused towards growing your business, as we will handle all of the technical details.</p>
                            <h4 className='text-[20px]'>Our services offer users with multiple advantages such as:</h4>
                            <ul className='block pl-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' /><span className='font-semibold'>User-Friendly Interface:</span> We offer user-friendly cPanel interface so that website management can be made accessible to everyone.
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' /><span className='font-semibold'>Reliability:</span> Your website will always remain up with our robust infrastructure.
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' /><span className='font-semibold'>Round the Clock Support:</span> Our team is always 24/7 to help you with any issues you may face.
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' /><span className='font-semibold'>Security:</span> At Velosting, we believe in providing our users with state-of-the-art security features so that your data can be protected and your site always remains secure.
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' /><span className='font-semibold'>Affordability:</span> Our pricing plans are very competitive, offering you exceptional value of your investment.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src={ImageIcons.sbhosting} alt='cPanel Hosting Services' className='w-full md:max-w-[600px] max-md:max-w-[450px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions Section */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
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
        question: "What is the mechanism of cPanel hosting?",
        answer: "It involves the installation of cPanel software and this software provides a user-friendly interface for checking various aspects of a website.",
    },
    {
        question: "What are some of the benefits of cPanel hosting?",
        answer: "There are many advantages of cPanel hosting like:",
        faqList: ["User-friendly interface", "Comprehensive functionality", "Simplifying management tasks", "Easy customisation", "Backup and security",]
    },
    {
        question: "Is it possible to migrate the current website to cPanel hosting?",
        answer: "Yes, it can be done easily with the help of tools, which will transfer the files, databases and configurations of your website to the cPanel hosting.",
    },
    {
        question: "Do you provide secure cPanel hosting solutions?",
        answer: "Yes we provide you secure solutions like:",
        faqList: ["Password-protected directories", "SSL/TLS support", "IP blocking",]
    },
    {
        question: "Are cPanel hosting services suitable for beginners also?",
        answer: "Yes, these services are completely suitable for beginners because they offer a user-friendly interface and a simple way to manage your hosting account."
    }
];
export default LinuxHosting
const hostingOptions = [
    { text: "Monthly" },
    { text: "Semi-Annually" },
    { text: "Annually" },
];

