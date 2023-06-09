import card  from  '../assets/best_of_haiti.jpg'

const ProductCard = () => {
  return (
    <div className="bg-purple-400 shadow-sm rounded-lg m-2 p-2 w-5/6  md:w-3/5 lg:w-3/6 h-60 mx-auto relative shadow-black shadow-2lg md:mt-10">
        <div className="flex flex-col md:flex-row   ">
            <div className='w-3/12 md:mr-14 lg:mr-20 '/>
            
          
            <section className=" bg-cover">
          <img className='rounded-lg shadow-md shadow-black bg-center   -left-20 bottom-4 bg-white  md:absolute h-36 w-36 md:w-40 md:h-48 lg:w-48' src={`${card}`} alt="card" />
          </section>
       
         
          <section className='grid md:relative grid-cols-1 gap-1 md:h-52 overflow-hidden '>
          <div className="md:text-xl lg:text-2xl text-base font-bold uppercase md:relative absolute md:top-0 top-32 opacity-60 md:opacity-100">Title of product</div>
            <div >Lorem ipsum dolor sit amet consectetur adipisicing elit.it soluta nemo earum, sunt ullam hic dolore ex porro! Nulla.</div>
             <div className="flex absolute md:relative gap-4 top-10 right-4 flex-col md:top-0 md:right-0 md:flex-row ">
                <button className='card-btn bg-black text-white'>watch demo</button>
                <button className='card-btn bg-white'>watch demo</button>
             </div>
          </section>
        
        </div>

       
    </div>
  )
}

export default ProductCard