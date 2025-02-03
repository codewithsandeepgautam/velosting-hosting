import React from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import CtaRegister from '../components/shared/CtaRegister';
import LetsGetStarted from '../components/shared/LetsGetStarted';
import InquiryForm from '../components/shared/InquiryForm';
const AmbalaDataCenter = () => {
    return (
        <Layout>
            {/* Hero Banner Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[length:100%_100%] bg-top bg-no-repeat" style={{ backgroundImage: `url(${ImageIcons.domainsecbg})` }}>
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[40px] items-center'>
                        <div className='md:text-left text-center'>
                            <h1 className='h2 font-bold md:mb-[20px] max-md:mb-[15px]'>Ambala Data Center</h1>
                            <p className='mb-[15px]'>Astonishing it may sound but Ambala which is basically known for its commercial and industrial sector has witnessed a tremendous growth in the adoption of digital technology by the businesses in the recent years and this growth just like other cities such as Mumbai, Noida, Mohali, Delhi, etc has lead to huge demand for data center in Ambala, capable of providing efficient data storage and cloud services.</p>
                            <p className='mb-0'>As more and more businesses in Ambala are making a shift towards digital technology and this rising growth in the data especially in sectors like healthcare, finance, retail, manufacturing etc has created the need for innovative digital infrastructure in the city. We, at Velosting, understanding the growing data storage needs, have established a state-of-the-art Edge data center in Amabala, where unique needs of businesses are understood and businesses are provided with excellent services.</p>
                        </div>
                        <div>
                            <img src={ImageIcons.ambaladatacenter} alt='Data Center in Ambala' className='rounded-[90px_2px_90px_2px] w-full md:max-w-[700px] max-md:max-w-[550px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Ambala Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[1024px] mx-auto'>
                        <h2>Why Choose Velosting <span className='text-[#00A51A]'>Edge Data Center</span> in Ambala?</h2>
                        <p className='md:mb-[40px] max-md:mb-[30px]'>Velosting Ambala DC has emerged as the top DC company in Ambala due to multiple reasons.</p>
                    </div>
                    <div className='flex md:items-center max-md:flex-col md:gap-[40px]'>
                        <div className='md:w-1/3 max-md:order-1'>
                            <div className='mb-[40px]'>
                                <div className='flex items-center md:justify-end gap-[20px] mb-[15px]'>
                                    <div className='md:order-2 flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.iconone} alt='Top-Tier Facilities' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='md:order-1 mb-0'>Top-Tier Facilities</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0 md:text-right'>Do you want to get optimal IT space which offers all the facilities like intelligent cooling system, redundant power supplies and backup systems? Velosting is the answer for you.</p>
                            </div>
                            <div className='mb-[40px]'>
                                <div className='flex items-center md:justify-end gap-[20px] mb-[15px]'>
                                    <div className='md:order-2 flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.iconfive} alt='Uninterrupted Supply' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='md:order-1 mb-0'>Uninterrupted Supply</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0 md:text-right'>With our advanced and robust backup generators, we provide uninterrupted supply, so that your business operations never get disrupted.</p>
                            </div>
                            <div className='mb-[40px]'>
                                <div className='flex items-center md:justify-end gap-[20px] mb-[15px]'>
                                    <div className='md:order-2 flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.scalableicon} alt='Scalable Solutions' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='md:order-1 mb-0'>Scalable Solutions</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0 md:text-right'>With us, it is very easy to expand and evolve, as our services are completely scalable.</p>
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
                                <p className='text-[#646773] text-[15px] mb-0'>Your IT infrastructure is monitored and maintained by our experts, so that everything runs smoothly.</p>
                            </div>
                            <div className='mb-[40px]'>
                                <div className='flex items-center gap-[20px] mb-[15px]'>
                                    <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.icontwo} alt='Availability and Uptime' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='mb-0'>Availability and Uptime</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0'>Velosting data center in Ambala offers reduced downtime, as we offer redundant power offering seamless uptime</p>
                            </div>
                            <div className='mb-[40px]'>
                                <div className='flex items-center gap-[20px] mb-[15px]'>
                                    <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={ImageIcons.encryptedicon} alt='Advanced Security' className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='mb-0'>Advanced Security</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0'>In our facility, you never need to worry about the security as your infrastructure is kept protected with the help of biometric access, cutting-edge surveillance, threat detection system etc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Form Section */}
            <InquiryForm />

            {/* Velosting Data Center in Ambala: Location and Accessibility */}
            <section className="md:pt-[70px] max-md:pt-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[15px] items-center'>
                        <div className='max-md:order-2'>
                            <img src={ImageIcons.whyusimg2} alt='Data Center in Mumbai' className='rounded-[90px_2px_90px_2px] w-full md:max-w-[670px] max-md:max-w-[550px] mx-auto' />
                        </div>
                        <div className='max-md:order-1'>
                            <h2>Velosting Edge Data Center in Ambala: Location and Accessibility</h2>
                            <p className='mb-[15px]'>In the past, cities like Mumbai, Delhi, Noida, etc were the only tech hubs, however nowadays with the growth in the IT sector and advancements in technology, progressing cities like Ambala are also stepping forward and proving that these industries can not stay confined to metro cities only. To support the city and fulfil its data storage demand, Velosting is committed to provide top-notch data center services in Ambala.</p>
                            <p className='md:mb-[30px]'>Our Ambala Data Center is located at SCO No. 103, Sector- 8, near SNOOKER POINT, Ambala, Haryana 134003. As it is close to other major IT hubs, it proves to be a perfect setting for business for nearby areas, providing them with the enhanced connectivity, regional access and less operational cost in comparison to other cities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features of Our Edge Data Center in Ambala */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='block'>
                        <h2>Key Features of Our Edge Data Center in Ambala</h2>
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
            <CtaRegister />

            {/* Benefits of Our Edge data Center for Ambala Businesses Section */}
            <section className="py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div>
                            <h2>Benefits of Our Edge data Center for Ambala Businesses</h2>
                            <p className='mb-[15px]'>To offer convenience and help businesses reach their goals by letting them focus on the core activities of their business without any tension related to management and maintenance of their infrastructure, users are provided with multiple features.</p>
                            <ul className='block pt-[5px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <span className='font-semibold'>Colocation:</span> We provide secure and reliable accommodation for your IT infrastructure. With us, you will get to enjoy services like-
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
                                    <img src={ImageIcons.iconlinuxnine} alt='Physical Migration Services' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Physical Migration Services</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Velsoting, the providers of data center  in Ambala take complete responsibility of transferring your IT infrastructure.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxfour} alt='High-Speed Cross Connects' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>High-Speed Cross Connects</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Enjoy smooth integration and communication with our high-speed connectivity between your equipment and other network providers.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxfive} alt='Smart Hands Support' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Smart Hands Support</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Never worry about the complexities associated with the installation and configuration, as we take the onus of everything.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxthree} alt='Cages With Enhanced Security' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Cages With Enhanced Security</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Cages can not be accessed without biometrics and passwords for the purpose of ensuring safety.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxsix} alt='Secure Office Space Solutions' className='w-full max-w-[60px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Secure Office Space Solutions</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Do you want to have prompt access to your infrastructure? No worries as our Ambala DC offers proximity and hassle-free accessibility.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxeleven} alt='Value-Added IT Services' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Value-Added IT Services</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Our managed colocation, consulting and disaster recovery services help you enhance your IT operations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Let’s Get Started Section */}
            <LetsGetStarted />
        </Layout>
    )
}

export default AmbalaDataCenter
