import recyclegif from '../Images/recyclegif.gif'

export function About() {
  return (
    <div className="min-h-screen w-100% bg-gray-50 px-6 md:px-20 py-12 flex flex-col gap-12 justify-between items-center content-center">

      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-green-700">
            About UpCycle Product
          </h1>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            UpCycle Connect is a hyper-local platform that bridges the gap 
            between material providers like college labs and small industries 
            and students, innovators, and startups. Our goal is to reduce 
            landfill waste, promote sustainability, and make innovation 
            accessible for everyone.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center content-center items-center">
          <img src={recyclegif} alt="" height={200} width={250} className='bg-green-200'/>
        </div>
      </div>

    
      <div className="flex flex-col md:flex-row gap-12">
        
     
        <div className="md:w-1/3 bg-green-50 rounded-lg p-6 shadow-black/20 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-3">1. List Waste Materials</h2>
          <p className="text-gray-700 text-sm md:text-base">
            Labs and small industries can list reusable materials, including 
            metals, chemicals, electronics, and timber. Add details like quantity, 
            category, and location.
          </p>
        </div>

    
        <div className="md:w-1/3 bg-green-50 rounded-lg p-6 shadow-black/20 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-3">2. Students Request Materials</h2>
          <p className="text-gray-700 text-sm md:text-base">
            Students and innovators browse available materials and request what 
            they need for projects, experiments, or prototypes.
          </p>
        </div>

    
        <div className="md:w-1/3 bg-green-50 rounded-lg p-6 shadow-black/20 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-3">3. Reuse & Reduce Waste</h2>
          <p className="text-gray-700 text-sm md:text-base">
            Providers approve requests, materials are reused, and impact metrics 
            such as materials saved and CO₂ reduction are updated in real time.
          </p>
        </div>

      </div>

   
      <div className="bg-green-100 rounded-lg p-8 flex flex-col md:flex-row justify-around items-center text-center gap-6">
        <div>
          <p className="text-3xl font-bold text-green-700">120 kg</p>
          <p className="text-gray-700">Materials Reused</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-700">45 kg</p>
          <p className="text-gray-700">CO₂ Reduced</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-700">18</p>
          <p className="text-gray-700">Active Providers</p>
        </div>
      </div>

    </div>
  );
}


