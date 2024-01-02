import React from "react";

const About = () => {
  return (
    <div className="w-full h-full  flex flex-col justify-center">
      <section
        id="about"
        className=" flex flex-col md:flex-row md:gap-8 lg:gap-12 items-center lg:px-20 "
      >
        <div className="flex flex-col items-center md:basis-1/2 md:order-2">
          <h3 className="text-main-color text-2xl font-medium ">About Us</h3>
          <h1 className="font-title text-black-color text-4xl mt-4 text-center md:text-left dark:text-bg-color">
            Discover Your Glory Beginning
          </h1>
          <p className="text-justify mt-10 mb-6 dark:text-grey-color-alt">
            We are your go-to source for all things keto. Dive into a world of
            expert tips, discover the foods to embrace and avoid, and embark on
            a journey to transform your lifestyle.
          </p>
          <a
            href="#community"
            className="btn hover:btn-hover transition-all ease-in-out duration-300"
          >
            Join Us
          </a>
        </div>

        <img
          src="./assets/about.jpg"
          alt="about"
          className="w-72 h-auto max-h-[636px] object-cover  rounded-lg mt-10 md:basis-1/2"
        />
      </section>
    </div>
  );
};

export default About;
