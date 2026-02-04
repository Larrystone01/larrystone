import { ExternalLink, Github } from "lucide-react"
import { projects } from "../lib/projects"

export default function Work (){
  return (
    <section id="work" className="md:py-16">
      <div className="work container mx-auto px-6">
        <h2 className="text-[60px] pb-10">Selected Work</h2>
        <div className="projects-container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project)=>{
            return (
              <div className="project-cont relative p-6 border-[1.5px] border-[#2a2a2a] cursor-pointer hover:border-[#00CC75] transition-border ease-in-out duration-1000 group" key={project.id}>
                <div className="customize-bg absolute inset-0 bg-[linear-gradient(135deg,#1a1a1a_0%,#0a0a0a_100%)] transition-transform duration-500 ease-in" style={{background:project.backgroundColor}}></div>
                <p className={`absolute top-5 right-6 status ${project.status === "completed" ? "bg-[rgba(0,255,148,0.2)] text-[#00CC75] border border-[rgba(0,255,148,0.3)]" : "bg-[rgba(255,184,0,0.2)] text-[#ffb800] border border-[rgba(255,184,0,0.3)]"}`}>{project.status}</p>
                <div className="project-content relative">
                  <ul className="stacks-container flex gap-1 mb-4">
                    {project.stacks.slice(0,3).map((stack, index)=>(
                      <li key={stack} className="tag uppercase">{stack} {index < project.stacks.length - 1 && <span className="w-1 h-1 inline-flex justify-center rounded-full bg-[#00CC75]"></span>}</li>
                    ))}
                  </ul>
                  <img src={project.img} alt="" className="max-h-[225px] w-full"/>
                  <h3 className="project-name text-[2rem] -tracking-[0.02em] m-[1rem_0_0.5rem] font-normal">{project.name}</h3>
                  <p className="project-description text-[#888] text-[0.75rem] leadiing-[1.6]">{project.description}</p>
                  <div className="link flex gap-3 mt-5 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in duration-500">
                    <a href={project.liveLink} className="work-link border border-[#2a2a2a] hover:-translate-y-1"><ExternalLink size={12}/> <span>Live Demo</span></a>
                    <a href={project.githubUrl} className="work-link border border-[#2a2a2a] hover:-translate-y-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"/>
                                </svg> <span>GitHub</span></a>
                  </div>
                </div>
              </div>

            )
          })}
        </div>
      </div>
    </section>
  )
}