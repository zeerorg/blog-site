import React from "react";
import { NextPage } from 'next';
import Post from "main/pages/Components/Post";

const PostPage: NextPage<any> = Post

PostPage.getInitialProps = async ({ query }: any) => {
  return { postId: query.postId as string }
}

export default Post;
