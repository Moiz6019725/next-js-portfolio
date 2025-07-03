import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="py-10">
        <h2 className="gradient-text text-5xl font-bold text-center pb-10 max-[915px]:text-3xl">
          About Me
        </h2>
        <div className="w-[80%] m-auto text-center">
          <p className="text-xl max-[915px]:text-sm leading-8 text-gray-700 max-[915px]:leading-6">
            I am a Full Stack Mern web app developer with at least 6 months of
            experience. I have worked on various projects, including
            payment-integration platforms, social media applications, and music
            player applications. My expertise lies in building responsive and
            user-friendly web applications using the MERN stack (MongoDB,
            Express.js, React.js, and Node.js).
          </p>
        </div>
        <div className="mt-5 flex justify-center gap-x-2 m-auto w-[50%] text-2xl max-[915px]:text-xl">
          <i className="h-5 w-5 rounded-full fa-brands fa-figma"></i>
          <i className="h-5 w-5 rounded-full fa-brands fa-react"></i>
          <i className="h-5 w-5 rounded-full fa-brands fa-html5"></i>
          <i className="h-5 w-5 rounded-full fa-brands fa-css3-alt"></i>
          <i className="h-5 w-5 rounded-full fa-brands fa-bootstrap"></i>
          <i className="h-5 w-5 rounded-full fa-brands fa-js"></i>
          <i className="h-5 w-5 rounded-full fa-brands fa-node-js"></i>
          <i className="h-5 w-5 rounded-full fa-brands fa-git-alt"></i>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
