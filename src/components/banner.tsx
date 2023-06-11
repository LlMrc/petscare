import bg from "../assets/le-grand-marchee--v13121361.jpg";
import bg1 from "../assets/the-location-in-labadee.jpg";
import dish1 from '../assets/dish/griot.png'
import dish2 from '../assets/dish/banana.png'

import dish3 from '../assets/dish/banana1.png'

import dish4 from '../assets/dish/rice.png'







const Banner = () => {
  return (

      <div className=" m-2 flex flex-col md:flex-row">
        <div className="bg-yellow-200 h-52 items-center flex gap-2 overflow-x-hidden md:w-3/4  p-2 justify-around">
        <img className="h-40 w-40 " src={dish1} alt="haitian food" />
        <img className="h-40 w-40 " src={dish4} alt="haitian food" />
        <img className="h-40 w-40 " src={dish3} alt="haitian food" />
       
       
        </div>
        <div className="bg-green-200 md:w-3/12 h-52">
        <img className="h-52 w-full" src={bg} alt="decameron beach"/>
        </div>
      </div>
  
  );
};

export default Banner;
