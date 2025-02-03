import React from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import CtaRegister from '../components/shared/CtaRegister';
import LetsGetStarted from '../components/shared/LetsGetStarted';
import InquiryForm from '../components/shared/InquiryForm';
const KarnalDataCenter = () => {
    return (
        <Layout>
            {/* Hero Banner Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[length:100%_100%] bg-top bg-no-repeat" style={{ backgroundImage: `url(${ImageIcons.domainsecbg})` }}>
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[40px] items-center'>
                        <div className='md:text-left text-center'>
                            <h1 className='h2 font-bold md:mb-[20px] max-md:mb-[15px]'>Karnal Edge Data Center</h1>
                            <p className='mb-[15px]'>Haryana has also marked a significant transformation in terms of industrial and technological growth with major changes being happening in the city of Karnal. This growth in the city especially in the sectors like finance, IT, e-commerce etc has led to the generation of a vast amount of data, making the establishment of data centers in Karnal inevitable.</p>
                            <p className='mb-[15px]'>Although Karnal is usually known for agriculture and its history, it is now becoming a hub for both the technological and industrial sector. It is now offering robust infrastructure and excellent connectivity to the cities like Delhi and Chandigarh which themselves are major IT hubs, so establishing a data center in Karnal will not only support the businesses in the city but also the nearby areas by offering them easy access.</p>
                            <p className='mb-0'>The current growth and the futuristic potential of Karnal has encouraged us at Velsoting to set up our data center services in the city and we have been successful in establishing an edge data center in Karnal, where we offers users reliable, efficient and secure data storage and cloud services to help you focus on the core activities of your business by ensuring peace of mind. Our Karnal Edge data center is located at SCO no. 13, 2nd Floor, Sector, 3, H.S.I.I.D.C. Industrial Estate, Karnal, Haryana, 132001.</p>
                        </div>
                        <div>
                            <img src={ImageIcons.datacenterpirtwo} alt='Data Center in Karnal' className='rounded-[90px_2px_90px_2px] w-full md:max-w-[700px] max-md:max-w-[550px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features of Our Edge Data Center in Karnal */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='block'>
                        <h2>Key Features of Our Edge Data Center in Karnal</h2>
                        <ul className='block md:columns-3 md:gap-x-[50px] md:pt-[15px] max-md:pt-[10px] pl-[30px]'>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Our Karnal DC has 12 racks.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />It is located at a Strategic location.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />We  reserve ISO 270001 certification of data security.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Our edge data center in Karnal is equipped withIntelligent cooling systems (capable of dynamically adjusting the airflow), power management and 24/7 support.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />We offer High-speed connectivity for Telecom carriers and ISPs.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />We have Interconnectivity to  National Internet Exchange of India (NIXI) and other exchanges.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Ours are expandable services. (from single rack to multi rack).
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />We offer multi layer security including physical, network, logical, DDoS, biometrics and password based access.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />We also offer remote Management and KVM access.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />We have a facility of N+N UPS in our DC Karnal.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Besides this, we provide our users with disaster backup and recovery services.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Let’s Get Started Section */}
            <LetsGetStarted/>

            {/* Inquiry Form Section */}
            <InquiryForm/>

            {/* CTA Section */}
            <CtaRegister/>

        </Layout>
    )
}

export default KarnalDataCenter
