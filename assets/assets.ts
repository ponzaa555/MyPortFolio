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
import LiveBoard from "./liveBoard.png"
import Tripgather from "./Tripgather.png"
import GYM from "./GYM.png"
import SirLocker from "./sirLocker.jpg"
import JWT from "./jwt.png"
import GitPng from "./github-mark.png"
import Vercel from "./vercel.svg"
import GitWhite from "./github-mark-white.png"
import AirPlan from "./airplane.png"
import Techer from "./teacher.jpg"
import ProjectSenior from "./projectIcon.png"
import CompanyPic from "./CompanyPic.jpg"
import Waiting from "./waiting.png"
import LinkIn from "./linkIn.webp"
import Instragram from "./Instragran.png"
import FaceBook from "./facebook.jpg"
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
    Nextjs,
    GitPng,
    Vercel,
    GitWhite,
    AirPlan,
    ProjectSenior,
    Techer,
    CompanyPic,
    Waiting,
    LinkIn,
    Instragram,
    FaceBook
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
    githubLink : string
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
    },
    
]

export const toolData:StaticImageData[] =
[
    assets.Vscode , assets.MongoDb,assets.Mysql,assets.Postgres , assets.GitHub , assets.Golang , assets.Csharp , assets.Ts ,assets.Nextjs ,
]



export const projectList:Project[] = [
    {
        icon: LiveBoard,
        title: "LiveBoard",
        describion: "Developed a collaborative board website enabling note-taking, text input, and drawing, built with TypeScript, Next.js, and Liveblock.io for real-time synchronization.",
        link: "https://tripgether-three.vercel.app/",
        githubLink : "http://github.com/ponzaa555/Share_Board"
    },
    {
        icon: Tripgather,
        title: "Web Travel Blogs",
        describion: "Developed a travel website featuring chat, collaborative planning, blog exploration, and user engagement, leveraging Next.js, TypeScript, Convex, Liveblock.io, and the Google Maps API.",
        link: "",
        githubLink:"https://github.com/ponzaa555/Tripgether"
    },
    {
        icon: GYM,
        title: "GYM Webstie",
        describion: "Developed a website that displays gym class schedules and highlights membership benefits",
        link: "",
        githubLink:"https://github.com/ponzaa555/GYM_PON"
    },
    {
        icon : Golang,
        title: "Scraping blog content from a URL.",
        describion : "Building a Golang-based backend server to scrape blog content from the internet, leveraging Chi Router and PostgreSQL for efficient data management.",
        link:"",
        githubLink:"https://github.com/ponzaa555/Golang_Rss"
    },
    {
        icon : SirLocker,
        title: "Locker with ESP32",
        describion : "Developed a C++ based locker system to store car or PIN numbers, focusing on managing and implementing data communication between the hardware board.",
        link:"",
        githubLink:"https://github.com/Sir-Locker"
    },
    {
        icon : JWT,
        title: "Authentication with JWT",
        describion : "Implemented JWT-based authentication in Go, providing secure user verification and access control for the application.",
        link:"",
        githubLink:"https://github.com/ponzaa555/Go_JWT"
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