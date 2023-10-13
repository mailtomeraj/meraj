'use client'
import Image from 'next/image'
// import Swiper JS
import {Swiper, SwiperSlide} from 'swiper/react';
// import Swiper styles
import 'swiper/css';

const ClientSlider = ({clients}) => {

  return (
    <Swiper slidesPerView={1} spaceBetween={30} grabCursor={true} loop={true} breakpoints={{
      640 :{
        slidesPerView: 1, 
        spaceBetween:30
      },
      768 :{
        slidesPerView: 2, 
        spaceBetween:30
      },
      1024 :{
        slidesPerView: 3, 
        spaceBetween:30
      },
      1170 :{
        slidesPerView: 3, 
        spaceBetween:30
      },
    }}>
{
  clients.map((client, index) => {
    const{ message,image, name, position, borderColor}=client
return <SwiperSlide key={index} style={{borderColor:borderColor}} className="border-t-[10px]">
  <div className='w-full lg:w-[300px] xl:w-[350px] h-[250px] mx-auto border border-c-grey py-6 px-[30px]'>
  <div className='mb-[30px]'>{message}</div>
  <div className='flex gap-x-[10px]'>
    <Image src={image} alt="" width={50} height={50}/>
    <div className=' font-bold'>{name}</div>
    <div className='text-light'>{position}</div>
  </div>
  </div>
</SwiperSlide>
  })
}
    </Swiper>

  )
}

export default ClientSlider