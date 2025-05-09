import Image from 'next/image';
import logo from '@/assets/logosaas.png';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2  before:bottom-0 before:w-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute before:blur">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row gap-6 mt-6 justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6 cursor-pointer">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2025 princerawat.tech, All rights reserved.
        </p>
      </div>
    </footer>
  );
};
