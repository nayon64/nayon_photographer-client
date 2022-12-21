import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const OurBlogs = () => {

	const { data: blogs = [], isLoading } = useQuery({
		queryKey: ["blogs"],
		queryFn: async () => {
			const res = await fetch(
        "https://nayon-photography-server.vercel.app/blogs"
      );
			const data = await res.json()
			return data
		}
	})
	console.log(blogs)


	return (
    <div className="border-t-2 mt-10 flex flex-col items-center">
      <h2 className="text-center text-xl my-3  font-bold md:text-3xl text-purple-600">
        My Services
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 py-4 px-4 md:px-0">
        {blogs.map((service) => (
          <h1 key={service._id}>Hello</h1>
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