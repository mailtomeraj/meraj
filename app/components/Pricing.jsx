'use client'
import {pricing} from "../custom-data.js"
import Image from 'next/image'
import Cards from './Cards'
import {HiCheck, HiOutlineArrowRight} from 'react-icons/hi'
import { useState } from "react"

function Pricing() {
  const [index, setIndex] = useState(1)
  const {title, cards} = pricing;
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-y-[30px] lg:gap-x-[30px] '>
      <div className="container mx-auto">
<h2 className="h2 mb-10 lg:mb-20 text-center" data-aos="fade-up" data-aos-delay="200">{title}</h2>
<div className='flex flex-col lg:flex-row gap-y-[30px] lg:gap-x-[30px] justify-center'>
        {
          cards.map((card, cardIndex) => {
            //destructure
            const { icon, title, services, price, userAmount, btnText, delay } = card;
            return (
              <div className="" key={cardIndex} data-aos="fade-up" data-aos-delay={delay}  data-aos-offset="300">
                <div onClick={() => setIndex(cardIndex)} className={`${index === cardIndex && 'bg-white shadow-2xl'} w-[350px] h-350px  justify-start items-center mx-auto p-[65px] rounded-[12px] cursor-pointer transition-all`} >
                  <div className="mb-8"><Image src={icon} alt="" /></div>
                  <div className="text-[32px] font-semibold mb-8">{title}</div>
                  {/* <div className="mb-6 text-c-light">{subtitle}</div> */}
<div className="flex flex-col gap-y-2 mb-6">
                  {
         services.map((services, index) => {
            //destructure
            const { name } = services;
            return ( 
              
              <div className="flex items-center gap-x-[10px]" key={index}>
              <HiCheck className="text-light"/>
              <div>{name}</div>
              </div>
            )
            
          })
                  }
                  </div>
                  <div className="mb-10">
                    <div>
                      <span className="text-2xl font-semibold"> {price} / </span>
                      <span className="text-xl text-c-light font-light">year</span>
                    </div>
                    <div className="text-base text-c-light">{userAmount}</div>
                  </div>
                  <button className={`${index === cardIndex && 'bg-c-accent hover:bg-c-accentHover text-white'} btn btn-sm border border-c-accent flex justify-start items-center space-x-[14px]  cursor-pointer transition-all`}><span className="gap-x-3">{btnText}</span><HiOutlineArrowRight/></button>
                  <div>
                  </div>
     
                </div>

              </div>
            )
          }
          )
        }
      </div>
      </div>
        {/* {
          cards.map((card, cardIndex) => {
                  
            return (
              <div  key={cardIndex}>
                <div onClick={() => setIndex(cardIndex)} className={`${index === cardIndex && 'bg-white shadow-2xl'} w-[350px] h-350px flex flex-col justify-center items-center mx-auto p-[65px] text-center rounded-[12px] cursor-pointer transition-all`}>
                  <div className="mb-6"><Image src={icon} alt="" /></div>
                 
                </div>

              </div>
            )
          }
          )
        } */}
      </div>
    </>

  )
}


export default Pricing