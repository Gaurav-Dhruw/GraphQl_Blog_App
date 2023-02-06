import React from 'react'
import moment from 'moment'
import Link from 'next/link';
import { FcCalendar , FcClock} from "react-icons/fc";

const PostCard = ({post}) => {
  return (
    <>
      <div className='bg-white md:grid grid-cols-3 shadow-lg rounded-lg p-6  md:p-8 pb-12 mb-10 '>
          <div className='img-container col-span-1 h-[12rem] md:h-60 w-full  mb-6 md:mb-0 overflow-hidden rounded-md
          self-center'>
            <Link href={`/post/${post.slug}`}>
              <img src={post.featuredImage.url} alt={post.title} className=' object-cover w-full h-full transform duration-200 hover:scale-110'/>
            </Link>
          </div>
          
           <div className='grid md:pl-10 col-span-2'>
            <div className='flex flex-wrap mb-6 md:mb-3 '>
              {post.categories.map(category =>(
                <span key={category.slug} className='mr-3 my-2 '>
                <Link href={`/category/${category.slug}`}>
                    <span className='transform inline-block text-sm duration-200 px-3 py-1  bg-slate-200 rounded-full hover:bg-slate-300'>
                        {category.name}
                    </span>
                </Link>
                </span>
                ))}
            </div>
            <div>
              <h1 className='text-ellipsis overflow-hidden font-semibold text-lg md:text-xl mb-2 transform duration-200 hover:text-pink-500 inline-block'>
                  <Link href={`/post/${post.slug}`}>
                      {post.title}  s
                  </Link> 
              </h1>
              <div className='max-h-[4.5rem];
    overflow-hidden  mb-2'>
                {post.excerpt}
              </div>
            </div>
            
            
            <div className='pt-5 md:p-0 md:flex text-sm' >
              <div className='p-1 md:p-2 md:mr-4 flex items-center'>
                <FcCalendar/>
                <span className='ml-2'>
                  Created at: {moment(post.createAt).format("MMM DD, YYYY")}
                </span>
              </div>
              {post.readTime && <div className="p-1 md:p-2 md:mr-4 flex items-center">
                <FcClock/>
                <span className='ml-2'>
                  {post.readTime} mins read 
                </span> 
              </div>}
            </div>
        </div>
             
        
        
      </div>
    </>
    
  )
}

export default PostCard