//import data
import {copyright} from "../custom-data"
import Link from "next/link"
import Image from "next/image"
const Copyright = () => {

  const {link1, link2, copyText, social} = copyright
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 text-center" data-aos="fade-up" data-aos-offset="0" data-aos-delay="200">
      <div className="flex flex-1 gap-x-6">
     <Link className="hover:text-c-accent transition" href={link1.href}>{link1.name}</Link>
     <Link className="hover:text-c-accent transition" href={link2.href}>{link2.name}</Link>
      </div>
      <div className="flex-1 text-center">{copyText} - Built by Meraj Naqui</div>
      <ul className="flex  justify-end flex-1 gap-x-3 ">
        {
          social.map((item, index) =>{
            const{ href, icon} = item
            return (
              <li key={index}>
            <Link href={href}><Image  src={icon} alt="" width={30} height={30} /></Link>
              </li>
            )
          })
        }
      </ul>
      <div></div>
    </div>
  )
}

export default Copyright