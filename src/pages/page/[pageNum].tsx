import PostListPage from "main/helper/Components/PostListPage";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import BlogDataContext from "../../helper/blogData/BlogDataContext";
import MainBlogData, { BlogData } from "../../helper/blogData/main";

export interface CurrentPageProps {
  blogList: BlogData[],
  num: number
}

const CurrentPage: NextPage<any, any> = (props: CurrentPageProps) => {
  return (
    <BlogDataContext.Provider value={props.blogList}>
      <PostListPage {...props} />
    </BlogDataContext.Provider>
  )
}

/*CurrentPage.getInitialProps = async ({ query }: any) => {
  return { num: Number(query.pageNum) as number }
} */

export const getStaticProps: GetStaticProps<CurrentPageProps> = async ({ params }: any) => {
  return {
    props: {
      blogList: Array.from(MainBlogData),
      num: Number(params.pageNum)
    }, // will be passed to the page component as props
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {params: {pageNum: "1"}},
      {params: {pageNum: "2"}}
    ],
    fallback: false
  }
}


export default CurrentPage;
