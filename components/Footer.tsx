import Link from "next/link";

import SocialIcon from "./SocialIcon";


const Footer = () => {
  return (
    <footer className="relative w-full flex flex-col items-center space-y-[20px] sm:space-y-0 sm:items-start sm:flex-row sm:justify-between py-[39èx] sm:py-[29px] lg:py-[39px] float-left z-10">
      <Link href="/" title="adamkeyes" className="lowercase font-white font-[700] text-[32px] leading-[32px] tracking-[-0.44px] text-totalWhite">
        samuelemoro
      </Link>

      <div className="flex space-x-[32px] sm:mr-[30px]">
        <SocialIcon
          link="https://github.com/moroSamuele"
          image="icon-github.svg"
          imageAlt="Visit my work on GitHub"
        />
        <SocialIcon
          link="https://www.frontendmentor.io/profile/moroSamuele"
          image="icon-frontend-mentor.svg"
          imageAlt="My concepts at Frontend Mentor"
        />
        <SocialIcon
          link="https://www.linkedin.com/in/moro-samuele/"
          image="icon-linkedin.svg"
          imageAlt="Visit my Linkedin Page"
        />
        <SocialIcon
          link="https://twitter.com/saaaam_ueeeee"
          image="icon-twitter.svg"
          imageAlt="Twit Twit"
        />
      </div>
    </footer>
  )
}

export default Footer;