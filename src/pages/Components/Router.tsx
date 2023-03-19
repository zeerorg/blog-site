import React from "react";

import PostListPage from "main/pages/Components/PostListPage";

const Router = function() {
  return (
    <React.Fragment>
      <PostListPage num={1} />
    </React.Fragment>
  );
};

export default Router;
