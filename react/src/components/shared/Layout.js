import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaChevronDown, FaCartShopping, FaUserLarge, FaXTwitter, FaInstagram, FaYoutube, FaArrowUp, FaAnglesRight } from "react-icons/fa6";
import ImageIcons from '../imageComponent/ImageIcons';
import { windowScroll } from "../../utils/windowScroll";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { setPrize } from '../../store/counter/counterSlice';
import LiveChat from "./LiveChat";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const prizesign = useSelector((state) => state.planPrize.prize);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [scrollPosition, setScrollPosition] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = useLocation().pathname;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 400) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false)
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);
  const handleDropdownToggle = (i) => {
    setOpenDropdown(openDropdown === i ? null : i);
  };
  return (
    <>
      <header className="shadow-[0px_4px_5px_rgb(0_0_0_/_0.05)]">
        <div className="lg:container mx-auto px-4 py-[10px]">
          <div className="flex justify-between items-center gap-[10px]">
            <Link to="/" className="flex items-center">
              <img src={ImageIcons.logo} className="w-full  md:max-w-[250px] 2xl:max-w-[400px] xl:max-w-[315px] max-md:max-w-[210px]" alt='Logo' />
            </Link>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="block pointer text-[#000] hover:text-[#00A51A] focus:text-[#000] text-3xl focus:outline-none">
                <IoMenu />
              </button>
            </div>
            <div className={`lg:block duration-500 max-lg:fixed max-lg:top-[0px] max-lg:left-[0px] max-lg:bg-[#f4fff5] max-lg:h-[100vh] max-lg:w-full max-lg:overflow-auto z-[111111] ${isMenuOpen ? ' overflow-visible visible ml-0' : 'max-lg:ml-[-100%] max-lg:invisible max-lg:overflow-hidden'}`}>
              <div className="max-lg:flex max-lg:flex-col-reverse">
                <div className="topbar-info">
                  <div className="lg:flex lg:items-center lg:justify-end lg:gap-[20px] max-lg:px-[24px] max-lg:pb-[30px]">
                    <Link to="mailto:help@velosting.com" className="flex items-center gap-[8px] text-[15px] text-[#444444] max-lg:mb-[10px]">
                      <img src={ImageIcons.emailIcon} className="w-full max-w-[18px]" alt='email id' /> help@velosting.com
                    </Link>
                    <Link to="tel:+919056111675" className="flex items-center gap-[8px] text-[15px] text-[#444444] max-lg:mb-[10px]">
                      <img src={ImageIcons.phoneIcon} className="w-full max-w-[18px]" alt='phone no' /> (+91) 9056111675
                    </Link>
                    <div className="max-lg:mb-[10px]">
                      <select
                        className="bg-[#00A51A]/[15%] text-[#000] text-[15px] px-[6px] lg:py-[3px] max-lg:py-[5px] w-[90px] border-
                        
                        none rounded-[5px] focus:border-[#00A51A]/[40%] focus:outline-none"
                        value={prizesign}
                        onChange={(e) => {
                          dispatch(setPrize(e.target.value));
                        }}
                      >
                        {PlansPrize?.map((item, index) => (
                          <option value={item?.value} key={index}>
                            {item?.sign} {item?.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <nav className="max-lg:pt-[10px] max-lg:pb-[24px] max-lg:px-[16px]">
                  <div className="lg:hidden mb-[20px] flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                      <img src={ImageIcons.logo} className="w-full md:max-w-[250px] 2xl:max-w-[400px] xl:max-w-[315px] max-md:max-w-[210px]" alt='Logo' />
                    </Link>
                    <button onClick={() => setIsMenuOpen(false)} className="block pointer text-[#000] hover:text-[#00A51A] focus:text-[#000] text-3xl focus:outline-none">
                      <IoCloseSharp />
                    </button>
                  </div>
                  <ul className="flex items-center flex-wrap lg:justify-end xl:gap-[10px] max-xl:gap-[8px]">
                    {data.navLinks.map((link, i) => (
                      <li key={i} className="lg:relative group lg:w-auto w-full">
                        <Link onClick={() => handleDropdownToggle(i)} to={link.handle} className={`${pathname === link.handle && "!text-[#00A51A]"} font-medium inline-flex w-full items-center xl:gap-[8px] max-xl:gap-[5px] xl:text-[16px] max-xl:text-[15px] xl:px-[15px] max-xl:px-[2px] lg:py-[14px] text-[#000] hover:text-[#00A51A] max-lg:justify-between`}>{link.title} {link.subLinks && (<span onClick={() => handleDropdownToggle(i)} className="text-[13px] w-[20px] h-[20px] flex items-center justify-center">{link.fachevrondown}</span>)}</Link>
                        {link.subLinks && (
                          <ul className={`max-lg:px-[20px] duration-500 lg:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)] lg:group-hover:visible lg:group-hover:h-auto lg:group-hover:overflow-visible grid lg:bg-white text-black lg:absolute lg:w-[175px] xl:w-[220px] relative top-[100%] w-[100%] z-[1111] lg:invisible lg:overflow-hidden lg:h-0 max-lg:before:hidden before:content before:absolute before:top-[-23.5px] before:left-[25px] before:border-b-[#fff] before:border-[12px] before:border-transparent before:-z-10 ${openDropdown === i ? 'max-lg:py-[10px] max-h-[1000px] bg-[#f4fff5] visible duration-700' : 'max-lg:max-h-0 max-lg:invisible max-lg:opacity-0 duration-100'}`}>
                            {link.subLinks.map((item, i) => (
                              <li key={i} className="w-fill">
                                <Link to={item.handle} className={`${pathname === item.handle && "!text-[#fff] bg-[#00A51A]"} font-medium border-b w-full inline-block border-[#3c62e921] xl:text-[15px] lg:text-[14px] max-lg:text-[14px] hover:bg-[#00A51A] hover:text-white xl:px-[15px] lg:px-[10px] lg:py-[10px] max-lg:px-[10px] max-lg:py-[8px]`}>{item.title}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                    <div className="flex xl:gap-[20px] max-xl:gap-[15px] xl:px-[8px] max-xl:px-[5px] max-lg:mt-[20px]">
                      <Link className="text-[#00A51A] hover:text-[#00A51A]" to="#"><FaCartShopping /></Link>
                      <Link className="text-[#00A51A] hover:text-[#00A51A]" to="https://www.velosting.com/index.php?rp=/login"><FaUserLarge /></Link>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer className="bg-[#00A51A]/[5%] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${ImageIcons.footerBg})` }}>
        <div className="lg:container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:py-[50px] py-[30px]">
            <div className="my-[10px] lg:my-[0]">
              <Link to="/" onClick={windowScroll} className="flex items-center">
                <img src={ImageIcons.logo} className="w-full max-w-[270px]" alt='Logo' />
              </Link>
              <div className="my-[24px] pr-[20px]">
                <p className="text-[#000]">Velosting is a leading domain hosting provider, where we aim to offer services to meet the unique requirements of today’s businesses. Our advanced data centres offer top-notch security, reliability and scalability. Join us today and take your business to new heights.</p>
              </div>
              <div className="flex gap-[5px] w-full md:mt-0 mt-[20px]">
                <Link to='https://www.facebook.com/velosting/' target="_blank" className='text-[17px] text-[#000] min-w-[35px] h-[35px] rounded-full bg-[#00A51A]/[20%] hover:bg-[#00A51A] hover:text-[#fff] flex justify-center items-center'> <FaFacebookF /></Link>
                <Link to='https://x.com/velosting_cloud' target="_blank" className='text-[17px] text-[#000] min-w-[35px] h-[35px] rounded-full bg-[#00A51A]/[20%] hover:bg-[#00A51A] hover:text-[#fff] flex justify-center items-center'><FaXTwitter /></Link>
                <Link to='https://www.instagram.com/velosting_cloud_hosting/' target="_blank" className='text-[17px] text-[#000] min-w-[35px] h-[35px] rounded-full bg-[#00A51A]/[20%] hover:bg-[#00A51A] hover:text-[#fff] flex justify-center items-center'> <FaInstagram /></Link>
                <Link to='https://www.linkedin.com/company/velosting/' target="_blank" className='text-[17px] text-[#000] min-w-[35px] h-[35px] rounded-full bg-[#00A51A]/[20%] hover:bg-[#00A51A] hover:text-[#fff] flex justify-center items-center'> <FaLinkedinIn /></Link>
                <Link to='https://www.youtube.com/@velosting' target="_blank" className='text-[17px] text-[#000] min-w-[35px] h-[35px] rounded-full bg-[#00A51A]/[20%] hover:bg-[#00A51A] hover:text-[#fff] flex justify-center items-center'> <FaYoutube /></Link>
              </div>
            </div>
            {footerLinks.map((link, i) => (
              <div className="my-[10px] lg:my-[0]" key={i}>
                <h3 className="text-[#000] font-semibold pb-[8px] md:mb-[30px] max-md:mb-[24px] text-[20px] xl:text-[24px] relative before:content before:left-[0] before:bottom-[0] before:absolute before:h-[1.5px] before:w-[60px] before:bg-[#00A51A]">{link.title}</h3>
                <ul className="grid gap-[10px] sm:gap-[12px] md:gap-[15px]">
                  {link.subLinks.map((item, i) => (
                    <li key={i}>
                      <Link to={item.handle} className={`${pathname === item.handle && "!text-[#00A51A]"} text-[16px] text-[#000] hover:text-[#00A51A] flex items-start gap-[10px]`} onClick={windowScroll}><span><FaAnglesRight className="text-[#00A51A] inline-block" /></span>{item.link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="my-[10px] lg:my-[0]">
              <h3 className="text-[#000] font-semibold pb-[8px] md:mb-[30px] max-md:mb-[24px] text-[20px] xl:text-[24px] relative before:content before:left-[0] before:bottom-[0] before:absolute before:h-[1.5px] before:w-[60px] before:bg-[#00A51A] " >Contact Info</h3>
              <div className="">
                <div className="mb-[15px]">
                  <div className="flex items-start gap-[10px] text-[16px] text-[#000] max-lg:mb-[10px]">
                    <img src={ImageIcons.locationIcon} className="w-full max-w-[29px]" alt='Location' /> B-70, Phase 7, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055
                  </div>
                </div>
                <div className="mb-[15px]">
                  <Link to="mailto:help@velosting.com" className="flex items-start gap-[10px] text-[16px] text-[#000] max-lg:mb-[10px]">
                    <img src={ImageIcons.emailIcon} className="w-full max-w-[24px]" alt='email id' /> help@velosting.com
                  </Link>
                </div>
                <div className="">
                  <Link to="tel:+919056111675" className="flex items-start gap-[10px] text-[16px] text-[#000]">
                    <img src={ImageIcons.phoneIcon} className="w-full max-w-[24px]" alt='phone no' /> (+91) 9056111675
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff]/[50%]">
          <div className="lg:container mx-auto px-4">
            <div className="flex md:justify-between justify-center items-center md:flex-nowrap flex-wrap py-[20px] md:gap-[15px] max-md:gap-[8px]">
              <p className="text-[15px] mb-0 md:text-left text-center md:w-1/2 w-full">© Copyright {currentYear}. All Rights Reserved By VP Broadband Private Limited.</p>
              <p className="text-[15px] mb-0 md:text-right text-center md:w-1/2 w-full">Powered by Digitax India Communications Private Limited</p>
            </div>
          </div>
        </div>
      </footer>
      {/* Contact us button  */}
      <div className="z-50 fixed top-[50%] -translate-y-[50%] rotate-90 md:-right-[44px] max-md:-right-[35px] animate-[animate-bounceTop_4s_infinite_ease-in-out_alternate] ">
        <Link onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }} to="/contact-us" className="bg-[#00A51A] hover:bg-[#000] text-[#fff] md:text-[18px] max-md:text-[14px] md:px-[20px] max-md:px-[12px] md:py-[12px] max-md:py-[8px]">
          Contact Us
        </Link>
      </div>

      <button className={`'group fixed flex justify-center items-center md:right-[30px] duration-500 max-md:right-[15px] bg-[#00A51A] w-[50px] h-[50px] rounded-[10px] z-50' ${scrollPosition ? 'opacity-100 overflow-visible transition-[0.8s] bottom-[100px]' : 'bottom-[102%]'}`}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}>
        <FaArrowUp className="text-[#fff] text-[22px] group-hover:text-[#fff]" />
      </button>

      <LiveChat/>
    </>
  )
}

const data = {
  navLinks: [
    {
      title: "Data Centers",
      handle: "",
      fachevrondown: <FaChevronDown />,
      subLinks: [
        {
          title: "Mumbai India",
          handle: "/mumbai-data-center"
        },
        {
          title: "Delhi Noida",
          handle: "/noida-data-center"
        },
        {
          title: "Ambala Haryana",
          handle: "/ambala-data-center"
        },
        {
          title: "Mohali India",
          handle: "/mohali-data-center"
        },
        {
          title: "Bathinda Punjab",
          handle: "/bathinda-data-center"
        },
        {
          title: "Karnal Haryana",
          handle: "/karnal-data-center"
        },
        {
          title: "Yamuna Nagar",
          handle: "/yamuna-nagar-data-center"
        },
        {
          title: "Moga Punjab",
          handle: "/moga-data-center"
        },
        {
          title: "Barnala Punjab",
          handle: "/barnala-data-center"
        }
      ]
    },
    {
      title: "Cloud",
      handle: "",
      fachevrondown: <FaChevronDown />,
      subLinks: [
        {
          title: "Cloud VPS Server",
          handle: "/cloud-server"
        },
        {
          title: "Cloud Storage",
          handle: "/cloud-storage"
        },
        {
          title: "Cloud Camera",
          handle: "/cloud-camera"
        },
        {
          title: "Cloud PC",
          handle: "/cloud-pc"
        },
        {
          title: "Next Cloud",
          handle: "/next-cloud"
        },
        // {
        //   title: "Get VPS Server",
        //   handle: "/get-vps-server"
        // },
        // {
        //   title: "Get Cloud Dedicated Server",
        //   handle: "/get-cloud-dedicated-server"
        // },
        {
          title: "Tally on Cloud",
          handle: "/tally-on-cloud"
        },
        {
          title: "Cloud Backup",
          handle: "/cloud-backup"
        },
        {
          title: "Cloud Dedicated Server",
          handle: "/cloud-dedicated-servers"
        }
      ]
    },
    {
      title: "Web Hosting",
      handle: "",
      fachevrondown: <FaChevronDown />,
      subLinks: [
        {
          title: "Domain Registration",
          handle: "/domain-registration"
        },
        {
          title: "Linux Hosting",
          handle: "/linux-hosting"
        },
        {
          title: "Windows Hosting",
          handle: "/windows-hosting"
        },
        {
          title: "VPS Hosting",
          handle: "/virtual-private-server"
        },
        {
          title: "Dedicated Server",
          handle: "/dedciated-server"
        },
        {
          title: "Business Email",
          handle: "/business-email"
        },
        {
          title: "SSL Certification",
          handle: "/ssl-certification"
        }
      ]
    },
    {
      title: "Product",
      handle: "",
      fachevrondown: <FaChevronDown />,
      subLinks: [
        {
          title: "GPU Server for AI And Machine Learning",
          handle: "/gpu-servers"
        },
        {
          title: "Gaming PC",
          handle: "/gaming-pc"
        },
        {
          title: "ERP & SAP",
          handle: "/erp-and-sap"
        },
        {
          title: "Bare Metal Dedicated Server",
          handle: "/bare-metal-dedicated-server"
        },
        {
          title: "Disaster Recovery",
          handle: "/disaster-recovery"
        },
        // {
        //   title: "Application Development",
        //   handle: "/application-development"
        // },
        {
          title: "CDN and DDOS Protection",
          handle: "/cdn-and-ddos-protection"
        },
        {
          title: "Load Balancer",
          handle: "/load-balancer"
        },
        {
          title: "Docker & Kubernetes",
          handle: "/docker-and-kubernetes"
        },
        {
          title: "Remote Manage Service",
          handle: "/remote-manage-service"
        }
      ]
    },
    {
      title: "Services",
      handle: "",
      fachevrondown: <FaChevronDown />,
      subLinks: [
        {
          title: "Web & App Development",
          handle: "/web-app-development"
        },
        {
          title: "Digital Marketing & SEO",
          handle: "/digital-marketing-seo"
        },
        {
          title: "Colocation Services",
          handle: "/colocation-services"
        },
        {
          title: "File Storage",
          handle: "/file-storage"
        }
      ]
    },
    {
      title: "Programs",
      handle: "",
      fachevrondown: <FaChevronDown />,
      subLinks: [
        {
          title: "Reseller Program",
          handle: "/reseller-program"
        },
        {
          title: "Affiliates Program",
          handle: "/affiliates"
        },
        {
          title: "Startup Program",
          handle: "/startup-program"
        }
      ]
    }
  ]
}

const footerLinks = [
  {
    title: "Web Hosting",
    subLinks: [
      {
        link: "Domain Registration",
        handle: "/domain-registration"
      },
      {
        link: "Linux Hosting",
        handle: "/linux-hosting"
      },
      {
        link: "Windows Hosting",
        handle: "/windows-hosting"
      },
      {
        link: "VPS Hosting",
        handle: "/virtual-private-server"
      },
      {
        link: "Dedciated Server",
        handle: "/dedciated-server"
      },
      {
        link: "Business Email",
        handle: "/business-email"
      },
      {
        link: "SSL Certification",
        handle: "/ssl-certification"
      }
    ]
  },
  {
    title: "Company Info",
    subLinks: [
      {
        link: "About Us",
        handle: "/about-us"
      },
      {
        link: "Careers With Us",
        handle: "/careers-with-us"
      },
      {
        link: "Contact Us",
        handle: "/contact-us"
      },
      {
        link: "Refund Policy",
        handle: "/refund-policy"
      },
      {
        link: "Privacy Policy",
        handle: "/privacy-policy"
      },
      {
        link: "Terms & Conditions",
        handle: "/terms-and-conditions"
      },
      {
        link: "FAQs",
        handle: "/faqs"
      },
      {
        link: "Sitemap",
        handle: "/sitemap"
      }
    ]
  },
];
const PlansPrize = [
  {
    title: "INR",
    value: "INR",
    sign: "₹"
  },
  {
    title: "USD",
    value: "USD",
    sign: "$"
  }
]
export default Layout
