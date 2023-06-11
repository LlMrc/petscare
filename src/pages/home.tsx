import ProductCard from "../components/card";
import CustomerService from "../components/customers";
import Description from "../components/descriprion";
import FooterPage from "../components/footer";
import LandingCard from "../components/landing";
import MediaCard from "../components/media";

import Title from "../components/title";
import Subtitle from "../components/subtitle";
import Tchat from "../components/chat";
import ContactForm from "./form";

import Banner from "../components/banner";
import CarousselSlide from "./preview";

const HomePage = () => {
  return (
    <section className="">
      <header>
        <LandingCard />
      </header>
      <main className=" text-black relative bg-gray-50    md:p-20 ">
        <Description />
        <ProductCard />
        <MediaCard />

        <Title title={"Hear What Our Clients Have to Say"} />
        <Subtitle
          subtitle={" Discover the Stories of Our Satisfied Customers"}
        />
        <Banner />
        <Tchat />

        <div className="md:w-3/5 md:mt-20 mt-10">
          <Title
            title={
              "Please feel free to contact us via the form below or by phone."
            }
          />
          <Subtitle
            subtitle={
              "We are committed to providing exceptional customer service and supporting you throughout your journey"
            }
          />
        </div>

        <ContactForm />
        <CustomerService />
        <CarousselSlide />
      </main>

      <FooterPage />
    </section>
  );
};

export default HomePage;
