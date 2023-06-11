import bg from "../assets/le-grand-marchee--v13121361.jpg";
import bg1 from "../assets/the-location-in-labadee.jpg";

const bgStyle = {
  backgroundImage: `url(${bg1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Banner = () => {
  return (

      <div className="flex md:flex-row justify-between flex-col my-10 h-44">
        <div className="md:w-4/6 bg-orange-200 flex flex-col gap-2 justify-start p-4">
          <div className="md:text-2xl w-3/4 text-lg uppercase">
            Embrace the Beauty of the Islands
          </div>
          <div className="text-base">
            Unwind in Paradise and Immerse Yourself in Tropical Splendor
          </div>
          <div className="rounded-lg bg-primary uppercase border-spacing-1 border-2 w-32 p-2 text-center my-2 border-gray-600 border-solid">
            read more
          </div>
        </div>
        <div className="md:w-4/12 h-full" style={bgStyle}></div>
      </div>
  
  );
};

export default Banner;
