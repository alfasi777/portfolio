import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div 
        initial = {{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration:1}}
        id='about' className='w-full px-[12%] py-5 scroll-mt-20'
    >
        <motion.h4 
            initial = {{opacity: 0, y:-20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration:0.5,delay:0.3}}
            className='text-center mt-8 mb-4 text-lg font-Outfit'>
            <span className='text-yellow-600 text-opacity-85 text-2xl font-semibold'>סיינט-אלפ </span>  פיתוח תוכנה ואדמיניסטרציה</motion.h4>
        <motion.h2 
            initial = {{opacity: 0, y:-20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration:0.5,delay:0.5}}
            className='mb-10 text-center text-6xl font-sans text-gray-600/90'>הבית שלך לאינטרנט ורשתות</motion.h2>
        <motion.div 
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration:0.8}}
            className='flex w-full flex-col lg:flex-row items-center gap-20 my-10'>
            <motion.div 
                initial = {{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale:1}}
                transition={{duration:0.6}}
                className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.sliks} alt='user' 
                    className='w-full scale-105 p-2 rounded-3xl border border-yellow-500/25'/>
            </motion.div>
            <motion.div
                initial = {{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{duration:0.6, delay:0.8}} 
                className='flex-1'>
                <p className='mb-8 max-w-2xl font-sans'>
                    סיינט-אלפ היא חברה המתמחה בפיתוח אתרי אינטרנט וחנויות אונליין.
                    החברה מספקת גם פתרונות לניהול ושירותי אדמיניסטרציה, הן בענן והן באתרי הלקוח. עם ניסיון רב בתחום, 
                    החברה מציעה שירותים מותאמים אישית שמתמקדים ביצירת חווית משתמש דיגיטלית איכותית ומקצועית.
                </p>
                <motion.ul 
                    initial = {{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:0.8, delay: 1}} 
                    className='grid grid-cols-auto gap-6'>
                    {
                        infoList.map(({icon,iconDark,title,description},index)=>(
                            <motion.li  
                                whileHover={{scale:1.05}}
                                key={index} className='border-[0.5px] border-gray-500
                                        rounded-xl p-6 cursor-pointer hover:bg-lightHover
                                        hover:-translate-y-1 hover:shadow-black duration-300
                                        dark:hover:shadow-white dark:hover:bg-darkHower/50'>
                                <Image src={isDarkMode? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <h3 className='text-yellow-500 text-opacity-85 text-xl font-semibold mt-4'>{title}</h3>
                                <p className='leading-5 text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))
                    }
                </motion.ul>
                <motion.h4 
                    initial = {{y:20,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:0.5, delay:1.3}} 
                    className='font-sans font-semibold mt-10 mb-3 text-gray-700 dark:text-white/80'>סביבות עבודה וכלי פיתוח:</motion.h4>
                <motion.ul 
                    initial = {{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:0.8, delay: 1.5}} 
                    className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool,index) => (
                        <motion.li 
                            whileHover={{scale: 1.1}}
                            key={index} 
                            className='flex items-center justify-center w-12 sm:w-14 aspect-square 
                                        border border-gray-400 rounded-lg cursor-pointer
                                        hover:-translate-y-1 duration-500'>
                            <Image src={tool} alt='Tool ' className='w-5 sm:w-7' />
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About