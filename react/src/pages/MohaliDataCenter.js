import React from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import CtaRegister from '../components/shared/CtaRegister';
import LetsGetStarted from '../components/shared/LetsGetStarted';
import InquiryForm from '../components/shared/InquiryForm';
const MohaliDataCenter = () => {
    return (
        <Layout>
            {/* Hero Banner Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[length:100%_100%] bg-top bg-no-repeat" style={{ backgroundImage: `url(${ImageIcons.domainsecbg})` }}>
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[40px] items-center'>
                        <div className='md:text-left text-center'>
                            <h1 className='h2 font-bold md:mb-[20px] max-md:mb-[15px]'>Mohali Data Center</h1>
                            <p className='mb-[15px]'>Mohali, the progressive city has become a top player in the technological and IT ecosystem in North India. It has been noticed that the number of IT companies in Mohali has risen dramatically in the recent years, leading to a growth in the data-driven business operations. Just like cities such as Mumbai, Noida , Delhi etc, these data-driven businesses have made the establishment of advanced data centers in Mohali a necessity.</p>
                            <p className='mb-0'>The technological transformation in Mohali can be seen especially in sectors such as IT, healthcare, education etc which generate a huge amount of data, creating the need for secure and reliable data infrastructure. Seeing the increasing needs of businesses, we at Velosting, have come up with unique and futuristic data center in Mohali</p>
                        </div>
                        <div>
                            <img src={ImageIcons.datacentrepicone} alt='Data Center in Mohali' className='rounded-[90px_2px_90px_2px] w-full md:max-w-[700px] max-md:max-w-[550px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Mohali Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[1024px] mx-auto'>
                        <h2>Why Choose Velosting <span className='text-[#00A51A]'>Data Center</span> in Mohali?</h2>
                        <p className='md:mb-[40px] max-md:mb-[30px]'>Our data center company in Mohali has established itself at the forefront by providing a wide range of features.</p>
                    </div>
                    <div className='flex md:items-center max-md:flex-col md:gap-[40px]'>
                        <div className='md:w-1/3 max-md:order-1'>
                            <div className='mb-[40px]'>
                                <div className='flex items-center md:justify-end gap-[20px] mb-[15px]'>
                                    <div className='md:order-2 flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.iconone} alt='Advanced Facilities' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='md:order-1 mb-0'>Advanced Facilities</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0 md:text-right'>In our capacity, we will enjoy advanced facilities like excellent cooling systems, round the clock power supply and we also have strong backup systems.</p>
                            </div>
                            <div className='mb-[40px]'>
                                <div className='flex items-center md:justify-end gap-[20px] mb-[15px]'>
                                    <div className='md:order-2 flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.iconfive} alt='Uninterrupted Supply' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='md:order-1 mb-0'>Uninterrupted Supply</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0 md:text-right'>With us, you will always enjoy uninterrupted connectivity, ensuring seamless business operations.</p>
                            </div>
                        </div>
                        <div className='md:w-1/3 max-md:order-3'>
                            <div className='flex flex-col md:items-center max-md:flex-col max-md:mb-[30px]'>
                                <div className='md:order-2 md:mt-[20px] max-md:mb-[40px]'>
                                    <div className='flex md:flex-col items-center md:gap-[15px] gap-[20px] mb-[15px]'>
                                        <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                            <img src={ImageIcons.encryptedicon} alt='Advanced Security' className='w-full max-w-[60px] mx-auto' />
                                        </div>
                                        <h4 className='md:text-center mb-0'>Advanced Security</h4>
                                    </div>
                                    <p className='md:text-center text-[#646773] text-[15px] mb-0'>To keep your infrastructure safeguarded, we provide advanced security measures like:- Biometric access, Advanced Surveillance systems, Threat detection systems, Physical security</p>
                                </div>
                                <img src={ImageIcons.datacentermid} alt='Data Center' className='md:order-1 w-full max-w-[600px] mx-auto' />
                            </div>
                        </div>
                        <div className='md:w-1/3 max-md:order-2'>
                            <div className='mb-[40px]'>
                                <div className='flex items-center gap-[20px] mb-[15px]'>
                                    <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.iconfour} alt='Availability and Uptime' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='mb-0'>Availability and Uptime</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0'>Users get to enjoy minimised downtime with our redundant power, which ensures seamless uptime.</p>
                            </div>
                            <div className='mb-[40px]'>
                                <div className='flex items-center gap-[20px] mb-[15px]'>
                                    <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.icontwo} alt='Scalable Solutions' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='mb-0'>Scalable Solutions</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0'>We offer scalable services allowing you to easily expand and evolve.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Form Section */}
            <InquiryForm/>

            {/* Velosting Data Center in Mohali: Location and Accessibility */}
            <section className="md:pt-[70px] max-md:pt-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[15px] items-center'>
                        <div className='max-md:order-2'>
                            <img src={ImageIcons.whyusimg2} alt='Data Center in Mumbai' className='rounded-[90px_2px_90px_2px] w-full md:max-w-[670px] max-md:max-w-[550px] mx-auto' />
                        </div>
                        <div className='max-md:order-1'>
                            <h2>Velosting’s Mohali Data Center: Location and Accessibility</h2>
                            <p className='mb-[15px]'>As the government of Punjab is leaving no stone unturned in promoting digitization and innovation, Mohali has come at the forefront of digital initiatives and establishing a data center in Mohali will not only will not only help in the fulfilment of the vision of the government but also Support the businesses looking for smart and secure data storage solutions.</p>
                            <p className='md:mb-[30px]'>So, we at Velosting, have established a state-of-the-art data center in Mohali at B-0, Phase-7, Sector-73, Industrial area, S.A.S. Nagar, Mohali. Being a part of tricity, it offers easy access to businesses in Zirakpur, Chandigarh and other nearby areas like Delhi.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features of Our Data Center in Mohali */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='block'>
                        <h2>Key Features of Our Data Center in Mohali</h2>
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

            {/* Benefits of Our data Center for Mumbai Businesses Section */}
            <section className="py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div>
                            <h2>Benefits of Our data Center for Mohali Businesses</h2>
                            <p className='mb-[15px]'>We, at velosting, offer users with the best data center services so that users can focus on their business while we handle all the tasks related to maintenance and management.</p>
                            <ul className='block pt-[5px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <span className='font-semibold'>Colocation:</span> House your infrastructure at secure and reliable data center space with us, where you will enjoy services like:
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
                                <h4 className='mb-0'>Physical Migration Services</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We not only provide colocation services but also help you with transferring your infra to our data center.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxfour} alt='Cross Connects' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>High-Speed Cross Connects</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We assure providing seamless integration and communications by providing high-speed connectivity between the network provider and your equipment.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxfive} alt='Smart Hands' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Smart Hands Support</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>With us, you will never have to face any difficulties related to installation and configuration, as our team handles all these aspects.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxthree} alt='Advanced Security Cages' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Advanced Security Cages</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Are you worried about the safety of your infrastructure? Keep all your worries aside when you have Velosting data center providers in Mohali by your side, as our cages only provide biometrics or password based access.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxsix} alt='Value-Added IT Services' className='w-full max-w-[60px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Value-Added IT Services</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>With our managed colocation, consulting and disaster recovery services, you can easily enhance your IT operations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Let’s Get Started Section */}
            <LetsGetStarted/>
        </Layout>
    )
}

export default MohaliDataCenter
