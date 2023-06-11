import slay from "../assets/Saly-22.png";
import Contact from "../components/contact";

const ContactForm = () => {
  return (
    <div className="grid md:grid-cols-2 w-full px-4 md:my-20">
      <div className=" relative h-96">
        <img
          className="h-96 absolute md:-right-20"
          src={slay}
          alt="illustration"
        />
      </div>
      <div className="">
        <Contact />
      </div>
    </div>
  );
};

export default ContactForm;
