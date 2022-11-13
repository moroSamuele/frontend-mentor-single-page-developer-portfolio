import Image from "next/legacy/image";
import Link from "next/link";

import Hero from "../components/Hero";
import RingsImage from "../components/RingsImage";
import Button from "../components/Button";
import SkillBox from "../components/SkillBox";
import ProjectBox from "../components/ProjectBox";

import { Skill, Project } from '../components/Interfaces';

import Skills from '../data/skills.json';
import Projects from '../data/projects.json';




const Home = () => {
  const skills: Skill[] = Skills.skill;
  const projects: Project[] = Projects.project;
  
  return (
    <>
      <RingsImage stylePosition="top-[133px] left-[-100px]" />
      <Hero />


      <div className="w-full px-[165px] mt-[219px] float-left relative">
        <div className="w-full grid grid-cols-3 gap-[30px] row-[58px] border-t-[1px] border-t-totalWhite mt-[104px] mb-[140px] pt-[72px]">
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

        <RingsImage stylePosition="top-[357px] right-[-239px]" />
      </div>
     
      <div className="w-full float-left flex flex-col space-y-[80px] px-[165px] pb-[139px]">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-totalWhite text-[88px] leading-[88px] tracking-[-2.5px] font-[700]">Projects</h2>
            <Button
              link="/"
              text="Contact me"
            />
          </div>

          <div className="grid grid-cols-2 gap-[30px] row-[69px]">
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
    </>
  )
}

export default Home;