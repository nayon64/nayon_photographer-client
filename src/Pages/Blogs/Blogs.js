import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BlogItem from './BlogItem';

const Blogs = () => {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		fetch("https://nayon-photography-server.vercel.app/blogs")
			.then(res => res.json())
			.then(data => {
				setBlogs(data)
			})
		.catch(err=>console.log(err))
	}, [])
	
	return (
    <div className="container mx-auto py-2">
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <h1 className="text-center text-xl mb-3 font-bold md:text-2xl text-purple-600">
        My Recent Blogs
      </h1>
      <div className="grid md:grid-cols-2 gap-5">
        {blogs.map((blog) => (
          <BlogItem key={blog._id} blog={blog}></BlogItem>
        ))}
      </div>
    </div>
  );
};

export default Blogs;