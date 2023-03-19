import PostListPage from "main/pages/Components/PostListPage";
import { NextPage } from "next";

const CurrentPage: NextPage = PostListPage

CurrentPage.getInitialProps = async ({ query }: any) => {
  return { num: Number(query.pageNum) as number }
}

export default CurrentPage;
