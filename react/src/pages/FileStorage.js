import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong } from "react-icons/fa6";
import OurVentures from '../components/shared/OurVentures';
import CtaRegister from '../components/shared/CtaRegister';


const FileStorage = () => {
    return (
        <Layout>
            {/* Best Web Hosting Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[#00A51A]/[5%]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div className='md:text-left text-center'>
                            <h4 className='text-[#00A51A] font-semibold mb-[10px]'>File Storage</h4>
                            <h1 className='font-bold text-[#000] md:mb-[20px] max-md:mb-[15px]'>Best Web Hosting, Domain and Servers Solutions in India</h1>
                            <p className='text-[#000] md:text-[20px] text-[18px] md:mb-[30px] max-md:mb-[20px]'>We, at Velosting, ensure faster, secure and reliable services, enhancing your digital experience.</p>
                            <Link className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/contact-us'>Join Now<FaArrowRightLong className='ml-[10px]' /></Link>
                        </div>
                        <div>
                            <img src={ImageIcons.filestoragepic} alt='File Storage' className='w-full md:max-w-[450px] max-md:max-w-[350px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Benefits */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center flex-col gap-[20px] mb-[10px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.nintynineuptimeguarantee} alt='10 Day Guarantee' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>10 Day Guarantee</h4>
                            </div>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center flex-col gap-[20px] mb-[10px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxfive} alt='Lower Latency' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>Lower Latency</h4>
                            </div>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center flex-col gap-[20px] mb-[10px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seoiconone} alt='Speed Like No One Else' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>Speed Like No One Else</h4>
                            </div>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center flex-col gap-[20px] mb-[10px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.fullrootaccess} alt='Full Root and Full Control' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>Full Root and Full Control</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our hosting give you more feature */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='text-center mb-[20px]'>Our Hosting Give You More Feature</h2>
                    <p className='text-center max-w-[800px] mx-auto md:mb-[40px] max-md:mb-[30px]'>Running a business can be challenging, so to help we offer a FREE website builder with FREE stock images and FREE email with every domain name.</p>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='bg-[#00A51A]/[5%] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.domainregicon} alt='Free Domain Name' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Free Domain Name</h4>
                            <p className='text-[#646773] mb-[0px]'>All our plans include at least one free .co.uk domain, so you get everything you need to take your new business website online, already included in the price of your hosting package.</p>
                        </div>
                        <div className='bg-[#00A51A]/[5%] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.seoiconnine} alt='Free Personalised email' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Free Personalised email</h4>
                            <p className='text-[#646773] mb-[0px]'>Create an email address that matches your domain to give your business a pofessional look. It’s super easy to purchase extra mailboxes if you require more than one.</p>
                        </div>
                        <div className='bg-[#00A51A]/[5%] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.enhancedsecurity} alt="Free Let's Encrypt SSL" className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Free Let's Encrypt SSL</h4>
                            <p className='text-[#646773] mb-[0px]'>Free SSL certificate with Let's Encrypt for all websites managed under your hosting package.</p>
                        </div>
                        <div className='bg-[#00A51A]/[5%] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.colocationservices} alt='Free Weekly Backup' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Free Weekly Backup</h4>
                            <p className='text-[#646773] mb-[0px]'>Make sure you always have a copy of your website in case anything goes wrong. Choose how much space you need at checkout, with 5GB starting at only £15/year, going up to 200GB for £375/year.</p>
                        </div>
                        <div className='bg-[#00A51A]/[5%] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.iconlinuxthree} alt='Free Site Migration' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Free Site Migration</h4>
                            <p className='text-[#646773] mb-[0px]'>Our experts will migrate any existing shared web hosting account, seamlessly and free of charge</p>
                        </div>
                        <div className='bg-[#00A51A]/[5%] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.wpappdevser} alt='One-Click WordPress hosting' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>One-Click WordPress hosting</h4>
                            <p className='text-[#646773] mb-[0px]'>Install WordPress, Joomla, Drupal and over 200 web applications. Fast installation, and no advanced technical knowledge require</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CtaRegister />

            {/* Technical Specifications */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='text-center md:mb-[35px] max-md:mb-[20px]'>Technical Specifications</h2>
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.securitymeasuresicon} alt='Guaranteed Resources' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Guaranteed Resources</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Our Linux KVM VPS based hypervisor technology ensures consistent top-notch performance and the resources* of the server can be scaled as your business expands.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.securityfeaturesicon} alt='Secure Environment' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Secure Environment</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Hypervisor based virtualisation brings in better isolation and security in a VPS environment</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.customizabilityicon} alt='Cutting Edge Server Hardware' className='w-full max-w-[40px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Cutting Edge Server Hardware</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>One of the integral parts of your server is disk read/writes which is why we built our servers with Solid State Drives*</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seoiconfive} alt='Top of the line network' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Top of the line network</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[15px]'>Our network is designed with multiple reputed ISPs to ensure high stability, eliminate single point of failure with an integrated DDoS protection, at NO additional cost!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Venture’s */}
            <OurVentures />

        </Layout>
    )
}

export default FileStorage
