import React from "react";
import { Circles } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <>
      <div className="flex flex-col justify-start items-center w-full h-full mt-12 pt-11">
        <Circles color="#00BFFF" height={80} width={80} />
        <p className="p-4 ">{message}</p>
      </div>
    </>
  );
};

export default Spinner;
