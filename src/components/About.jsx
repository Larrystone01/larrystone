

export default function About(){
  return(
    <section id="about" className="py-10 about-section border-b border-[#888]">
      <div className="container mx-auto px-6">
        <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] -tracking-[0.02em] font-light mb-8 skill-heading">Building for the web</h2>
        <div className="about-content flex flex-col lg:flex-row lg:space-x-28">
          <div className="about-write-up flex-1">
            <p>I'm a frontend developer passionate about creating fast, accessible, and visually stunning web applications. I specialize in React and modern JavaScript frameworks, with a keen eye for design and user experience.</p>
            <p>My approach combines clean, maintainable code with pixel-perfect implementations. I believe great frontend development is where technical excellence meets thoughtful design, creating experiences that are both beautiful and performant.</p>
            <div className="skill mb-14 lg:mb-0">
              <span>React & NextJs</span>
              <span>TypeScript</span>
              <span>Responsive Design</span>
              <span>Performance Optimization</span>
              <span>Web Animations</span>
              <span>Accessibility</span>
            </div>
          </div>
          <div className="about-stats flex-1 flex flex-col space-y-4">
            <div className="stats flex gap-8">
              <div className="line"></div>
              <p className="num text-[3.5rem] text-[#00CC75]">100+ <span>Components Built</span></p>
            </div>
            <div className="stats flex gap-8">
              <div className="line"></div>
              <p className="num text-[3.5rem] text-[#00CC75]">30+ <span>Projects Shipped</span></p>
            </div>
            <div className="stats flex gap-8">
              <div className="line"></div>
              <p className="num text-[3.5rem] text-[#00CC75]">3+ <span>Years of code</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}