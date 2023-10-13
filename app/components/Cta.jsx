import { cta } from "../custom-data.js"
import Image from 'next/image'
import { HiOutlineChevronDown } from "react-icons/hi"
const Cta = () => {
  const { title, subtitle, btnText, img1, img2 } = cta
  return (
    <section className="section bg-cta bg-cover bg-left-top">
      <div className='max-w[1340px] mx-auto px-[25px]'>
        <div className="max-w-[920px] mx-auto text-center">
          <h2 className="h2 text-white mb-6">{title}</h2>
          <p className="text-2xl lg:text-4xl text-white">{subtitle}</p>
        </div>
        <div className="flex justify-between">
          <Image className=" hidden xl:flex " src={img1} alt="" width={500} height={500} data-aos="zoom-out-right" data-aos-delay="700" />
          <button className="btn btn-md btn-white mt-[40px] lg:text-[22px] gap=x-[10px] mx-auto">{btnText} <HiOutlineChevronDown /></button>
          <Image className=" hidden xl:flex " src={img2} alt="" width={500} height={500} data-aos="zoom-out-right" data-aos-delay="700" />
        </div>
      </div>
    </section>
  )
}

export default Cta