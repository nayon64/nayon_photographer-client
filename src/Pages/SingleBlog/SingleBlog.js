import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBlog = () => {
	const blog = useLoaderData()
	console.log(blog)
	const time = new Date(blog?.registered);
	console.log(time)
	return (
    <div className="max-w-5xl mx-auto">
      <div>
        <img
          className="w-full max-h-96 object-cover"
          src={blog?.picture}
          alt=""
        />
      </div>
      <div className='mt-4 p-4'>
        <div className='flex'>
          <div>
            <img
              className="p-1 w-12 h-12 rounded-full ring-2 ring-gray-300 "
              src={blog?.author?.authorImg}
              alt="Bordered avatar"
            />
          </div>
          <div className='ml-4'>
						<h2 className='text-xl font-bold'>{blog?.author?.authorName}</h2>
						<p>12-12-2022</p>
          </div>
				</div>
				<p className='mt-3 text-justify'>{blog?.details}</p>
      </div>
    </div>
  );
};

export default SingleBlog;