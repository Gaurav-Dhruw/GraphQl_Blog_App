import {PostCard, PostWidget, Categories, FeaturedPosts} from '../components/index'
import Head from 'next/head'
import {getPosts, getCategories, getFeaturedPosts} from '../services'


export default function Home ({posts,categories,featuredPosts})  {
  return (
    <div className="continer mx-auto px-10 md:px-20 mb-8 w-full">
      <Head>
        <title>CMS Blog</title>
      </Head>
      <div className='md:m-8 mb-12'>
        <FeaturedPosts posts={featuredPosts}/>
      </div>
      
      <div  className='grid grid-cols-1 lg:grid-cols-12 gap-12  md:px-20 pb-20'> 
        <div className=' lg:col-span-8 col-span-1'>
          {posts.map((post,index)=>(
            <PostCard post={post.node} key={post.title}/>
          ))}
        </div>
        <div className=' lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <div className=' bg-white shadow-lg p-6 md:p-8 rounded-lg'>
              <PostWidget />
              <Categories categories={categories}/>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export async function getStaticProps(){
  const posts = await getPosts();
  const categories = await getCategories();
  const featuredPosts = await getFeaturedPosts();

  return {
    props:{
      posts,
      categories,
      featuredPosts
    }
  }
}



