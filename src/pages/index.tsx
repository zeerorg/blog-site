import MainBlogData, { BlogData } from 'main/helper/blogData/main';
import { GetStaticProps, NextPage } from 'next';
import BlogDataContext from 'main/helper/blogData/BlogDataContext';
import PostListPage from 'main/helper/Components/PostListPage';
import RSS from "rss";

import { promises as fs } from 'fs'
import path from 'path'

export interface HomeProps {
  blogList: BlogData[],
  num: number
}

const Home: NextPage<any, any> = (props: HomeProps) => {
  return (
    <BlogDataContext.Provider value={props.blogList}>
      <PostListPage {...props} />
    </BlogDataContext.Provider>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  
  var feed = new RSS({
      title: "Rishabh's Blog",
      description: "Welcome to personal blog of Rishabh Gupta, here I share my thoughts and experiences on new technologies or work experiences (basically ranting).",
      feed_url: "https://blog.zeerorg.site/rss.xml",
      site_url: "https://blog.zeerorg.site",
      image_url: "https://blog.zeerorg.site/favicon.png",
      webMaster: "Rishabh Gupta (r.g.gupta@outlook.com)"
  });

  MainBlogData.forEach(blog => {
      feed.item({
          title: blog.title,
          description: blog.tldr,
          url: "https://blog.zeerorg.site/post/" + blog.slug,
          guid: blog.slug,
          date: new Date(blog.timestamp * 1000)
      })
  })

  const filePath = path.join(process.cwd(), 'public', "rss.xml")
  await fs.writeFile(filePath, feed.xml({indent: true}));

  return {
    props: {
      blogList: MainBlogData,
      num: 1
    }, // will be passed to the page component as props
  }
}

export default Home;