import React, { useEffect } from "react";
import Link from "next/link";

import Page from "./PostListContainer";
import styles from "main/styles/PostListPage.module.css";
import HomeHead from "./PageHead";

export interface PostListPageProps {
  num: number
}

const PostListPage = function(props: PostListPageProps) {
  const { num } = props;
  const title = "Rishabh's Blog";

  return (
    <React.Fragment>
      <HomeHead />
      <div className={styles["flex-container"]}>
        <div className={styles["flex-item"]} />
        <div className={styles["flex-item"]} />
        <div className={styles["flex-main"]}>
          <div className="margin-up-max margin-down-max">
            <h1>
              <Link href="/" className="no-link-style">
                {title}
              </Link>
            </h1>
          </div>
          <div className="margin-up-max margin-down-max">
            <p>
              I&apos;m Rishabh, I blog about software development and some casual
              stuff.
              <br />
              <a href="https://twitter.com/zeerorg">
                @zeerorg
              </a> /{" "}
              <a href="mailto:r.g.gupta@outlook.com">r.g.gupta@outlook.com</a> /{" "}
              <a href="/rss.xml">RSS Feed</a>
            </p>
          </div>
          <Page num={num} />
        </div>
        <div className={styles["flex-item"]} />
      </div>
    </React.Fragment>
  );
};

export default PostListPage;
