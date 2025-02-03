import React from 'react'
import { Link } from 'react-router-dom'
import ImageIcons from '../imageComponent/ImageIcons';
import { FaArrowRightLong } from "react-icons/fa6";
import { windowScroll } from '../../utils/windowScroll';

const OurServices = () => {
    return (
        <section className="lg:pt-[50px]">
            <div className="lg:container mx-auto px-4 md:py-[10px]">
                <div className='text-center max-w-[1024px] mx-auto'>
                    <h2>Our <span className='text-[#00A51A]'>{ourServices.title}</span></h2>
                    <p className='md:mb-[35px] max-md:mb-[20px]'>{ourServices.para}</p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-[30px] max-md:gap-[20px] mt-[40px]'>
                    {ourServices.servicesItems.map((item, i) => (
                    <div key={i} className='relative bg-[#fff] md:py-[40px] max-md:py-[30px] md:px-[35px] max-md:px-[20px] rounded-[15px] shadow-[0px_4px_10px_rgb(0_0_0_/_0.10)]'>
                        <div className='text-center mb-[20px]'>
                            <img src={item.icon} alt={item.alt} className='w-full max-w-[60px] mx-auto' />
                        </div>
                        <h4 className='text-center mb-[10px]'>{item.title}</h4>
                        <p className='text-[#646773] text-[15px] text-center mb-[20px]'>{item.subpara}</p>
                        <div className='text-center'>
                            <Link onClick={windowScroll} className='text-[#00A51A] text-[16px] hover:text-[#00A51A]/[85%] inline-flex items-center' to={item.btnLink}>{item.btnName}<FaArrowRightLong className='ml-[8px]' /></Link>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


const ourServices = {
    title: "Services",
    para: "Velosting provides its users with a broad range of Web hosting, domain registration and cloud services and these have especially been designed to meet the unique requirements of businesses of all sizes. By leveraging robust infra and advanced technology, we allow you to enhance your online presence along with making it reliable, scalable and secure.",
    servicesItems: [
      {
        icon: ImageIcons.domainregistrationicon,
        alt: "Domain Registration",
        title: "Domain Registration",
        subpara: "With us, the domain registration service providers, you are allowed to securely buy a domain, transfer your existing domain and can also manage all the portfolios of your domain.",
        btnName: "View Details",
        btnLink: "/contact-us"
      },
      {
        icon: ImageIcons.webhostingsericon,
        alt: "Web Hosting Services",
        title: "Web Hosting Services",
        subpara: "Velosting, the best dedicated web hosting services providers offer a broad array of affordable web hosting services serving the varying requirements of websites and applications.",
        btnName: "View Details",
        btnLink: "/contact-us"
      },
      {
        icon: ImageIcons.serversolutionicon,
        alt: "Server Solution Providers",
        title: "Server Solution Providers",
        subpara: "Velosting, the best server solutions providers, offer users advanced server solutions to help users meet the varying needs of the businesses be it a small enterprise or a properly established business.",
        btnName: "View Details",
        btnLink: "/contact-us"
      }
    ]
}

export default OurServices
