import React, { Fragment } from "react";
import Link from "next/link";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

import PostList from "./PostList";
import { useGetContent, DefaultWaiting } from "./GetContent";
import { api as url } from "../urls";

const PageNav = function(props: any) {
  const { num, maxPage } = props;
  let pagesList = [];

  for (let i=1; i<=maxPage; i++) {
    let page = <React.Fragment key={`page${i}`}><Link href={`/page/${i}`}>{i.toString()}</Link>&nbsp;&nbsp;&nbsp;</React.Fragment>;

    if (i === num) {
      page = <React.Fragment key={`page${i}`}><strong>{i.toString()}</strong>&nbsp;&nbsp;&nbsp;</React.Fragment>;
    }

    pagesList.push(page);
  }

  return (
    <div className="flex-container">
      <div className="flex-item" style={{ marginLeft: "-15px" }}>
        {num <= 1 ? (
          <span />
        ) : (
          <Link href={`/page/${num - 1}`}>
            <IoIosArrowRoundBack /> Newer Posts
          </Link>
        )}
      </div>
      <div className="flex-item text-center">
        {pagesList}
      </div>
      <div className="flex-item text-right">
        {num >= maxPage ? (
          <span />
        ) : (
          <Link href={`/page/${num + 1}`}>
            Previous Posts <IoIosArrowRoundForward />
          </Link>
        )}
      </div>
    </div>
  );
};

const Page = function(props: any) {
  const { num } = props;
  const limit = 7;

  let [rawPosts] = useGetContent(url);

  if (!rawPosts) {
    return <DefaultWaiting />;
  }

  let posts = JSON.parse(rawPosts)
    .reverse()
    .filter((post: any) => post.published);
  let count = posts.length;
  posts = posts.slice(limit * (num - 1), limit * num);

  return (
    <div>
      <PostList posts={posts} />
      <PageNav num={num} maxPage={Math.ceil(count / limit)} />
    </div>
  );
};

export default Page;
