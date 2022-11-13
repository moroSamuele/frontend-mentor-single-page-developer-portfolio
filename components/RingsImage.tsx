import Image from "next/legacy/image";


const RingsImage = ({
  stylePosition
} : {
  stylePosition: string;
}) => {
  return (
    <Image
      src="/assets/images/pattern-rings.svg"
      alt="Background rings"
      width="530"
      height="129"
      className={`absolute ${stylePosition}`}
    />
  )
}

export default RingsImage;