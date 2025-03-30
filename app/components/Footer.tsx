import { assets } from "@/assets/assets"
import { Github } from "lucide-react"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

type FooterProps = {
    isDarkMode : boolean
    setIsDarkMode : Dispatch<SetStateAction<boolean>>
}
const Footer = ({isDarkMode , setIsDarkMode}:FooterProps) => {
    return(
        <div id="contact" className=" mt-20">
            <div className=" text-center">
                <Image src={assets.Logo} alt="Logo" className=" w-36 mx-auto mb-2"/>
                <div className=" w-max flex items-center gap-2 mx-auto">
                    <Image src={assets.MainIcon} alt="mail-icon" className="w-6"/> ponpon13173@gmail.com
                </div>
            </div>
            <div className=" text-center sm:flex items-center justify-between  border-t border-gray-400
                mx-[10%] mt-12 py-6">
                <p>@ 2025 Napon Tansiri.</p>
                <ul className=" flex items-center justify-center gap-10 mt-4 sm:mt-0">
                    <li><a target="_blank" href="https://github.com/ponzaa555"><Github className=" aspect-square border border-black rounded-full items-center"/></a></li>
                    <li><a target="_blank" href="https://github.com/ponzaa555">LinkIn</a></li>
                    <li><a target="_blank" href="https://github.com/ponzaa555">facebook</a></li>
                </ul>
            </div>
        </div>
    )
}


export default Footer