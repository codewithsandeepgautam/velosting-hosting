import React from 'react';
import { Link } from 'react-router-dom';
import { windowScroll } from '../utils/windowScroll';
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';

const SiteMap = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className='relative'>
        <div className='relative w-full overflow-hidden py-[5%] after:content after:absolute after:left-0 after:right-0 after:top-0 after:w-full after:h-full after:bg-[#00A51A] after:opacity-50'>
          <img src={ImageIcons.contactheaderbg} alt='Commissions' className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full h-full object-center object-cover' />
          <div className='relative w-full h-full flex flex-col justify-center items-center z-10 px-[15px] py-[15px]'>
            <h1 className="capitalize text-white text-center">Sitemap</h1>
            <div className="text-center mt-[10px]">
              <p className='mb-0'>
                <Link className="text-white font-medium hover:underline" to="/">Home</Link>
                <span className="px-[10px] text-white font-medium inline-block">/</span>
                <span className="inline-block text-white font-medium ">Sitemap</span>
              </p>
            </div>
          </div> 
        </div>
      </section>
      <section className="py-[70px] max-md:py-[50px]">
        <div className="lg:container mx-auto px-4">
          <div className='text-center pb-[20px]'>
            <Link onClick={windowScroll} to="/" className='relative md:text-[18px] inline-flex items-center justify-center w-full max-w-[170px] mx-auto rounded-[5px] px-[20px] py-[12px] border border-[#00A51A] font-medium text-[#fff] bg-[#00A51A] hover:text-[#00A51A] hover:bg-[#fff] shadow-[0px_4px_5px_rgb(0_0_0_/_0.10)] after:content-[""] after:absolute after:bottom-[-21px] after:left-auto after:right-auto after:w-[2px] after:h-[20px] after:border-l-[1px] after:border-dotted after:border-[#212121]'>Home</Link>
          </div>
          <div className='border-[1px] border-dotted border-[#212121] md:p-[20px] max-md:p-[10px]'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
              <ul className='list-none m-0 p-0'>
                <li className='relative pl-[20px] pb-[5px]'>
                  <ul className='list-none m-0 p-0'>
                    {DataCenterLinks.map((item, i) => (
                      <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                        <Link onClick={windowScroll} to={item.link} className='inline-block py-[5px]'>{item.title}</Link>
                        <ul className='list-none m-0 px-0 pt-0 pb-[15px]'>
                          {item.subLinks?.map((item, i) => (
                            <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                              <Link onClick={windowScroll} className='inline-block py-[5px]' to={item.link}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <ul className='list-none m-0 p-0'>
                <li className='relative pl-[20px] pb-[5px]'>
                  <ul className='list-none m-0 p-0'>
                    {CloudLinks.map((item, i) => (
                      <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                        <Link onClick={windowScroll} to={item.link} className='inline-block py-[5px]'>{item.title}</Link>
                        <ul className='list-none m-0 px-0 pt-0 pb-[15px]'>
                          {item.subLinks?.map((item, i) => (
                            <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                              <Link onClick={windowScroll} className='inline-block py-[5px]' to={item.link}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <ul className='list-none m-0 p-0'>
                <li className='relative pl-[20px] pb-[5px]'>
                  <ul className='list-none m-0 p-0'>
                    {WebHostingLinks.map((item, i) => (
                      <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                        <Link onClick={windowScroll} to={item.link} className='inline-block py-[5px]'>{item.title}</Link>
                        <ul className='list-none m-0 px-0 pt-0 pb-[15px]'>
                          {item.subLinks?.map((item, i) => (
                            <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                              <Link onClick={windowScroll} className='inline-block py-[5px]' to={item.link}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <ul className='list-none m-0 p-0'>
                <li className='relative pl-[20px] pb-[5px]'>
                  <ul className='list-none m-0 p-0'>
                    {ProductLinks.map((item, i) => (
                      <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                        <Link onClick={windowScroll} to={item.link} className='inline-block py-[5px]'>{item.title}</Link>
                        <ul className='list-none m-0 px-0 pt-0 pb-[15px]'>
                          {item.subLinks?.map((item, i) => (
                            <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                              <Link onClick={windowScroll} className='inline-block py-[5px]' to={item.link}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <ul className='list-none m-0 p-0'>
                <li className='relative pl-[20px] pb-[5px]'>
                  <ul className='list-none m-0 p-0'>
                    {ServicesLinks.map((item, i) => (
                      <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                        <Link onClick={windowScroll} to={item.link} className='inline-block py-[5px]'>{item.title}</Link>
                        <ul className='list-none m-0 px-0 pt-0 pb-[15px]'>
                          {item.subLinks?.map((item, i) => (
                            <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                              <Link onClick={windowScroll} className='inline-block py-[5px]' to={item.link}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <ul className='list-none m-0 p-0'>
                <li className='relative pl-[20px] pb-[5px]'>
                  <ul className='list-none m-0 p-0'>
                    {ProgramsLinks.map((item, i) => (
                      <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                        <Link onClick={windowScroll} to={item.link} className='inline-block py-[5px]'>{item.title}</Link>
                        <ul className='list-none px-0 pt-0 pb-[15px]'>
                          {item.subLinks?.map((item, i) => (
                            <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                              <Link onClick={windowScroll} className='inline-block py-[5px]' to={item.link}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <ul className='list-none m-0 p-0'>
                <li className='relative pl-[20px] pb-[5px]'>
                  <ul className='list-none m-0 p-0'>
                    {navLinks.map((item, i) => (
                      <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                        <Link onClick={windowScroll} to={item.link} className='inline-block py-[5px]'>{item.title}</Link>
                        <ul className='list-none px-0 pt-0 pb-[15px]'>
                          {item.subLinks?.map((item, i) => (
                            <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                              <Link onClick={windowScroll} className='inline-block py-[5px]' to={item.link}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

const navLinks = [
  {
    title: "About Us",
    link: "/about-us"
  },
  {
    title: "Contact Us",
    link: "/contact-us"
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy"
  },
  {
    title: "Terms & Conditions",
    link: "/terms-and-conditions"
  }
];
const DataCenterLinks = [
  {
    title: "Data Centers",
    link: "/#",
    subLinks: [
      {
        title: "Mumbai India",
        link: "/mumbai-data-center"
      },
      {
        title: "Delhi Noida",
        link: "/noida-data-center"
      },
      {
        title: "Ambala Haryana",
        link: "/ambala-data-center"
      },
      {
        title: "Mohali India",
        link: "/mohali-data-center"
      },
      {
        title: "Bathinda Punjab",
        link: "/bathinda-data-center"
      },
      {
        title: "Karnal Haryana",
        link: "/karnal-data-center"
      },
      {
        title: "Yamuna Nagar",
        link: "/yamuna-nagar-data-center"
      },
      {
        title: "Moga Punjab",
        link: "/moga-data-center"
      },
      {
        title: "Barnala Punjab",
        link: "/barnala-data-center"
      },
    ]
  }
];
const CloudLinks = [
  {
    title: "Cloud",
    link: "/#",
    subLinks: [
      {
        title: "Cloud Server",
        link: "/cloud-server"
      },
      {
        title: "Cloud Storage",
        link: "/cloud-storage"
      },
      {
        title: "Cloud Camera",
        link: "/cloud-camera"
      },
      {
        title: "Cloud PC",
        link: "/cloud-pc"
      },
      {
        title: "Tally on Cloud",
        link: "/tally-on-cloud"
      },
      {
        title: "Cloud Backup",
        link: "/cloud-backup"
      },
      {
        title: "Cloud Dedicated Server",
        link: "/cloud-dedicated-servers"
      },
    ]
  }
];
const WebHostingLinks = [
  {
    title: "Web Hosting",
    link: "/#",
    subLinks: [
      {
        title: "Domain Registration",
        link: "/domain-registration"
      },
      {
        title: "Linux Hosting",
        link: "/linux-hosting"
      },
      {
        title: "Windows Hosting",
        link: "/windows-hosting"
      },
      {
        title: "VPS Hosting",
        link: "/virtual-private-server"
      },
      {
        title: "Dedicated Server",
        link: "/dedciated-server"
      },
      {
        title: "Business Email",
        link: "/business-email"
      },
      {
        title: "SSL Certification",
        link: "/ssl-certification"
      },
    ]
  }
];
const ProductLinks = [
  {
    title: "Product",
    link: "/#",
    subLinks: [
      {
        title: "GPU Server for AI And Machine Learning",
        link: "/gpu-servers"
      },
      {
        title: "Gaming PC",
        link: "/gaming-pc"
      },
      {
        title: "Bare Metal Dedicated Server",
        link: "/bare-metal-dedicated-server"
      },
      {
        title: "ERP & SAP",
        link: "/erp-and-sap"
      },
      {
        title: "Disaster Recovery",
        link: "/disaster-recovery"
      },
      {
        title: "Application Development",
        link: "/application-development"
      },
      {
        title: "CDN and DDOS Protection",
        link: "/cdn-and-ddos-protection"
      },
      {
        title: "Load Balancer",
        link: "/load-balancer"
      },
      {
        title: "Docker & Kubernetes",
        link: "/docker-and-kubernetes"
      },
      {
        title: "Remote Manage Service",
        link: "/remote-manage-service"
      },
    ]
  }
];
const ServicesLinks = [
  {
    title: "Services",
    link: "/#",
    subLinks: [
      {
        title: "Web & App Development",
        link: "/web-app-development"
      },
      {
        title: "Digital Marketing & SEO",
        link: "/digital-marketing-seo"
      },
      {
        title: "Colocation Services",
        link: "/colocation-services"
      },
      {
        title: "File Storage",
        link: "/file-storage"
      },
    ]
  }
];
const ProgramsLinks = [
  {
    title: "Programs",
    link: "/#",
    subLinks: [
      {
        title: "Reseller Program",
        link: "/reseller-program"
      },
      {
        title: "Affiliates Program",
        link: "/affiliates"
      },
      {
        title: "Startup Program",
        link: "/startup-program"
      },
    ]
  }
];

export default SiteMap
