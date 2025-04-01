import { assets } from "@/assets/assets";
import { ArrowUpRight, Moon, SquareTerminal, Sun } from "lucide-react";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type NavBarProps = {
    isDarkMode : boolean
    setIsDarkMode : React.Dispatch<React.SetStateAction<boolean>>
}
const NavBar = ({isDarkMode , setIsDarkMode}: NavBarProps) => {

    const [isScroll ,setIsScroll] = useState<boolean>(false);
    const sideMenuRef = useRef<HTMLUListElement>(null) ;

    const openMenu = () =>{
        if(sideMenuRef.current){
            sideMenuRef.current.style.transform = "translateX(-16rem)";
        }
    }
    const closeMenu = () =>{
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(16rem)";
          }
    }

    useEffect(() => {
        // when scroll happen function will exec
        window.addEventListener("scroll",() => {
            if(scrollY > 50){
                setIsScroll(true);
            }else{
                setIsScroll(false);
            }
        })
    },[])
    return(
        <>
        <div className=" fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
            <Image src={assets.BackgroutProfile} alt="BackgroutProfile" className=" w-full" />
        </div>

        {/* Add dynamic classname base on scroll value */}
            <nav className={` w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
                    ${isScroll ? " bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#top" className=" flex items-center gap-2 ">
                    <SquareTerminal size={30}/>
                    <span className=" text-xl font-bold">cd ~/</span>
                    <SquareTerminal size={30}/>
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3   rounded-full
                         ${isScroll ? " " : "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:border dark:border-white/50 dark:bg-transparent "} `}>
                    <li><a href="#top" className=" font-ovo">Home</a></li>
                    <li><a href="#about" className=" font-ovo">About Me</a></li>
                    <li><a href="#project" className=" font-ovo">Project</a></li>
                    <li><a href="#intership" className=" font-ovo">journey</a></li>
                    <li><a href="#contact" className=" font-ovo">Contact</a></li>
                </ul>
                
                <div className=" flex items-center gap-4">
                <button onClick={() => setIsDarkMode(prev => !prev)} className=" cursor-pointer">
                    {
                        isDarkMode ? (
                            <>
                            <Sun scale={1} strokeWidth={1} />
                            </>
                        ):(
                            <>
                            <Moon scale={1} strokeWidth={1}/>
                            </>
                        )
                    }
                </button>
                <a href="#contact" className=" hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo">
                        Contact
                        <ArrowUpRight scale={3} strokeWidth={2}/>
                </a>
                <button className=" block md:hidden ml-3" onClick={openMenu}>
                    <Image src={isDarkMode ? assets.MenuWhite : assets.Menu_Back} alt="Menu-Black"  className=" w-6"/>
                </button>
                </div>
                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className=" flex flex-col md:hidden gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen
                 bg-rose-50 transition  duration-500 dark:bg-darkHover">
                    <div className=" absolute right-6 top-6 ">
                        <Image src={isDarkMode? assets.CloseWhite:assets.Close_Back} alt="close back" className=" w-5 cursor-pointer" onClick={closeMenu} />
                    </div>
                    <li><a href="#top" className=" font-ovo" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className=" font-ovo"onClick={closeMenu}>About Me</a></li>
                    <li><a href="#project" className=" font-ovo" onClick={closeMenu}>Project</a></li>
                    <li><a href="#intership" className=" font-ovo" onClick={closeMenu}>journey</a></li>
                    <li><a href="#contact" className=" font-ovo" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;