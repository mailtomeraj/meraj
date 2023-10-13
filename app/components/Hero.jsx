import { hero } from "../custom-data"
import Image from "next/image"
import { HiOutlineChevronDown } from "react-icons/hi2"

const Hero = () => {
  //destructure data
  const { title, subtitle, btnText, compText, image } = hero
  return (
    <section className=" bg-white min-h-[900px] py-12">
      <div className="container mx-auto min-h-[900px] flex justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left
    lg:gap-x-[30px] gap-y-8 lg:gap-y-0">
          <div className="flex-1">
            <h1 className="title mb-2 lg:mb-5" data-aos="fade-down" data-aos-delay="500">{title}</h1>
            <p className="lead mb-5 lg:mb-10" data-aos="fade-down" data-aos-delay="600">{subtitle}</p>
            <div className="flex items-center mx-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6" data-aos="fade-up" data-aos-delay="700">
              <button className=" btn btn-md lg:btn-lg bg-c-accent lg:gap-4 flex justify-center items-center text-white">{btnText}
                <HiOutlineChevronDown />
              </button>
              <span className=" text-c-light lg:lead  lg:mb-0">{compText}</span>
            </div>
          </div>
          <div className="flex-1" data-aos="fade-up" data-aos-delay="800">
            <Image className=" w-full " src={image} alt="" width={100} height={100} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero