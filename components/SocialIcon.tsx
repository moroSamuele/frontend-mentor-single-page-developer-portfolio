import Image from "next/image";
import Link from "next/link";


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
    <Link href={link} className="relative w-[19px] sm:w-[25px] h-[19px] sm:h-[25px]">
      <Image
        src={`/assets/images/${image}`}
        alt={imageAlt}
        layout="fill"
        className="object-contain"
      />
    </Link>
  )
}

export default SocialIcon;