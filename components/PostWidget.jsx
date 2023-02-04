import React , {useState, useEffect}from 'react'
import Link from 'next/link';
import { FcCalendar , FcClock} from "react-icons/fc";
import moment from 'moment'
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({categories, slug}) => {

  const [related, setRelated] = useState(true);
  let [relatedPosts,setRelatedPosts] = useState([]);
  useEffect(() => {
    if(slug){
      getSimilarPosts(categories,slug).then(result=>{
        setRelated(true);
        setRelatedPosts( result);
      })
    }
    else {
      getRecentPosts().then(result =>{
        setRelated(false);
        setRelatedPosts(result);
      })
    }
  
  }, [slug])

  return (
    <>
      {relatedPosts.length>0 && <div>
            
        <div className='font-bold text-lg inline p-1 border-b-2 border-b-pink-500'>
          { related ?"Related Posts" :" Recent Posts"}
        </div>  
        <div className='grid mt-5 mb-10'>
          {relatedPosts.map(post=>(
            

            <Link href={`/post/${post.slug}`} className='transition duration-200 rounded-lg hover:scale-95'>
              <div className='grid grid-cols-3 md:grid-cols-4 gap-8 p-2'>
                  <div className='col-span-1 rounded-lg mr-5 overflow-hidden' style={{width:"70px", height:"70px"}}>
                    <img src={post.featuredImage.url} className='objec-cover w-full h-full '/>
                  </div>
                  
                  <div className=' col-span-2 md:col-span-3'>
                      <div className='pl-1 pb-1'>
                        <h2 className=' text-sm truncate'>
                            {post.title} 
                        </h2>
                      </div>
                      <div className='text-xs' >
                        <div className='p-1  flex items-center'>
                          <FcCalendar/>
                          <span className='ml-2'>
                            {moment(post.createAt).format("MMM DD, YYYY")}
                          </span>
                        </div>
                        <div className="p-1 flex items-center">
                          <FcClock/>
                          <span className='ml-2'>
                            5 mins Read 
                          </span> 
                        </div>
                      </div>
                  </div>
                  
              </div>
              
            </Link>
        
          ))} 

        </div>
      </div>
      }
    </>
    
  )
}

export default PostWidget