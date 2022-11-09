import { Card } from 'flowbite-react';
import React from 'react';

const BlogItem = ({ blog }) => {
	const {title,details,picture}=blog
  return (
    <div>
      <Card className="h-full" imgSrc={picture}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 text-justify dark:text-gray-400">
          {details}
        </p>
      </Card>
    </div>
  );
};

export default BlogItem;