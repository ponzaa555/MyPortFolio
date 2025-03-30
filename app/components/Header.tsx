import { assets } from "@/assets/assets";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";


type HeaderProps = {
    isDarkMode : boolean
    setIsDarkMode : Dispatch<SetStateAction<boolean>>
}
const Header = ({setIsDarkMode , isDarkMode}:HeaderProps) => {
    return(
        <div className=" w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <div>
                <Image src={assets.Profile} alt="Profile" className=" rounded-full w-42 h-38 " />
            </div>
                <h3 className=" flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
                    Hi! I'am Napon Tansiri 
                    <Image src={assets.HandIcon} alt="handIcon" className=" w-6"/>
                </h3>
                <h1 className=" text-3xl sm:text-6xl lg:text-[66px] font-ovo">
                    Backend Developer 
                </h1>
                <p className="max-w-2xl mx-auto font-ovo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ab quae optio error impedit id nulla iste sapiente ex ipsum officia? Lorem, 
                    ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quaerat temporibus 
                    quis tempore nisi quasi eum quam sunt! Rerum, laborum?
                </p>
                <div className=" flex flex-col sm:flex-row items-center gap-4 mt-4">
                    <a href="#contact"
                        className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2
                            dark:bg-transparent">
                        contact me 
                        <Image src={assets.RightArrowWhite} alt="Right-Allow" className="w-4" width={4} height={4}/>
                    </a>
                    <a href="/Napon_Tansiri_CV.pdf" download className=" px-10 py-3 border rounded-full border-gray-500
                        flex items-center gap-2 dark:text-black bg-white" >
                        my resume 
                        <Image src={assets.DownloadIcon} alt="Download-Icon" className="w-4" width={4} height={4}/>
                    </a>
                </div>
        </div>
    )
}

export default Header;