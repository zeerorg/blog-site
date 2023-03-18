import React, { Suspense } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

import Link from 'next/link';
import { useRouter } from 'next/router';

import LoadingComponent from "./LoadingComponent";
import DelayedRender from "./DelayedRender";
import HomePage from "./HomePage";
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

  if (router.pathname.startsWith("/post/")) {
    component = (params: any) => <Post {...params} />
  } else if (router.pathname.startsWith("/page/")) {
    component = (params: any) => <HomePage num={GetPageNum(params)} />
  } else if (router.pathname === "/") {
    component = () => <HomePage num={1} />
  }

  return (
    <React.Fragment>
        <Suspense
          fallback={
            <DelayedRender timeout={4000}>
              <LoadingComponent />
            </DelayedRender>
          }
        >
          {component()}
        </Suspense>
    </React.Fragment>
  );
};

export default Router;
