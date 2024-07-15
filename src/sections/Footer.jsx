import React from 'react';
import { footerLogo, headerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
        <a href="/" className='flex'>
                <img src={headerLogo} alt='Logo' width={38} height={29} className='mt-[-10px]'/>
                <h1 className='font-montserrat uppercase text-white leading-7'>rendy</h1>
            </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Trendy store. Find Your perfect Size in Store. Get Rewards
          </p>
          <div className="items-center flex gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div key={icon.link} className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-gray-500 hover:transition-colors">
                <a href={icon.link}>
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray">
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
