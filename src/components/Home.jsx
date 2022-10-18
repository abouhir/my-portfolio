import React, { useEffect, useRef } from "react";
import FigmaIcon from "../icons/FigmaIcon";
import JavaIcon from "../icons/JavaIcon";
import JavascriptIcon from "../icons/JavascriptIcon";
import LaravelIcon from "../icons/LaravelIcon";
import MysqlIcon from "../icons/MysqlIcon";
import PhpIcon from "../icons/PhpIcon";
import ReactIcon from "../icons/ReactIcon";
import TailwindIcon from "../icons/TailwindIcon";
import mobileImage from "../images/image-mobile.png";
import desktopImage from "../images/image-desktop.png";
import cv from "../cv/CV_Bouhir_Abderrahmane.pdf";
import Item from "./Item";
import MyName from "./MyName";

const Home = () => {
  var name = "Abderrahmane Bouhir 23 ans";
  const job = "développeur full stack";
  const myName = useRef();
  const myJob = useRef();
  var i = 0;
  var j = 0;

  const changeName = () => {
    var interval = setInterval(function () {
      if (i !== name.length) {
        myName.current.innerHTML += name.charAt(i);
        i += 1;
      } else {
        if (j !== job.length) {
          myJob.current.innerHTML += job.charAt(j);
          j += 1;
        }
      }
    }, 300);
    if (j === job.length) clearInterval(interval);
    return interval;
  };

  useEffect(() => {
    var interval = changeName();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <section className="dark:bg-black col-span-1 w-full h-full my-9 md:my-[10%] lg:mt-[6%] flex flex-col items-center md:items-center  space-y-10 mb-28 md:mb-0 relative">
        <div className="self-start md:hidden ">
          <MyName />
        </div>
        <div className="inline md:flex md:flex-row-reverse md:items-center md:justify-around">
          <div className=" w-[75%] h-[350px] md:w-[360px]  relative flex justify-center  ">
            <div className="ellipse bg-primary  absolute  shadow-secondary shadow-home "></div>
            <div className="absolute bottom-14 ml-2 ">
              <img
                className="w-[360px] h-[460px]  max-w-screen-sm md:hidden"
                src={mobileImage}
                alt="My"
              />
              <img
                className="w-[360px] h-[460px]  max-w-screen-sm hidden md:inline "
                src={desktopImage}
                alt="My"
              />
              <span className=" absolute left-16 bottom-28 md:top-32 animate-tailwind md:animate-none  ">
                <TailwindIcon cls={"w-9"} />
              </span>
              <span className="absolute left-20 md:left-10  bottom-16 md:bottom-32 animate-javascript md:animate-none ">
                <JavascriptIcon cls={"w-9"} />
              </span>
              <span className="absolute left-10 md:left-14 bottom-16 animate-react md:animate-none ">
                <ReactIcon cls={"w-9"} />
              </span>
              <span className=" absolute left-64 bottom-28 md:top-32 animate-mysql md:animate-none">
                <MysqlIcon cls={"w-9"} />
              </span>
              <span className="absolute left-60 md:left-72 bottom-16 md:bottom-32 animate-php md:animate-none">
                <PhpIcon cls={"w-9"} />
              </span>
              <span className="absolute left-72 md:left-64 bottom-16 animate-laravel md:animate-none">
                <LaravelIcon cls={"w-9"} />
              </span>
              <div className="absolute -bottom-16 text-center w-[80%] ml-[10%] md:hidden">
                <span className="text-purpel dark:text-white text-2xl font-k2d font-extrabold drop-shadow">
                  Bienvenue , Je suis <br /> Abderrahmane Bouhir{" "}
                </span>
                <br />
                <span className="text-silver text-2xl font-k2d font-extrabold drop-shadow capitalize">
                  {" "}
                  {job}
                </span>
              </div>
            </div>

            <span className="rotate-04 animate-pulse">
              <FigmaIcon cls={"w-9"} />
            </span>
            <span className="rotate-40 animate-pulse">
              <JavaIcon cls={"w-9"} />
            </span>
          </div>
          <div className="hidden  md:flex md:flex-col items-center">
            <span
              className="text-purpel dark:text-white text-2xl md:text-4xl lg:text-6xl font-k2d font-extrabold drop-shadow text-center capitalize"
              ref={myName}
            >
              Bienvenue , Je suis <br />{" "}
            </span>

            <span
              className="text-silver text-2xl md:text-4xl lg:text-6xl font-k2d font-extrabold drop-shadow capitalize"
              ref={myJob}
            >
              {" "}
            </span>
          </div>
        </div>
        <div className="w-full lg:w-[75%] flex flex-col items-center md:flex-row-reverse md:flex-wrap md:justify-between   ">
          <div className="content bg-ciel rounded-3xl  py-3 ml-1 md:ml-0 flex flex-col items-center space-y-10">
            <h1 className="font-k2d text-center font-extrabold text-purpel text-2xl ">
              Mon Cv
            </h1>
            <a
              href={cv}
              target="__blank"
              className="w-[80%]  text-white dark:text-black text-center text-md xl:text-lg font-bold bg-silver rounded-lg p-2  shadow-md shadow-silver"
              download
            >
              Télécharger
            </a>
          </div>
          <div>
            <Item
              nombre={6}
              status={"Projets"}
              color={"item-primary"}
              ellipseColor="border-primary shadow-ellipse-primary"
            />
          </div>
          <div className="self-center">
            <Item
              nombre={2}
              status={"Expériences"}
              color={"item-secondary"}
              ellipseColor="border-secondary shadow-ellipse-secondary"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
