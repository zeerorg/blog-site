import React from "react";
import Link from "next/link"

import * as urls from "../urls";
import GetContent from "./GetContent";

const Series = function(props: any) {
  return (
    <div className="ml-1">
      <h3 className="series-heading">Series</h3>
      <GetContent url={urls.api}>
        {(allPosts: any) => {
          let seriesPosts = JSON.parse(allPosts).filter((post: any) =>
            props.posts.includes(post.slug)
          );
          return seriesPosts.map((post: any) =>
            post.slug !== props.currentPost ? (
              <Link
                href={`/post/${post.slug}`}
                key={post.slug}
                className="series-link"
              >
                {post.title}
              </Link>
            ) : (
              <p key={post.slug} className="series-current">
                {post.title}
              </p>
            )
          );
        }}
      </GetContent>
    </div>
  );
};

export default Series;
