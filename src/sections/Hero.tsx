import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import Image from 'next/image';
import cylinderImage from '@/assets/cylinder.png';
import noodleImage from '@/assets/noodle.png';

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          {/* Content */}
          <div className="md:w-[478px]">
            {/* Tag */}
            <div className="tag">Version 2.0 is here</div>
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-6 ">
              Pathway to productivity
            </h1>
            {/* Description */}
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of productivity with our new version. We are
              excited to announce the release of our latest version, packed with
              new features and improvements.
            </p>
            {/* Buttons */}
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              alt="Cylinder Image"
              className=" hidden md:block -top-8 -left-32 md:absolute"
              width={220}
              height={220}
            />
            <Image
              src={noodleImage}
              width={220}
              height={220}
              className="hidden lg:block absolute top-[542px] left-[448px] rotate-[30deg]"
              alt="noodle image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
