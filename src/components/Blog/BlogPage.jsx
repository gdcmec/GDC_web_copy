import React, { useContext, useEffect, createContext, useState } from 'react';
import BlogCard from './BlogCard';
import blogContents from './BlogContents';
import { getBlogs } from '../../lib/firestore';

const BlogContext = createContext();
const BlogPage = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
    try {
        const fetchedBlogs = await getBlogs();
        setBlogData(fetchedBlogs);
        console.log(fetchedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <BlogContext.Provider value={[blogData, setBlogData]}>
        <div className="relative max-h-fit min-h-screen w-screen flex flex-col justify-center items-center pb-24 bg-gradient-to-b from-[#272727] to-[#000000]">
          <h1 className="absolute top-[8vh] text-4xl font-bold text-orange-500 font-navfont text-center">Our Blog</h1>
          <div className="max-h-fit min-h-full w-3/4 flex flex-wrap items-center justify-center gap-10 mt-52">
            {blogData ? (
              blogData.map((content, index) => <BlogCard key={index} details={content} />)
            ) : (
              <p className="text-white mt-52">Loading blogs...</p>
            )}
          </div>
        </div>
      </BlogContext.Provider>
    </>
  );
};

export default BlogPage;
