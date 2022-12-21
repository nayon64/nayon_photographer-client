import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ content }) => {
	console.log(content);
	
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img class="rounded-t-lg" src={content?.picture} alt="" />

      <div class="p-5 flex flex-col justify-between ">
        <div>
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {content?.title}
          </h5>
          <p class="mb-3 text-sm font-normal text-justify text-gray-700 dark:text-gray-400">
            {content?.details?.slice(0, 150) + "..."}
          </p>
        </div>
        <div className="mt-2 ">
				  <Link
					  to={`/blog/${content?._id}`}
            class="bg-purple-700 p-2 mt-3  font-medium text-white rounded-md text-sm duration-400 transition-all hover:bg-purple-500"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
