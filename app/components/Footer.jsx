import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div id='footer'>
        {/*<div className='text-center'>
            <Image src={isDarkMode ? assets.logo : assets.logo5} alt='logo 5' className='w-12 mx-auto mb-2' />
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail me' className='w-6' />  
                asafb.amal@gmail.com
            </div>
        </div>*/}
            <div className='text-center grid gap-1 lg:flex items-center lg:justify-between mx-[10%] mt-0 py-2 lg:gap-10'>
                <p className='font-sans font-semibold text-blue-800'> © סיינט-אלפ בניית אתרים - <span className='text-red-600'>2025</span></p>
                <div className='flex items-center justify-center gap-2'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail me' className='w-6' />  
                    asafb.amal@gmail.com
                </div>
                <ul className='flex items-center justify-center gap-4 '>
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
                        <a target='_blank' href='#'>Tor</a>
                        <Image src={assets.profile_img3} alt='github' className='w-4' />
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Footer