import React from "react";

const Navbar = ({ open, setOpen }) => {
  return (
    <div>
      <div className="flex items-center  justify-between h-[15vh]">
        <div>
          {/* <img src="./svg/sunn.png" alt="logo" className="w-[90px] h-[auto]" /> */}
          <h1 className="text-3xl text-[#99005e] font-bold pl-28">Sun</h1>
        </div>
        <div
          className={`${
            open && "invisible"
          } flex items-center cursor-pointer justify-around gap-[5vw] pr-28`}
        >
          <a href="" className="text-2xl text-[#99005e]  font-bold">
            Home
          </a>
          <a href="#about" className="text-2xl text-[#99005e] font-bold">
            About us
          </a>
          <a href="" className="text-2xl text-[#99005e]  font-bold">
            Offers
          </a>
          <a href="" className="text-2xl text-[#99005e]  font-bold">
            Products
          </a>
          <a href="#contact" className="text-2xl text-[#99005e]  font-bold">
            Contact
          </a>
        </div>
        {/* <div
          className={`${!open && "hidden"} cursor-pointer`}
          onClick={() => setOpen([])}
        >
          back
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
