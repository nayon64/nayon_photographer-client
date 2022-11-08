import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';

const Blogs = () => {

	const [blogs, setBlogs] = useState([])
	useEffect(() => {
		fetch("http://localhost:5000/blogs")
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setBlogs(data)
			})
		.catch(err=>console.log(err))
	},[])
	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-center text-xl mb-3 font-bold md:text-2xl text-purple-600'>My Recent Blogs</h1>
			<div className='grid md:grid-cols-2 gap-5'>
				{blogs.map(blog => <BlogItem
					key={blog._id}
					blog={blog}
				></BlogItem>)}
			</div>
		</div>
	);
};

export default Blogs;