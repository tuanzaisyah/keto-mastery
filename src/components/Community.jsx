import React from "react";
import { FaYoutube, FaTiktok, FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Community = () => {
  return (
    <div className="w-full h-full ">
      <section id="community" className="flex flex-col items-center">
        <h3 className="text-main-color text-2xl font-medium text-center">
          Join Us
        </h3>
        <h1 className="font-title text-black-color text-4xl mt-4 text-center dark:text-bg-color">
          Our Community
        </h1>

        <div className="flex flex-col md:flex-row md:gap-4 lg:gap-12 items-center lg:px-20r">
          <img
            className="w-80 h-auto max-h-[593px] object-cover md:basis-1/2 md:order-2"
            src="./assets/community.png"
            alt="community"
          />
          <div className="flex flex-col items-center  md:basis-1/2">
            <h3 className="text-2xl text-main-color font-medium text-center md:text-left ">
              Ready to elevate your keto journey?
            </h3>
            <p className="text-justify mt-4 dark:text-grey-color-alt">
              When you join, receive a complimentary ebook instantly. As a
              member, anticipate regular updates and exclusive content straight
              to your inbox.
            </p>
            <a
              href="https://tuanzaisyah.systeme.io/ab2dc840"
              target="blank"
              className="btn hover:btn-hover mt-6"
            >
              Join Us
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-8 mt-20 mb-6">
          <div className="flex items-center gap-2 ">
            &#169;
            <span className="dark:text-grey-color-alt">2024 Keto Mastery</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
            <a
              href="https://youtube.com/@KetoMastery?si=h1iGe0Z9HDty_bsM"
              target="blank"
            >
              <FaYoutube className="text-2xl text-main-color hover:text-main-color-alt cursor-pointer" />
            </a>

            <a
              href="https://www.tiktok.com/@masteryketo?is_from_webapp=1&sender_device=pc"
              target="blank"
            >
              <FaTiktok className="text-2xl text-main-color hover:text-main-color-alt cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/masteryketo/" target="blank">
              <AiFillInstagram className="text-2xl text-main-color hover:text-main-color-alt cursor-pointer" />
            </a>
            <a href="https://www.pinterest.com/masteryketo/" target="blank">
              <FaPinterest className="text-2xl text-main-color hover:text-main-color-alt cursor-pointer" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
