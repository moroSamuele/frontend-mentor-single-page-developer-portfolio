import Image from "next/image";
import Link from "next/link";


interface ProjectBox {
  imageLarge: string;
  imageSmall: string;
  name: string;
  languages: string[];
}

const ProjectBox = ({
  imageLarge,
  imageSmall,
  name,
  languages,
} : ProjectBox) => {
  return (
    <div className="flex flex-col space-y-[20px]">
      <div className="projectsOverlayContainer relative h-[253px] lg:h-[400px]">
        <div className="projectsOverlayAnimation flex flex-col items-center space-y-[48px] uppercase text-totalWhite text-[16px] leading-[26px] tracking-[2.26px]">
          <div>
            <Link href="/" className="border-b-2 border-b-goodGreen py-[10px] transition-all hover:text-goodGreen hover:px-[10px]">
              View Project
            </Link>
          </div>
          <div>
          <Link href="/" className="border-b-2 border-b-goodGreen py-[10px] transition-all hover:text-goodGreen hover:px-[10px]">
            View Code
          </Link>
          </div>
        </div>
        <Image
          src={imageLarge}
          alt={name}
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col space-y-[7px] uppercase">
        <h5 className="font-[700] text-white text-[24px] leading-[32px]">
          <Link href="/">
            {name}
          </Link>
        </h5>
        <div className="flex flex-wrap">
          {
            languages.map(language => {
              return (
                <p key={language} className="text-[18px] leading-[28px] text-notSoDeepBlack font-[500] mr-[18px]">{language}</p>
              )
            })
          }
        </div>
        <div className="lg:hidden flex items-center space-x-[30px] uppercase text-totalWhite text-[16px] leading-[26px] tracking-[2.26px]">
          <Link href="/" className="border-b-2 border-b-goodGreen py-[10px] transition-all hover:text-goodGreen hover:px-[10px]">
            View Project
          </Link>
          <Link href="/" className="border-b-2 border-b-goodGreen py-[10px] transition-all hover:text-goodGreen hover:px-[10px]">
            View Code
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectBox;