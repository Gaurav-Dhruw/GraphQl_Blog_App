import React from 'react'
import {PostCard, Widget} from '../../components';
import { getCategorisedPosts,getCategories, getFilteredTag} from '../../services' 

const CategoryPost = ({slug,posts, categories,tag}) => {

    
  return (
    <>
        <div className="continer mx-auto  md:px-20 md:pb-20">
            <div className='font-semibold text-center md:text-left md:text-lg mb-10 md:mx-10'>
                Filtered Based on Tag :
                <span className='trasition duration-200 px-3 py-1 ml-5 bg-slate-200 rounded-xl  hover:bg-slate-300 font-normal cursor-pointer text-base'>
                    {tag.name}
                </span>
            </div>
            <div  className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:px-20'>
                
                <div className=' lg:col-span-8 col-span-1'>
                     
                    {posts.map((post,index)=>(
                        <PostCard post={post} key={post.title}/>
                    ))}
                </div>
                <div className=' lg:col-span-4 col-span-1'>
                    <Widget categories={categories}/>
                </div>
            </div>
      
        </div>
    </>
    
  )
}

export default CategoryPost

export async function getStaticProps({params}){
    const posts = await getCategorisedPosts(params.slug);
    const categories = await getCategories();
    const tag = await getFilteredTag(params.slug);

    return{
        props:{
            slug:params.slug,
            posts,
            categories,
            tag
        }
    }
}
export async function getStaticPaths(){
    const categories =  await getCategories();
    return {
        paths: categories.map(({slug}) => ({params:{slug}})),
        fallback: true
    }
}