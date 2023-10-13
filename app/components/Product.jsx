import {product} from "../custom-data.js"
import Image from 'next/image'
import Cards from './Cards'



const Product = () => {
//destructure
const{title, subtitle}=product

  return (
    <section className="section">
<div className='container mx-auto  '>
<div className="flex flex-col lg:flex-row mb-10 lb:mb-20 items-center">
<h2 className="section-title">{title}</h2>
  <p className="lead lg:max-w-[350px]">{subtitle}</p>
</div>
<Cards/>
</div>
    </section>
  )
}

export default Product