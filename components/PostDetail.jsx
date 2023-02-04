import React from 'react'
import moment from 'moment'
import Link from 'next/link';
import { FcCalendar , FcClock} from "react-icons/fc";
const PostDetail = ({post}) => {

  return (
    <>
        <div className='bg-white shadow-lg rounded-lg p-8 mb-20'>
            <div className=' overflow-hidden h-60 md:h-96 mb-14 rounded-xl'>
                <img src={post.featuredImage.url} className='object-center w-full h-full'/>
            </div>

            <div className='lg:px-10 pb-14'>
            
                <div className='lg:flex mb-5' >
                    <div className='p-2 md:mr-4 flex items-center'>
                        <FcCalendar/>
                        <span className='ml-2'>
                        Created at: {moment(post.createAt).format("MMM DD, YYYY")}
                        </span>
                    </div>
                    <div className="p-2 md:mr-4 flex items-center">
                        <FcClock/>
                        <span className='ml-2'>
                        5 mins Read 
                        </span> 
                    </div>
                </div>
                <div className='font-bold text-xl md:text-3xl mb-10'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, earum.
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia aperiam a similique earum, cum placeat doloribus ad harum, ut labore enim, nulla atque magnam pariatur omnis assumenda. Vel eveniet, id aspernatur fugit, voluptatum sed velit molestias et atque deleniti quidem vitae tenetur adipisci, laborum nam. Aperiam pariatur odit veniam omnis. Sequi fugiat unde nesciunt, recusandae placeat quam facere. 

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident iste eveniet excepturi explicabo similique quam autem nemo molestias, dolore ipsa! Praesentium, magni impedit obcaecati natus aspernatur quo dolorem quaerat accusamus, facere velit modi perferendis, autem voluptate fugit. Quod aut rem eaque. Odit repellendus perspiciatis voluptatibus qui voluptates commodi molestiae molestias magnam rerum laborum hic sit labore, eligendi eaque velit assumenda nostrum a pariatur. Tempore id ratione porro, sunt, quam quibusdam quaerat aliquam numquam maiores expedita praesentium at repellendus ut reprehenderit accusantium temporibus nemo repellat vero quae sapiente, blanditiis consequatur aspernatur! Animi mollitia necessitatibus, maxime incidunt nisi veritatis illo pariatur.
                </div>
            </div>
            
        </div>
        
    </>
    
  )
}

export default PostDetail