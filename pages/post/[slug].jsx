import React from 'react'
import {getPosts, getPostDetails, getCategories} from '../../services';
import {PostDetail, Categories, PostWidget, CommentForm, Comments, Author} from '../../components';

const PostDetails = ({post,categories}) => {
  return (
  <>
    <div className="continer mx-auto md:px-20 md:pb-20">
        <div  className='grid grid-cols-1 lg:grid-cols-12 gap-12  md:px-20'> 
            <div className=' lg:col-span-8 col-span-1'>
                <PostDetail post={post}/> 
                <Author author={post.author}/>
                <CommentForm slug={post.slug}/>
                <Comments slug={post.slug}/>
            </div>
            <div className=' lg:col-span-4 col-span-1'>
                <div className='lg:sticky relative top-8'>
                    <div className='bg-white shadow-lg p-8 rounded-lg mx-auto  md:w-full'>
                        <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
                        <Categories categories={categories}/>
                    </div>
                </div>

            </div>
        </div>
    </div>
  </>
  )
}

export default PostDetails

export async function getStaticProps({params}){
    const data = await getPostDetails(params.slug);
    const categories = await getCategories();

    return {
        props: {
            post: data,
            categories
        }
    }
}
export async function getStaticPaths(){
    const posts = await getPosts();

    return {
        paths: posts.map(({node:{slug}}) => ({params:{slug}})),
        fallback : false
    }
}