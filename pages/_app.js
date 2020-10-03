import '../styles/globals.css'
import Head from 'next/head';
import Layout from '../components/constants/layout';

function MyApp({ Component, pageProps }) {
  return <>
      <Component {...pageProps} />
  </>
}

export default MyApp
