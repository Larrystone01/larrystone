import {useEffect, useState} from "react";
import {Moon, Sun, X} from "lucide-react"

export default function Navbar(){
  const [navOpen, setOpenNav] = useState(false);
  const [theme, setTheme] = useState(()=>{
    return localStorage.getItem("Theme") ?? "dark"
  });
  const handleToggle = ()=>{
    setTheme((prev)=>
     prev === "dark" ? "light" : "dark")
  }

  useEffect(()=>{
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

  },[theme])


  useEffect(()=>{
    localStorage.setItem("Theme",theme)
  },[theme])



  return (
    <>
    <header className="sticky w-full top-0 left-0 z-50 py-4 backdrop-blur-[0.7px]">
      <div className="nav-container container px-6 mx-auto">
        <nav className="flex justify-between">
          <div className="logo flex items-center w-1/3 uppercase"><a>Larrystone</a></div>
          <div className={`mobile-design flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-0 md:w-2/3 -translate-y-full md:translate-y-0 absolute md:static w-full h-screen md:h-fit left-0 top-0 md:bg-inherit transition-transform ease-in-out duration-300 ${navOpen ? "translate-y-0" : ""} ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
            <button className="absolute top-9 right-8 md:hidden rounded-full border border-gray-700 flex justify-center items-center p-1 h-[36px] w-[36px] hover:border-[#00CC75] hover:rotate-180 transition-translate ease-in-out duration-300 cursor-pointer" onClick={()=>setOpenNav(false)}><X size={36}/></button>
            <ul className="nav-list flex flex-col md:flex-row items-center justify-center gap-6 w-1/2">
              <li className="capitalize active"><a href="#work">work</a></li>
              <li className="capitalize active"><a href="#about">about</a></li>
              <li className="capitalize active"><a href="#contact">contact</a></li>
            </ul>
            <div className="theme flex flex-col md:flex-row items-center gap-4">
              <button className="bg-[#00CC75] py-[8px] px-[16px] cursor-pointer hover:shadow-[0_0_26px_3px] shadow-[#00CC75]/40 hover:-translate-y-0.5 transition-all ease-in-out duration-100 active hire-me">Hire me</button>
              <button className="rounded-full border border-gray-700 flex justify-center items-center p-1 h-[36px] w-[36px] md:h-[24px] md:w-[24px] hover:border-[#00CC75] hover:rotate-180 transition-transform ease-in-out duration-300 cursor-pointer" onClick={handleToggle}>{theme === "dark" ? <Sun size={36}/> : <Moon size={36}/>}</button>
            </div>
          </div>
          <div className="hamburger flex items-center md:hidden text-white">
            <button onClick={()=>setOpenNav(true)} className="cursor-pointer"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
<path d="M0 0 C5.94 0 11.88 0 18 0 C18 0.66 18 1.32 18 2 C12.06 2 6.12 2 0 2 C0 1.34 0 0.68 0 0 Z " fill={theme === "dark" ? "#fff" : "#000"} transform="translate(3,5)"/>
<path d="M0 0 C3.96 0 7.92 0 12 0 C12 0.66 12 1.32 12 2 C8.04 2 4.08 2 0 2 C0 1.34 0 0.68 0 0 Z " fill={theme === "dark" ? "#fff" : "#000"} transform="translate(3,11)"/>
<path d="M0 0 C2.31 0 4.62 0 7 0 C7 0.66 7 1.32 7 2 C4.69 2 2.38 2 0 2 C0 1.34 0 0.68 0 0 Z " fill={theme === "dark" ? "#fff" : "#000"} transform="translate(3,17)"/>
</svg></button>
          </div>
        </nav>
      </div>
    </header>
    </>
  )
}