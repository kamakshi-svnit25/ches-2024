/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { useState } from "react";
import { AluMillennium, Anerobes, Anerobes2024 } from "@/constants";
import Image from "next/image";
import {
  alluTeam,
  aneTeam,
  chemTeam,
  chemTeam24_1,
  chemTeam24_2,
  chemTeam24_3,
  chemTeam24_4,
  chemTeam24_5,
} from "@/public/assets";
const objectives = [
  "Demonstrate the ability to control a chemical reaction.",
  "Innovate with chemical processes to power a small-scale vehicle.",
  "Apply chemical engineering principles to a practical challenge.",
  "Collaborate with team members to design and build the car.",
  "Compete with other teams to achieve the most accurate stopping distance.",
];

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Page component for the Chem-E-Car event.
 *
 * Contains information about the event, objectives and participating teams.
 *
 * @returns {JSX.Element} The rendered page component.
 */
/*******  5fcf98d7-4223-471f-bfe8-04159820b588  *******/
const Page = () => {
  const [selectedOption, setSelectedOption] = useState("2024-2025");

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <section className="pt-[75px] min-h-screen w-full px-4 md:px-28">
      <div className=" mx-auto mt-4">
        <h1 className="md:text-3xl text-2xl font-bold font-heading text-secondary-200 mt-4 decoration-4 decoration-accent-500 underline underline-offset-8">
          Chem-E-Car
        </h1>
        <p className="mt-4 text-justify font-light text-text-100 text-[14px] md:text-[18px]">
          One of the flagship events of AIChE Global is the Chem-E-Car
          competition. This event challenges students to design and construct a
          shoe box-sized car that is powered solely by chemical reactions. The
          objective is to demonstrate the ability to control a chemical reaction
          to precisely start and stop the car, thereby controlling its motion
          entirely through chemical processes.
        </p>
        <h2 className="md:text-2xl text-xl mt-4 font-semibold mb-4 text-secondary-200">
          Objectives
        </h2>
        <ul className="list-disc list-inside mb-6 font-light text-text-100">
          {objectives.map((objective, index) => (
            <li key={index} className="mb-2 ">
              {objective}
            </li>
          ))}
        </ul>
        <h2 className="md:text-2xl text-xl mt-4 font-semibold mb-4 text-secondary-200">
          Our Chem-E-Car Teams
        </h2>

        <div>
          {/* Dropdown */}
          <select
            value={selectedOption}
            onChange={handleDropdownChange}
            className="bg-transparent py-3 appearance-auto border-b-2 text-text-100 mb-6 focus:outline-none"
          >
            <option value="2023-2024">2023 - 2024 </option>
            <option value="2024-2025">2024 - 2025 </option>
          </select>
        </div>

        {selectedOption === "2023-2024" && (
          <div>
            <div className=" flex gap-4 flex-wrap">
              <Image
                loading="lazy"
                placeholder="blur"
                src={chemTeam}
                alt="Chem-E-Car Team"
                width={400}
                height={400}
                className=" mt-4 rounded-md w-full sm:w-96 "
              />
              <Image
                loading="lazy"
                placeholder="blur"
                src={aneTeam}
                alt="Chem-E-Car Team"
                width={400}
                height={400}
                className=" mt-4 rounded-md w-full sm:w-96"
              />
              <Image
                loading="lazy"
                placeholder="blur"
                src={alluTeam}
                alt="Chem-E-Car Team"
                width={400}
                height={400}
                className=" mt-4 rounded-md w-full sm:w-96"
              />
            </div>
            <div>
              <h3 className="mt-8 text-justify font-semibold text-text-200 text-lg md:text-xl decoration-4 decoration-accent-500 underline underline-offset-8">
                Team Anerobes
              </h3>
              <div className="mt-4 text-justify font-light text-text-100 text-[14px] md:text-[18px]">
                {/* <h4 className="text-lg md:text-xl mt-4 font-semibold mb-2 text-secondary-200">
              Design
            </h4> */}
                <p>{Anerobes.design}</p>
                {/* <h4 className="text-lg md:text-xl mt-4 font-semibold mb-2 text-secondary-200">
              Power Source
            </h4>
            <p>{Anerobes.powerSource}</p>
            <h4 className="text-lg md:text-xl mt-4 font-semibold mb-2 text-secondary-200">
              Stopping Mechanism
            </h4>
            <p>{Anerobes.stoppingMechanism}</p> */}
                <Image
                  src={Anerobes.img}
                  loading="lazy"
                  placeholder="blur"
                  alt="AluMillennium"
                  width={400}
                  height={400}
                  className=" mt-4 rounded-md"
                />
              </div>
            </div>
            <div>
              <h3 className="mt-8 text-justify font-semibold text-text-200 text-lg md:text-xl decoration-4 decoration-accent-500 underline underline-offset-8">
                Team AluMillennium
              </h3>
              <div className="mt-4 text-justify font-light text-text-100 text-[14px] md:text-[18px]">
                {/* <h4 className="text-lg md:text-xl mt-4 font-semibold mb-2 text-secondary-200">
              Design
            </h4> */}
                <p>{AluMillennium.design}</p>
                {/* <h4 className="text-lg md:text-xl mt-4 font-semibold mb-2 text-secondary-200">
              Power Source
            </h4>
            <p>{AluMillennium.powerSource}</p>
            <h4 className="text-lg md:text-xl mt-4 font-semibold mb-2 text-secondary-200">
              Stopping Mechanism
            </h4>
            <p>{AluMillennium.stoppingMechanism}</p> */}
                <Image
                  src={AluMillennium.img}
                  loading="lazy"
                  placeholder="blur"
                  alt="AluMillennium"
                  width={400}
                  height={400}
                  className=" mt-4 rounded-md"
                />
              </div>
            </div>
          </div>
        )}

        {selectedOption === "2024-2025" && (
          <div>
            <div className=" flex gap-4 flex-wrap">
              <Image
                loading="lazy"
                placeholder="blur"
                src={chemTeam24_2}
                alt="Chem-E-Car Team"
                width={400}
                height={400}
                className=" mt-4 rounded-md w-full sm:w-96 "
              />
              <Image
                loading="lazy"
                placeholder="blur"
                src={chemTeam24_1}
                alt="Chem-E-Car Team"
                width={400}
                height={250}
                className=" mt-4 rounded-md w-full sm:w-96 "
              />
              <Image
                loading="lazy"
                placeholder="blur"
                src={chemTeam24_3}
                alt="Chem-E-Car Team"
                width={400}
                height={250}
                className=" mt-4 rounded-md w-full sm:w-96 "
              />
            </div>
            <div>
              <h3 className="mt-8 text-justify font-semibold text-text-200 text-lg md:text-xl decoration-4 decoration-accent-500 underline underline-offset-8">
                Team Anerobes
              </h3>
              <div className="mt-4 text-justify font-light text-text-100 text-[14px] md:text-[18px]">
                {/* <h4 className="text-lg md:text-xl mt-4 font-semibold mb-2 text-secondary-200">
              Design
            </h4> */}
                <p>{Anerobes2024.design}</p>
                {/* <h4 className="text-lg md:text-xl mt-4 font-semibold mb-2 text-secondary-200">
              Power Source
            </h4>
            <p>{Anerobes.powerSource}</p>
            <h4 className="text-lg md:text-xl mt-4 font-semibold mb-2 text-secondary-200">
              Stopping Mechanism
            </h4>
            <p>{Anerobes.stoppingMechanism}</p> */}
                <Image
                  src={chemTeam24_4}
                  loading="lazy"
                  placeholder="blur"
                  alt="AluMillennium"
                  width={400}
                  height={400}
                  className=" mt-4 rounded-md"
                />
              </div>
            </div>
          </div>
        )}

        <div>
          <h2 className="md:text-2xl text-xl mt-4 font-semibold mb-4 text-secondary-200">
            Our Sponsors
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Page;
