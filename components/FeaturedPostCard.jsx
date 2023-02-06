import React from 'react'
import Link from 'next/link'
import { FcCalendar , FcClock} from "react-icons/fc";

const FeaturedPostCard = ({post}) => {
  
  return (
    
        <>
            <div className='shadow-lg pb-12 md:pb-10 h-100 rounded-lg bg-white mx-auto w-[18rem] md:w-60 my-10 mb-16' >
            
                <div className='rounded-t-lg w-full h-[14rem] md:h-40 overflow-hidden '>
                    <img src={post.featuredImage.url} className='object-cover w-full h-full'/>
                </div>
                <div className='p-4 '>
                    <div className='flex flex-wrap mb-2 text-sm md:text-xs '>
                    {post.categories.map(category =>(
                        <div key={category.slug} className='mr-3 my-2'>
                            <Link href={`/category/${category.slug}`}>
                                <span className='transform inline-block duration-200 px-3 py-1  bg-slate-200 rounded-xl hover:bg-slate-300'>
                                    {category.name}
                                </span>
                            </Link>
                        </div>
                        ))}
                    </div>
                    <Link href={`/post/${post.slug}`}>
                        <h3 className='mb-3 font-bold max-h-14 overflow-hidden hover:text-pink-500'>
                            {post.title}
                        </h3>
                    </Link>
                    <div className='overflow-hidden max-h-10 text-sm'>
                        {post.excerpt}
                    </div>
                    
                </div>
                
            </div>
        </>
    
  )
}

export default FeaturedPostCard