import React from 'react'
import {useState, useRef} from 'react';
import {postComment} from '../services';

const CommentForm = ({slug}) => {
  const [error,setError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: null, email: null, comment: null });

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
        // setFormData(prevState => ({
        //   ...prevState,name:null,comment:null,email:null
        // }))
        setShowSuccess(true);
        setTimeout(()=>{
          setShowSuccess(false);
        },5000);
      })

  };

  return (
    <>
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-20  mx-auto w-4/5 md:w-full'>
      <h3 className='font-semibold mb-5'>Leave a comment</h3>
    
      <div className='grid grid-col-1 '>
        
        <textarea 
            value={formData.comment}
            className='py-3 px-4 mb-5 rounded-lg outline-none w-full focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            ref={commentEl}
            placeholder='Comment...'/>
      </div>
      <div className='grid grid-col-1 lg:grid-cols-2 gap-8 mb-5'>

        <input 
            value={formData.name}
            className='outline-none focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 rounded-lg py-2 px-4'
            ref={nameEl} 
            type="text" 
            placeholder='Name'/>
        <input 

            value={formData.email}  
            className='outline-none focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 rounded-lg py-2 px-4' 
            type="email"
            ref={emailEl}
            placeholder='Email' />
      </div>
      {error && <p className="text-xs text-red-500" >*All fields are required</p>}
      <button 
          onClick={handlePostSubmission}
          className='transition ease duration-100 mt-5 px-4 py-2 bg-pink-500 text-white active:bg-indigo-800 active:scale-95 rounded-full' 
          type="button"> 
              Post Comment
      </button>
      {/* {<span className="text-lg float-right font-semibold mt-3 text-green-500 self-center">Comment submitted for review</span>} */}
      
    </div>
    </>
  )
}

export default CommentForm