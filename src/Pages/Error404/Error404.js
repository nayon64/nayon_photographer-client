import React from 'react';

const Error404 = () => {
	return (
		<div>
			<div className="flex align-middle justify-center h-screen">
				<div className="max-w-md my-auto">
					<h1 className="text-9xl font-bold text-rose-700">Oops!</h1>
					<p className="font-semibold text-2xl mt-8 text-gray-700">
						404 - PAGE NOT FOUND
					</p>
					<p className="max-w-md mt-3">
						The page your are looking for might have been romoved had its name
						changed or is temporarily unavaliable.
					</p>
				</div>
			</div>
		</div>
  );
};

export default Error404;