import React, {useState} from 'react'
import { useRouter } from 'next/router';
import {getPosts, getPostDetails, getCategories} from '../../services';
import {PostDetail,CommentForm, Comments, Author,Widget, Loader} from '../../components';

const PostDetails = ({post,categories}) => {
    const [posted,setPosted] = useState('');
    
    const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
  <>
    <div className="continer mx-auto md:px-20 md:pb-20">
        <div  className='grid grid-cols-1 lg:grid-cols-12 gap-12  md:px-20'> 
            <div className=' lg:col-span-8 col-span-1'>
                <PostDetail post={post}/> 
                <Author author={post.author}/>
                <CommentForm setPosted={setPosted} slug={post.slug}/>
                <Comments posted={posted} slug={post.slug}/>
            </div>
            <div className=' lg:col-span-4 col-span-1'>
                <Widget categories={categories}/>
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
        fallback : true
    }
}