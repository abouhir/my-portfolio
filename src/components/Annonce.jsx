import React from "react";
import CloseIcon from "../icons/CloseIcon";
import imageAnnonce from "../images/font-birthday.jpg";

import { Outlet } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
export default function Annonce() {
  const parentAnnonce = useRef();
  const date = new Date();
  const hiddenImage = () => {
    parentAnnonce.current.classList.add("hidden");
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className=" w-full h-full flex justify-center items-center bg-black bg-opacity-50 absolute z-10 "
        ref={parentAnnonce}
      >
        <div className="mx-10 w-[70%]  h md:w-[400px] md:h-[400px] bg-white rounded-xl relative">
          <div className="w-full h-full relative flex justify-center items-center ">
            <h1 className="text-5xl font-bithday font-bold absolute z-10 text-gray-600">
              {18 - date.getDate() !== 0
                ? "-" + (18 - date.getDate()) + " My Birthday"
                : "It's My Birthday"}{" "}
              {}
            </h1>

            <img
              className="rounded-xl absolute w-full h-full z-0"
              src={imageAnnonce}
              alt="font birthday"
            />
          </div>
          <div
            className="w-5 h-5 cursor-pointer rounded-full absolute top-2 right-2 z-20"
            onClick={() => {
              hiddenImage();
            }}
          >
            <CloseIcon />
          </div>
        </div>
      </div>
      <div className="z-0 ">
        <Outlet />
      </div>
    </div>
  );
}
