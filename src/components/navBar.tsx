import { useState } from "react";
import {NavLink} from 'react-router-dom'



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen(){
    setIsOpen(!isOpen)
 }
  return (
<div className='top-0 fixed md:sticky  w-full'>
       <nav className=" bg-slate-900 block sticky md:rounded-md mx-auto md:my-4 my-0 p-1 h-11 md:w-2/5 lg:w-2/6 ">
      <div className="flex pt-2 items-center justify-between mx-6 md:hidden">
        <h6>Mashpa</h6>

        <button onClick={handleOpen}>
          {isOpen ?(
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
          ) :  (
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
          ) }
        </button>
      </div>
      <div className={isOpen?  "block absolute left-0 right-0 top-11 pt-20 w-screen  h-screen backdrop-opacity-100 bg-yellow-500 " :  "hidden md:block"}>
        <ul
       
          className="list-none justify-center items-center gap-2 font-medium flex flex-col  md:flex-row  "
        >
        <NavLink to={"/home"}>  <li className="btn hover:text-gray-900">Home</li></NavLink>
         <NavLink to={"/about"}> <li className="btn hover:text-gray-900  ">About</li></NavLink>
         <NavLink to={"/content"}> <li className="btn hover:text-gray-900 ">Services</li></NavLink>
         <NavLink to={'/contact'}> <li className="btn   hover:text-gray-900">Contact</li></NavLink>
        </ul>
      </div>
    </nav>

   </div>

  );
};

export default NavBar;
