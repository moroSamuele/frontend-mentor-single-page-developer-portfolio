import Image from "next/image";
import Link from "next/link";

import Hero from "../components/Hero";
import RingsImage from "../components/RingsImage";
import Button from "../components/Button";
import SkillBox from "../components/SkillBox";
import ProjectBox from "../components/ProjectBox";
import Form from "../components/Form";
import Footer from "../components/Footer";

import { Skill, Project } from '../components/Interfaces';

import Skills from '../data/skills.json';
import Projects from '../data/projects.json';


const Home = () => {
  const skills: Skill[] = Skills.skill;
  const projects: Project[] = Projects.project;

  
  return (
    <>
      <RingsImage stylePosition="top-[124px] sm:top-[86px] lg:top-[133px] right-[187px] sm:left-[-265px] lg:left-[-100px] sm:right-unset" />
      <Hero />


      <div className="w-full sm:py-0 px-[16px] sm:px-[32px] lg:px-[165px] mt-[80px] sm:mt-[60px] lg:mt-[219px] float-left relative">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[24px] text-center sm:text-left sm:gap-y-[58px] border-t-[1px] border-t-totalWhite border-b-[1px] border-b-totalWhite sm:border-b-0 lg:mt-[104px] mb-[80px] sm:mb-[100px] lg:mb-[140px] py-[40px] pt-[62px] lg:pt-[72px] sm:pb-0">
          {
            skills.map((skill, index) => {
              return (
                <SkillBox
                  key={index}
                  name={skill.name}
                  experience={skill.experience}
                />
              )
            })
          }
        </div>

        <RingsImage stylePosition="bottom-[36px] sm:top-[357px] left-[189px] sm:left-[1149px]" />
      </div>
     
      <div className="w-full float-left flex flex-col space-y-[40px] sm:space-y-[80px] px-[16px] sm:px-[32px] lg:px-[165px] pb-[80px] sm:pb-[100px] lg:pb-[139px]">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-totalWhite text-[40px] sm:text-[72px] lg:text-[88px] leading-[40px] sm:leading-[72px] lg:leading-[88px] tracking-[-1.14px] sm:tracking-[-2.05px] lg:tracking-[-2.5px] font-[700]">Projects</h2>
            <Button
              link="/"
              text="Contact me"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[40px] sm:gap-y-[60px] lg:gap-y-[69px]">
            {
              projects.map((project, index) => {
                return (
                  <ProjectBox
                    imageLarge={project.imageLarge}
                    imageSmall={project.imageSmall}
                    name={project.name}
                    languages={project.languages}
                  />
                )
              })
            }
          </div>
      </div>

      { /* Contact form */ }
      <div className="w-full px-[16px] sm:px-[32px] lg:px-[165px] pt-[60px] sm:pt-[84px] pb-[21px] sm:pb-0 lg:pb-[53px] float-left bg-littleBitBlack relative">
        <RingsImage
          stylePosition="right-[189px] sm:left-[-368px] lg:left-[-205px] sm:bottom-[130px] lg:top-[327px] bottom-[300px]"
        />
        <div className="flex flex-col lg:grid grid-cols-2 lg:gap-[220px] sm:px-[162px] lg:px-0 pb-[87px] sm:pb-[92px] border-b-[1px] border-b-totalWhite sm:mb-[8px]">
            <div className="flex flex-col space-y-[36px] text-center sm:text-left">
              <h2 className="text-totalWhite text-[40px] sm:text-[88px] leading-[40px] sm:leading-[88px] tracking-[-1.14px] sm:tracking-[-2.5px] font-[700]">Contacts</h2>
              <p className="font-[500] pb-[50px] sm:pb-[48px] lg:pb-0 text-notSoDeepBlack text-[16px] sm:text-center lg:text-left sm:text-[18px] leading-[26px] sm:leading-[28px] sm:max-w-[445px]">
                I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
              </p>
            </div>
          <Form />
        </div>

        { /* Footer */ }
        <Footer />
      </div>
    </>
  )
}

export default Home;