import '../styles/globals.scss'
import '../styles/post-card.css';
import React from 'react';
import {Layout} from '../components';


function MyApp({Component, pageProps}) {
  return (
    <>
    <Layout>
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}

export default MyApp
