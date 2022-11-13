interface SkillBox {
  name: string;
  experience: number;
}

const SkillBox = ({
  name,
  experience,
} : SkillBox) => {
  return (
    <div className="flex flex-col space-y-[14px]">
      <h3 className="text-[48px] leading-[56px] tracking-[-1.5px] text-totalWhite">
        {name}
      </h3>
      <h4 className="text-notSoDeepBlack text-[18px] leading-[28px]">
        {experience} Year{ experience > 1 ? 's' : '' } Experience
      </h4>
    </div>
  )
}

export default SkillBox;