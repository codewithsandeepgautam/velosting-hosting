import React from 'react'
import ImageIcons from '../imageComponent/ImageIcons';
import { Link } from 'react-router-dom';
import { windowScroll } from '../../utils/windowScroll';
const ChooseYourPlan = () => {
  return (
    <section className="md:pt-[30px] md:pb-[70px] max-md:pb-[50px] bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${ImageIcons.domainsecbg})` }}>
      <div className="lg:container mx-auto px-4 py-[10px]">
        <div className='text-center max-w-[1024px] mx-auto'>
          <h2>Choose Your <span className='text-[#00A51A]'>Plan</span></h2>
          <p className='md:mb-[35px] max-md:mb-[20px]'>We offer a wide range of hosting solutions to our users which have been designed to meet their unique needs. We ensure competitive pricing for our domain registration, server solutions and web hosting services. Join Velosting for your business and enjoy seamless performances supported by your trusted partners.</p>
        </div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[20px] mt-[40px]'>
          <div className='relative bg-[#fff] border-[1px] border-[#00A51A]/[15%] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
            <div className='bg-[#00A51A] pt-[20px] pb-[50px] px-[20px]'>
              <h4 className='mb-0 text-center text-[#fff]'>cPanel Hosting</h4>
            </div>
            <div className='bg-[#00A51A]/[5%] pb-[24px] px-[20px]'>
              <div className='text-center mb-[20px]'>
                <img src={ImageIcons.cpanelicon} alt='cpanel icon' className='w-full max-w-[70px] mx-auto -mt-[33px]' />
              </div>
              <p className='text-[15px] text-center text-[#646773] font-medium mb-[5px]'>Starting From</p>
              <h3 className='text-center font-bold mb-0'>₹129.00</h3>
            </div>
            <ul className='max-w-[300px] mx-auto pt-[30px] pb-[120px] pl-[45px] pr-[20px]'>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />SSD space <span className='font-semibold'>10GB</span>
              </li>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />Host Single Website
              </li>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />cPanel Control Panel
              </li>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />No. of Visitor <span className='font-semibold'>10000</span>
              </li>
              <li className='relative text-[#000]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' /><span className='font-semibold'>Free</span> SSL
              </li>
            </ul>
            <div className='absolute w-full bottom-[30px] left-0 right-0'>
              <Link to="/linux-hosting"><button className="block w-full max-w-[165px] mx-auto rounded-[5px] px-[20px] py-[12px] border border-[#00A51A] font-medium text-[#00A51A] bg-transparent hover:text-[#fff] hover:bg-[#00A51A] shadow-[0px_4px_5px_rgb(0_0_0_/_0.10)]" onClick={windowScroll}>Buy Now</button></Link>
            </div>
          </div>
          <div className='relative bg-[#fff] border-[1px] border-[#00A51A]/[15%] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
            <div className='bg-[#00A51A] pt-[20px] pb-[50px] px-[20px]'>
              <h4 className='mb-0 text-center text-[#fff]'>Virtual Private Servers</h4>
            </div>
            <div className='bg-[#00A51A]/[5%] pb-[24px] px-[20px]'>
              <div className='text-center mb-[20px]'>
                <img src={ImageIcons.virtualicon} alt='cpanel icon' className='w-full max-w-[70px] mx-auto -mt-[33px]' />
              </div>
              <p className='text-[15px] text-center text-[#646773] font-medium mb-[5px]'>Starting From</p>
              <h3 className='text-center font-bold mb-0'>₹699.00</h3>
            </div>
            <ul className='max-w-[300px] mx-auto pt-[30px] pb-[120px] pl-[45px] pr-[20px]'>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />RAM <span className='font-semibold'>2GB</span>
              </li>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />CPU <span className='font-semibold'>1vcpu</span>
              </li>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />Storage <span className='font-semibold'>50GB</span>
              </li>
              <li className='relative text-[#000]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />Disk Type <span className='font-semibold'>SSD</span>
              </li>
            </ul>
            <div className='absolute w-full bottom-[30px] left-0 right-0'>
              <Link to="/virtual-private-server"><button className="block w-full max-w-[165px] mx-auto rounded-[5px] px-[20px] py-[12px] border border-[#00A51A] font-medium text-[#00A51A] bg-transparent hover:text-[#fff] hover:bg-[#00A51A] shadow-[0px_4px_5px_rgb(0_0_0_/_0.10)]" onClick={windowScroll}>Buy Now</button></Link>
            </div>
          </div>
          <div className='relative bg-[#fff] border-[1px] border-[#00A51A]/[15%] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
            <div className='bg-[#00A51A] pt-[20px] pb-[50px] px-[20px]'>
              <h4 className='mb-0 text-center text-[#fff]'>Cloud Dedicated Server</h4>
            </div>
            <div className='bg-[#00A51A]/[5%] pb-[24px] px-[20px]'>
              <div className='text-center mb-[20px]'>
                <img src={ImageIcons.clouddedicatedicon} alt='cpanel icon' className='w-full max-w-[70px] mx-auto -mt-[33px]' />
              </div>
              <p className='text-[15px] text-center text-[#646773] font-medium mb-[5px]'>Starting From</p>
              <h3 className='text-center font-bold mb-0'>₹3,999.00</h3>
            </div>
            <ul className='max-w-[300px] mx-auto pt-[30px] pb-[120px] pl-[45px] pr-[20px]'>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />RAM <span className='font-semibold'>16GB</span>
              </li>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />CPU <span className='font-semibold'>4vcpu</span>
              </li>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />Storage <span className='font-semibold'>100GB</span>
              </li>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />Disk Type <span className='font-semibold'>SSD</span>
              </li>
            </ul>
            <div className='absolute w-full bottom-[30px] left-0 right-0'>
              <Link to="/cloud-dedicated-servers"><button className="block w-full max-w-[165px] mx-auto rounded-[5px] px-[20px] py-[12px] border border-[#00A51A] font-medium text-[#00A51A] bg-transparent hover:text-[#fff] hover:bg-[#00A51A] shadow-[0px_4px_5px_rgb(0_0_0_/_0.10)]" onClick={windowScroll}>Buy Now</button></Link>
            </div>
          </div>
          <div className='relative bg-[#fff] border-[1px] border-[#00A51A]/[15%] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
            <div className='bg-[#00A51A] pt-[20px] pb-[50px] px-[20px]'>
              <h4 className='mb-0 text-center text-[#fff]'>GPU Servers</h4>
            </div>
            <div className='bg-[#00A51A]/[5%] pb-[24px] px-[20px]'>
              <div className='text-center mb-[20px]'>
                <img src={ImageIcons.gpuservers} alt='cpanel icon' className='w-full max-w-[70px] mx-auto -mt-[33px]' />
              </div>
              <p className='text-[15px] text-center text-[#646773] font-medium mb-[5px]'>Starting From</p>
              <h3 className='text-center font-bold mb-0'>₹28,999.00</h3>
            </div>
            <ul className='max-w-[300px] mx-auto pt-[30px] pb-[120px] pl-[45px] pr-[20px]'>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />10 Core Intel E5-2696 V4
              </li>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />RAM <span className='font-semibold'>64GB</span>
              </li>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />SSD <span className='font-semibold'>1 TB</span>
              </li>
              <li className='relative text-[#000] mb-[10px]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' />Bandwidth <span className='font-semibold'>5 TB</span>
              </li>
              <li className='relative text-[#000]'>
                <img src={ImageIcons.thickicon} alt='icon' className='w-[14px] absolute -left-[24px] top-[6px]' /><span className='font-semibold'>P5000</span> GPU
              </li>
            </ul>
            <div className='absolute w-full bottom-[30px] left-0 right-0'>
              <Link to="/gpu-servers"><button className="block w-full max-w-[165px] mx-auto rounded-[5px] px-[20px] py-[12px] border border-[#00A51A] font-medium text-[#00A51A] bg-transparent hover:text-[#fff] hover:bg-[#00A51A] shadow-[0px_4px_5px_rgb(0_0_0_/_0.10)]" onClick={windowScroll}>Buy Now</button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ChooseYourPlan
