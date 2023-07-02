import React, { useEffect, useState } from "react";
import Newscard from "./Newscard";

export default Newsserver = ({ articles, handleprev, handlenext, genre }) => {
  return (
    <>
      <p className="font-bold text-3xl text-center h-10  align-middle place-self-center  my-9">
        News Headlines : {genre}
      </p>
      <div className="flex justify-center">
        {articles?.map((val, ind) => {
          return <Newscard article={val} key={val.description} />;
        })}
      </div>
      <div className="flex justify-between">
        <button
          className="bg-blue-600 rounded-md m-5 w-16 h-8 text-white"
          onClick={handleprev}
        >
          &laquo; Prev
        </button>
        <button
          className="bg-blue-600 rounded-md m-5 w-16 h-8 text-white"
          onClick={handlenext}
        >
          Next &raquo;
        </button>
      </div>
      <p className="text-center h-10  align-middle place-self-center mt-20">
        Copyright @ 2023 | All Rights Reserved
      </p>
    </>
  );
};
