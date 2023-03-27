import React, { useEffect, useState } from "react";
import { Product } from "./helper/product";
import { motion, AnimatePresence } from "framer-motion";
import "./home.css";

function HomePage() {
  const [count, setcount] = React.useState(Product);
  const [state1, setState] = useState(true);
  const [state2, setStates] = useState(false);

  //   useEffect(() => {
  //     setcount(count + 1);
  //   }, [count]);
  //   setInterval(() => {
  //     setState(!state1);
  //     setStates(!state2);
  //     let temp = count[0];
  //     count.push(temp);
  //     count.shift();
  //   }, 3000);
  console.log(count);
  return (
    <div className="flex">
      <div className="w-[50vw] flex flex-col justify-center items-center">
        {count.slice(0, 1).map((data) => {
          return (
            <>
              <AnimatePresence>
                <motion.div
                  className="w-[20vw] pt-32 pl-8 animate"
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-[35vw] text-5xl font-semibold p-5">
                    <p>{data.name}</p>
                  </div>
                  <div className="w-[40vw] p-5 text-xl">{data.describe}</div>
                  <div className="w-[40vw]">
                    <button className="b-white shadow-lg  h-[6vh] w-[13vw]">
                      Explore Now
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          );
        })}
      </div>
      <div>
        {count.slice(0, 1).map((data) => {
          return (
            <>
              <AnimatePresence>
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
              </AnimatePresence>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
