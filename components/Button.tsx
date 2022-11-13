import Link from "next/link"


const Button = ({
  link,
  text,
} : {
  link: string;
  text: string;
}) => {
  return (
    <Link href={link} className="text-[16px] font-[700] uppercase leading-[26px] tracking-[2.28px] text-totalWhite py-[10px] border-b-2 border-b-goodGreen transition-all hover:text-goodGreen">
      {text}
    </Link>
  )
}

export default Button;