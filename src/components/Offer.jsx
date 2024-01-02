import React from "react";
import { offer } from "../data";

const Offer = () => {
  return (
    <div className="w-full h-full">
      <section id="offer" className="">
        <h3 className="text-main-color text-2xl font-medium text-center">
          What we offer
        </h3>
        <h1 className="font-title text-black-color text-4xl mt-4 text-center dark:text-bg-color">
          Exclusive Benefits
        </h1>

        <div className="md:flex gap-4 lg:gap-10 xl:gap-16 items-center justify-center">
          {offer.map((offer) => (
            <div
              key={offer.id}
              className="flex flex-col md:w-64 lg:w-72 xl:w-96 items-center mt-6"
            >
              <img className="w-72 h-72" src={offer.img} alt="offer" />

              <div>
                <h5 className="font-semibold text-center mt-2 dark:text-bg-color">
                  {offer.title}
                </h5>
                <p className="text-center mt-4 dark:text-grey-color-alt">
                  {offer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Offer;
