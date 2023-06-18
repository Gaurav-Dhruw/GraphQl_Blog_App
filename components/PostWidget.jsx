import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { FcCalendar, FcClock } from "react-icons/fc";
import moment from 'moment'
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ controls, slug, postCategories }) => {

  const [related, setRelated] = useState(true);
  let [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {

    if (slug) {
      getSimilarPosts(postCategories, slug).then(result => {
        setRelated(true);
        setRelatedPosts(result);
        controls.start({ opacity: 1, y: 0 });
      })
    }
    else {
      getRecentPosts().then(result => {
        setRelated(false);
        setRelatedPosts(result);
        controls.start({ opacity: 1, y: 0 });
      })
    }
  }, [slug])

  return (
    <>
      {relatedPosts.length > 0 && <div>

        <div className='font-bold text-lg inline p-1 border-b-2 border-b-pink-500'>
          {related ? "Related Posts" : " Recent Posts"}
        </div>
        <div className='grid mt-5 mb-10 max-w-[20rem] '>
          {relatedPosts.map(post => (


            <Link key={post.slug} href={`/post/${post.slug}`} className='transition duration-200 hover:scale-95'>
              <div className='grid grid-cols-3 md:gap-2 p-2'>
                <div className='col-span-1 justify-self-center rounded-md  overflow-hidden' style={{ width: "70px", height: "70px" }}>
                  <img src={post.featuredImage.url} className='objec-cover w-full h-full ' />
                </div>

                <div className=' col-span-2 '>
                  <div className='pl-1 pb-1'>
                    <h2 className=' text-sm truncate font-semibold'>
                      {post.title}
                    </h2>
                  </div>
                  <div className='text-xs' >
                    <div className='p-1  flex items-center'>
                      <FcCalendar />
                      <span className='ml-2'>
                        {moment(post.createAt).format("MMM DD, YYYY")}
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