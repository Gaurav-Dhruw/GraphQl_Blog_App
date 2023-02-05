import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Author = ({author}) => {

  return (
    <>
      <div className='bg-white shadow-lg rounded-lg p-6 pb-8 md:p-8 md:pb-12 mb-20  mx-auto w-full'>
        <div className='grid grid-cols-3 gap-6'>
        
          <div className='justify-self-center rounded-md overflow-hidden max-h-[12rem] max-w-[10rem]' >
            <img src={author.photo ? author.photo.url : "/profile_photo_placeholder.png"} alt="" className=' object-cover object-center rounded-md'/>
          </div>
          
      
          <div className='grid col-span-2'>
            
              <div className='mb-2 font-semibold text-lg '>
                  {author.name}
              </div>
              <div className='mt-2 mb-4 flex '>
                 {author.socialMedia.map((SM,index) =>(
                  <SocialIcon
                    key={index} 
                    url={SM.url}
                    className=' mr-4  transition duration-500 ease transform hover:-translate-y-1 inline-block cursor-pointer' style={{height:"40px", width:"40px"}}/>
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