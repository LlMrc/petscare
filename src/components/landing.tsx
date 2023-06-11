import tropical from "../assets/decameron.jpg";
import venice from "../assets/indigo.jpg";
import logo from "../assets/logo.png";

const bg1 = {
  backgroundImage: `url(${venice})`,
  backgroundSize: "cover",
};

const bg3 = {
  backgroundImage: `url(${tropical})`,
  backgroundSize: "cover",
};
const LandingCard = () => {
  return (
    <div className=" overflow-hidden font-bold h-3/5 md:h-full -z-40 ">
      <div className="bg-gradient-to-r relative from-black h-full  md:pt-2 w-full">
        <section className="  md:w-full md:grid-cols-2 md:gap-4  justify-evenly items-center md:mx-auto  grid text-center pt-16 md:pt-20">
          <div className=" grid md:gap-4 m-2 md:pt-28 text-start z-0 md:px-10 w-4/5">
            <div className="md:text-4xl text-xl">
              Experience the Ultimate Escape with MASHPA
            </div>

            <div className="text-md font-thin w-3/4">
              Unforgettable Adventures, Dream Destinations, and Tailor-Made
              Experiences for Extraordinary Journeys"
            </div>
            <div className="rectangle-btn md:m-10 mx-2 w-3/6 md:ml-24 text-center rounded-md bg-gradient-to-r from-pink-600 to-red-400 bg-slate-500 max-w-sm ">
              button
            </div>
          </div>

          <div className="  relative justify-end flex md:pt-72 pt-52 m-4 z-0  mx-10 w-full">
            <div className="rounded-full absolute bottom-10 -left-10  p-1  h-32 w-32 bg-slate-200 z-10">
              <div
                className=" bg-slate-800 rounded-full h-full w-full"
                style={bg1}
              />
            </div>
            <div className="rounded-full flex items-center justify-center p-1 h-40 w-40 bg-slate-200  absolute bottom-8 left-12 z-20">
              <div
                className=" bg-slate-800 rounded-full h-full w-full"
                style={bg3}
              />
            </div>
            <div className="rounded-full flex items-center justify-center  p-1 h-52 w-52 md:h-64 md:w-64 bg-slate-200  absolute md:-bottom-4 bottom-2 left-40 z-10">
              <div className=" bg-slate-800  rounded-full h-full w-full flex justify-center items-center text-center relative">
                <div className="grid grid-cols-1 m-4 items-center container-snap  justify-center overflow-scroll">
                  <img
                    src={logo}
                    alt="logo"
                    className="h-8 w-8 bg-slate-400 items-center mx-auto"
                  />

                  <div className="">mashpa group</div>
                  <div className="text-2xl uppercase font-thin">
                    Your dream vacation
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="custom-shape-divider-bottom-1686275232">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className=""></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </section>
      </div>
    </div>
  );
};

export default LandingCard;
