import PostListPage from "main/pages/Components/PostListPage";
import { NextPage } from "next";

const CurrentPage: NextPage = PostListPage

CurrentPage.getInitialProps = async ({ query }: any) => {
  return { num: query.pageNum as string }
}

export default CurrentPage;
