import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { spring } from 'motion'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
                    items-center justify-center gap-6'>
        
        <motion.h1
            initial = {{y: -30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration:0.8, delay: 0.5}}
         className='leading-6 sm:text-4xl lg:text-[56px] font-sans text-yellow-500/80 mb-2'>סיינט-אלפ אינטרנט ורשתות</motion.h1>
        <motion.div
            initial = {{scale: 0}}
            whileInView={{scale: 1}}
            transition={{duration:0.8, type:spring, stiffness: 100}}
        >
            <Image src={assets.saintAlf} alt='לוגו' className='w-80 h-80'/>
        </motion.div>
        
        <motion.h3
            initial = {{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration:0.6, delay: 0.3}}
         className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-sans text-gray-600'
            >אסף בדרי - מייסד ובעלים
            <Image src={assets.profile_img} alt='' className='w-8'/>
        </motion.h3>
        
        <motion.p 
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration:0.6, delay: 0.7}}
            className='max-w-2xl mx-auto font-Ovo'
            >עיצוב והקמת אתרי אינטרנט, וחנויות דיגיטליות בוורדפרס או בכתיבת קוד. ניהול ותמיכה ברשתות תקשורת, אקטיב דיריקטורי ואופיס 365, בסיסי נתונים, מדפסות ושרתים, באתר הלקוח או בענן. כמו כן ניתן לרכוש רשיונות תוכנה, חומרה, דומיינים ושטחי אחסון בענן.
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-8 mt-4'>
            <motion.a href='#contact'
                initial = {{y: -30, opacity: 0}}
                whileInView={{y:0,opacity: 1}}
                transition={{duration:0.6, delay: 1}}
                className='font-sans px-10 py-3 border border-white rounded-md
                         bg-black text-white flex items-center gap-2
                         dark:bg-transparent '>
                יצירת קשר
            </motion.a>

            <motion.a 
                initial = {{y: -30, opacity: 0}}
                whileInView={{y:0,opacity: 1}}
                transition={{duration:0.6, delay: 1.2}}
                href='/sample-resume.pdf' download 
                className='font-sans px-10 py-3 border rounded-md
                         border-gray-500 flex items-center gap-2 bg-white  dark:text-black'>
                רזומה
                <Image src={assets.download_icon} alt='צור קשר' className='w-4'/>
            </motion.a>
        </div>
    </div>
  )
}

export default Header