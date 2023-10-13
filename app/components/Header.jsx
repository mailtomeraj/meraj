'use client'
import { useEffect, useState } from "react"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import {HiMenu, HiOutlineX} from "react-icons/hi" 
//import data
import {header} from "../custom-data"
import Link from "next/link"
import Image from "next/image"


const Header = () => {
//mobile nav state
const [mobileNav, setMobileNav] = useState(false)
//header State
const [isActive,setIsActive] = useState(false)
//destructure header
const {logo, btnText} = header

useEffect(()=>{
  window.addEventListener('scroll', () =>{
  window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
  }
  )
})

  return (
    <header className={`${isActive ? 'lg:top-0  bg-white shadow-2xl' : 'lg:top-0 '} lg:w-full w-screen  py-6 lg:py-2 fixed transition-all z-10 bg-white `}>
      <div className="container mx-auto flex justify-between items-center lg:py-2">
        <Link href="/"><Image src={logo} alt=""/></Link>
        {/** nav - intially hidden - show on desktop mode */}
        <div className="hidden lg:flex "><Nav/></div>
        {/*cta - intially hidden -show on desktop */}
        <button className="btn btn-sm btn-outline hidden lg:flex" data-aos="fade-down" data-aos-delay="1200">{btnText}</button>
        {/*mobile nav trigger btn -hidden on desktop */}
        <button className="lg:hidden" onClick={()=> setMobileNav(!mobileNav)}>
          {mobileNav ? (<HiOutlineX className=" text-4xl text-c-accent"/>) :(<HiMenu className=" text-4xl text-c-accent"/>) }
        </button>
        {/*mobile nav - hidden on desktop*/}
        <div className={`${mobileNav ? 'left-0' : '-left-full'} lg:hidden fixed top-0 bottom-0 transition-all w-[60vw]`}>
          <MobileNav/>
        </div>
      </div>

    </header>
  )
}

export default Header