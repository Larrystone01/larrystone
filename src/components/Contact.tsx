
export default function Contact(){
  return (
    <section id="contact" className="md:py-15 py-8">
      <div className="container mx-auto px-6">
        <div className="contact-container flex flex-col justify-center items-center space-y-12">
          <h2 className="text-[clamp(3rem,7vw,5rem)] text-center">Let's Build something great</h2>
          <p className="text-[#888] text-[30px] text-center">Looking for a frontend developer? Let's talk about your next project</p>
          <a href="mailto:olanrewajuakinwalire@gmail.com" className="font-(--mono) border border-[#00CC75] text-[#00CC75] px-8 py-4 text-[1.5rem] hover:bg-[#00CC75] hover:text-[#0a0a0a] hover:-translate-y-1 transition-all ease duration-700 hover:shadow-[0_0_26px_6px] shadow-[#00CC75]/40">Olanrewajuakinwalire@gmail.com</a>
          <div className="social-links flex gap-5">
            <a href="http://github.com/Larrystone01" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="http://linkedin.com/in/akinwalire-olanrewaju-518551230" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="http://x.com/Larry_stone0" target="_blank" rel="noopener noreferrer">X</a>
            {/* <a href="http://github.com/Larrystone01" target="_blank" rel="noopener noreferrer">Github</a> */}
          </div>
        </div>
      </div>
    </section>
  )
}