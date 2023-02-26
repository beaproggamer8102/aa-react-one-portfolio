import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaPhone } from 'react-icons/fa';

const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://linkedin.com/in/ankitrj1602',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/ankitraj-1602',
      // style: 'rounded-tr-md'
    },
    {
      id: 3,
      child: (
        <>
          mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:ankitr1602@gmail.com',
      // style: 'rounded-tr-md'
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: './ankitraj_resume.pdf',
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          call   <FaPhone size={30} />
        </>
      ),
      href: 'tel:+919668616234',
      style: 'rounded-br-md',
      download: true,
    },
  ]

  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>


        {links.map(({id, child, href, style, download}) => {

         return   <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' + " " + style}>
              <a href={href} className='flex justify-between items-center w-full text-white ' download={download} target='_blank' rel='noreferrer'>
              {child}
            </a>
          </li>

        })}


      </ul>

    </div>
  )
}

export default SocialLinks