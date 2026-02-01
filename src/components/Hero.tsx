

export default function Hero() {
  return (
    <section id="#home" className="container mx-auto px-6 h-[90vh] hero">
      <div className="hero-container flex flex-col items-center justify-center md:items-start md:justify-start h-full">
        <h1 className="hero self-start text-[clamp(3.5rem,10vw,8rem)] tracking-none leading-[0.9] mb-[40px]">Crafting digital<br />experiences with<br /><span className="quote font-thin">code & design.</span>
        </h1>
        <p className="subtitle max-w-[500px] self-start text-[16px] mb-5">Frontend developer specializing in React, TypeScript, and modern web technologies. Building performant, accessible interfaces that users love.
        </p>
        <div className="buttons flex flex-col sm:flex-row self-start gap-3 w-full">
          <button className="bg-[#00cc75] sm: px-4 py-3 border border-[#00cc75] text-black text-[14px] cursor-pointer hover:shadow-[0_0_26px_3px] shadow-[#00CC75]/40 hover:-translate-y-0.5 transition-all ease-in-out duration-100">View Projects</button>
          <button className="px-4 py-3 border border-gray-800 text-[14px] cursor-pointer hover:shadow-[0_0_26px_3px] shadow-[#00CC75]/40 hover:-translate-y-0.5 transition-all ease-in-out duration-100">Get in Touch</button>
        </div>
      </div>
    </section>
  )
}