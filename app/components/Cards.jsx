'use client'
import { product } from "../custom-data.js"
import Image from 'next/image'
import ArrowImg from '../../public/images/product/cards/arrow.svg'
import { useState } from "react"

function Card() {
  const [index, setIndex] = useState(1)
  const { cards } = product
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-y-[30px] lg:gap-x-[30px] justify-center'>
        {
          cards.map((card, cardIndex) => {
            //destructure
            const { icon, title, subtitle, delay } = card;
            return (
              <div data-aos="zoom-out" data-aos-offset="300" data-aos-delay="delay"  key={cardIndex}>
                <div onClick={() => setIndex(cardIndex)} className={`${index === cardIndex && 'bg-white shadow-2xl'} w-[350px] h-350px flex flex-col justify-center items-center mx-auto p-[65px] text-center rounded-[12px] cursor-pointer transition-all`}>
                  <div className="mb-6"><Image src={icon} alt="" /></div>
                  <div className="mb-3 text-[30px] font-medium">{title}</div>
                  <div className="mb-6 text-c-light">{subtitle}</div>
                  {index==cardIndex && <Image src={ArrowImg} height={30} width={30}/>}
                </div>

              </div>
            )
          }
          )
        }
      </div>
    </>

  )
}


export default Card