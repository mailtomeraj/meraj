import {overview} from "../custom-data.js"
import Image from 'next/image'



const Overview = () => {
//destructure
const{productImg} = overview

  return (
    <section className=" bg-overview bg-cover bg-left-top lg:min-h-[712px] pt-[30px] lg:pt-[87px]">
<div className='container mx-auto flex justify-end overflow-hidden '>

<Image className=" w-full h-auto" src={productImg} alt="" width={100} height={100} data-aos="fade-up" data-aos-offset="300" />
</div>
    </section>
  )
}

export default Overview