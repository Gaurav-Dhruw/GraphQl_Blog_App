import React from 'react'
import Link from 'next/link'

export default function Categories({categories}) {

  return (
  <>
    <div>

      <div className='font-bold text-lg inline p-1 border-b-2 border-b-pink-500'>
        Categories
      </div>

      <div className='flex  my-5 p-2 flex-wrap'>
        {categories.map(category=>(
          <span className='mr-3 mb-3'>
            <Link href={`/category/${category.slug}`}>
              <span className='trasition duration-200 text-sm px-3 py-1  bg-slate-200 rounded-full  hover:bg-slate-300'>
                  {category.name}
              </span>     
            </Link>
          </span>
        ))}
        
          
      </div>

      </div>

    
  </>
    
  )
}

