import React from "react";
import { NextPage } from 'next';

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
        <meta property="og:image" content={`https://deploy-preview-1--chipper-tulumba-c747ed.netlify.app/og-image.png`} />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
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
