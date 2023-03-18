import React from "react";
import Link from "next/link";

const Post = function(props) {
  return (
    <div className="margin-up-max margin-down-max">
      <h3 className="margin-zero">
        <Link href={"/post/" + props.slug} className="no-link-style my-3">
          {props.title}
        </Link>
      </h3>
      <p>{new Date(props.timestamp * 1000).toDateString()}</p>
      <p>{props.tldr}</p>
    </div>
  );
};

const PostList = function(props) {
  const { posts } = props;
  return (
    <div>
      {posts.map(data => (
        <Post {...data} key={data.slug} />
      ))}
    </div>
  );
};

export default PostList;
