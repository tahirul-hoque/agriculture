import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      {/* Responsive Navbar */}
      <nav className="fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-white/30 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                  <img src={reactLogo} alt="Logo" className="h-8 w-8 mr-2" />
                  <span className="font-bold text-xl text-black">AgriGuide</span>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center md:space-x-6">
                  <a href="#" className="text-gray-800 hover:text-[#62832c] font-medium">Home</a>
                  <a href="#" className="text-gray-800 hover:text-[#62832c] font-medium">About Us</a>
                  <a href="#" className="text-gray-800 hover:text-[#62832c] font-medium">Our Services</a>
                  <a href="#" className="text-gray-800 hover:text-[#62832c] font-medium">Blog</a>
                  <a href="#" className="text-gray-800 hover:text-[#62832c] font-medium">Contact Us</a>
                  <button className="ml-4 px-4 py-1 rounded-lg bg-white/70 text-[#62832c] border border-[#62832c] font-semibold hover:bg-[#62832c] hover:text-white transition">Login</button>
                  <button className="ml-2 px-4 py-1 rounded-lg bg-[#62832c] text-white font-semibold hover:bg-[#4e6a23] transition">Sign Up</button>
                </div>
                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => setNavOpen(!navOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#62832c] focus:outline-none"
                    aria-label="Main menu"
                    aria-expanded={navOpen}
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {navOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            {navOpen && (
              <div className="md:hidden bg-white/80 backdrop-blur-md px-4 pt-2 pb-4 space-y-2 shadow">
                <a href="#" className="block text-gray-800 hover:text-[#62832c] font-medium">Home</a>
                <a href="#" className="block text-gray-800 hover:text-[#62832c] font-medium">About Us</a>
                <a href="#" className="block text-gray-800 hover:text-[#62832c] font-medium">Our Services</a>
                <a href="#" className="block text-gray-800 hover:text-[#62832c] font-medium">Blog</a>
                <a href="#" className="block text-gray-800 hover:text-[#62832c] font-medium">Contact Us</a>
                <button className="w-full mt-2 px-4 py-1 rounded-lg bg-white/70 text-[#62832c] border border-[#62832c] font-semibold hover:bg-[#62832c] hover:text-white transition">Login</button>
                <button className="w-full mt-2 px-4 py-1 rounded-lg bg-[#62832c] text-white font-semibold hover:bg-[#4e6a23] transition">Sign Up</button>
              </div>
            )}
      </nav>

      <div className="relative min-h-screen w-full overflow-x-hidden">
        <img
          src="agriculture-field.jpg"
          alt="agriculture-field"
          className="brightness-75 w-full h-full absolute top-0 left-0 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <button className="mb-6 filter backdrop-blur-md text-white p-1 rounded-xl">
            New features available
          </button>
          <p className="text-white z-10 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-center">
            Your Guide to Modern Agriculture
          </p>
          <div className="text-white text-xl font-thin text-center mt-4 mb-8">
            Explore the future of agriculture with us. Discover cutting-edge <br />
            insights, practical tips, and the latest trends in modern farming.
          </div>
          <div>
            <button className="bg-[#62832c] px-20 py-2 md:p-4 rounded-xl text-white font-semibold cursor-pointer hover:bg-[#4e6a23] transition">
              Getting started
            </button>
          </div>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col items-center justify-center md:items-center md:justify-around'>
            <div className='flex flex-col items-start justify-start gap-5 mt-16 mb-10'>
              <div>
                <button className='bg-[#fcfcc3] p-2 rounded-lg text-lg ml-[5rem] md:ml-0 text-[#63652f] font-semibold'>
                  Our Achievement
                </button>
              </div>
                <div className='md:text-3xl text-2xl md:text-start text-center'>
                  Transforming Agriculture, One <br/> Farm at a Time.
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center md:justify-start gap-10 items-center'>
              <div className='flex flex-col gap-4 items-center md:items-start'>
                <div className='text-[#63652f] md:text-6xl text-4xl'>56k</div>
                <div className='text-center md:text-start'>Cultivators <br/> joined Agriguide</div>
              </div>

              <div className='bg-[#63652f] md:w-[0.1rem] w-[10rem] h-[0.1rem] md:h-20 rounded-sm'></div>

              <div className='flex flex-col gap-4'>
                <div className='text-[#63652f] md:text-6xl text-4xl flex flex-col items-center md:items-start'>70+</div>
                <div className='text-center md:text-start'>Agribusiness Companies <br/> that have Collaborated</div>
              </div>
            </div>
      </div>

      <div className='flex lg:flex-row flex-col items-center md:justify-around justify-center md:gap-0 gap-10 mx-20 mt-10'>
          <div className='flex flex-col items-start justify-center'>
            {/* <div className='border border-black inline p-2 rounded-full'>About Us</div> */}

            <div><img src="agricultural-farmer.jpg" alt="farmer" className='w-60 h-56 rounded-lg mt-20 mb-16 ml-10'/></div>

            <div className='font-mono'>At AgriGuide we believe the future of <br/> agriculture lies in harnessing smart <br/> technologies that farmers</div>
                <hr className='w-[20rem] border-[0.1px] border-black mb-4 mt-6'/>
            {/* <div className='='></div> */}

            <div className='flex flex-row items-center justify-start gap-44'>
              <div className='font-mono'>(FIRST)</div>
              <div className='font-mono'>(PRESENT)</div>
            </div>
          </div>

          <div>
            <div className='text-lg xs:text-4xl font-bold ml-4 mb-8 md:text-center lg:text-start xs:text-center text-center'>Cultivating Future <br/> Tomorrow The AgriGuiding <br/> Drones Story</div>

            <div><img src="agricultural-drone.jpg" alt="agriculture-drone" className='w-96 h-72 rounded-lg md:ml-10 md:ml-0 sm:ml-16 ms:ml-14 xs:ml-10' /></div>
          </div>

          <div className='xs:ml-8 md:ml-0'>
            <div className='font-bold text-6xl ml-2'>40K</div>
            <div className='text-gray-500 font-semibold text-xl'>Clients Reviews</div>
          </div>
        </div>
      </>
  )
}

export default App
