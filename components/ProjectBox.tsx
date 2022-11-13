import Image from "next/image";

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
      <div className="relative h-[400px]">
        <Image
          src={imageLarge}
          alt={name}
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col space-y-[7px] uppercase">
        <h5 className="font-[700] text-white text-[24px] leading-[32px]">{name}</h5>
        <div className="flex flex-wrap">
          {
            languages.map(language => {
              return (
                <p key={language} className="text-[18px] leading-[28px] text-notSoDeepBlack font-[500] mr-[18px]">{language}</p>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectBox;