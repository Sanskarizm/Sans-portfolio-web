import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    console.log(section);

    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold uppercase text-purple-500 ">
          Sanskar Jain
        </h2>

        {/* Navigation links */}

        <nav className="flex flex-wrap justify-center space-x-4  sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 cursor-pointer text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center mt-6 space-x-4">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/yehmeresanskar?mibextid=rS40aB7S9Ucbxw6v",
            },
            {
              icon: <FaTwitter />,
              link: "https://x.com/GenshinBlaze?t=trb0BZs5xU5oJFNViguoKw&s=09",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/yehmeresanskar?igsh=Z3ozMHZ4bXFhODgy",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/sanskar-jain-2129as?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
          ].map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              key={index}
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-6">
          &copy; 2025 Sanskar Jain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
