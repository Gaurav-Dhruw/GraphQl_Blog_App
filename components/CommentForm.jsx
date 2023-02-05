import React from 'react'
import {useState, useRef} from 'react';
import {postComment} from '../services';

const CommentForm = ({setPosted,slug}) => {
  const [error,setError] = useState(false);

  const nameEl = useRef();
  const emailEl = useRef();
  const commentEl = useRef();
  

  const handlePostSubmission = () => {
    setError(false);

    const {value:comment} = commentEl.current;
    const {value:name} = nameEl.current;
    const {value:email} = emailEl.current;
  
    if (!name || !email || !comment) {
      setError(true);
      return;
    }

    const data = {name,email,comment,slug};

    postComment(data)
      .then(res=>{
        nameEl.current.value = "";
        emailEl.current.value = "";
        commentEl.current.value = "";
        setPosted(res.publishComment.id);
      })

  };

  return (
    <>
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-20  mx-auto w-full'>
      <h3 className='font-semibold mb-5'>Leave a comment</h3>
    
      <div className='grid grid-col-1 '>
        
        <textarea 
            className='py-3 px-4 mb-5 rounded-lg outline-none w-full focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            ref={commentEl}
            placeholder='Comment...'/>
      </div>
      <div className='grid grid-col-1 lg:grid-cols-2 gap-8 mb-5'>

        <input 
            className='outline-none focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 rounded-lg py-2 px-4'
            ref={nameEl} 
            type="text" 
            placeholder='Name'/>
        <input 
            className='outline-none focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 rounded-lg py-2 px-4' 
            type="email"
            ref={emailEl}
            placeholder='Email' />
      </div>
      {error && <p className="text-xs text-red-500" >*All fields are required</p>}
      <div className='flex  justify-center px-8 md:justify-end'>
        <button 
            onClick={handlePostSubmission}
            className='transition   ease duration-100 mt-5 px-4 py-2 bg-pink-500 text-white active:bg-indigo-800 active:scale-95 rounded-full shadow-lg' 
            type="button"> 
                Post Comment
        </button>
      </div>
      
      
    </div>
    </>
  )
}

export default CommentForm