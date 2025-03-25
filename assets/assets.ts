import Profile from "./Profile.jpg"
import BackgroutProfile from "./header-bg-color.png"
import Menu_Back from "./menu-black.png"
import Close_Back from "./close-black.png"
import HandIcon from "./hand-icon.png"
import RightArrowWhite from "./right-arrow-white.png"
import DownloadIcon from "./download-icon.png"
import CodeIcon from "./code-icon.png"
import IconDark from "./code-icon-dark.png"
import EducationIcon from "./edu-icon.png"
import EducationIconDark from "./edu-icon-dark.png"
import ProjectIcon from "./project-icon.png"
import ProjectIconDark from "./project-icon-dark.png"
import Vscode from "./vscode.png"
import MongoDb from "./mongodb.png"
import GitHub from "./git.png"
import { Info } from "lucide-react"
import { StaticImageData } from "next/image"
export const assets = {
    Profile,
    BackgroutProfile,
    Menu_Back,
    Close_Back,
    HandIcon,
    RightArrowWhite,
    DownloadIcon,
    CodeIcon,
    IconDark,
    Vscode,
    MongoDb,
    GitHub,
}

type Info = {
    icon: StaticImageData;
    iconDark: StaticImageData;
    title: string;
    describtion: string;
}

export const infoList :Info[] = [
    {
        icon: CodeIcon,
        iconDark: IconDark,
        title: "Web Development",
        describtion: "I can create a website using HTML, CSS, and JavaScript. I can also use frameworks like React, Next.js, and Tailwind CSS."
    },
    {
        icon: EducationIcon,
        iconDark: EducationIconDark,
        title: "Education",
        describtion: "I am a student at the University of Indonesia majoring in Informatics Engineering."
    },
    {
        icon: ProjectIcon,
        iconDark: ProjectIconDark,
        title: "Projects",
        describtion: "I have made several projects that you can see on my GitHub account."
    }
]

export const toolData:StaticImageData[] =
[
    assets.Vscode , assets.MongoDb , assets.GitHub
]