
import bg from '../assets/bg-image.jpg'
import ProductCard from '../components/card';
import CustomerService from '../components/customers';
import FooterPage from '../components/footer';
import LandingCard from '../components/landing';
import MediaCard from '../components/media';



const HomePage = () => {

  return (
    <section className=""  >
    
      <header className=" overflow-hidden font-bold h-3/5 md:h-full -z-40 ">
   
      <div className='bg-gradient-to-r relative from-black h-full  md:pt-2 w-full'>
      <LandingCard/>
       </div>
     
      </header>
      <section className=" text-black relative bg-slate-200 md:p-20 ">
      
        <div className="grid md:w-full md:text-4xl text-lg md:m-2 p-6 font-normal text-center grid-cols-1 ">
          Your next chapter made possible by hosting
        </div>
         <div className="grid md:grid-cols-2 mx-auto gap-4 md:gap-6 justify-center items-center md:px-0 px-6 lg:w-3/4  md:mt-14 ">
          <div className=''>
          <h2 className="uppercase my-4 font-semibold">Share whate you have love</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti, quod dignissimos et eius natus, maxime autem fugit sint suscipit nisi eveniet culpa cupiditate assumenda aliquam molestiae pariatur iure dicta.</p>
          </div>
         <div >
         <h2 className="uppercase my-4  font-semibold">Host how you want</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti, quod dignissimos et eius natus, maxime autem fugit sint suscipit nisi eveniet culpa cupiditate assumenda aliquam molestiae pariatur iure dicta.</p>
         </div>
         </div>
         <section className='h-full w-full  pt-10'>
       <ProductCard/>
   
      </section>
      
      <MediaCard/>
      
      </section>
      <CustomerService/>
      <FooterPage/>
     
    </section>


  );
};

export default HomePage;
