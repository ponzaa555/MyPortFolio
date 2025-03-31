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
import GitHub from "./githubIcon.png"
import WebIcon from "./web-icon.png"
import SendIcon from "./send-icon.png"
import MobileIcon from "./mobile-icon.png"
import GraphicIcon from "./graphics-icon.png"
import RightArrow from "./right-arrow.png"
import RightArrowBold from "./right-arrow-bold.png"
import RightArrowBoldDark from "./right-arrow-bold-dark.png"
import MainIcon from "./mail_icon.png"
import Logo from "./logo.png"
import MenuWhite from "./menu-white.png"
import CloseWhite from "./close-white.png"
import { Info } from "lucide-react"
import { StaticImageData } from "next/image"
import Company from "./building.svg"
import CompanyWhite from "./Bwhite.svg"
import Golang from "./golangIcon.png"
import Ts from "./TsIcon.png"
import Csharp from "./Csharp.png"
import Mysql from "./mySql.png"
import Postgres from "./postgrest.png"
import Nextjs from "./NextIcon.png"
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
    RightArrow,
    SendIcon,
    RightArrowBold,
    Logo,
    MainIcon,
    MenuWhite,
    CloseWhite,
    RightArrowBoldDark,
    Golang,
    Ts,
    Csharp,
    Mysql,
    Postgres,
    Nextjs
}

type Info = {
    icon: StaticImageData;
    iconDark: StaticImageData;
    title: string;
    describtion: string;
}

type Project = {
    icon: StaticImageData;
    title: string;
    describion: string;
    link: string;
}

type ActivityData = {
    tittle: string;
    describtion : string;
    bgImage : string;
}
export const infoList :Info[] = [
    {
        icon: Company,
        iconDark: CompanyWhite,
        title: "Internship",
        describtion: "During my 10-month internship at TCC Company, I had the opportunity to work as a backend developer focusing on improving the system for point-of-sale (POS) using C# and the .NET Framework"
    },
    {
        icon: EducationIcon,
        iconDark: EducationIconDark,
        title: "Education",
        describtion: "I am graduated with a Bachelor's degree in Computer Engineering from Kasetsart University"
    },
    {
        icon: ProjectIcon,
        iconDark: ProjectIconDark,
        title: "Part-time",
        describtion: `I worked as a cashier at a Japanese restaurant during my participation in the Work and Travel program in the USA `
    }
]

export const toolData:StaticImageData[] =
[
    assets.Vscode , assets.MongoDb,assets.Mysql,assets.Postgres , assets.GitHub , assets.Golang , assets.Csharp , assets.Ts ,assets.Nextjs ,
]



export const projectList:Project[] = [
    {
        icon: WebIcon,
        title: "Web Development",
        describion: "I can create a website using HTML, CSS, and JavaScript. I can also use frameworks like React, Next.js, and Tailwind CSS.",
        link: ""
    },
    {
        icon: MobileIcon,
        title: "Mobile Development",
        describion: "I can create a mobile application using React Native.",
        link: ""
    },
    {
        icon: GraphicIcon,
        title: "Graphic Design",
        describion: "I can create a logo, banner, and other graphic design using Adobe Illustrator.",
        link: ""
    }
]

export const ActivityAssets : ActivityData[] = [
    {
        tittle : "Frontend Project",
        describtion : "Web design",
        bgImage : "/work-1.png"
    },
    {
        tittle : "Backend Go",
        describtion : "Mobile App",
        bgImage: "/work-2.png"
    },
    {
        tittle : "Photography Site",
        describtion : "Web design",
        bgImage : "/work-3.png"
    },
    {
        tittle : "UX/UI Design",
        describtion : "Scott Clean Care",
        bgImage : "/work-4.png"
    }
] 