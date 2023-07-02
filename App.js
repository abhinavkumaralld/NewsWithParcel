import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Newsserver from "./components/Newsserver";
import temp from "./components/temp";
import Navbar from "./components/Navbar";
import process from "process";
require("dotenv").config();
const totalpages = 36;
const pagesize = 4;

App = () => {
  const [articles, setArticles] = useState([]);
  const [pageno, setpageno] = useState(1);
  const [genre, setgenre] = useState("general");
  console.log(process.env.SECRET_KEY);
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${genre}&apiKey=de9b04c12086420b8a94d4b06ad367b6&page=${pageno}&pageSize=${pagesize}`;
  const getArticles = async () => {
    try {
      let data = await fetch(url);
      let jsondata = await data.json();
      setArticles(jsondata.articles);

      // setArticles(temp.articles);
    } catch (e) {
      console.log("sorry");
    }
  };
  useEffect(() => {
    getArticles();
  }, [pageno]);
  useEffect(() => {
    getArticles();
  }, [genre]);
  const handleprev = () => {
    if (pageno > 1) setpageno(pageno - 1);
  };
  const handlenext = () => {
    if (pageno * pagesize < totalpages) setpageno(pageno + 1);
  };
  return (
    <>
      <Navbar setgenre={setgenre} />
      <Newsserver
        articles={articles}
        handleprev={handleprev}
        handlenext={handlenext}
        genre={genre}
      ></Newsserver>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
