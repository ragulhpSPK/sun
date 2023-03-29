import React from "react";

function About() {
  return (
    <div
      id="about"
      className="h-screen w-[100vw] flex justify-center items-center "
    >
      <div className="flex flex-row-reverse justify-around items-center w-[90vw] h-[70vh] bg-[white] shadow-2xl shadow-black/40 rounded-xl m-auto ">
        <div className="w-[50vw] self-start pl-10 leding-8 p-5 pt-20">
          <div
            className="text-7xl"
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            <h1 className="text-[#82237c]">About Us</h1>
          </div>
          <div
            className="flex flex-col text-lg"
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            <h1 className="text-5xl self-start pt-8">
              We simplify your needs.
            </h1>
          </div>
          <div
            className="text-2xl"
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            <p className="leading-10 w-[40vw]">
              Sri sun mobile and paradise is one of the leading mobile shops in
              Karur. We sell branded mobiles, Headset and power banks. iPhone |
              Samsung | realme | redmi | oppo | Vivo | air buds |
              airconditioners | smart tv | mobile accessories.
            </p>
          </div>
        </div>
        <div
          className="w-[40vw] relative"
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-delay="300"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
          <img
            // src="https://cdn.dribbble.com/users/1602563/screenshots/8869646/media/ddc33ce2c8e2570c410123f375e2c35c.gif"
            // src="https://i.pinimg.com/originals/50/78/a0/5078a05eb1b6847d93383eaa4c0ed500.gif"
            // src="https://i.pinimg.com/originals/8d/b8/e6/8db8e6f39203f657ee8efad634cacad1.gif"
            // src="https://i.pinimg.com/originals/a2/9d/a9/a29da9f5445172a22699934407c008ad.gif"
            // src="https://i.pinimg.com/originals/f0/f5/cd/f0f5cd7a0626dffffea966b2528868e2.gif"
            // src="https://i.pinimg.com/originals/18/0e/28/180e281028803011eccf1254c33f2e8f.gif"
            // src="https://i.pinimg.com/originals/6c/43/f2/6c43f219c30ef9799c70a95471f2a836.gif"
            // src="https://www.appslure.com/wp-content/uploads/2022/07/app-development-1.gif"
            alt="about"
            className="w-[40vw] h-[50vh]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
