import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }

  const Menu = () => {
    return (
      <>
        <NavLink onClick={handleOpen} to={"/"}>
          <p className=" btn-2">Home</p>
        </NavLink>
        <NavLink onClick={handleOpen} to={"/contact"}>
          <p className=" btn-2">Contact</p>
        </NavLink>
        <NavLink onClick={handleOpen} to={"/about"}>
          <p className=" btn-2">About</p>
        </NavLink>
        <NavLink onClick={handleOpen} to={"/content"}>
          <p className=" btn-2">sht</p>
        </NavLink>
      </>
    );
  };

  return (
    <>
    <div className=" z-10 md:m-4 md:w-3/4 md:flex justify-center fixed h-20 w-full">
      <div className="h-20 md:opacity-70 bg-slate-900 md:bg-gradient-to-l from-slate-900 to-gray-200 md:w-3/5 lg:w-3/6 md:rounded-lg shadow-sm flex  items-center ">
        <div className="md:flex w-full justify-around hidden">
          <div className=" flex gap-2">
          <NavLink to={"/"}>
            <p className=" btn">Home</p>
          </NavLink>
          <NavLink  to={"/contact"}>
            <p className=" btn">Contact</p>
          </NavLink>
          <NavLink to={"/about"}>
            <p className=" btn">About</p>
          </NavLink>
          </div>
         
          <NavLink to={"/content"}>
            <p className=" btn">sht</p>
          </NavLink>

        
        </div>
        <div className="md:hidden px-4 flex  justify-between w-full">
          <div>MASHPA</div>
          <div onClick={handleOpen}> {isOpen ? (
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5"
                xmlns="  http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}</div>
           
          </div>
      </div>

      <div
        className={
          isOpen
            ? "text-2xl  rounded-sm block bg-slate-900 text-yellow-50 w-full h-screen   pt-20  uppercase"
            : "hidden"
        }
      >
        <Menu />
      </div></div>
    </>
  );
};

export default NavBar;
