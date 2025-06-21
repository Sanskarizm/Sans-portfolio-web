import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className=" py-4 px-[7vw]  md:px-[5vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32 "
    >
      <div className=" flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greetings */}
          <h1 className="text-3xl sm:txt-5xl md:text-6xl font-bold text-white leading-tight">
            Hi, I am
          </h1>
          {/* name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Sanskar Jain
          </h2>
          {/* skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Fullstack Developer",
                "Backend Developer",
                "Frontend Developer",
                "Coder",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
          {/* about me paragraph */}
          <p className="text-base sm:text-md md:text-md text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm Sanskar Jain, a dedicated Fullstack Developer with a strong grip
            on both Frontend and Backend development. I specialize in building
            responsive, user-friendly web applications with clean UI and
            efficient backend logic. Whether it’s crafting a smooth user
            experience or optimizing server-side performance, I love solving
            problems through code and continuously learning new technologies to
            improve my craft.
          </p>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bol transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="shadow-2xl hover:shadow-purple-500/60  w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1500}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="sanskar jain"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px-rgba(130,69, 236,0,5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
