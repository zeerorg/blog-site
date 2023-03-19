import Router from '../helper/Components/Router';
import HomeHead from 'main/helper/Components/PageHead';
import MainBlogData, { BlogData } from 'main/helper/blogData/main';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import BlogDataContext from 'main/helper/blogData/BlogDataContext';
import PostListPage from 'main/helper/Components/PostListPage';

export interface HomeProps {
  blogList: BlogData[],
  num: number
}

const Home: NextPage<any, any> = (props: HomeProps) => {
  return (
    <BlogDataContext.Provider value={props.blogList}>
      <PostListPage {...props} />
    </BlogDataContext.Provider>
  )
}

/*CurrentPage.getInitialProps = async ({ query }: any) => {
  return { num: Number(query.pageNum) as number }
} */

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      blogList: MainBlogData,
      num: 1
    }, // will be passed to the page component as props
  }
}

export default Home;