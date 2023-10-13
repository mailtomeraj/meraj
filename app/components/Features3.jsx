import {features} from "../custom-data.js"
import Image from 'next/image'



const Features3 = () => {
//destructure
const{feature3} = features
const{pretitle, title, subtitle, btnLink, btnIcon, image}=feature3

  return (
    <section className="section">
<div className='container mx-auto  '>
<div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
<div className="flex-1" data-aos="fade-right" data-aos-offset="400">
  <div className="pretitle">{pretitle}</div>
  <h2 className="title">{title}</h2>
  <p className="lead">{subtitle}</p>
  <button className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">{btnLink} <Image className="w-[28px] h-auto " src={btnIcon} alt="" width={100} height={100}/></button>
</div>
<div className="flex-1" data-aos="fade-left" data-aos-offset="300" >
<Image className="w-full h-auto" src={image} alt="" width={100} height={100} />
</div>
</div>
</div>
    </section>
  )
}

export default Features3