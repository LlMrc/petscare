import Title from "./title";

const Description = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <Title title={"Book Now and Embark on Your Dream Adventure!"} />
      </div>

      <div className="grid md:grid-cols-2 mx-auto gap-4 md:gap-6 justify-center items-center md:py-10 px-6 lg:w-3/4  md:mt-14 ">
        <div className="bg-shad-color p-4">
          <h2 className="uppercase my-4 font-semibold">
            Unleash Your Adventurous Side
          </h2>
          <p>
            Venture into its fascinating history, explore historical sites, and
            immerse yourself in its unique cultural heritage. Wander through the
            vibrant streets of Port-au-Prince, feel the captivating rhythms of
            Haitian music, and be captivated by the vibrant and authentic art
            that permeates every corner of the country.
          </p>
        </div>
        <div className="bg-shad-color p-4">
          <h2 className="uppercase my-4  font-semibold">
            Safety and Peace of Mind
          </h2>
          <p>
            Meet talented local artisans and indulge in the exquisite flavors
            of spicy Haitian cuisine. From majestic mountains to tropical
            waterfalls and picturesque coffee plantations, Haiti boasts
            breathtaking natural diversity. Experience the warm hospitality of
            its people and embark on unforgettable adventures that will leave a
            lasting impression.
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
