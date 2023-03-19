import React, { Suspense } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

import Link from 'next/link';
import { useRouter } from 'next/router';

import LoadingComponent from "./LoadingComponent";
import DelayedRender from "./DelayedRender";
import PostListPage from "main/pages/Components/PostListPage";
import Post from "./Post";

/**
 * Takes the react router prop and returns the page number
 * @param {React router passed prop} routeParams 
 */
const GetPageNum = function(routeParams:any) {
  return Number(routeParams.match.params.num);
}

const Router = function() {
  const router = useRouter();
  let component: any = null;

  return (
    <React.Fragment>
      <PostListPage num={1} />
    </React.Fragment>
  );
};

export default Router;
