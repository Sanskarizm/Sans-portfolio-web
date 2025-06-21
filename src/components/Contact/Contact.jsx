import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [isSent, setIsSent] = useState(false);

  const emailSendHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x51tw9r",
        "template_cswh46j",
        form.current,
        "uzPTv4HJJOpODIJIm"
      )
      .then(() => {
        setIsSent(true);
        form.current.reset(); // this reset the contact form to blank
        toast.success("Message set successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      },
      (error)=>{
// toast.error("Error Sending Message.", error);
 toast.error("Failed to send Message!", error, {
          position: "top-right",
          autoClose: 3000, 
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });

      }
    );
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg-px-[20vw]"
    >

      <ToastContainer/>
      {/* Section title */}

      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you-reach out for any opportunities or question!
        </p>
      </div>

      {/* Contact form */}

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700 ">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me
        </h3>

        <form
          ref={form}
          onSubmit={emailSendHandler}
          className="mt-5 flex flex-col space-y-5"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 shadow-2xl focus:shadow-purple-500/90"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 shadow-2xl focus:shadow-purple-500/90 "
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 shadow-2xl focus:shadow-purple-500/90 "
          />
          <textarea
            name="message"
            placeholder="Meassge"
            rows="4"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 resize-none shadow-2xl focus:shadow-purple-500/30"
          ></textarea>

          {/* Send Buttonn */}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition uppercase"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


