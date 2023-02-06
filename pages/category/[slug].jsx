import React from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import {PostCard, Widget, Loader} from '../../components';
import { getCategorisedPosts,getCategories, getFilteredTag} from '../../services' 

const CategoryPost = ({slug,posts, categories,tag}) => {
    const router = useRouter();

  if (router.isFallback) {
    return <Loader/>;
  }
    
  return (
    <>
        <div className="continer mx-auto  md:px-20 md:pb-20">
            <Head>
                <title>Blog Hub</title>
                <link rel='icon' href='/logo.png'/>
            </Head>
            <div className='font-semibold md:text-lg px-4 mt-10 md:mt-0 mb-10 md:mx-10'>
                <span className='mb-3 inline-block'>Filtered Based on Tag :</span> 
                <span className='trasition inline-block whitespace-nowrap duration-200  px-3 py-1 ml-3 bg-slate-200 rounded-xl text-sm  hover:bg-slate-300 font-normal cursor-pointer'>
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

export async function getServerSideProps({params}){
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
// export async function getStaticPaths(){
//     const categories =  await getCategories();
//     return {
//         paths: categories.map(({slug}) => ({params:{slug}})),
//         fallback: true
//     }
// }