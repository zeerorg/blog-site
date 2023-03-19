import React from "react";

import PostListPage from "main/helper/Components/PostListPage";
import BlogDataContext from "../blogData/BlogDataContext";
import MainBlogData from "../blogData/main";

const Router = () => {
  return (
    <BlogDataContext.Provider value={MainBlogData}>
      <PostListPage num={1} />
    </BlogDataContext.Provider>
  );
};

export default Router;
