import React from 'react'
import ImageIcons from '../imageComponent/ImageIcons';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { windowScroll } from '../../utils/windowScroll';

const OurProducts = () => {
    return (
        <section className="md:pb-[70px] max-md:pb-[50px]">
            <div className="lg:container mx-auto px-4 py-[10px]">
                <div className='text-center max-w-[690px] mx-auto'>
                    <h2>Our <span className='text-[#00A51A]'>{productsInfo.title}</span></h2>
                    <p className='md:mb-[40px] max-md:mb-[30px]'>{productsInfo.subtxt}</p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]'>
                    {productsInfo.productsitems.map((item, i) => (
                        <div key={i} className='bg-[#00A51A]/[5%] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={item.imgIcon} alt={item.alt} className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='mb-[10px]'>{item.title}</h4>
                            <p className='text-[#646773] mb-[15px]'>{item.para}</p>
                            <div>
                                <Link onClick={windowScroll} className='text-[#00A51A] text-[16px] hover:text-[#00A51A]/[85%] inline-flex items-center' to={item.btnLink}>{item.btnName}<FaArrowRightLong className='ml-[8px]'/></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const productsInfo = {
    title: "Products",
    subtxt: "Outstanding Performance meets Complete Scalability",
    productsitems: [
        {
            imgIcon: ImageIcons.iconone,
            alt: "Domain Registration",
            title: "Domain Registration",
            para: "Experience fast, secure and affordable web address services.",
            btnName: "View Details",
            btnLink: "/domain-registration"
        },
        {
            imgIcon: ImageIcons.linuxhostingicon,
            alt: "Linux Shared Hosting",
            title: "Linux Shared Hosting",
            para: "Get the power and reliability you need with high-speed.",
            btnName: "View Details",
            btnLink: "/linux-hosting"
        },
        {
            imgIcon: ImageIcons.iconthree,
            alt: "VPS",
            title: "VPS",
            para: "Reach new heights with our scalable VPS services.",
            btnName: "View Details",
            btnLink: "/virtual-private-server"
        },
        {
            imgIcon: ImageIcons.iconfour,
            alt: "Bare Metal Server",
            title: "Bare Metal Server",
            para: "The cloud services in which a physical machine is being rented.",
            btnName: "View Details",
            btnLink: "/bare-metal-dedicated-server"
        },
        {
            imgIcon: ImageIcons.iconfive,
            alt: "Window Hosting",
            title: "Window Hosting",
            para: "HostCluster is a managed WordPress hosting provider where we take care.",
            btnName: "View Details",
            btnLink: "/windows-hosting"
        },
        {
            imgIcon: ImageIcons.nextcloudlogo,
            alt: "NextCloud Hosting",
            title: "NextCloud Hosting",
            para: "Velosting, in collaboration with Nextcloud, offers hosted services in India.",
            btnName: "View Details",
            btnLink: "/next-cloud"
        },
        {
            imgIcon: ImageIcons.iconseven,
            alt: "Cloud Dedicated Server",
            title: "Cloud Dedicated Server",
            para: "Get cloud dedicated servers customised to your needs.",
            btnName: "View Details",
            btnLink: "/cloud-dedicated-servers"
        },
        {
            imgIcon: ImageIcons.iconeight,
            alt: "GPU Server",
            title: "GPU Server",
            para: "Have been designed to handle all the computational tasks.",
            btnName: "View Details",
            btnLink: "/gpu-servers"
        }
    ]
}


export default OurProducts
