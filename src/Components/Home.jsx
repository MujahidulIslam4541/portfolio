import React, { useRef, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
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
import bhpiImage from "../assets/images.jpeg";
import navImage from "../assets/icons8-web-development-64.png";
import contactImage from "../assets/Contact_Us_Sbq0zek.2e16d0ba.fill-1920x1080.jpg";
import projectImage1 from "../assets/project1.jpg";
import maijdeeImage from "../assets/maijdee.png";
import project3Image from "../assets/projrct3.jpg";
import project2Image from "../assets/project2.jpg";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandTailwind, TbBrandVite } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";
import { SiCanva, SiFirebase, SiMongodb, SiNodedotjs } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";
import toast from "react-hot-toast";

const Home = () => {
  const [active, setActive] = useState("home");

  // usetypewriter
  const handleActive = (section) => {
    setActive(section);
  };
  const [text] = useTypewriter({
    words: ["Web Developer", "Front-End Developer", "MERN Stack Developer","Programmer"],
    loop: 0,
  });

  // send email
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e6023d9c-c3d0-4252-ac82-ce93e5d8e7f0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Successfully created!");
      event.target.reset();
    }
  };

  return (
    <>
      {/* Navbar section */}
      <section className="">
        <div className="navbar font-Cinzel max-w-screen-xl  mx-auto fixed z-50 bg-gradient-to-r from-gray-900 to-gray-950 shadow-lg backdrop-blur-md text-white px-4">
          <div className="navbar-start">
            <div className="flex gap-2 items-center">
              <img
                src={navImage}
                className="px-4 w-20 h-12 rounded-full"
                alt=""
              />
              <span className="text-xl">Mujahidul Islam</span>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-6">
              <li>
                <a
                  href="#home"
                  onClick={() => handleActive("home")}
                  className={`hover:text-blue-400 ${
                    active === "home" ? "border-b-2 border-indigo-800" : ""
                  }`}
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => handleActive("skills")}
                  className={`hover:text-blue-400 ${
                    active === "skills" ? "border-b-2 border-indigo-800" : ""
                  }`}
                >
                  SKILLS
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => handleActive("projects")}
                  className={`hover:text-blue-400 ${
                    active === "projects" ? "border-b-2 border-indigo-800" : ""
                  }`}
                >
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  onClick={() => handleActive("education")}
                  className={`hover:text-blue-400 ${
                    active === "education" ? "border-b-2 border-indigo-800" : ""
                  }`}
                >
                  EDUCATION
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => handleActive("contact")}
                  className={`hover:text-blue-400 ${
                    active === "contact" ? "border-b-2 border-indigo-800" : ""
                  }`}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              href="https://github.com/MujahidulIslam4541"
              target="_blank"
              className=" hidden lg:flex transition-all duration-500  border border-[#854CE6] text-[#854CE6] hover:bg-[#854CE6] hover:text-white rounded-full px-6 py-2"
            >
              Github Profile
            </a>

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
                className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg -translate-x-40"
              >
                <li>
                  <a
                    href="#home"
                    onClick={() => handleActive("home")}
                    className={`hover:text-blue-400 ${
                      active === "home" ? "border-b-2 border-indigo-800" : ""
                    }`}
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={() => handleActive("skills")}
                    className={`hover:text-blue-400 ${
                      active === "skills" ? "border-b-2 border-indigo-800" : ""
                    }`}
                  >
                    SKILLS
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={() => handleActive("projects")}
                    className={`hover:text-blue-400 ${
                      active === "projects"
                        ? "border-b-2 border-indigo-800"
                        : ""
                    }`}
                  >
                    PROJECTS
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    onClick={() => handleActive("education")}
                    className={`hover:text-blue-400 ${
                      active === "education"
                        ? "border-b-2 border-indigo-800"
                        : ""
                    }`}
                  >
                    EDUCATION
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => handleActive("contact")}
                    className={`hover:text-blue-400 ${
                      active === "contact" ? "border-b-2 border-indigo-800" : ""
                    }`}
                  >
                    CONTACT
                  </a>
                </li>
                <a
                  href="https://github.com/MujahidulIslam4541"
                  target="_blank"
                  className="mt-5 transition-all duration-500  border border-[#854CE6] text-[#854CE6] hover:bg-[#854CE6] hover:text-white rounded-full px-6 py-2"
                >
                  Github Profile
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Banner section */}
      <section
        id="home"
        className=" font-Cinzel py-16 lg:py-32 bg-gradient-to-r from-black via-gray-900 to-gray-950 text-white flex justify-center px-4 pt-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto">
          {/* Left content */}
          <div className="flex flex-col justify-center space-y-6 pl-6 mt-10 md:0 md:pl-12">
            <p className="text-lg text-blue-400">Hello!</p>
            <h1 className="text-4xl md:text-5xl font-semibold">
              I am Mujahidul Islam Rifat
            </h1>
            <h2 className="text-3xl font-bold leading-tight">
              I am a {""}
              <span className="text-blue-400">
                {text}
                <Cursor />
              </span>
            </h2>
            <p className="text-gray-400 text-xl">
              "I am a motivated and versatile individual, always eager to take
              on new challenges. With a passion for learning I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things."
            </p>
            <div className="text-3xl flex gap-6 mt-4">
              <a
                href="https://github.com/MujahidulIslam4541"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#854CE6]"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mujahidul-islam-rifat-b9ab8729b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#854CE6]"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/mujahidul.islam.rifat.223977"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#854CE6]"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/Mujahidul_Rifat?t=rXbwh-6ymqOVdutZk2nD6w&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#854CE6]"
              >
                <FaTwitter />
              </a>
            </div>
            <button className=" transition-all duration-500  border border-[#854CE6] text-[#854CE6] hover:bg-[#854CE6] hover:text-white rounded-md  py-2 w-fit px-6 mt-4 ">
              <a
                href="https://docs.google.com/document/d/1IfOleytG-oHZ4b1SeZerBGdHRRXS67hNX-1dHCp1sDg/edit?usp=sharing"
                target="_blank"
              >
                DOWNLOAD CV
              </a>
            </button>
          </div>

          {/* Right content */}
          <div className="flex justify-center items-center">
            <img
              src={bannerProfile}
              alt="Profile"
              className="mt-5 md:mt-0 rounded-full w-80 md:w-96 shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>

      {/* skills section */}
      <section
        id="skills"
        className="py-16 px-4 bg-gradient-to-r from-gray-900 to-gray-950 text-white"
      >
        <div className="max-w-screen-xl mx-auto text-center mb-12">
          <p className="text-xl text-[#854CE6]">Visit My Skills & Hire Me</p>
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
        className="py-16  bg-gradient-to-r from-gray-900 to-gray-950 text-white"
      >
        <div className="text-center mb-12">
          <p className="text-xl font-semibold text-red-400">
            Explore My Projects & JUDGE
          </p>
          <h2 className="text-3xl font-bold">My Best Work</h2>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Project One */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-950 transition-all duration-500 p-4">
            <img
              src={projectImage1}
              alt="CinemaSpot"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  React.js
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  Express.js
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  Firebase
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  JWT
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  Swiper
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2">CinemaSpot</h2>
              <p className="text-gray-300 text-sm mb-4">
                The CinemaSpot website includes dynamic movie details,
                adding/deleting movies, user authentication, favorites
                management, search functionality, responsive design, dark/light
                mode toggle, CRUD operations, and public/private routes.
              </p>

              <div className="flex justify-between">
                <a
                  href="https://github.com/MujahidulIslam4541/Movie-Portal-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Client Side
                </a>
                <a
                  href="https://github.com/MujahidulIslam4541/Movie-Portal-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Server Side
                </a>
                <a
                  href="https://movie-portal-70714.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>

          {/* Project Two */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-950 transition-all duration-300 p-4">
            <img
              src={project2Image}
              alt="CinemaSpot"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  React.js
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  Express.js
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  Firebase
                </span>

                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  JWT
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  Swiper
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Easy Meals</h2>
              <p className="text-gray-300 text-sm mb-4">
                The Easy Meals website features user authentication, food
                listing, sharing options, responsive design, search
                functionality, real-time updates, intuitive UI, community
                engagement, and promotes reducing food waste through
                collaboration.
              </p>

              <div className="flex justify-between">
                <a
                  href="https://github.com/MujahidulIslam4541/Food-sharing-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Client Side
                </a>
                <a
                  href="https://github.com/MujahidulIslam4541/Food-sharing-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Server Side
                </a>
                <a
                  href="https://food-sharing-55247.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>

          {/* Project Three */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-950 transition-all duration-300 p-4">
            <img
              src={project3Image}
              alt="CinemaSpot"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  React.js
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  Firebase
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  JWT
                </span>
                <span className="px-3 py-1 bg-gray-700 text-xs text-white rounded">
                  Swiper
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Eco Adventures</h2>
              <p className="text-gray-300 text-sm mb-4">
                Eco Adventures is an immersive website showcasing thrilling
                eco-tourism experiences. It highlights sustainable travel,
                adventure activities, and breathtaking destinations, inspiring
                nature lovers to explore and protect our planet responsibly.
              </p>

              <div className="flex justify-between">
                <a
                  href="https://github.com/MujahidulIslam4541/Eco-Adventures-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Client Side
                </a>
                <a
                  href="https://github.com/MujahidulIslam4541/Eco-Adventures-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Server Side
                </a>
                <a
                  href="https://eco-adventures-e0047.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* education section */}
      <section
        id="education"
        className="py-16  bg-gradient-to-b from-gray-800 to-gray-900 text-white"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-gray-400 text-lg">
            My education has been a journey of self-discovery and growth. Here
            are my educational details.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {/* Bhola Polytechnic Institute */}
          <div className="border border-gray-700 rounded-xl p-6 bg-gray-950 hover:shadow-lg hover:shadow-indigo-950 hover:-translate-y-1 transition-all duration-300">
            <div className="flex gap-4 items-center mb-4">
              <img
                src={bhpiImage}
                alt="Bhola Polytechnic Institute"
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  Bhola Polytechnic Institute
                </h3>
                <p className="text-gray-400">Borhanuddin, Bhola</p>
                <p className="text-sm font-medium text-indigo-400">
                  Computer Science & Technology
                </p>
                <span className="text-sm text-gray-500">2022 - Present</span>
              </div>
            </div>
            <div>
              <p className="mb-2">
                <span className="font-semibold">Grade:</span> Pending CGPA
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing a Diploma in Engineering in Computer Science
                and Technology at Bhola Polytechnic Institute. I have
                successfully completed 6 out of 8 semesters, gaining expertise
                in courses such as Data Structures, Algorithms, Object-Oriented
                Programming, Database Management Systems, Computer Networks,
                Microcontroller Programming, and Sensor Technologies.
                Additionally, I am proficient in tools like MS Word and Excel.
              </p>
              <p className="text-gray-300 mt-2">
                As an active member of the{" "}
                <span className="font-semibold text-indigo-400">
                  Terget Programmer Bhola Polytechnic Institute
                </span>
                , I collaborate on innovative projects with a team of skilled
                developers, enhancing my technical and teamwork skills.
              </p>
            </div>
          </div>

          {/* Maijdee Technical School and College */}
          <div className="border border-gray-700 rounded-xl p-6 bg-gray-950 hover:shadow-lg hover:shadow-indigo-950 transition-all hover:-translate-y-1 duration-300">
            <div className="flex gap-4 items-center mb-4">
              <img
                src={maijdeeImage}
                alt="Maijdee Technical School and College"
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  Maijdee Technical School and College
                </h3>
                <p className="text-gray-400">Maijdee, Noakhali</p>
                <p className="text-sm font-medium text-indigo-400">
                  AutoMobile Department
                </p>
                <span className="text-sm text-gray-500">2016 - 2020</span>
              </div>
            </div>
            <div>
              <p className="mb-2">
                <span className="font-semibold">Grade:</span> GPA 4.29
              </p>
              <p className="text-gray-300 leading-relaxed">
              I Completed SSC in the Automobiles department, followed by three Month of specialized study and practical experience in the automotive field. Gained valuable hands-on skills in vehicle systems, maintenance, and troubleshooting, providing a solid foundation for a successful career in the automotive industry.
              </p>
              <p className="text-gray-300 mt-2">
                During this time, I participated in various extracurricular
                activities, including science fairs and computer programming
                competitions, which sparked my interest in technology and
                software development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* contact us section */}
      <section
        id="contact"
        className=" font-Cinzel h-auto lg:h-screen p-10 bg-gradient-to-r from-gray-900 to-gray-950"
      >
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
              E-mail:{" "}
              <span className="text-gray-300">mirifat4541@gmail.com</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-500">
              Location:{" "}
              <span className="text-gray-300">
                Noakhali, Chittagong, Bangladesh
              </span>
            </h2>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 flex flex-col p-6 bg-gray-950 shadow-lg rounded-lg">
            <form onSubmit={onSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full p-3 mt-2 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700">
                  E-MAIL
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your E-mail"
                  className="w-full p-3 mt-2 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Your Subject"
                  className="w-full p-3 bg-transparent mt-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700">
                  YOUR MESSAGE
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Enter Your Message"
                  className="w-full p-3 bg-transparent mt-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-gray-200 p-3 rounded-lg border border-gray-700 hover:bg-gray-800 hover:text-white hover:shadow-md transition duration-300 ease-in-out"
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
