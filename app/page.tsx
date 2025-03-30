"use client"
import Image from "next/image";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Activity from "./components/Activity";
import Contract from "./components/Contract";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
export default function Home() {
  const [isDarkMode , setIsDarkMode] = useState(true);

  useEffect(() => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])
  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add("dark")
      localStorage.theme = 'dark'
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.theme = ''
    }
  },[isDarkMode])
  return (
    <>
      < NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Project isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Activity isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      {/* <Contract/> */}
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </>
  );
}
