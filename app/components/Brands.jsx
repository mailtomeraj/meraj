import {overview} from "../custom-data.js"
import Image from 'next/image'



const Brands = () => {
//destructure
const{brands} = overview

  return (
    <section className="py-9">
     {/* <div key={index} data-aos="fade-up" data-aos-delay={delay}> */}
<div className="container mx-auto flex flex-col lg:flex-row  items-center justify-between space-y-6 overflow-hidden">
{
       brands.map((item, index)=>{
          //destructure
         const { image, delay} = item;
           return(
           
            <div key={index}> 
            <Image className="w-ful h-auto" src={image} height={100} width={100} />
            </div>
           )
           }
        )
      }
</div>
    </section>
  )
}

export default Brands