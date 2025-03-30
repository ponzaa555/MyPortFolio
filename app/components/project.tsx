import { assets, projectList } from "@/assets/assets";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type ProjectProps = {
    isDarkMode : boolean
    setIsDarkMode : Dispatch<SetStateAction<boolean>>
}

const Project = ({isDarkMode , setIsDarkMode}:ProjectProps) => {
    return(
        <div id="project" className=" w-full px-[12%] py-10 scroll-mt-20">
            <h4 className=" text-center mb-2 text-lg font-ovo">
                What I have done
            </h4>
            <h2 className=" text-center text-5xl font-ovo">
                My Project
            </h2>
            <p className=" text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, 
                porro libero nesciunt mollitia molestiae vero voluptatibus consectetur,
                 saepe, quis optio aspernatur distinctio tempora eveniet? Veritatis obcaecati vero ullam fugiat soluta voluptates eum aliquam illum facere, 
                 eligendi corporis magni ab qui!
            </p>
            <div className=" grid container gap-6 my-10 1">
                {projectList.map(({icon , title ,describion,link},index) => (
                    <div key={index} className=" border border-gray-400 rounded-lg px-8 py-6 hover:shadow-black
                     cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                     dark:hover:bg-darkHover dark:hover:shadow-white">
                        <Image src={icon} alt="project-icon" className=" w-10"/>
                        <h3 className=" text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
                        <p className=" text-sm text-gray-600 dark:text-white/80">{describion}</p>
                        <a href={link} className=" flex items-center gap-2 text-sm mt-5">
                            Read more <Image src={assets.RightArrow} alt="Right-Arrow" className=" w-4"/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;