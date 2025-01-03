import React from "react";
import {
  FaCss3Alt,
  FaFacebook,
  FaGithub,
  FaGitSquare,
  FaHtml5,
  FaLinkedinIn,
  FaNodeJs,
  FaTwitter,
} from "react-icons/fa";
import bannerProfile from "../assets/banerprofile.png";
import aboutImage from "../assets/aboutImage.jpg";
import contactImage from "../assets/Contact_Us_Sbq0zek.2e16d0ba.fill-1920x1080.jpg";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandTailwind, TbBrandVite } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";
import { SiCanva, SiFirebase, SiMongodb, SiNodedotjs } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";

const Home = () => {
  return (
    <>
      {/* Navbar section */}
      <section className="h-[68px]">
        <div className="navbar font-Cinzel max-w-screen-xl  mx-auto fixed z-50 bg-gradient-to-r from-black to-gray-950 shadow-lg backdrop-blur-md text-white px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
              >
                <li>
                  <a href="#home">HOME</a>
                </li>
                <li>
                  <a href="#about">ABOUT</a>
                </li>
                <li>
                  <a href="#skills">SKILLS</a>
                </li>
                <li>
                  <a href="#projects">PROJECTS</a>
                </li>
                <li>
                  <a href="#education">EDUCATION</a>
                </li>
                <li>
                  <a href="#contact">CONTACT</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl font-bold">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-6">
              <li>
                <a href="#home" className="hover:text-blue-400">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400">
                  SKILLS
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400">
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-400">
                  EDUCATION
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              href="path-to-your-cv.pdf"
              download
              className="btn btn-primary rounded-full px-6"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Banner section */}
      <section
        id="home"
        className=" font-Cinzel h-auto pb-10 md:pb-0 md:h-screen bg-gradient-to-r from-black via-gray-900 to-gray-950 text-white flex items-center justify-center px-4 pt-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto">
          {/* Left content */}
          <div className="flex flex-col justify-center space-y-6 pl-6 md:pl-12">
            <p className="text-lg text-blue-400">Hello!</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              I am a <span className="text-blue-400">Frontend Developer</span>
            </h2>
            <p className="text-gray-400">
              "I am eager to take on challenges and excel in creating
              responsive, user-friendly designs."
            </p>
            <div className="text-3xl flex gap-6 mt-4">
              <a
                href="https://github.com/MujahidulIslam4541"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mujahidul-islam-rifat-b9ab8729b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/mujahidul.islam.rifat.223977"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/Mujahidul_Rifat?t=rXbwh-6ymqOVdutZk2nD6w&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter />
              </a>
            </div>
            <button className="btn btn-outline transition-all transform ease-in-out delay-300 hover:px-10 hover:btn-primary w-fit px-6 mt-4 ">
              DOWNLOAD CV
            </button>
          </div>

          {/* Right content */}
          <div className="flex justify-center items-center">
            <img
              src={bannerProfile}
              alt="Profile"
              className="rounded-full w-80 md:w-96 shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>

      {/* about section */}
      <section
        id="about"
        className="font-Cinzel h-auto md:h-screen py-12 px-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 max-w-screen-xl mx-auto">
          {/* Left Section */}
          <div className=" p-4 bg-gray-950 rounded-lg  flex justify-center items-center ">
            <img
              src={aboutImage}
              alt="About me"
              className="rounded-lg shadow-lg w-full h-96 md:h-[600px] hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-400">ABOUT ME</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              MUJAHIDUL ISLAM RIFAT
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              I am a passionate learner, constantly motivated by the desire to
              take on new challenges and grow in the world of programming. My
              journey in tech started with a deep interest in solving complex
              problems and creating impactful solutions. I am driven to push my
              limits, expand my skill set, and continuously improve in the
              ever-evolving field of technology. Learning programming allows me
              to build the future, whether through front-end development or
              tackling new challenges in different programming languages and
              frameworks. Every project I take on is an opportunity to learn
              something new and make a meaningful impact.
            </p>
            <button className="btn btn-outline transition-all transform ease-in-out delay-300 hover:btn-primary w-fit px-6 mt-4 hover:scale-105">
              CONTACT ME
            </button>
          </div>
        </div>
      </section>

      {/* skills section */}
      <section
        id="skills"
        className="h-auto md:h-screen py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-950 text-white"
      >
        <div className="max-w-screen-xl mx-auto text-center mb-12">
          <p className="text-xl text-blue-400">Visit My Skills & Hire Me</p>
          <h2 className="text-4xl font-bold text-white mt-4">My Skills</h2>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-gray-950 p-6 rounded-lg shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
              Frontend
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <FaHtml5 className="text-4xl mb-2" />
                <p>HTML</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <FaCss3Alt className="text-4xl mb-2" />
                <p>CSS</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <TbBrandTailwind className="text-4xl mb-2" />
                <p>Tailwind</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <FaBootstrap className="text-4xl mb-2" />
                <p>Bootstrap</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <TbBrandVite className="text-4xl mb-2" />
                <p>Vite</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <RiReactjsLine className="text-4xl mb-2" />
                <p>React</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <IoLogoJavascript className="text-4xl mb-2" />
                <p>Javascript</p>
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-gray-950 p-6 rounded-lg shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
              Backend
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <SiNodedotjs className="text-4xl mb-2" />
                <p>Node.js</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <SiNodedotjs className="text-4xl mb-2" />
                <p>Express</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <SiMongodb className="text-4xl mb-2" />
                <p>MongoDB</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <SiFirebase className="text-4xl mb-2" />
                <p>Firebase</p>
              </div>
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-gray-950 p-6 rounded-lg shadow-lg  transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
              Other
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <FaGitSquare className="text-4xl mb-2" />
                <p>Git</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <FaGithub className="text-4xl mb-2" />
                <p>GitHub</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <VscVscode className="text-4xl mb-2" />
                <p>VSCode</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <SiCanva className="text-4xl mb-2" />
                <p>Canva</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
                <IoLogoFigma className="text-4xl mb-2" />
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* projects section */}
      <section
        id="projects"
        className="h-screen border-red-500 border-2"
      ></section>

      {/* education section */}
      <section
        id="education"
        className="h-screen border-red-500 border-2"
      ></section>

      {/* contact us section */}
      <section id="contact" className=" font-Cinzel h-screen p-10 bg-gradient-to-r from-gray-900 to-gray-950">
        <div className="text-center mb-8">
          <p className="text-gray-500">Contact</p>
          <h2 className="text-4xl font-bold text-white">CONTACT WITH ME</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="flex flex-col space-y-4  p-6 bg-gray-950 shadow-lg rounded-lg">
            <img
              src={contactImage}
              alt="Contact"
              className="w-full h-44 mb-4 object-cover rounded-lg" // Removed rounded-full to make the image rectangular
            />
            <h2 className="text-lg font-semibold text-gray-500">
              Phone: <span className="text-gray-300">+00853744541</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-500">
              E-mail: <span className="text-gray-300">mirifat4541@gmail.com</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-500">
              Location: <span className="text-gray-300">Noakhali, Chittagong, Bangladesh</span>
            </h2>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 flex flex-col p-6 bg-gray-950 shadow-lg rounded-lg">
            <form className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="w-full p-3 mt-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700">
                  E-MAIL
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your E-mail"
                  className="w-full p-3 mt-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter Your Subject"
                  className="w-full p-3 mt-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700">
                  YOUR MESSAGE
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Enter Your Message"
                  className="w-full p-3 mt-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* footer section */}
    </>
  );
};

export default Home;
