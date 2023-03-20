import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Post, { PostProps } from "main/helper/Components/Post";
import MainBlogData from "main/helper/blogData/main";
import SeriesData from "main/helper/blogData/series";
import Showdown, * as showdown from "showdown";

import { promises as fs } from 'fs'
import path from 'path'

export interface PostPageProps extends PostProps {}

const PostPage: NextPage<any> = (props: PostPageProps) => {
  return (<Post {...props} />)
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }: any) => {
  const slug = params.postId;
  const postData = MainBlogData.filter(blog => blog.slug === slug)[0]
  const filePath = path.join(process.cwd(), 'Blogs', postData.filename + ".md")
  const markdownContent = await fs.readFile(filePath, 'utf-8');
  const showdownConverter = new Showdown.Converter();
  const htmlData = showdownConverter.makeHtml(markdownContent);

  return {
    props: {
      postId: slug,
      post: {
        ...postData,
        series: SeriesData[postData.series ?? ""] ?? null,
        postHtml: htmlData
      },
    }, // will be passed to the page component as props
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: MainBlogData.map(blog => {
      return {params: {postId: blog.slug}};
    }),

    fallback: false
  }
}

export default PostPage;
