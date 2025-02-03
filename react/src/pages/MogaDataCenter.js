import React from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import CtaRegister from '../components/shared/CtaRegister';
import LetsGetStarted from '../components/shared/LetsGetStarted';
import InquiryForm from '../components/shared/InquiryForm';
const MogaDataCenter = () => {
    return (
        <Layout>
            {/* Hero Banner Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[length:100%_100%] bg-top bg-no-repeat" style={{ backgroundImage: `url(${ImageIcons.domainsecbg})` }}>
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[40px] items-center'>
                        <div className='md:text-left text-center'>
                            <h1 className='h2 font-bold md:mb-[20px] max-md:mb-[15px]'>Moga Edge Data Center</h1>
                            <p className='mb-[15px]'>Seeing the industrial and technological growth of Punjab, Velosting has set up its edge data centers  in Moga, Sangrur, Bathinda and Barnala in order to support the growing businesses especially the finance, IT, e-commerce etc which generate a huge amount of data. Our Moga edge DC offers businesses cutting edge facilities for housing their infrastructure like advanced cooling systems, power and data backup, and fire suppression systems.</p>
                            <p className='mb-0'>Moga is also an agricultural region of the punjab but just like other cities, it also has started embracing industrial and technological growth, creating the demand for establishment of data centers in Moga and we at Velosting are leaving no stone unturned in order to support the region's growth and the aims of the government, so we have set up a cutting-edge edge data center services in Moga, providing businesses with convenience of housing the IT infrastructure in a secure and reliable space.</p>
                        </div>
                        <div>
                            <img src={ImageIcons.datacenterpicfour} alt='Data Center in Moga' className='rounded-[90px_2px_90px_2px] w-full md:max-w-[700px] max-md:max-w-[550px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features of Our Edge Data Center in Moga */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='block'>
                        <h2>Key Features of Our Edge Data Center in Moga</h2>
                        <ul className='block md:columns-3 md:gap-x-[50px] md:pt-[15px] max-md:pt-[10px] pl-[30px]'>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Our Moga DC has 12 racks.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />It is located at a Strategic location.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />We reserve ISO 270001 certification of data security.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Our edge data center in Moga is equipped withIntelligent cooling systems (capable of dynamically adjusting the airflow), power management and 24/7 support.
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
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />We have a facility of N+N UPS in our DC Moga.
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

export default MogaDataCenter
