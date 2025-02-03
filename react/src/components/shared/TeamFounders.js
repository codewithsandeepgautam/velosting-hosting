import React from "react";
import ImageIcons from '../imageComponent/ImageIcons';

const TeamFounders = () => {
    return (
        <section className="md:pb-[70px] max-md:pb-[50px]">
            <div className="lg:container mx-auto px-4">
                <div className='text-center'>
                    <h2 className='md:mb-[20px] max-md:mb-[15px] text-center'>Founders of The Velosting</h2>
                </div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    <div className="md:mt-[90px] max-md:mt-[75px]">
                        <div className="bg-white text-center p-[15px] rounded-[10px] shadow-[0_0_1.25rem_rgba(108,_118,_134,_0.1)] duration-500 hover:bg-[#00A51A] group">
                            <div className="md:p-[25px] max-md:p-[15px] border-dashed border-[1px] border-[#ddd]">
                                <img src={ImageIcons.presidentpic} alt="Ranjit Singh Sandhu" className="bg-[#e6eaed] mx-auto object-cover object-top rounded-full md:w-[150px] max-md:w-[110px] md:h-[150px] max-md:h-[110px] md:mt-[-100px] max-md:mt-[-78px] shadow-[5px_8.66px_30px_0px_rgba(0,0,0,0.15)]" />
                                <h3 className="md:text-[24px] max-md:text-[20px] md:mt-[20px] max-md:mt-[10px] md:mb-[10px] max-md:mb-[5px] group-hover:text-[#ffffff]">Ranjit Singh Sandhu</h3>
                                <h4 className="md:text-[18px] max-md:text-[16px] text-[#888888] my-0 group-hover:text-[#ffffff]">President Emeritus</h4>
                                <p className="md:text-[15px] max-md:text-[14px] md:mt-[20px] max-md:mt-[10px] mb-[0px] group-hover:text-[#ffffff]">Ranjit Singh Sandhu's passion for technology motivated him to launch Velosting in order to revolutionise the digital landscape. His role in driving the company’s strategic direction and growth, has been exceptional. His knowledge regarding infrastructure management, cloud computing, and data centre operations has been indispensable in establishing Velosting as a reputed company in the industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-[90px] max-md:mt-[75px]">
                        <div className="bg-white text-center p-[15px] rounded-[10px] shadow-[0_0_1.25rem_rgba(108,_118,_134,_0.1)] duration-500 hover:bg-[#00A51A] group">
                            <div className="md:p-[25px] max-md:p-[15px] border-dashed border-[1px] border-[#ddd]">
                                <img src={ImageIcons.ceopic} alt="Navjot Singh Sandhu" className="bg-[#e6eaed] mx-auto object-cover object-top rounded-full md:w-[150px] max-md:w-[110px] md:h-[150px] max-md:h-[110px] md:mt-[-100px] max-md:mt-[-78px] shadow-[5px_8.66px_30px_0px_rgba(0,0,0,0.15)]" />
                                <h3 className="md:text-[24px] max-md:text-[20px] md:mt-[20px] max-md:mt-[10px] md:mb-[10px] max-md:mb-[5px] group-hover:text-[#ffffff]">Navjot Singh Sandhu</h3>
                                <h4 className="md:text-[18px] max-md:text-[16px] text-[#888888] my-0 group-hover:text-[#ffffff]">CEO/MD</h4>
                                <p className="md:text-[15px] max-md:text-[14px] md:mt-[20px] max-md:mt-[10px] mb-[0px] group-hover:text-[#ffffff]">Navjot Singh Sandhu’s expertise in network security and enterprise solutions, has been crucial in developing robust, secure, and scalable hosting solutions. His commitment towards exceptional customer support and building long-term client relationships, assisted in building a reputation in the industry. With his forward thinking and strategic insights, Velsoting has always been able to meet the varying needs of the clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-[90px] max-md:mt-[75px]">
                        <div className="bg-white text-center p-[15px] rounded-[10px] shadow-[0_0_1.25rem_rgba(108,_118,_134,_0.1)] duration-500 hover:bg-[#00A51A] group">
                            <div className="md:p-[25px] max-md:p-[15px] border-dashed border-[1px] border-[#ddd]">
                                <img src={ImageIcons.ctopic} alt="Dr. Pawanpreet Dhaliwal" className="bg-[#e6eaed] mx-auto object-cover object-top rounded-full md:w-[150px] max-md:w-[110px] md:h-[150px] max-md:h-[110px] md:mt-[-100px] max-md:mt-[-78px] shadow-[5px_8.66px_30px_0px_rgba(0,0,0,0.15)]" />
                                <h3 className="md:text-[24px] max-md:text-[20px] md:mt-[20px] max-md:mt-[10px] md:mb-[10px] max-md:mb-[5px] group-hover:text-[#ffffff]">Dr. Pawanpreet Dhaliwal</h3>
                                <h4 className="md:text-[18px] max-md:text-[16px] text-[#888888] my-0 group-hover:text-[#ffffff]">CTO/Director</h4>
                                <p className="md:text-[15px] max-md:text-[14px] md:mt-[20px] max-md:mt-[10px] mb-[0px] group-hover:text-[#ffffff]">Pawanpreet Dhaliwal co-founded Velosting with his vision of providing top-notch web hosting solutions and cloud services. As he has always been focused towards streamlining operations and improving the delivery of our services, he has played a huge role in development of innovative solutions and assuring quality. Velosting has become one of the leading providers of the hosting services only because of his commitment to deliver excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamFounders;