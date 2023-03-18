import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'main/styles/Home.module.css'
import Router from './Components/Router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Rishabh's Blog</title>
        <meta name="description" content="Welcome to personal blog of Rishabh Gupta, here I share my thoughts and experiences on new technologies or work experiences (basically ranting)." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Router />
      </main>
    </>
  )
}
