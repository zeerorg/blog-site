import React from "react";
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import GetContent from "main/helper/Components/GetContent";
import DisplayPost, { DisplayPostProps } from "main/helper/Components/DisplayPost";
import HomeHead from "main/helper/Components/PageHead";

export interface PostProps {
  postId: string,
  post: DisplayPostProps
}

const Post: NextPage<PostProps> = function(props: PostProps) {
  const post = props.post;

  return (
    <React.Fragment>
      <HomeHead />
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
