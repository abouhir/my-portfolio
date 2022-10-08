import React from "react";
import CloseIcon from "../icons/CloseIcon";
import imageAnnonce from "../images/aid.jpg";
import { Outlet } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
export default function Annonce() {
  const parentAnnonce = useRef();

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
          <div className="w-full h-full relative ">
            <img 
              className="rounded-xl absolute z-10 w-full h-full"
              src={imageAnnonce}
              alt="fetrah"
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
