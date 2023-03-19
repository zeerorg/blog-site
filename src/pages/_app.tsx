import 'main/styles/globals.css'
import "main/styles/Post.css";
import "main/styles/PostListPage.css"
import "main/styles/Home.module.css"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
