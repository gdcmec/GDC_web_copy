import { React, useState, useEffect } from 'react';
import './Contact.css';
import logo from '../../assets/croppedlogo.png';
import Sending from '../../assets/send-anim.gif';

function Contact() {
  const navfont = "font-navfont";
  const [result, setResult] = useState("");
  const [popup, setPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setPopup(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "15d4c9a1-7d94-4f4f-a2f6-79cd5e5864c0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error", error);
      setResult("Something went wrong");
    }
  };

  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => {
        setPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  // Common styling for all input fields to ensure consistency
  const inputStyles = "w-full px-4 py-3 bg-gray-400/20 border border-white/10 text-white text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 placeholder-gray-400 transition-all shadow-inner";

  return (
    <section id="contact">
      <div className="relative flex flex-col py-10 px-8 h-auto bg-black/40 backdrop-blur-md border border-white/10 max-w-lg w-full rounded-xl shadow-2xl">

        <img
          src={logo}
          alt="logo"
          className="h-16 object-contain items-center mx-auto mb-4"
        />

        <h2 className="mb-2 font-navfont text-3xl font-bold text-white text-center tracking-[0.2em] uppercase">
          Contact Us
        </h2>

        <p className="mb-8 font-light text-center text-gray-300 text-sm sm:text-base">
          Get in touch with us!
        </p>

        <form onSubmit={onSubmit} className="w-full space-y-4">

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                name='firstname'
                className={inputStyles}
                placeholder="First Name"
                required
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                name='lastname'
                className={inputStyles}
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div>
            <input
              type="email"
              name='email'
              className={inputStyles}
              placeholder="Email"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name='phoneNumber'
              className={inputStyles}
              placeholder="Phone Number"
            />
          </div>

          <div>
            <textarea
              rows="5"
              name='message'
              className={`${inputStyles} resize-none`}
              placeholder="Message"
              required
            />
          </div>

          <div className="w-full flex justify-center pt-2">
            <button
              type="submit"
              className="px-10 py-3 text-sm font-bold text-white bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600 hover:scale-105 active:scale-95 transform transition-all duration-200 cursor-pointer"
            >
              Send &gt;
            </button>
          </div>
        </form>

        {/* Popup Overlay */}
        {popup && (
          <div className="msgoverlaybg">
            <div className="bg-black border border-gray-700 p-6 rounded-2xl shadow-2xl flex flex-col items-center w-62.5 h-62.5 justify-center text-center">
              <img src={Sending} alt="Sending..." className="w-20 h-20 mb-4 object-contain" />
              <p className="text-white font-medium text-lg">{result}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;