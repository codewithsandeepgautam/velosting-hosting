import React, { useState, useEffect } from 'react'
import { IoSearch } from "react-icons/io5";
import ImageIcons from '../imageComponent/ImageIcons';
import { PostRequest } from '../../utils/requests';
import { Link } from 'react-router-dom';
const SearchDomain = () => {
	const [setData] = useState("");
	const [domain, setDomain] = useState({
		domainName: "",
		domainExtension: ""
	});
	const nameHandler = (e) => {
		const inputValue = e.target.value;
		const alphaValue = inputValue.replace(/[^A-Za-z\s]/g, '');
		if (alphaValue.length <= 20) {
			setDomain(prevState => ({ ...prevState, domainName: alphaValue }));
		}
	};
	const getDomains = async () => {
		try {
			const response = await PostRequest(`${process.env.REACT_APP_URL}/domain`, {
				domain: domain.domainName + domain.domainExtension
			});
			setData(response.data.status);
		} catch (error) {
			console.error('Error fetching domain from API:', error);
		}
	};
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	getDomains();
	// };
	useEffect(() => {
		getDomains();
		// eslint-disable-next-line 
	}, [domain]);
	return (
		<section className="bg-[#00A51A]/[5%] py-[35px]">
			<div className="lg:container mx-auto px-4 py-[10px]">
				<div className='relative bg-[#fff] md:px-[30px] max-md:px-[15px] md:py-[40px] max-md:py-[30px] shadow-[0px_4px_5px_rgb(0_0_0_/_0.07)] rounded-[10px] max-w-[1024px] mx-auto'>
					<img src={ImageIcons.imgcircledomain} alt='Domain Bg Pic' className='w-full lg:max-w-[170px] max-lg:max-w-[100px] absolute bottom-0 left-0' />
					<h2 className='text-center text-[#000] mb-[30px]'>Find Your Perfect Domain Name</h2>
					<form className="max-w-[720px] mx-auto mb-[30px]">
						<div className="w-full relative flex">
							<input type="search" name="domainName" id="default-search" className="block w-full md:py-[20px] max-md:py-[15px] md:text-[16px] max-md:text-[15px] text-[#646773] md:ps-[26px] max-md:ps-[15px] md:pe-[280px] max-md:pe-[133px] rounded-full shadow-[0px_5px_15px_rgb(0_0_0_/_0.2)] focus:outline-none bg-[#fff]" value={domain.domainName} onChange={nameHandler} placeholder="Search domain name..." required />
							<select id="countries" className="inline-block md:max-w-[110px] max-md:max-w-[80px] text-[#646773] md:text-[16px] max-md:text-[15px] bg-transparent py-[5px] md:px-[15px] max-md:px-[7px] focus:outline-none absolute md:right-[160px] max-md:right-[55px] top-[50%] -translate-y-[50%] border-s-[2px] border-[#EEEEEE]" onChange={(e) => {
								setDomain(data => ({
									...data,
									domainExtension: e.target.value
								}));
							}}>
								{domainData?.map((item, index) => (
									<option value={item?.value} key={index}>
										{item?.title}
									</option>
								))}</select>
							<Link to={`https://www.velosting.com/cart.php?a=add&domain=register&query=${domain.domainName + domain.domainExtension}`} className="inline-flex items-center justify-center gap-[8px] bg-[#00A51A] text-[#fff] text-[16px] md:py-[14px] md:px-[27px] max-md:p-[10px] rounded-full absolute md:right-[6px] max-md:right-[4px] top-[50%] -translate-y-[50%] md:ml-2 max-md:ml-1 hover:bg-[#00A51A]/[85%] hover:text-[#fff] duration-[400ms,700ms]"><IoSearch size={20} /><span className='max-md:hidden'>Search</span></Link>
						</div>
					</form>
					{/* {data && <p>{data}</p>} */}
					<div className='flex flex-wrap justify-center md:gap-[20px] max-md:gap-[10px]'>
						<div className='relative md:border-e-[2px] md:border-[#ddd] md:pe-[20px] max-md:px-[8px] max-md:text-center'>
							<p className='mb-[5px] text-[#00A51A] font-medium max-md:text-[15px]'>.com</p>
							<h4 className='mb-0 text-[18px] font-semibold max-md:text-[17px]'>₹854.10 /yr</h4>
						</div>
						<div className='relative md:border-e-[2px] md:-[#ddd] md:pe-[20px] max-md:px-[8px] max-md:text-center'>
							<p className='mb-[5px] text-[#00A51A] font-medium max-md:text-[15px]'>.in</p>
							<h4 className='mb-0 text-[18px] font-semibold max-md:text-[17px]'>₹2,596.50 /yr</h4>
						</div>
						<div className='relative md:border-e-[2px] md:border-[#ddd] md:pe-[20px] max-md:px-[8px] max-md:text-center'>
							<p className='mb-[5px] text-[#00A51A] font-medium max-md:text-[15px]'>.ai</p>
							<h4 className='mb-0 text-[18px] font-semibold max-md:text-[17px]'>₹436.50.00 /yr</h4>
						</div>
						<div className='relative md:pe-[20px] max-md:px-[8px] max-md:text-center'>
							<p className='mb-[5px] text-[#00A51A] font-medium max-md:text-[15px]'>.io</p>
							<h4 className='mb-0 text-[18px] font-semibold max-md:text-[17px]'>₹526.50.00 /yr</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SearchDomain

const domainData = [
	{
		title: ".com",
		value: ".com"
	},
	{
		title: ".in",
		value: ".in"
	},
	{
		title: ".blog",
		value: ".blog"
	},
	{
		title: ".biz",
		value: ".biz"
	},
	{
		title: ".ca",
		value: ".ca"
	},
	{
		title: ".club",
		value: ".club"
	}
]
