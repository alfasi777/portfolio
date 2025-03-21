import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode,setisDarkMode}) => {

    const [isScroll,setIsScrool] = useState(false);
    const sideMenuRef = useRef();
    const openMenu = () => {
        console.log("open");
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
     };
    const closeMenu = () => {
        console.log("close");
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    };

    useEffect( () => {
        window.addEventListener('scroll', ()=>{
           if(scrollY > 50){
            setIsScrool(true);
           }else{
            setIsScrool(false);
           } 
        })
    },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
        <nav className= {`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
                        flex items-center justify-between z-50
                        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg drop-shadow-sm dark:bg-darkTheme dark:shadow-white/20" : 
                            ""
                        }`}>
            <div className='flex items-center gap-4'>
                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
                </button>
                <a href='#contact' className='hidden lg:flex items-center gap-3 px-10
                    py-2.5 border border-gray-500 rounded-full ml-4 font-sans dark:border-white/50'
                >צור קשר
                <Image alt='' src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon } className='w-3' />
                </a>
                <button onClick={()=> setisDarkMode(prev => !prev)}>
                    <Image src={ isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
                </button>
            </div>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 text-xl text-black 
                            rounded-sm px-12 py-3 font-sans dark:text-white 
                            hover:bg-lightHover dark:hover:bg-darkHower/90 transition duration-700
                            ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}
                            `}
                            >
                <li><a className='font-sans  hover:text-yellow-600/85' href='#top'>בית</a></li>
                <li><a className='font-sans  hover:text-yellow-600/85' href='#about'>אודות</a></li>
                <li><a className='font-sans  hover:text-yellow-600/85' href='#services'>שירותים</a></li>
                <li><a className='font-sans  hover:text-yellow-600/85' href='#work'>תיק עבודות</a></li>
                <li><a className='font-sans  hover:text-yellow-600/85' href='#contact'>צור קשר</a></li>
                
            </ul>
            <a href='#top'>
                <Image alt='סיינטאלפ לוגו' src={assets.logo5} className='w-16 cursor-pointer mr-14 rounded-md  drop-shadow-2xl' />
            </a>

            {/* -- -------- mobile menu ------- --  */}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col font-medium text-lg gap-4 py-20 px-10 
                            fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen 
                            bg-rose-50 transition duration-500 dark:bg-darkHower dark:text-whiter'>

                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
                </div>
                <li><a className='font-Ovo hover:text-red-700/75 hover:text-2xl hover:font-bold' onClick={closeMenu} href='#top'>חזרה</a></li>
                <li><a className='font-Ovo hover:text-red-700/75 hover:text-2xl hover:font-bold' onClick={closeMenu} href='#about'>אודות</a></li>
                <li><a className='font-Ovo hover:text-red-700/75 hover:text-2xl hover:font-bold' onClick={closeMenu} href='#services'>שירותים</a></li>
                <li><a className='font-Ovo hover:text-red-700/75 hover:text-2xl hover:font-bold' onClick={closeMenu} href='#work'>תיק עבודות</a></li>
                <li><a className='font-Ovo hover:text-red-700/75 hover:text-2xl hover:font-bold' onClick={closeMenu} href='#contact'>צור קשר</a></li>
            </ul>

        </nav>
    </>
  )
}

export default Navbar