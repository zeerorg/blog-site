import { createContext } from 'react';
import { BlogData } from './main';

const BlogDataContext = createContext<BlogData[] | null>(null);

export default BlogDataContext;