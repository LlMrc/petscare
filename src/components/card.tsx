import card from "../assets/best_of_haiti.jpg";

const ProductCard = () => {
  return (
    <div className="bg-purple-400 shadow-sm rounded-lg m-2 p-2 w-5/6  md:w-3/5 lg:w-3/6 h-60 mx-auto relative shadow-black shadow-2lg md:mt-24">
      <div className="flex flex-col md:flex-row   ">
        <div className="w-3/12 md:mr-14 lg:mr-20 " />

        <section className=" bg-cover">
          <img
            className="rounded-lg shadow-md shadow-black bg-center   -left-20 bottom-4 bg-white  md:absolute h-36 w-36 md:w-40 md:h-48 lg:w-48"
            src={`${card}`}
            alt="card"
          />
        </section>

        <section className="grid md:relative grid-cols-1 gap-1 md:h-52 overflow-hidden ">
          <div className="md:text-xl lg:text-2xl text-base font-bold uppercase md:relative absolute md:top-0 top-32 opacity-60 md:opacity-100">
          Unveiling the Hidden Beauty
          </div>
          <div className="line-clamp-3">
            Beyond stereotypes and misconceptions, discover another side of
            Haiti that is brimming with hidden treasures and unrivaled cultural
            richness. Dare to discover the other side of Haiti and be amazed by its beauty, culture, and authenticity.
          </div>
          <div className="flex absolute md:relative gap-4 top-10 right-4 flex-col md:top-0 md:right-0 md:flex-row ">
            <button className="border-gray-500 px-4  md:uppercase hover:bg-slate-700 hover:text-yellow-50 bg-black text-white">
              watch demo
            </button>
            <button className="border-gray-500 px-4  md:uppercase hover:bg-slate-700 hover:text-yellow-50 bg-white">
              watch demo
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductCard;
