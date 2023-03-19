import React from "react";
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import GetContent from "main/helper/Components/GetContent";
import DisplayPost from "main/helper/Components/DisplayPost";
import * as urls from "main/helper/urls";
import HomeHead from "main/helper/Components/PageHead";
import { BlogData } from "../blogData/main";

const Post: NextPage<any> = function(props: any) {
  const slug = props.postId;

  return (
    <React.Fragment>
      <HomeHead />
      <GetContent url={[urls.api, urls.series]} key={slug}>
        {(allData: string, allSeries: string) => {
          const post: BlogData = JSON.parse(allData).filter(
            (data: any) => data.slug === slug
          )[0];
          const series = JSON.parse(allSeries)[post.series ?? ""];
          return (
            <GetContent url={urls.GetHTML(post.filename)}>
              {(postHtml: any) => (
                <DisplayPost
                  {...post}
                  postHtml={postHtml}
                  series={series ? series : null}
                  key={post.slug}
                />
              )}
            </GetContent>
          );
        }}
      </GetContent>
    </React.Fragment>
  );
};

export default Post;
