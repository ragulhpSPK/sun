import React from "react";

const Navbar = ({ open, setOpen }) => {
  return (
    <div>
      <div className="flex items-center  justify-around h-[15vh]">
        <div>
          {/* <img src="./svg/sunn.png" alt="logo" className="w-[90px] h-[auto]" /> */}
          <h1 className="text-2xl font-semibold">Sun</h1>
        </div>
        <div
          className={`${
            open && "invisible"
          } flex items-center cursor-pointer justify-around gap-[5vw]`}
        >
          <h1 className="text-lg">Home</h1>
          <h1 className="text-lg">Product</h1>
          <h1 className="text-lg">Offers</h1>
          <h1 className="text-lg">Contact</h1>
        </div>
        <div
          className={`${!open && "hidden"} cursor-pointer`}
          onClick={() => setOpen([])}
        >
          back
        </div>
      </div>
    </div>
  );
};

export default Navbar;
