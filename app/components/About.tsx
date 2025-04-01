import { assets, infoList, toolData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react"

type AboutProps = {
    isDarkMode : boolean
}
const About = ({isDarkMode}:AboutProps) => {
    return(
    <motion.div id="about" className=" w-full px-0 md:px-[12%] py-10 scroll-mt-20"
        initial={{opacity:0}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:2}}
        >
            <motion.h4 className=" text-center mb-2 text-lg font-ovo"
            initial={{opacity:0 , y:-20}}
            whileInView={{opacity:1 , y:1}}
            transition={{duration:0.5 , delay:0.3}}
            >Introduction</motion.h4>
            <motion.h2 className="text-center mb-2 text-5xl font-ovo"
             initial={{opacity:0 , y:-20}}
             whileInView={{opacity:1 , y:1}}
             transition={{duration:0.5 , delay:0.5}}
            >About me</motion.h2>
            <motion.div className=" flex w-full flex-col lg:flex-row items-center gap-20 my-20"
            initial={{opacity:0 }}
            whileInView={{opacity:1 }}
            transition={{duration:0.8}}
            >
                <motion.div className=" w-64 sm:w-80 rounded-3xl max-w-none"
                initial={{opacity:0 , scale:0.5 }}
                whileInView={{opacity:1,  scale:1}}
                transition={{duration:0.6}}>
                    <Image src={assets.Profile} alt="Profile-About" className=" w-full rounded-3xl"/>
                </motion.div>
                {/* description */}
                <motion.div className=" flex-1 w-full"
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.6 , delay:0.8}}>
                     <p className="flex mb-10 max-w-3xl font-ovo overflow-x-scroll mx-auto">
                     I recently graduated with a Bachelor's degree in Computer Engineering from Kasetsart University. 
                     During my internship at TCC Company, I worked as a backend developer, 
                     where I contributed to enhancing the system for point-of-sale machines using C#, .NET Framework, and Golang. 
                     My outgoing nature and adaptability, due to playing basketball with new people in unfamiliar environments, 
                     have shaped my ability to collaborate effectively with others in a variety of situations. Looking ahead, 
                     I aspire to deepen my expertise in backend systems and pursue a Master's degree in Cybersecurity to further advance my knowledge and career in this field.
                    </p>
                    {/* List Skill */}
                    <motion.ul className=" grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl "
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:0.8 , delay:1}}>
                        {infoList.map(({icon , iconDark , title , describtion },index) => (
                            <motion.li key={index} className=" border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer shadow-md 
                             hover:bg-lightHover hover:-translate-y-1 duration-500 max-h-[250px] overflow-y-scroll
                             hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                             initial={{scale:0.8}}
                             whileInView={{scale:1.0}}
                             whileHover={{scale:1.1}}>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className=" w-7 mt-3"/>
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                                <p className=" text-gray-600 text-sm  dark:text-white/80">{describtion }</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4 className=" my-6 text-gray-700 font-ovo dark:text-white/80"
                    initial={{y:20 , opacity:0}}
                    whileInView={{y:0 , opacity:1}}
                    transition={{delay:1.3 , duration:0.5}}
                    >Tools I use</motion.h4>
                    <motion.ul className=" flex items-center gap-3 sm:gap-5"
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{delay:1.5 , duration:0.6}}>
                        {toolData.map((tool,index) => (
                            <motion.li key={index}
                                className=" flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                                 rounded-lg  cursor-pointer hover:-translate-y-1 duration-500"
                                 whileInView={{scale:1.1}}>
                                <Image src={tool} alt="Tool-Icon" className="w-5 sm:w-7"/>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About;