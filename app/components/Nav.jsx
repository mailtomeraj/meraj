import {nav} from '../custom-data'
import Link from 'next/link';

function Nav() {
  return (
   <nav>
    <ul className='flex justify-center items-center gap-x-10'>
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
   </nav>
  )
}


export default Nav