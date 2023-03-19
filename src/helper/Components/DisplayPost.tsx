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

const DisplayPost = function(props: any) {
  let postContainer: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // set title and meta
  document.title = props.title;
  var meta = document.createElement("meta");
  meta.name = "description";
  meta.content = props.tldr;
  document.getElementsByTagName("head")[0].appendChild(meta);

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
  );
};

export default DisplayPost;
