import island from '../assets/cayes.jpg'
import haiti from '../assets/haiti_boat.jpg'
import house from '../assets/bassin_bleu.jpg'
import citadel from '../assets/citadel.jpg'
import cayes from '../assets/steps-in-jacmel.jpg'
import ppa from '../assets/street-in-port-au-prince.jpg'


const MediaCard = () => {
  return (
    <div>
       
  <div className="container  px-5 py-24 mx-auto">

    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-900">We're waiting for you.</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The country is blessed with breathtaking natural landscapes, including pristine beaches, crystal-clear turquoise waters, and lush mountains. Explore the stunning waterfalls of Bassin Bleu, hike through the scenic trails of Pic Macaya National Park, or soak up the sun on the unspoiled beaches of Île-à-Vache.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4 ">
        <div className="flex relative">
          <img alt="gallery" className="absolute rounded-md inset-0 w-full h-full object-cover object-center" src={`${ppa}`}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-70">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">Shooting Stars</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 ">
        <div className="flex relative">
          <img alt="gallery" className="rounded-md absolute inset-0 w-full h-full object-cover object-center" src={cayes}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-70">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">The Catalyzer</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute rounded-md inset-0 w-full h-full object-cover object-center" src={haiti}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-70">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">The 400 Blows</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute rounded-md inset-0 w-full h-full object-cover object-center" src={citadel}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-70">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">Neptune</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute rounded-md inset-0 w-full h-full object-cover object-center" src={house}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-70">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">Holden Caulfield</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute rounded-md inset-0 w-full h-full object-cover object-center" src={island}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-70">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default MediaCard