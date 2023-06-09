
import p1 from '../assets/40.jpg'
import p2 from '../assets/23.jpg'
import p3 from '../assets/45.jpg'
const Testimonial = () => {
  return (
    <div >
      <section className="text-gray-400  body-font">
    <div className="container px-5 py-24 mx-auto ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        <div className=" bg-gray-900 lg:mb-0 mb-6 border-solid border-purple-400 border-2   p-4">
          <div className=" text-center rounded-md">
            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={p3}/>
            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
        <div className=" bg-gray-900 lg:mb-0 mb-6 border-solid border-purple-400 border-2  p-4">
          <div className=" text-center rounded-sm">
            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={p2}/>
            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 className="text-white font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
            <p className="text-gray-500">UI Develeoper</p>
          </div>
        </div>
        <div className=" bg-gray-900 lg:mb-0 border-solid border-purple-400 border-2  p-4">
          <div className="text-center">
            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={p1}/>
            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 className="text-white font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
            <p className="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Testimonial