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


className=" transition-all duration-500  border border-[#854CE6] text-[#854CE6] hover:bg-[#854CE6] hover:text-white rounded-md  py-2 w-fit px-6 mt-4 "

{/* <a
href="https://github.com/MujahidulIslam4541"
target="_blank"
className=" transition-all duration-500  border border-[#854CE6] text-[#854CE6] hover:bg-[#854CE6] hover:text-white rounded-full px-6 py-2"
>
Github Profile
</a> */}