//import data
import { footer } from "../custom-data"
import Copyright from "../components/Copyright"
import Image from 'next/image'
import Link from "next/link"
const Footer = () => {
  //destructure footer data
  const { logo, links, legal, newsletter, form } = footer
  return (
    <footer className="pt-[142px] pb-[60px]">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row justify-between items-center lg:items-start gap-y-8">
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="300"> <Link href="/"><Image src={logo} alt="" /></Link></div>
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="500">
            <div className=" text-2xl uppercase font-medium mb-6">
              Link
            </div>
            <ul className="flex flex-col gap-y-3">
              {
                links.map((item, index) => {
                  return (
                    <li key={index}><Link href={item.href} className="hover:text-c-accent transition">{item.name}</Link></li>
                  )
                })
              }
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="700">
            <div className=" text-2xl uppercase font-medium mb-6">
              Legal
            </div>
            <ul className="flex flex-col gap-y-3">
              {
                legal.map((item, index) => {
                  return (
                    <li key={index}><Link href={item.href} className="hover:text-c-accent transition">{item.name}</Link></li>
                  )
                })
              }
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="800">
            {/* newseletter */}
            <div className="text-2xl uppercase font-medium mb-6">{newsletter.title}</div>
            <div className="text-xl text-c-light mb-[18px]">{newsletter.subtitle}</div>
            <form className="max-w-[349px] mb-[10px]">
              <div className="h-[62px] p-[7px] flex border border-c-dark rounded-lg">
                <input className="w-full h-full pl-6 border-none outline-none placeholder:text-c-dark" type="text" placeholder={form.placeholder} />
                <button className="btn btn-sm text-white bg-c-accent hover:bg-c-accentHover w-[102px]">{form.btnText}</button>
              </div>
            </form>
            <span className="text-sm text-c-light">{form.smallText}</span>
          </div>
        </div>
        <hr className="mt-10 mb-5" data-aos="fade-up" data-aos-offset="100" data-aos-delay="200"/>
        <Copyright/>
      </div>
    </footer>
  )
}

export default Footer