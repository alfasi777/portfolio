import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div id='footer' className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode ? assets.logo : assets.logo5} alt='logo 5' className='w-12 mx-auto mb-2' />
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail me' className='w-6' />  
                asafb.amal@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t
                        border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© סיינט-אלפ בניית אתרים</p>
            <ul className='flex flex-grow-0 gap-5 mt-4 sm:mt-0'>
                <li className='flex items-center gap-1'>
                    <a target='_blank' href='https://github.com/alfasi777'>GitHub</a>
                    <Image src={assets.github} alt='github' className='w-4 rounded-full' />
                </li>
                <li className='flex items-center gap-1'>
                    <a target='_blank' href='#'>LinkedIn</a>
                    <Image src={assets.linkedin} alt='github' className='w-4' />
                </li>
                <li className='flex items-center gap-1'>
                    <a target='_blank' href='#'>X</a>
                    <Image src={assets.twitter} alt='github' className='w-4' />
                </li>
                <li className='flex items-center gap-1'>
                    <a target='_blank' href='#'>.Onion</a>
                    <Image src={assets.profile_img3} alt='github' className='w-4' />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer