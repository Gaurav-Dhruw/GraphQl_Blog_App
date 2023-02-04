import React , {useState,useEffect} from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';

const Comments = ({slug}) => {
  const [comments, setComments] = useState([]);
  
  useEffect(()=>{
    getComments(slug)
      .then(result => setComments(result))
  },[])

  return (
    <>
      {comments.length > 0 && (
        <div className='shadow-lg p-8 pb-12 rounded-lg bg-white mb-8 mx-auto w-4/5 md:w-full'>
            <h3 className='mb-8 text-lg font-semibold border-b pb-4'>
              {`${comments.length} `}
              Comments
            </h3>
            
            <div className='flex flex-col-reverse'>
              {comments.map(comment=>(
                <div key={comment.createdAt} className='border-b border-gray-100 pb-4 mx-6 mb-4'>
                  <p className='mb-1 text-sm text-gray-800'>
                    <span className='font-semibold mr-2'>
                      {`${comment.name}`}
                      
                    </span>
                    {moment(comment.createdAt).format('MMM DD, YYYY')}
                  </p>
                  <p className='whitespace-pre-line w-full text-gray-800 text-sm'>
                    {parse(comment.comment)}
                  </p>
                </div>
              ))}
            </div>
        </div>
      
      )}
    </>
    
  )
}

export default Comments