import React, { useState } from 'react'
import Head from 'next/head';

import { useRouter } from 'next/router';
import { getPosts, getPostDetails, getCategories } from '../../services';
import { PostDetail, CommentForm, Comments, Author, Widget, Loader } from '../../components';

const PostDetails = ({ post, categories }) => {

    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }
    return (
        <>
            <div className="continer mx-auto md:px-20 md:pb-20">
                <Head>
                    <title>Blog Hub</title>
                    <link rel='icon' href='/logo.png' />
                </Head>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12  md:px-20'>
                    <div className=' lg:col-span-8 col-span-1'>
                        <PostDetail post={post} />
                        <Author author={post.author} />
                        <CommentForm slug={post.slug} />
                        <Comments slug={post.slug} />
                    </div>
                    <div className=' lg:col-span-4 col-span-1'>
                        <Widget slug={post.slug} categories={categories} postCategories={post.categories} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    const categories = await getCategories();

    return {
        props: {
            post: data,
            categories
        },
        revalidate: 10
    }
}
export async function getStaticPaths() {
    const posts = await getPosts();

    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true
    }
}