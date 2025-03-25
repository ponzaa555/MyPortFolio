import { assets, infoList, toolData } from "@/assets/assets";
import Image from "next/image";

const About = () => {
    return(
        <div id="about" className=" w-full px-[12%] py-10 scroll-mt-20">
            <h4 className=" text-center mb-2 text-lg font-ovo">Introduction</h4>
            <h2 className="text-center mb-2 text-5xl font-ovo">About me</h2>
            <div className=" flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className=" w-64 sm:w-80 rounded-3xl max-w-none">
                    <Image src={assets.Profile} alt="Profile-About" className=" w-full rounded-3xl"/>
                </div>
                {/* description */}
                <div className=" flex-1">
                     <p className=" mb-10 max-w-2xl font-ovo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam, assumenda facilis, 
                        at adipisci saepe quas placeat laudantium deleniti ratione dolore ullam corrupti! 
                        Quas consequatur tempore explicabo quasi, 
                        debitis atque illo praesentium eius perferendis temporibus pariatur alias nulla recusandae nostrum.
                    </p>
                    {/* List Skill */}
                    <ul className=" grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl ">
                        {infoList.map(({icon , iconDark , title , describtion },index) => (
                            <li key={index} className=" border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer shadow-md 
                             hover:bg-lightHover hover:-translate-y-1 duration-500 max-h-[250px] overflow-y-scroll
                             hover:shadow-black">
                                <Image src={icon} alt={title} className=" w-7 mt-3"/>
                                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                                    <p className=" text-gray-600 text-sm  ">{describtion }</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className=" my-6 text-gray-700 font-ovo">Tools I use</h4>
                    <ul className=" flex items-center gap-3 sm:gap-5">
                        {toolData.map((tool,index) => (
                            <li key={index}
                                className=" flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                                 rounded-lg  cursor-pointer hover:-translate-y-1 duration-500">
                                <Image src={tool} alt="Tool-Icon" className="w-5 sm:w-7"/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;