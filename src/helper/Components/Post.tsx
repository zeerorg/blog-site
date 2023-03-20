import React from "react";
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import GetContent from "main/helper/Components/GetContent";
import DisplayPost, { DisplayPostProps } from "main/helper/Components/DisplayPost";
import HomeHead from "main/helper/Components/PageHead";
import Head from "next/head";

export interface PostProps {
  postId: string,
  post: DisplayPostProps
}

const Post: NextPage<PostProps> = function(props: PostProps) {
  const post = props.post;

  return (
    <React.Fragment>
      <HomeHead />
      <Head>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.tldr} />
        <meta property="og:image" content={post.imageUrl ?? "/favicon.png"} />
        <meta property="og:url" content={"/" + post.slug} />
        <meta property="og:type" content="website" />
      </Head>
      <DisplayPost
        {...post}
        postHtml={post.postHtml}
        series={post.series ? post.series : null}
        key={post.slug}
      />
    </React.Fragment>
  );
};

export default Post;
