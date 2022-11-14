import Image from "next/image";

import Button from "./Button";
import Header from "./Header";


const Hero = () => {
  return (
    <div className="px-[16px] sm:px-[32px] lg:px-[165px] relative float-left w-full">
      <Header />

      <div className="relative w-full float-left pt-[320px] sm:pt-[90px] lg:pt-[88px] flex flex-col sm:max-w-[445px] lg:max-w-[706px] justify-start items-center sm:items-start z-10 text-center sm:text-left">
        <h1 className="text-totalWhite text-[40px] sm:text-[72px] lg:text-[80px] leading-[40px] sm:leading-[72px] lg:leading-[80px] tracking-[-1.14px] sm:tracking-[-2.05px] lg:tracking-[-2.5px] font-[700]">
          Nice to meet you! I’m&nbsp;
          <span className="relative">
            <span className="heroBorderH1 absolute bottom-0 sm:bottom-[5px] h-[6px] bg-goodGreen z-0"></span>
            <span className="relative z-10">Samuele Moro</span>
          </span>.
        </h1>
        <p className="text-[16px] sm:text-[18px] text-notSoDeepBlack font-[500] leading-[26px] sm:leading-[28px] mt-[20px] sm:mt-[43px] max-w-[445px] mb-[24px] sm:mb-[66px]">
          Based in Sandrigo (Italy), I’m a full-stack developer passionate making the web a better place.
        </p>
        <Button
          link="mailto:moro96.samuele@icloud.com"
          text="Contact me"
        />
      </div>

      <div className="absolute sm:w-[445px] sm:h-[720px] left-1/2 transform -translate-x-1/2 sm:right-0 m-0 sm:translate-x-0 lg:left-[830px] top-0 z-0">
          <Image
            src="/assets/images/image-profile-desktop.webp"
            alt="Samuele Moro"
            layout="fill"
            className="profileImageDesktop object-contain hidden lg:block"
          />
          <Image
            src="/assets/images/image-profile-tablet.webp"
            alt="Samuele Moro"
            width="322"
            height="600"
            className="profileImageDesktop hidden sm:block lg:hidden absolute right-[60px]"
          />
          <Image
            src="/assets/images/image-profile-mobile.webp"
            alt="Samuele Moro"
            width="174"
            height="383"
            className="profileImageDesktop block sm:hidden"
          />
          <div className="hidden sm:block absolute sm:right-0 lg:-left-[64.5px] bottom-[122px] lg:bottom-[70px] w-[129px] aspect-square">
            <Image
              src="/assets/images/pattern-circle.svg"
              alt="Circle on profile image"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div className="block sm:hidden absolute -right-[64.5px] top-[255.5px] w-[129px] aspect-square">
          <Image
            src="/assets/images/pattern-circle.svg"
            alt="Circle on profile image"
            layout="fill"
            className="object-contain"
          />
        </div>
    </div>
  )
}

export default Hero;