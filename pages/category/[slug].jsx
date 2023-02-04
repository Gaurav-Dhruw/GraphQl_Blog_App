import React from 'react'
import {PostDetail, Categories, PostWidget, CommentForm, Comments, Author,PostCard} from '../../components';
import { getCategorisedPosts, getCategories} from '../../services' 

const CategoryPost = ({posts,categories, slug}) => {
    let  tag;
    categories.forEach(category=>{
        if(category.slug == slug){
            tag = category;
            return;
        } 
    });

  return (
    <>
        <div className="continer mx-auto px-10 md:px-20 pb-20">
            <div className='font-semibold md:text-lg mb-10 md:mx-10'>
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
                    <div className='lg:sticky relative top-8'>
                        <div className='bg-white container shadow-lg p-8 rounded-lg'>
                            <PostWidget />
                            <Categories categories={categories}/>
                        </div>
                    </div>

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

    return{
        props:{
            slug:params.slug,
            posts,
            categories
        }
    }
}
export async function getStaticPaths(){
    const categories =  await getCategories();
    return {
        paths: categories.map(({slug}) => ({params:{slug}})),
        fallback: false
    }
}