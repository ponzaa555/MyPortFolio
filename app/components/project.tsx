import { assets, projectList } from "@/assets/assets";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react"
import LiveBoard from "../../assets/liveBoard.png"

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
               Welcome to my portfolio website. Here, I present a university project that closely aligns with the position I am pursuing.I invite you to explore my work and see how my experience can contribute to the role
            </motion.p>
            <motion.div className=" grid gap-6 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.9 , duration:0.6}}>
                {projectList.map(({icon , title ,describion,githubLink,link},index) => (
                    <motion.div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 right-10 hover:bg-lightHover hover:-translate-y-1 duration-500
                     dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 dark:border-none h-full " 
                    key={index}
                    whileHover={{scale:1.05}}>
                    <a href="#" >
                        <Image className="rounded-t-lg h-[40%]" src={icon} alt="" />
                    </a>

                        <div className="p-5 h-[35%] mb-4">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                            </a>
                            <p className="text-sm text-gray-700 dark:text-gray-400">{describion}</p>
                        </div>
                        <div className=" flex justify-between items-center p-5">
                            <div className=" flex items-center gap-4">
                                <a href={githubLink} target="_blank">
                                    <Image src={isDarkMode ?  assets.GitWhite: assets.GitPng} alt="" className=" w-10 rounded-full" />
                                </a>
                                {
                                    link !== "" ? (
                                        <a href={link} target="_blank">
                                        <Image src={assets.Vercel} alt="" className=" w-10 aspect-square border border-gray-200 rounded-2xl  " />
                                        </a>
                                    ) : 
                                    (
                                        <>
                                        </>
                                    )
                                }
                            </div>
                            <a href="#" className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
                                ">
                                    Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                </motion.div>
                    // <motion.div key={index} className=" border border-gray-400 rounded-lg px-8 py-6 hover:shadow-black
                    //  cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                    //  dark:hover:bg-darkHover dark:hover:shadow-white"
                    //  whileHover={{scale:1.05}}>
                    //     <Image src={icon} alt="project-icon" className=" w-10"/>
                    //     <h3 className=" text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
                    //     <p className=" text-sm text-gray-600 dark:text-white/80">{describion}</p>
                    //     <a href={link} className=" flex items-center gap-2 text-sm mt-5">
                    //         Read more <Image src={assets.RightArrow} alt="Right-Arrow" className=" w-4"/>
                    //     </a>
                    // </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Project;