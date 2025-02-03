import React from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import CtaRegister from '../components/shared/CtaRegister';
import LetsGetStarted from '../components/shared/LetsGetStarted';
import InquiryForm from '../components/shared/InquiryForm';
const NoidaDataCenter = () => {
    return (
        <Layout>
            {/* Hero Banner Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[length:100%_100%] bg-top bg-no-repeat" style={{ backgroundImage: `url(${ImageIcons.domainsecbg})` }}>
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[40px] items-center'>
                        <div className='md:text-left text-center'>
                            <h1 className='h2 font-bold md:mb-[20px] max-md:mb-[15px]'>Noida Data Center</h1>
                            <p className='mb-[15px]'>Noida has emerged as one of the biggest IT hubs in the country in recent years. As more and more industries are getting established in the city, the demand for data storage and processing capabilities is growing, making services of data centers in Noida very essential in order to provide businesses with reliable, efficient and cost-effective infrastructure. Moreover, the city offers proper and excellent connectivity all over the nation, so it is a perfect location for establishing data centers.</p>
                            <p className='mb-0'>With the increase in the industries embracing digital transformation in Noida, the demand for cloud services and data storage is rising leading to an astonishing demand for data center companies in Noida. To fulfil this demand for cloud services, Velosting has established advanced technology data centers in Noida providing users with impeccable services.</p>
                        </div>
                        <div>
                            <img src={ImageIcons.noidadatacenter} alt='Data Center in Noida' className='rounded-[90px_2px_90px_2px] w-full md:max-w-[700px] max-md:max-w-[550px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Noida Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[1024px] mx-auto'>
                        <h2>Why Choose Velosting <span className='text-[#00A51A]'>Data Center Company</span> in Noida?</h2>
                        <p className='md:mb-[40px] max-md:mb-[30px]'>There are various compelling reasons which makes us unique in the bustling city of Noida and some of them are mentioned below:</p>
                    </div>
                    <div className='flex md:items-center max-md:flex-col md:gap-[40px]'>
                        <div className='md:w-1/3 max-md:order-1'>
                            <div className='mb-[40px]'>
                                <div className='flex items-center md:justify-end gap-[20px] mb-[15px]'>
                                    <div className='md:order-2 flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.iconone} alt='Top-Tier Facilities' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='md:order-1 mb-0'>Top-Notch Facilities</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0 md:text-right'>Get usable space for your IT, where everything will be taken care of properly be it cooling system, power supply etc, not letting you face any issues with our services.</p>
                            </div>
                            <div className='mb-[40px]'>
                                <div className='flex items-center md:justify-end gap-[20px] mb-[15px]'>
                                    <div className='md:order-2 flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.iconfive} alt='Uninterrupted Power Supply' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='md:order-1 mb-0'>Uninterrupted Power Supply</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0 md:text-right'>Velosting data center in Noida ensures providing uninterrupted power supply with the help of backup generators, allowing you to run your business operations seamlessly.</p>
                            </div>
                            <div className='mb-[40px]'>
                                <div className='flex items-center md:justify-end gap-[20px] mb-[15px]'>
                                    <div className='md:order-2 flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.scalableicon} alt='Scalable Solutions' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='md:order-1 mb-0'>Scalable Solutions</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0 md:text-right'>We understand that with the passage of time, business needs grow and to provide you with convenient services, we offer scalable solutions, allowing you to easily scale our services.</p>
                            </div>
                        </div>
                        <div className='md:w-1/3 max-md:order-3'>
                            <div className='flex flex-col md:items-center max-md:flex-col max-md:mb-[30px]'>
                                <img src={ImageIcons.datacentermid} alt='Data Center' className='w-full max-w-[600px] mx-auto' />
                            </div>
                        </div>
                        <div className='md:w-1/3 max-md:order-2'>
                            <div className='mb-[40px]'>
                                <div className='flex items-center gap-[20px] mb-[15px]'>
                                    <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.iconfour} alt='Physical Security' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='mb-0'>Physical Security</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0'>We have experts at our data centers who are responsible for monitoring and maintaining all your IT and infrastructure equipment round the clock.</p>
                            </div>
                            <div className='mb-[40px]'>
                                <div className='flex items-center gap-[20px] mb-[15px]'>
                                    <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.icontwo} alt='Availability and Uptime' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='mb-0'>Availability and Uptime</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0'>You will never face any issues with downtime, as our backup generators ensure redundant power supply.</p>
                            </div>
                            <div className='mb-[40px]'>
                                <div className='flex items-center gap-[20px] mb-[15px]'>
                                    <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.encryptedicon} alt='Advanced Security Solutions' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='mb-0'>Advanced Security Solutions</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0'>Don’t be anxious about the security of your infrastructure when you have Velosting with your, where we ensure biometric access, robust surveillance solutions and other top-notch threat detection systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Form Section */}
            <InquiryForm/>

            {/* Velosting Data Center in Noida: Location and Accessibility */}
            <section className="md:pt-[70px] max-md:pt-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[15px] items-center'>
                        <div className='max-md:order-2'>
                            <img src={ImageIcons.whyusimg2} alt='Data Center in Mumbai' className='rounded-[90px_2px_90px_2px] w-full md:max-w-[670px] max-md:max-w-[550px] mx-auto' />
                        </div>
                        <div className='max-md:order-1'>
                            <h2>Velosting Data Center in Noida: Location and Accessibility</h2>
                            <p className='mb-[15px]'>With the growth in the technology companies, MNCS etc, Noida is acting as one of the top places for setting up data center services because all the companies like finance, healthcare IT, e-commerce etc are resulting in the generation of a huge amount of data and this data without any doubt needs to be stored in a secure and efficient manner.</p>
                            <p className='md:mb-[30px]'>So, we at Velosting have come up with a unique and impeccable data center company in Noida and the proper address details are: Maharaja Business Park A, 24, Sector 63 Rd, A Block, Sector 63, Noida, Uttar Pradesh 201301, where we offer businesses with the best of the time services. We completely understand the complexities which are being faced by the businesses in the city, so we, with our services, are committed to provide businesses services catering to their varying needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features of Our Data Center in Noida */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='block'>
                        <h2>Key Features of Our Data Center in Noida</h2>
                        <ul className='block md:columns-3 md:gap-x-[50px] md:pt-[15px] max-md:pt-[10px] pl-[30px]'>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Strategic location.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />ISO 270001 certification of data security.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Intelligent cooling systems (capable of dynamically adjusting the airflow), power management and 24/7 support.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />High-speed connectivity for Telecom carriers and ISPs.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Interconnectivity to  National Internet Exchange of India (NIXI) and other exchanges.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Expandable services (from single rack to multi racks).
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Multi layer security including physical, network, logical, DDoS, biometrics and password based access.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Remote Management and KVM access.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />N+N UPS.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Disaster backup and recovery services.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CtaRegister/>

            {/* Benefits of Our data Center for Noida Businesses Section */}
            <section className="py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div>
                            <h2>Benefits of Our data Center for Noida Businesses</h2>
                            <p className='mb-[15px]'>Our services have especially been designed to offer users with unmatchable features and these are mentioned below:</p>
                            <ul className='block pt-[5px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <span className='font-semibold'>Colocation:</span> Want to keep your infrastructure secure and safe? Get experience with our colocation services today, where we offer
                                    <ul className='block pt-[15px] pl-[30px]'>
                                        <li className='relative text-[#000] mb-[10px]'>
                                            <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Smart Racks
                                        </li>
                                        <li className='relative text-[#000] mb-[10px]'>
                                            <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Power Shells
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src={ImageIcons.whyusimg1} alt='colocation enables' className='w-full md:max-w-[650px] max-md:max-w-[550px] mx-auto rounded-[2px_90px]' />
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxnine} alt='Physical Migration' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Physical Migration</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Not only colocation but businesses are also provided with migrations services, where we take the onus of migrating their IT infrastructure.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxfour} alt='Cross Connects' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Cross Connects</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Velosting Noida data center offers a high speed connection between your equipment and providers of other networks.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxfive} alt='Smart Hands' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Smart Hands</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>You need not to worry about the process of installation and configuration, as we provide everything, making our services completely hassle-free.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxthree} alt='Advanced Security Cage' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Advanced Security Cage</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Velsoting data center in Noida offers advanced and multi-factor authentication, allowing for biometric or password based access only.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxsix} alt='Secure Office Space' className='w-full max-w-[60px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Secure Office Space</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Do you want to store your infrastructure at a short distance from you? Get our secure office space solutions and have easy and immediate access to your IT infrastructure.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxeleven} alt='Value-Added Services' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Value-Added Services</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>You can easily accelerate our IT operations with our managed colocation services, consulting and recovery services.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Let’s Get Started Section */}
            <LetsGetStarted/>
        </Layout>
    )
}

export default NoidaDataCenter
