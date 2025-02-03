import React from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import CtaRegister from '../components/shared/CtaRegister';
import LetsGetStarted from '../components/shared/LetsGetStarted';
import InquiryForm from '../components/shared/InquiryForm';

const MumbaiDataCenter = () => {
    return (
        <Layout>
            {/* Hero Banner Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[length:100%_100%] bg-top bg-no-repeat" style={{ backgroundImage: `url(${ImageIcons.domainsecbg})` }}>
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[40px] items-center'>
                        <div className='md:text-left text-center'>
                            <h1 className='h2 font-bold md:mb-[20px] max-md:mb-[15px]'>{heroSection.titleh2}</h1>
                            <p className='mb-[15px]'>{heroSection.paraone}</p>
                            <p className='mb-[15px]'>{heroSection.paratwo}</p>
                            <p className='mb-0'>{heroSection.parathree}</p>
                        </div>
                        <div>
                            <img src={heroSection.heroimg} alt={heroSection.heroalt} className='rounded-[90px_2px_90px_2px] w-full md:max-w-[700px] max-md:max-w-[550px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Mumbai Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[1024px] mx-auto'>
                        <h2>Why Choose Velosting <span className='text-[#00A51A]'>Data Center</span> in Mumbai, Maharashtra.</h2>
                        <p className='md:mb-[40px] max-md:mb-[30px]'>{whyChooseData.para}</p>
                    </div>
                    <div className='flex md:items-center max-md:flex-col md:gap-[40px]'>
                        <div className='md:w-1/3 max-md:order-1'>
                            {whyChooseData.dataColmone.map((item, i)=>(
                                <div key={i} className='mb-[40px]'>
                                    <div className='flex items-center md:justify-end gap-[20px] mb-[15px]'>
                                        <div className='md:order-2 flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                            <img src={item.iconpic} alt={item.iconalt} className='w-full max-w-[50px] mx-auto' />
                                        </div>
                                        <h4 className='md:order-1 mb-0'>{item.titleh4}</h4>
                                    </div>
                                    <p className='text-[#646773] text-[15px] mb-0 md:text-right'>{item.para}</p>
                                </div>
                            ))}
                        </div>
                        <div className='md:w-1/3 max-md:order-3'>
                            {whyChooseData.dataColmtwo.map((item, i)=>(
                                <div key={i} className='flex flex-col md:items-center max-md:flex-col max-md:mb-[30px]'>
                                    <div className='md:order-2 md:mt-[20px] max-md:mb-[40px]'>
                                        <div className='flex md:flex-col items-center md:gap-[15px] gap-[20px] mb-[15px]'>
                                            <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                                <img src={item.iconpic} alt={item.iconalt} className='w-full max-w-[60px] mx-auto' />
                                            </div>
                                            <h4 className='md:text-center mb-0'>{item.titleh4}</h4>
                                        </div>
                                        <p className='md:text-center text-[#646773] text-[15px] mb-0'>{item.para}</p>
                                    </div>
                                    <img src={item.imgpic} alt={item.imppicalt} className='md:order-1 w-full max-w-[600px] mx-auto' />
                                </div>
                            ))}
                        </div>
                        <div className='md:w-1/3 max-md:order-2'>
                            {whyChooseData.dataColmthree.map((item, i)=>(
                                <div key={i} className='mb-[40px]'>
                                    <div className='flex items-center gap-[20px] mb-[15px]'>
                                        <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                            <img src={item.iconpic} alt={item.iconalt} className='w-full max-w-[50px] mx-auto' />
                                        </div>
                                        <h4 className='mb-0'>{item.titleh4}</h4>
                                    </div>
                                    <p className='text-[#646773] text-[15px] mb-0'>{item.para}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Form Section*/}
            <InquiryForm />

            {/* Velosting Data Center in Mumbai: Location and Accessibility */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[15px] items-center'>
                        <div className='max-md:order-2'>
                            <img src={velostingDataCenter.imgpic} alt={velostingDataCenter.alt} className='rounded-[90px_2px_90px_2px] w-full md:max-w-[670px] max-md:max-w-[550px] mx-auto' />
                        </div>
                        <div className='max-md:order-1'>
                            <h2>{velostingDataCenter.titleh2}</h2>
                            <p className='mb-[15px]'>{velostingDataCenter.paraone}</p>
                            <p className='md:mb-[30px]'>{velostingDataCenter.paratwo}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features of Our Data Center in Mumbai */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='block'>
                        <h2>{velostingDataCenter.subtitle}</h2>
                        <ul className='block md:columns-3 md:gap-x-[50px] md:pt-[15px] max-md:pt-[10px] pl-[30px]'>
                            {velostingDataCenter.listTxt.map((item, i) => (
                                <li key={i} className='relative text-[#000] mb-[10px]'>
                                    <img src={velostingDataCenter.faCheckCircle} alt={velostingDataCenter.altfaCheck} className='w-[20px] absolute -left-[30px]' />{item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CtaRegister />

            {/* Benefits of Our data Center for Mumbai Businesses Section */}
            <section className="py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div>
                            <h2>{benefitsDataCenter.titleh2}</h2>
                            <p className='mb-[15px]'>{benefitsDataCenter.para}</p>
                            <ul className='block pt-[5px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <span className='font-semibold'>Server Colocation:</span> {benefitsDataCenter.subpara}
                                    {benefitsDataCenter.listTxt && <ul className='block md:columns-2 md:gap-x-[50px] pt-[15px] pl-[30px]'>
                                            {benefitsDataCenter.listTxt.map((item, i) => (
                                                <li key={i} className='relative text-[#000] mb-[10px]'>
                                                    <img src={benefitsDataCenter.faCheckCircle} alt={benefitsDataCenter.altfaCheck} className='w-[20px] absolute -left-[30px]' />{item}
                                                </li>
                                            ))}
                                        </ul>}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src={benefitsDataCenter.imgpic} alt={benefitsDataCenter.imgalt} className='w-full md:max-w-[650px] max-md:max-w-[550px] mx-auto rounded-[2px_90px]' />
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px] items-center'>
                        {benefitsDataCenter.contentItem.map((item, i) => (
                            <div key={i} className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                                <div className='flex items-center gap-[20px] mb-[15px]'>
                                    <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={item.iconItem} alt={item.altItem} className='w-full max-w-[50px] mx-auto' />
                                    </div>
                                    <h4 className='mb-0'>{item.titleh4}</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0'>{item.txtItem}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Let’s Get Started Section */}
            <LetsGetStarted />
        </Layout>
    )
}


const whyChooseData = {
    titleh2: "Why Choose Velosting Data Center in Mumbai, Maharashtra.",
    para: "Velosting makes itself a unique choice due to many reasons which are mentioned below:",
    dataColmone: [
        {
            iconpic: ImageIcons.iconone,
            iconalt: "Advanced Facilities",
            titleh4: "Advanced Facilities",
            para: "With our advanced technology, we ensure that your infrastructure will always be in optimal condition, as we provide an efficient cooling system, power supply, making sure all your business operations run smoothly."
        },
        {
            iconpic: ImageIcons.iconfive,
            iconalt: "Advanced Security",
            titleh4: "Advanced Security",
            para: "Both physical and advanced security is guaranteed with the help of strong surveillance systems, biometrics, advanced detection."
        }
    ],
    dataColmtwo: [
        {
            iconpic: ImageIcons.encryptedicon,
            iconalt: "Scalability and Flexibility",
            titleh4: "Scalability and Flexibility",
            para: "Users can scale the services according to their changing needs.",
            imgpic: ImageIcons.datacentermid,
            imppicalt: "Data Center"
        }
    ],
    dataColmthree: [
        {
            iconpic: ImageIcons.iconfour,
            iconalt: "High Availability and Uptime",
            titleh4: "High Availability and Uptime",
            para: "We offer redundant power supply and backup generators, eliminating issues related to downtime and making sure that all your operations run seamlessly."
        },
        {
            iconpic: ImageIcons.icontwo,
            iconalt: "Strategic Locations",
            titleh4: "Strategic Locations",
            para: "Our Mumbai DC is located at a strategic location, providing users with easy access."
        }
    ]
}

const heroSection = {
   titleh2: "Mumbai Data Center",
   paraone: "Mumbai being the financial capital of India, has become one the biggest IT hubs and home to the thriving business ecosystem in the country. Industries such as finance, media, e-commerce etc which have got established at a large scale, generate a vast amount of data, leading to a huge demand for advanced technological solutions for storing this data and in this case, there are no other services better than data centers.",
   paratwo: "Therefore, the demand for data centers in Mumbai is growing as businesses have started to rely upon digital technology and data center companies in Mumbai are providing the basis of networked world in today’s digital ages. Moreover, Mumbai itself is an ideal setting for data center companies in terms of providing a favourable socio-economic climate.",
   parathree: "Well, considering the increasing demand for data storage services, Velosting has built an innovative data center  in Mumbai providing users with advanced server solutions.",
   heroimg: ImageIcons.mumbaipictwo,
   heroalt: "Data Center in Mumbai"
}

const velostingDataCenter = {
    titleh2: "Velosting Data Center in Mumbai: Location and Accessibility",
    paraone: "As it has been projected that with the usage of 5G, AI, IoT and other technologies, the demand for data is going to rise profoundly, so we at Velosting, have established our data centers in Mumbai, Noida, Ambala, Delhi and Mohali, providing businesses with the best solutions for enhanced security, scalability, flexibility and disaster recovery & backup solutions.",
    paratwo: "Our data center company in Mumbai is located in Andheri west, which provides businesses with easy access. Our proper address details include Office No. 211, Shalimar Morya Park, New Link Rd, Opp. Infinity Mall, Malad, Kanchpada, Andheri West, Mumbai, Maharashtra 400053. Our convenient and reliable data center in Mumbai, Maharashtra offers advanced infrastructure fulfilling all your data needs along with keeping you connected. With us, you never need to be anxious about security, efficiency, and accessibility, as we ensure helping you take your business to new heights.",
    subtitle: "Key Features of Our Data Center in Mumbai",
    listTxt: ["Our state-of-the-art data center covers 1000 sq ft floor space.", "We have 1500 Racks in our data center.", "It is located at a very strategic location, close to the Mumbai market.", "We hold ISO 270001 certification of data security.", "We provide businesses with advanced facilities like efficient cooling systems, power management and round the clock local support.", "Telecom carriers and ISPs are provided with high-speed connectivity.", "We, at Velosting data center in Mumbai have interconnectivity to National Internet Exchange of India (NIXI) and other exchanges.", "Our intelligent cooling systems are capable of dynamically adjusting the airflow in order to maintain optimal temperatures.", "Our services are expandable, allowing users to expand their services from a single rack to multiple racks.", "Users are provided with a multi layer which includes physical security, network, logical security, DDoS, biometrics and password based access.", "Remote Management and KVM access are also one of our top features.", "N+N UPS redundancy system has been set up, ensuring uninterrupted business operations.", "Along with this, we offer cloud and backup ready services, ensuring your data is never lost."],
    imgpic: ImageIcons.whyusimg2,
    imgalt: "Data Center in Mumbai",
    faCheckCircle: ImageIcons.faCheckCircle,
    altfaCheck: "Green Circle Tick",
}

const benefitsDataCenter = {
    titleh2: "Benefits of Our data Center for Mumbai Businesses",
    para: "Considering the needs of businesses in Mumbai, we offer a broad spectrum of services, unique to each business. Some of our basic features include.",
    subpara: "Businesses can house their IT infrastructure in our secure and safe data centers. Our services include.",
    listTxt: ["Smart Racks", "Power Shells", "Rack Space: 1U / 2U, Qtr Rack, half rack. Full rack.", "Secure CAGE", "Dedicated bandwidth 1-40gig", "Shared firewall", "Shared bandwidth with low cost datatrasfer", "Cross connects", "Both Rated power/consumed power option", "Dedicated Metre"],
    imgpic: ImageIcons.whyusimg1,
    imgalt: "Benefits Data Center Mumbai",
    faCheckCircle: ImageIcons.faCheckCircle,
    altfaCheck: "Green Circle Tick",
    contentItem: [
        {
            iconItem: ImageIcons.iconlinuxnine,
            alticonItem: "Physical Migration",
            titleh4: "Physical Migration",
            txtItem: "We provide users with a wide range of physical migration services, making relocation easy and convenient." 
        },
        {
            iconItem: ImageIcons.iconlinuxfour,
            altItem: "Cross Connects",
            titleh4: "Cross Connects",
            txtItem: "Get a high speed connection within your equipment and other network providers." 
        },
        {
            iconItem: ImageIcons.iconlinuxfive,
            altItem: "Smart Hands",
            titleh4: "Smart Hands",
            txtItem: "Get technical support for installation, configuration etc." 
        },
        {
            iconItem: ImageIcons.iconlinuxthree,
            altItem: "Secure Cage with Multi-Factor Authentication",
            titleh4: "Secure Cage with Multi-Factor Authentication",
            txtItem: "For extra security, get our secure cages which can only be accessed by biometrics or passwords." 
        },
        {
            iconItem: ImageIcons.iconlinuxsix,
            altItem: "Secure Office Space",
            titleh4: "Secure Office Space",
            txtItem: "These services are the perfect solutions for businesses which need physical presence near to their infrastructure." 
        },
        {
            iconItem: ImageIcons.iconlinuxten,
            altItem: "Value-Added Services",
            titleh4: "Value-Added Services",
            txtItem: "Enhance your IT operations with our value added services like managed colocation, consulting and recovery services." 
        }
    ]
}

export default MumbaiDataCenter
