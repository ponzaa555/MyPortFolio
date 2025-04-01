"use client"
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/project";
import Activity from "./components/Activity";
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
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Project isDarkMode={isDarkMode} />
      <Activity isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
