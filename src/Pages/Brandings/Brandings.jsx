import React, { useEffect } from 'react';
import SocialMedia from './SocialMedia';
import LogoDesign from './LogoDesign';
import BusinessCard from './BusinessCard';
import BusinessPortfolio from './BusinessPortfolio';
import FlyerDesign from './FlyerDesign';
import EmailTemplate from './EmailTemplate';
import PullUpBannerDgn from './PullUpBannerDgn';
import ServiceSection from './ServiceSection';
import QuotesBranding from './QuotesBranding';
import { useLocation } from 'react-router-dom';

// Place this file in your components folder and import where needed.
// Uses Tailwind CSS for styling. Replace the image path with your own if desired.

const Brandings = () => {

 const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const target = document.getElementById(sectionId);

      if (target) {
        // Smooth scroll
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]); 
  return (
   <div>
     <section className="relative w-full bg-[#c1ffac] overflow-hidden">
      {/* Decorative corner images (replace paths as needed) */}
      {/* <img
        src={'/mnt/data/Screenshot_4.png'}
        alt="decor"
        className="absolute hidden object-cover w-24 h-24 transform -translate-y-4 rounded-full shadow-lg md:block left-6 bottom-6"
        style={{ objectPosition: 'center' }}
      />

      <img
        src={'/mnt/data/Screenshot_4.png'}
        alt="decor"
        className="absolute hidden object-cover w-24 h-24 rounded-full shadow-lg md:block right-6 top-6"
      /> */}

      <div className="relative px-6 py-20 mx-auto text-center max-w-7xl">
        <h2 className="text-3xl font-extrabold leading-tight md:text-5xl text-slate-900">
          Complete
          <span className="ml-2 text-[#22a24a]"> Branding</span>
          <span className="mx-2"> and</span>
          <span className="text-[#22a24a]"> Design</span>
          <div className="block md:inline"> <span className="text-slate-900">Agency</span></div>
        </h2>

        {/* Squiggle underline (SVG) */}
        <div className="flex justify-center mt-3">
          <svg
            width="220"
            height="24"
            viewBox="0 0 220 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-translate-y-1"
          >
            <path d="M4 12C32 0 64 24 96 12C128 0 160 24 192 12C204 8 216 6 220 6" stroke="#FF8A00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h3 className="mt-8 text-xl font-semibold md:text-2xl text-slate-800">Corporate Business Branding Design</h3>

        <p className="max-w-3xl mx-auto mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
          We specialise in making your business look professional and memorable. Our services include creating
          logos, business cards, flyers, and social media designs that reflect your brand's values and identity.
          Whether you're just starting out or looking to refresh your brand, we help you build a strong online
          presence that stands out.
        </p>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#5fcf3a]  to-[#7ee75b] px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            aria-label="Get free quote"
          >
            <span>Get free quote</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Small decorative avatars around the edges (optional) */}
        <div className="absolute hidden -translate-y-1/2 left-4 top-1/2 md:block">
          {/* <img src={'/mnt/data/Screenshot_4.png'} alt="avatar" className="object-cover rounded-full shadow-md w-14 h-14" /> */}
        </div>

        <div className="absolute hidden right-4 bottom-1/3 md:block">
          {/* <img src={'/mnt/data/Screenshot_4.png'} alt="avatar" className="object-cover w-16 h-16 rounded-full shadow-md" /> */}
        </div>
      </div>
    </section>

    {/* Social Media */}
    <SocialMedia></SocialMedia>
    {/* Logo Design */}
    <LogoDesign/>
    {/* Business Card Design */}
    <BusinessCard></BusinessCard>

    <BusinessPortfolio></BusinessPortfolio>
    <FlyerDesign></FlyerDesign>
    <EmailTemplate></EmailTemplate>
    <PullUpBannerDgn></PullUpBannerDgn>
    <ServiceSection/>
    <QuotesBranding></QuotesBranding>
   </div>
  );
};

export default Brandings;

