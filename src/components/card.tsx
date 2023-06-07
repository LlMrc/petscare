import card  from  '../assets/dog.jpg'

const ProductCard = () => {
  return (
    <div className="bg-purple-600 rounded-xl m-2 p-2 w-5/6  md:w-3/5 lg:w-3/6 h-60 mx-auto relative shadow-black shadow-2lg">
        <div className="flex flex-col md:flex-row   ">
            <div className='w-96'/>
            
          
            <section className=" bg-cover shadow-lg ">
          <img className='rounded-lg   bg-center   -left-20 bottom-4 bg-white  md:absolute h-36 w-full md:h-40 md:w-40 lg:h-48 lg:w-48' src={`${card}`} alt="card" />
          </section>
       
         
          <section className='grid md:relative grid-cols-1 gap-1 md:h-52 absolute md:top-0 top-24 '>
          <div className="md:text-xl lg:text-2xl text-base font-bold uppercase">Title of product</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.it soluta nemo earum, sunt ullam hic dolore ex porro! Nulla.</div>
             <div className="flex gap-4  ">
                <button className='rectangle-btn bg-black text-white'>watch demo</button>
                <button className='rectangle-btn bg-white'>watch demo</button>
             </div>
          </section>
        
        </div>

       
    </div>
  )
}

export default ProductCard