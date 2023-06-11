
import TestimonialLeft from './testimonial'
import TestimonialRight from './testimonialRight'
import a1 from "../assets/40.jpg";
import a2 from "../assets/45.jpg";
import a3 from "../assets/23.jpg";
const Tchat = () => {
  return (
    <div className=" md:flex justify-center items-center flex-col mt-10">
          <TestimonialLeft
            avatar={a3}
            message={
              <div className="md:line-clamp-5 line-clamp-2">
                The accommodations were luxurious, the activities were
                well-planned, and the guides were knowledgeable and
                passionate.😎😍
              </div>
            }
          />
          <TestimonialRight
            avatar={a2}
            message={
              <div className="md:line-clamp-5 line-clamp-2">
                They listened to my preferences and created a tailor-made
                itinerary that perfectly suited my interests.
              </div>
            }
          />
          <TestimonialLeft
            avatar={a1}
            message={
              <div className="md:line-clamp-5 line-clamp-2">
                From the moment I booked my trip, I felt supported and well
                taken care of. 👌
              </div>
            }
          />
        </div>
  )
}

export default Tchat