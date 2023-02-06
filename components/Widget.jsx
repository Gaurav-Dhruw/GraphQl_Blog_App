import React from 'react'
import {PostWidget, Categories} from '../components'
import { animate, motion ,useAnimationControls} from "framer-motion"

const Widget = ({slug,categories}) => {
    const controls = useAnimationControls();
  return (
    <>
      <div className='lg:sticky relative top-8'>
          <motion.div initial={{opacity:0, y:-50}} animate={controls} transition={{duration:.7}}>    
              <div className=' bg-white shadow-lg p-6 md:p-8 rounded-lg'>
                <PostWidget slug={slug} categories={categories.map(category=>category.slug)} controls={controls}/>
                <Categories categories={categories}/>
              </div>
          </motion.div>
      </div>
    </>
  )
}

export default Widget