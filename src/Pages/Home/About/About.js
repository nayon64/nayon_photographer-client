import React from 'react';

const About = () => {
	return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 py-6 gap-5">
        <div className="text-xl  my-auto text-gray-500 p-4">
          <h1 className="text-4xl font-bold text-purple-600 text-center md:text-start my-4">
            ABOUT ME
          </h1>
          <p>
            Hello, I am Nayon Roy. I am a professional photographer. I am
            photography in many year. This is my pasion . This is give me
            happiness. All the time I try capture the best moment of any event
            and ocusion .
          </p>
          <p className="mt-6">
            I am working any wellding , birtday, music photo shot, any event
            anywhere of bangladesh. I use the best equipment for photoshot. I
            belive that this is easy my work .
          </p>
          <p className="mt-6">
            Recently I am working a big event of bangla music festival. This is
            realy big project of photography.
          </p>
        </div>
        <div className="flex justify-center p-4">
          <div className="md:w-96 md:h-96 my-auto w-full ">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1559850724-d0acc55b6bd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;