import React from 'react'
import Layout from '../components/shared/Layout'
import HeroSlider from '../components/home/HeroSlider'
import SearchDomain from '../components/home/SearchDomain'
import WebHostingPlan from '../components/home/WebHostingPlan'
import OurProducts from '../components/home/OurProducts'
import ChooseYourPlan from '../components/home/ChooseYourPlan'
import OurServices from '../components/home/OurServices'
import OurTestimonials from '../components/home/OurTestimonials'
import AboutVelosting from '../components/home/AboutVelosting'
import VelostingAdvantage from '../components/home/VelostingAdvantage'
import FaqSection from '../components/home/FaqSection'
import LetsGetStarted from '../components/shared/LetsGetStarted'
const Home = () => {
  return (
    <Layout>
      <HeroSlider />
      <SearchDomain />
      <WebHostingPlan />
      <OurProducts />
      <ChooseYourPlan />
      <OurServices />
      <div className='md:pt-[70px] max-md:pt-[50px]'>
        <LetsGetStarted/>
      </div>
      <OurTestimonials />
      <AboutVelosting />
      <VelostingAdvantage />
      <FaqSection />
    </Layout>
  )
}

export default Home
