import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <section
        id="home"
        className="flex flex-col md:flex-row md:gap-4 lg:gap-12 items-center lg:px-20"
      >
        <img
          className="w-[382px] h-auto object-cover md:basis-1/2 md:order-2"
          src="./assets/home.png"
          alt="home"
        />

        <div className="md:basis-1/2 ">
          <h1 className="font-title text-4xl text-main-color text-center md:text-left mt-8">
            Discover Keto Diet
          </h1>
          <p className="text-justify mt-6 dark:text-grey-color-alt">
            Welcome to Keto Mastery! Whether you're a seasoned pro or just
            starting, discover tasty recipes, expert tips, and a supportive
            community for a sustainable keto lifestyle. Unlock your best self on
            this journey to wellness!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
