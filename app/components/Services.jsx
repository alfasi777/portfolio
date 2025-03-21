import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h2 
          initial={{y:-20,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.3,duration:0.5}}
          className='mt-2 text-center text-4xl font-sans text-gray-600'>החטיבה העיסקית שלנו</motion.h2>
        <motion.h4 
          initial={{y:-20,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.5,duration:0.5}}
          className='text-center my-2 text-xl font-Outfit text-yellow-500 font-semibold'>שירותי תוכנה וענן לחברות ועסקים קטנים</motion.h4>
        <motion.p 
          initial={{y:-20,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.7,duration:0.5}}
          className='text-center max-w-2xl mx-auto mt-4 mb-8 font-sans'>
            אני מפתח עצמאי, עם למעלה מעשר שנות ניסיון בתעשיה,
             בחברות ישראליות וזרות. הובלתי מספר רב של פרוייקטים,
              והשנה בעזרת צוות מקצועי - הקמתי את סיינט-אלפ תוכנה, מחירים ושירות ללא תחרות, יחס אישי, והסכמי שירות מוזלים לתושבי העותף.
        </motion.p>
        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:0.9,duration:0.5}}
          className='grid grid-cols-auto gap-6'>
            {
                serviceData.map( ({icon,title,description,link},index) => (
                    <motion.div 
                        whileHover={{scale:1.05}}
                        key={index}
                        className='border border-gray-400 rounded-lg px-8 py-6
                        hover:shadow-black cursor-pointer 
                        hover:bg-lightHover hover:-translate-y-1 duration-500
                        dark:hover:bg-darkHower dark:hover:shadow-white'>
                       <Image src={icon} alt='' className='w-10' /> 
                       <h3 className='text-lg mt-2 text-gray-700 font-semibold font-sans dark:text-white'>{title}</h3>
                       <p className='text-sm text-gray-600 leading-5 dark:text-white/80 dark:font-semibold'>{description}</p>
                       <a href='{link}' className='flex items-center gap-2 text-sm mt-2 font-sans font-medium text-gray-700 dark:text-gray-300/80'>
                        לקריאה נוספת <Image src={assets.right_arrow} alt=''
                                    className='w-4 scale-x-[-1]'/>
                       </a>
                    </motion.div>
                ) )}
        </motion.div>    
    </motion.div>
  )
}

export default Services