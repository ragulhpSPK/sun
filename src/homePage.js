import React, { useState } from "react";
import { Product } from "./helper/product";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import "./home.css";

function HomePage() {
  const [triger, setTriger] = useState(false);
  // const [stop, setStop] = useState(false);

  setInterval(() => {
    setTriger(!triger);
  }, 5000);

  return (
    <div className="flex w-[100vw] h-[80vh] ">
      <div className=" flex flex-row bg-[white] w-[90vw] h-[100%] m-auto shadow-2xl shadow-black/30">
        {shuffle(Product)
          .slice(0, 1)
          .map((data) => {
            return (
              <div
                className="flex flex-row w-[100vw] h-[70vh]  items-center pl-40"
                key={data.id}
              >
                <motion.div
                  className=" pl-8 animate w-[50vw]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  exit={{ opacity: 0 }}
                >
                  <div className=" text-5xl font-semibold p-5 text-[#99005e]">
                    <p>{data.name}</p>
                  </div>
                  <div className=" p-5 text-2xl w-[35vw] line leading-9">
                    {data.describe}
                  </div>
                  <div>
                    <button className="b-white shadow-lg  h-[5vh] w-[9vw] ml-5 text-2xl font-semibold text-[#99005e]">
                      Explore Now
                    </button>
                  </div>
                </motion.div>
                <motion.div
                  className=" m-auto w-[35vw]  pr-20"
                  initial={{ opacity: 0, x: "100vw" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  exit={{ opacity: 0, y: "-100vh" }}
                >
                  <div>
                    <img src={data.img} alt="not found" className="h-[40vh]" />
                  </div>
                </motion.div>
              </div>
            );
          })}
      </div>
      {/* <div>
        {shuffle(Product)
          .slice(0, 1)
          .map((data) => {
            return (
              <>
                <motion.div
                  className="w-[50vw] m-auto pt-40"
                  initial={{ opacity: 0, y: "100vh" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                  exit={{ opacity: 0, y: "-100vh" }}
                >
                  <div>
                    <img src={data.img} alt="not found" />
                  </div>
                </motion.div>
              </>
            );
          })}
      </div> */}
    </div>
  );
}

export default HomePage;
