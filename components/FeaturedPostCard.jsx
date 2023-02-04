import React from 'react'
import Link from 'next/link'
import { FcCalendar , FcClock} from "react-icons/fc";

const FeaturedPostCard = ({post}) => {
  
  return (
    
    <>
    
        <div className='shadow-lg  pb-12 h-100 rounded-lg bg-white mx-auto w-60 my-10 mb-16 cursor-pointer' >
        <Link href={`/post/${post.slug}`}>
            <div className='rounded-t-lg w-full h-40 overflow-hidden '>
                <img src={post.featuredImage.url} className='object-cover w-full h-full'/>
            </div>
            <div className='p-4 '>
                <div className='flex flex-wrap mb-3 text-xs '>
                {post.categories.map(category =>(
                    <span className='mr-3 my-2'>
                    <Link href={`/category/${category.slug}`}>
                        <span className='transform duration-200 px-3 py-1  bg-slate-200 rounded-xl hover:bg-slate-300'>
                            {category.name}
                        </span>
                    </Link>
                    </span>
                    ))}
                </div>
                <h3 className='mb-3 font-bold max-h-14 overflow-hidden'>
                    Tielte of the post like tis  post like tis
                </h3>
                <div className='overflow-hidden max-h-10 text-sm'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, blanditiis?
                </div>
            </div>
            </Link>     
        </div>
    </>
    
  )
}

export default FeaturedPostCard