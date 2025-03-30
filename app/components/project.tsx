import { assets, projectList } from "@/assets/assets";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react"

type ProjectProps = {
    isDarkMode : boolean
}

const Project = ({isDarkMode }:ProjectProps) => {
    return(
        <motion.div id="project" className=" w-full px-[12%] py-10 scroll-mt-20"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        >
            <motion.h4 className=" text-center mb-2 text-lg font-ovo"
            initial={{y:-20 , opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{delay:0.3 , duration:0.5}}>
                What I have done
            </motion.h4>
            <motion.h2 className=" text-center text-5xl font-ovo"
            initial={{y:-20 , opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{delay:0.5 , duration:0.5}}>
                My Project
            </motion.h2>
            <motion.p className=" text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.7 , duration:0.5}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, 
                porro libero nesciunt mollitia molestiae vero voluptatibus consectetur,
                 saepe, quis optio aspernatur distinctio tempora eveniet? Veritatis obcaecati vero ullam fugiat soluta voluptates eum aliquam illum facere, 
                 eligendi corporis magni ab qui!
            </motion.p>
            <motion.div className=" grid container gap-6 my-10 1"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.9 , duration:0.6}}>
                {projectList.map(({icon , title ,describion,link},index) => (
                    <motion.div key={index} className=" border border-gray-400 rounded-lg px-8 py-6 hover:shadow-black
                     cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                     dark:hover:bg-darkHover dark:hover:shadow-white"
                     whileHover={{scale:1.05}}>
                        <Image src={icon} alt="project-icon" className=" w-10"/>
                        <h3 className=" text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
                        <p className=" text-sm text-gray-600 dark:text-white/80">{describion}</p>
                        <a href={link} className=" flex items-center gap-2 text-sm mt-5">
                            Read more <Image src={assets.RightArrow} alt="Right-Arrow" className=" w-4"/>
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Project;