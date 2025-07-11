"use client";
import Image from "next/image";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";

export default function Home() {
  const downloadCV = () => {
    window.location.href = "/CV-Moiz.pdf"; // Change this to your CV URL
  };
  return (
    <>
      <div className="flex h-screen justify-evenly gap-x-4 max-[915px]:flex-col-reverse">
        <div className="w-full flex flex-col justify-center items-start pl-[6%] max-[915px]:items-center ">
          <h1 className="text-7xl font-semibold max-[915px]:text-3xl">
            I am Moiz <span className="text-[#0de6e6]">Rehman</span>
          </h1>
          <p className="text-[#343D3F] leading-[32px] text-2xl max-[915px]:text-xl max-[915px]:text-center">
            I am a Full Stack Mern web app developer
            <br />
            with at least 6 months of experience.
          </p>
          <button
            onClick={downloadCV}
            className=" max-[915px]:text-sm hover:cursor-pointer btn bg-[#0de6e6] hover:bg-[#0dd8e6] text-black px-4 py-3 rou rounded-full mt-2"
          >
            Download CV
          </button>
          <div className="icons mt-3">
            <a href="https://www.linkedin.com/in/moiz-rehman-6674a5203/">
              <i className="hover:text-[#0de6e6] text-4xl max-[915px]:text-2xl pr-3 text-black fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.facebook.com/moiz.rehman.37604">
              <i className="hover:text-[#0de6e6] text-4xl max-[915px]:text-2xl pr-3 text-black fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="hover:text-[#0de6e6] text-4xl max-[915px]:text-2xl pr-3 text-black fab fa-twitter"></i>
            </a>
            <a href="https://wa.me/923157378892">
              <i className="hover:text-[#0de6e6] text-4xl max-[915px]:text-2xl pr-3 text-black fab fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/moizur36/">
              <i className="hover:text-[#0de6e6] text-4xl max-[915px]:text-2xl pr-3 text-black fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            src="/profilepic.jpg"
            alt="Hero Image"
            width={280}
            height={280}
            className="bg-red-800 object-cover rounded-full border-4 border-gradient shadow-[0_0_10px_10px_#343D3F] hover:shadow-[0_0_20px_rgba(0,0,0,0.7)] transition-shadow duration-300 ease-in-out"
          />
        </div>
      </div>
      <div className="divider h-[1px] w-[80%] m-auto bg-gray-300"></div>
      <AboutSection />
      <div className="divider h-[1px] w-[80%] m-auto bg-gray-300"></div>
      <MyWork />
      <Footer />
    </>
  );
}
