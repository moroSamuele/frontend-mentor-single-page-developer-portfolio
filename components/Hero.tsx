import Image from "next/legacy/image";
import Link from "next/link";

import Button from "./Button";


const SocialIcon = ({
  link,
  image,
  imageAlt,
} : {
  link: string;
  image: string;
  imageAlt: string;
}) => {
  return (
    <Link href={link} className="relative w-[25px] aspect-square">
      <Image
        src={`/assets/images/${image}`}
        alt={imageAlt}
        layout="fill"
        className="object-contain"
      />
    </Link>
  )
}

const Hero = () => {
  return (
    <div className="px-[165px] relative float-left w-full">
      <header className="relative w-full flex justify-between py-[39px] float-left z-10">
        <Link href="/" title="adamkeyes" className="lowercase font-white font-[700] text-[32px] leading-[32px] tracking-[-0.44px] text-totalWhite">
          adamkeyes
        </Link>

        <div className="flex space-x-[32px] mr-[30px]">
          <SocialIcon
            link="/"
            image="icon-github.svg"
            imageAlt="Visit my work on GitHub"
          />
          <SocialIcon
            link="/"
            image="icon-frontend-mentor.svg"
            imageAlt="My concepts at Frontend Mentor"
          />
          <SocialIcon
            link="/"
            image="icon-linkedin.svg"
            imageAlt="Visit my Linkedin Page"
          />
          <SocialIcon
            link="/"
            image="icon-twitter.svg"
            imageAlt="Twit Twit"
          />
        </div>
      </header>

      <div className="relative w-full float-left mt-[88px] flex flex-col max-w-[706px] justify-start items-start z-10">
        <h1 className="text-totalWhite text-[88px] leading-[88px] tracking-[-2.5px] font-[700]">
          Nice to meet you! I’m&nbsp;
          <span className="relative">
            <span className="absolute w-full bottom-[5px] h-[6px] bg-goodGreen z-0"></span>
            <span className="relative z-10">Adam Keyes</span>
          </span>.
        </h1>
        <p className="text-[18px] text-notSoDeepBlack font-[500] leading-[28px] mt-[43px] max-w-[445px] mb-[66px]">
          Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.
        </p>
        <Button
          link="/"
          text="Contact me"
        />
      </div>

      <div className="absolute w-[445px] h-[720px] right-[165px] top-0 z-0">
          <Image
            src="/assets/images/image-profile-desktop.webp"
            alt="Adam Keyes"
            layout="fill"
            className="object-contain"
          />
          <div className="absolute -left-[64.5px] bottom-[70px] w-[129px] aspect-square">
            <Image
              src="/assets/images/pattern-circle.svg"
              alt="Circle on profile image"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
    </div>
  )
}

export default Hero;