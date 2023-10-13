import {testimonials} from "../custom-data.js"
import Image from 'next/image'
import ClientSlider from "./ClientSlider.jsx"



const Testimonial = () => {
//destructure
const{title, clients}=testimonials

  return (
    <section className="section">
<div className='container mx-auto  '>
<div className="flex flex-col lg:flex-row mb-10 lb:mb-20 items-center">
<h2 className="section-title">{title}</h2>
</div>
<div  data-aos='fade-up' data-aos-delay="400"><ClientSlider clients={clients}/></div>
</div>
    </section>
  )
}

export default Testimonial