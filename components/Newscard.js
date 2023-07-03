const ImgNotFound = require("../images/download6.png");

export default Newscard = ({ article }) => {
  let immg = ImgNotFound;
  if (article.urlToImage !== null) immg = article.urlToImage;
  return (
    <>
      <div className=" p-2 m-2  border-4 border-indigo-500 rounded-md w-56  justify-content-center">
        <img className="h-36" src={immg} />
        <p className="font-bold mt-2 h-24">
          {article?.content?.split(/\s+/).slice(0, 10).join(" ")} .....
        </p>
        <p className="text-right h-10">{article?.author?.slice(0, 10)} ...</p>
        <a href={article?.url}>
          <button className="bg-blue-600 rounded-md mx-0 my-2 w-24 h-8  text-white">
            Read more
          </button>
        </a>
      </div>
    </>
  );
};
