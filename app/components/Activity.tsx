import { ActivityAssets, assets } from "@/assets/assets";
import Image from "next/image";
import {motion} from "motion/react"


type ActivityProps = {
    isDarkMode : boolean
}

const Activity = ({isDarkMode }:ActivityProps) => {
    return(
        <motion.div id="intership" className=" w-full px-[12%] py-10 scroll-mt-20"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}>
            <motion.h4 className=" text-center mb-2 text-lg font-ovo"
            initial={{y:-20 , opacity:0}}
            whileInView={{y:0 , opacity:1}}
            transition={{delay:0.3 , duration:0.5}}>
                journey 
            </motion.h4>
            <motion.h2 className=" text-center text-5xl font-ovo"
            initial={{y:-20 , opacity:0}}
            whileInView={{y:0 , opacity:1}}
            transition={{delay:0.5 , duration:0.5}}>
                University Life
            </motion.h2>
            {/* <div className=" text-center items-center">
                <Image/>
            </div> */}
            <div className=" items-center justify-center">
            <ol className=" lg:flex mt-5 w-full">
                <motion.li className="relative mb-6 sm:mb-2 "
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{delay:0.8 , duration:0.3}}>
                    <div className="flex items-center ">
                        <div className="z-10 flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <Image src={assets.AirPlan} alt="" className=" w-15 rounded-full"/> 
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8 w-[250px]">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">First Years</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2021</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400 ">
                            During my semester break, I participated in a work and travel program in the United States, 
                            where I served as a cashier at a Japanese restaurant for two months.
                        </p>
                    </div>
                </motion.li>
                <motion.li className="relative mb-6 sm:mb-2 "
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:1.1 , duration:0.3}}>
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <Image src={assets.Techer} alt="" className=" w-15 rounded-full"/> 
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8 w-[250px]">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Second Year</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400 max-w-6xl">
                            I worked part-time as a math tutor for three students, 
                            helping them prepare for their university applications.
                        </p>
                    </div>
                </motion.li>
                <motion.li className="relative mb-6 sm:mb-2 "
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:1.4 , duration:0.3}}>
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                           <Image src={assets.CompanyPic} alt="" className=" w-15 h-15 rounded-full"/>
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8 w-[250px]">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Third Year</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2023</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400 max-w-6xl">
                        I had the opportunity to intern at T.C.C., a technology solutions company, 
                        where I worked as a C# backend developer. During my internship, 
                        I` developed a system for POS machines, strengthening my skills in software development.
                        </p>
                    </div>
                </motion.li>
                <motion.li className="relative mb-6 sm:mb-2 "
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:1.7 , duration:0.3}}>
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <Image src={assets.ProjectSenior} alt="" className=" w-15  rounded-full"/>
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8 w-[250px]">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fourth Years</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2024</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        For my senior project, I developed a trip-planning website from scratch, 
                        incorporating features such as a chat system, interactive user engagement, and collaborative planning tools.
                        </p>
                    </div>
                </motion.li>
                <motion.li className="relative mb-6 sm:mb-2 "
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:2 , duration:0.3}}>
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <Image src={assets.Waiting} alt="" className=" w-15  rounded-full"/>
                        </div>
                        {/* <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div> */}
                    </div>
                    <div className="mt-3 sm:pe-8 w-[250px]">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Waiting ...</h3>
                       
                    </div>
                </motion.li>
            </ol>
            </div>
        </motion.div>
    )
}

export default Activity; 