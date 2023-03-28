import React from "react";
import "./styles/contact.css";

function Contact() {
  return (
    <div id="contact" className="h-screen flex  justify-center items-center">
      <div
        className="h-[90vh] w-[90vw]  flex flex-row justify-evenly   shadow-black/40 rounded-lg mt-10"
        data-aos="zoom-in"
        data-aos-easing="ease-in"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="1000"
      >
        <div className="grid grid-cols-2 gap-56 items-center h-[50vh]">
          <div>
            <div className="bg-[white] shadow-xl shadow-black/40 h-[22vh] w-[17vw] ml-10 text-justify">
              <h1 className="text-2xl pl-5 flex font-semibold text-[#99005e]">
                Our Address
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 pt-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </h1>
              <p className="text-xl pl-5 pt-3">
                No:150,Kumaran Comlex,
                <br /> Covai Road, Karur,
                <br /> Karur - 639001
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[white] shadow-xl shadow-black/40 h-[22vh] w-[17vw] ml-10">
              <h1 className="text-2xl pl-5 flex pt-5 font-semibold text-[#99005e]">
                Phone Number
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 pl-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </h1>
              <p className="text-xl pl-5 pt-3">07947327384</p>
            </div>
          </div>
          <div>
            <div className="bg-[white] shadow-xl shadow-black/40 h-[22vh] w-[17vw] ml-10">
              <h1 className="text-2xl pl-5 flex pt-5 font-semibold text-[#99005e]">
                Website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 pl-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
              </h1>
              <p className="text-xl pl-5 pt-3">www.abc.com</p>
            </div>
          </div>
          <div>
            <div className="bg-[white] z-50 shadow-xl shadow-black/40 h-[22vh] w-[17vw] ml-10">
              <h1 className="text-2xl pl-5 flex pt-5 font-semibold text-[#99005e]">
                Email
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 pl-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </h1>
              <p className="text-xl pl-5 pt-3">Abc@gmail.com</p>
            </div>
          </div>
        </div>
        <div className=" h-[70vh]  w-[50vw] ">
          <form className="form">
            <p className="heading text-4xl text-[#99005e]">Contact Us</p>
            <input
              className="input"
              placeholder="Enter your Number"
              type="Number"
            />
            <input class="input" placeholder="Enter your mail" type="email" />
            <textarea
              className="input h-40"
              placeholder="Enter your Message"
            ></textarea>
            <button className="btn text-[#99005e] text-2xl -tracking-tight">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
