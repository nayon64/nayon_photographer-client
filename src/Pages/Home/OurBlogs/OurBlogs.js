import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import BlogCard from './BlogCard';

const OurBlogs = () => {

	const { data: blogs = [], isLoading } = useQuery({
		queryKey: ["blogs"],
		queryFn: async () => {
			const res = await fetch(
        "https://nayon-photography-server.vercel.app/blogs"
      );
			const data = await res.json()
			return data.slice(0,3)
		}
	})
	console.log(blogs)

	if (isLoading) {
		return <Loading></Loading>
	}

	return (
    <div className="border-t-2 mt-10 flex flex-col items-center">
      <h2 className="text-center text-xl my-3  font-bold md:text-3xl text-purple-600">
        Our Blogs
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 py-4 px-4 md:px-0">
        {blogs.map((content) => (
          <BlogCard key={content._id} content={content}></BlogCard>
        ))}
      </div>
      <Link to="/blogs">
        <button className="text-base my-4 text-white bg-green-600 hover:bg-green-400 duration-300 transition-all py-1 px-2 rounded-md">
          See All
        </button>
      </Link>
    </div>
  );
};

export default OurBlogs;