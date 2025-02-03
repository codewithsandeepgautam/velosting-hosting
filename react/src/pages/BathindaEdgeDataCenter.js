import React from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import CtaRegister from '../components/shared/CtaRegister';
import LetsGetStarted from '../components/shared/LetsGetStarted';
import InquiryForm from '../components/shared/InquiryForm';
const BathindaEdgeDataCenter = () => {
    return (
        <Layout>
            {/* Hero Banner Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[length:100%_100%] bg-top bg-no-repeat" style={{ backgroundImage: `url(${ImageIcons.domainsecbg})` }}>
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[40px] items-center'>
                        <div className='md:text-left text-center'>
                            <h1 className='h2 font-bold md:mb-[20px] max-md:mb-[15px]'>Edge Data Center in Bathinda</h1>
                            <p className='mb-[15px]'>Bathinda is one of the oldest cities of Punjab known for oil refining, agriculture and power generation. The city is seeing a significant transformation digitally because of industrial and infrastructural development, generating the demand for data centers in Bathinda to support the growing amount of data. So,  we at Velosting, in order to support the industrial growth have established an edge data center in Bathinda.</p>
                            <p className='mb-0'>Moreover, Bathinda offers a very strategic location, as it is in close proximity to Ludhiana and Chandigarh, thereby acting as a perfect spot for businesses looking for reliable and scalable data center services. We, at Velosting, are committed to help businesses meet their increasing demands along with supporting them to have seamless and efficient operations. The location of our edge data center in Bathinda is, SCO 24, first floor, Bibiwala Road, Bathinda, Punjab, 151001.</p>
                        </div>
                        <div>
                            <img src={ImageIcons.mohalidatacenter} alt='Data Center in Bathinda' className='rounded-[90px_2px_90px_2px] w-full md:max-w-[700px] max-md:max-w-[550px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features of Our Data Center in Bathinda */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='block'>
                        <h2>Key Features of Our Data Center in Bathinda</h2>
                        <ul className='block md:columns-3 md:gap-x-[50px] md:pt-[15px] max-md:pt-[10px] pl-[30px]'>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Our Bathinda DC has 7 racks.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />It is located at a Strategic location.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />We  reserve ISO 270001 certification of data security.
                            </li>
                            <li className='relative text-[#000] mb-[10px]'>
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Our data center in Bathinda is equipped withIntelligent cooling systems (capable of dynamically adjusting the airflow), power management and 24/7 support.
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
                                <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />We have a facility of N+N UPS in our DC Bathinda.
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

export default BathindaEdgeDataCenter
