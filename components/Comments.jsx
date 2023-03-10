import React , {useState,useEffect} from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';
import useSWR from 'swr';

const Comments = ({slug}) => {
  // const {data,error} = useSWR(slug,getComments);
  // console.log(data);


  const [comments, setComments] = useState([]);

  useEffect(()=>{
      getComments(slug).then(res=>{
        setComments(res);
      })

  },[slug])

  
  // if(!data) return <></>;
  return (
    <>
      {comments.length > 0 && (
        <div className='shadow-lg p-8 pb-12 rounded-lg bg-white mb-8 mx-auto w-full'>
            <h3 className='mb-8 text-lg font-semibold border-b pb-4'>
              <span className='text-pink-500 text-xl'>{`${comments.length} `}</span>
              Comments
            </h3>
            
            <div className='flex flex-col'>
              {comments.map(comment=>(
                <div key={comment.createdAt} className='border-b border-gray-100 pb-4 mx-3 md:mx-6 mb-4'>
                  <p className='mb-1 text-sm text-gray-800'>
                    <span className='font-semibold mr-2'>
                      {`${comment.name}`}
                      
                    </span>
                    {moment(comment.createdAt).format('MMM DD, YYYY')}
                  </p>
                  <p className='whitespace-pre-line w-full text-gray-800'>
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