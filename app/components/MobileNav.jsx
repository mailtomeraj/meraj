import {nav} from '../custom-data'
import Link from 'next/link';
const MobileNav = () => {
  return (
    <div className=' bg-c-accent/95 w-full h-full text-white items-center'>
    <ul className='flex flex-col justify-center items-center gap-y-8 h-full'>
      {
        nav.map((item, index)=>{
          //destructure
         const { href, name} = item;
           return(
            <li key={index}>
              <Link href={href} alt="" className='hover:text-c-accent'>{name}</Link>
            </li>
           )
           }
        )
      }
    </ul>

    </div>
  )
}

export default MobileNav