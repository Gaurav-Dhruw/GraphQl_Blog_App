import React from 'react'
import moment from 'moment'

import { FcCalendar , FcClock} from "react-icons/fc";
const PostDetail = ({post}) => {

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }
    
        switch (type) {
          case 'heading-three':
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
      };
  return (
    <>
        <div className='md:bg-white :bg-gradient-to-b from-transparent to-white shadow-lg rounded-lg p-8 mb-20'>
            <div className=' overflow-hidden h-60 md:h-96 mb-14 rounded-md'>
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
                    {post.readTime && <div className="p-2 md:mr-4 flex items-center">
                        <FcClock/>
                        <span className='ml-2'>
                        {post.readTime} mins read 
                        </span> 
                    </div>}
                </div>
                <div className='font-bold text-xl md:text-3xl mb-10'>
                    {post.title}
                </div>
                <div> 
                        {post.content.raw.children.map((typeObj, index) => {
                            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                            return getContentFragment(index, children, typeObj, typeObj.type);
                        })}
                </div>
            </div>
            
        </div>
        
    </>
    
  )
}

export default PostDetail