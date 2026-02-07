import { Stacks } from "../lib/stack"
import {motion} from "framer-motion"

export default function Skills(){
  return (
    <section id="#skills" className="skill-section bg-[#0f0f0f] border-t border-b border-[#2a2a2a] py-6 md:py-32 px-6 md:px-16"
    >
      <div className="container mx-auto">
        <div className="skill-container flex flex-col items-center justify-center">
          <h3 className="skills-stacks text-[60px] pb-10 tracking-tight font-extralight self-start">Skills & Stacks</h3>
          <div className="stacks-container grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6 justify-center items-center mx-auto md:gap-6">
          {Stacks.map((stack)=>{
            return(
              <SkillCard key={stack.id} path={stack.icon.path} name={stack.name}/>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}

type SkillCardProps = {
  path:string,
  name:string,
}

function SkillCard({path, name}:SkillCardProps){
  return (
    <motion.div className="skill-card border border-[#2a2a2a] flex flex-col items-center justify-center gap-4 size-40 hover:border-[#00CC75] hover:bg-[rgba(0,255,148,0.03)] group transition-color ease duration-1000"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden:{opacity: 0, y:50},
      visible:{opacity: 1, y:0, transition: { duration:2, ease:"easeIn" } }
    }}
    >
      <svg
      role="img"
      viewBox="0 0 24 24"
      className="size-18 fill-current group-hover:fill-[#00CC75] group-hover:scale-[1.1] group-hover:rotate-[5deg] transition-all duration-1000 ease"
      >
        <path d={path} />
      </svg>
      <p className="skill-name">{name}</p>
    </motion.div>
  )
}

