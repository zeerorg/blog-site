import React, { RefObject, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import Prism from "prismjs";

import "prismjs/components/prism-go";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-nginx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-yaml";

import Series from "./Series";

import "prismjs/themes/prism-okaidia.css";
import { BlogData } from "../blogData/main";
import Head from "next/head";

export interface DisplayPostProps extends Omit<BlogData, 'series'> {
  postHtml: string,
  series: any[] | null
}

const DisplayPost = function(props: DisplayPostProps) {
  let postContainer: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      Prism.highlightAll()

      // Add target: _blank to all link
      if (postContainer.current !== null) {
        let links = postContainer.current.getElementsByTagName("a");
        for (let i = 0; i < links.length; i++) {
          const item = links.item(i);
          if (item !== null) {
            item.setAttribute("target", "_blank");
            item.setAttribute("rel", "noopener");
          }
        }
      }
    },
    [props.postHtml]
  );

  return (
    <React.Fragment>
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.tldr} />
    </Head>
    <div>
      <div className="flex-container">
        <div className="flex-big-item" />
        <div className="flex-main">
          <Link href="/" className="no-link-style">
            <h2 className="font-size-med margin-up-med margin-down-min">
              Rishabh&apos;s Blog
            </h2>
          </Link>
          <div className="DisplayPost" ref={postContainer}>
            <div className="flex-container">
              <div className="flex-main">
                <div dangerouslySetInnerHTML={{ __html: props.postHtml }} />
                <hr />
                {!!props.dev_to && (
                  <p style={{ fontStyle: "italic" }}>
                    For any discussion let&apos;s head over to{" "}
                    <a href={props.dev_to}>Dev.to</a>
                  </p>
                )}
                {!!props.tweet && (
                  <p style={{ fontStyle: "italic" }}>
                    Discussions in the{" "}
                    <a href={props.tweet}>tweet</a>
                  </p>
                )}
                <p className="text-secondary">
                  {new Date(props.timestamp * 1000).toDateString()}
                </p>
                <hr />
              </div>
              {props.series && (
                <div className="flex-item margin-left-med">
                  <Series {...props.series} currentPost={props.slug} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex-big-item" />
      </div>
    </div>
    </React.Fragment>
  );
};

export default DisplayPost;
