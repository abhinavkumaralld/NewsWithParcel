const logo = require("../images/download5.jpg");
export default Navbar = ({ setgenre }) => {
  const generelist = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  const handlegenre = (genre) => {
    setgenre(genre);
  };
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <>
      <div className="flex  bg-black place-content-between">
        <div
          onClick={() => handlegenre("General")}
          className="hover:cursor-pointer flex mx-5 bg-purple-800 h-10 rounded-sm px-3 place-self-center"
        >
          <div className="place-self-center text-white">Developers News</div>
          <img
            className="h-8 mx-1  place-self-center"
            src={logo}
            alt="Hii News"
          />
        </div>
        <div className="text-white place-self-center ">
          {days[date.getDay()]}, {months[date.getMonth()]} {date.getDate()},{" "}
          {date.getFullYear()}
        </div>
        <div className="flex text-white mx-5 h-14 p-3 space-x-6 bg-black">
          {generelist.map((val, ind) => {
            return (
              <button key={ind} onClick={() => handlegenre(val)}>
                {val}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
