
import bg from '../assets/bg-image.jpg'

const HomePage = () => {
  const bgStyle = {
    backgroundImage:` url(${bg})`,
    backgroundSize: 'cover'
  }; 
  return (
    <section className=""  >
       
      <header className="overflow-hidden font-bold h-full "style={bgStyle}>

      <div className='bg-gradient-to-r from-black h-full '>

        <div className="grid grid-cols-1 gap-4 px-4 md:gap-8 max-w-xl md:mx-20 py-52">
        <h1 className="text-xl uppercase">Become a host</h1>
          <div className="md:text-5xl text-xl font-bold ">
            Host your space, share your world
          </div>
          <div className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi
            earum hic. Distinctio rerum neque a recusandae quia nobis nostrum
            dolores facilis rem voluptates illo, explicabo expedita
            exercitationem voluptatum ratione.
          </div>

          <button className="py-2 border-solid w-2/6 uppercase border-gray-600 rounded-md bg-gradient-to-r from-pink-600 to-orange-600 shadow-md px-3">
            Try Now
          </button>
        </div></div>
      </header>
   
      <section className=" text-black bg-slate-200 p-2 md:p-20 ">
        <div className="grid md:w-3/4 md:text-5xl text-lg font-bold grid-cols-1">
          Your next chapter made possible by hosting
        </div>
         <div className="grid md:grid-cols-2 gap-4 md:gap-6 justify-center items-center  mt-10">
          <div className=''>
          <h2 className="uppercase my-4 font-semibold">Share whate you have love</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti, quod dignissimos et eius natus, maxime autem fugit sint suscipit nisi eveniet culpa cupiditate assumenda aliquam molestiae pariatur iure dicta.</p>
          </div>
         <div >
         <h2 className="uppercase my-4  font-semibold">Host how you want</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti, quod dignissimos et eius natus, maxime autem fugit sint suscipit nisi eveniet culpa cupiditate assumenda aliquam molestiae pariatur iure dicta.</p>
         </div>
         </div>
      
      </section>

      <section className='bg-red-400 h-full w-full'>
  
      </section>
    </section>


  );
};

export default HomePage;
