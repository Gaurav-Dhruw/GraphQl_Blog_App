import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Author = ({author}) => {

  return (
    <>
      <div className='bg-white shadow-lg rounded-lg p-6 pb-8 md:p-8 md:pb-12 mb-20  mx-auto w-2/3 md:w-full'>
        <div className='flex flex-col md:flex-row items-center md:items-start'>
        
          <div className='rounded-lg mb-8 md:mb-0 md:mr-10 overflow-hidden h-[12rem] w-full md:w-40' >
            <img src={author.photo ? author.photo.url : "/profile_photo_placeholder.png"} alt="" className='object-cover w-full h-full'/>
          </div>
          
      
          <div className='grid '>
            
              <div className='mb-2 font-semibold text-lg hover:text text-center md:text-left'>
                  {author.name}
              </div>
              <div className='mt-2 mb-4 flex justify-center md:justify-start'>
                 {author.socialMedia.map(SM =>(
                  <SocialIcon 
                    url={SM.url}
                    className='mx-2  md:mx-0 md:mr-4  transition duration-500 ease transform hover:-translate-y-1 inline-block cursor-pointer' style={{height:"40px", width:"40px"}}/>
                 ))}  
              </div>
          
              <div className='text-sm md:text-base'>
                {author.bio}
              </div>
            

            </div>
        </div>
        
      </div>
    </>
  )
}

export default Author