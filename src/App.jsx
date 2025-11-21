import { useState } from 'react'
import { motion } from 'framer-motion'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import drone from '/agricultural-drone.jpg'
import farmer from '/agricultural-farmer.jpg'
import field from '/agriculture-field.jpg'
import trucktor from '/agricultural-trucktor.png'
import drone2 from '/drone2-agricultural-.png'
import city from '/drone-city.png'
import man from '/agricultural-man.png'

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
          src={field}
          alt="agriculture-field"
          className="brightness-75 w-full h-full absolute top-0 left-0 object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
        >
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className='flex lg:flex-row flex-col items-center justify-center md:items-center md:justify-around'
      >
        <div className='flex flex-col items-start justify-start gap-5 mt-16 mb-10'>
          <div>
            <button className='bg-[#fcfcc3] p-2 rounded-lg text-lg ml-[5rem] md:ml-0 text-[#63652f] font-semibold'>
              Our Achievement
            </button>
          </div>
          <div className='md:text-3xl text-2xl md:text-start text-center'>
            Transforming Agriculture, One <br /> Farm at a Time.
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center md:justify-start gap-10 items-center'>
          <div className='flex flex-col gap-4 items-center md:items-start'>
            <div className='text-[#63652f] md:text-6xl text-4xl'>56k</div>
            <div className='text-center md:text-start'>Cultivators <br /> joined Agriguide</div>
          </div>

          <div className='bg-[#63652f] md:w-[0.1rem] w-[10rem] h-[0.1rem] md:h-20 rounded-sm'></div>

          <div className='flex flex-col gap-4'>
            <div className='text-[#63652f] md:text-6xl text-4xl flex flex-col items-center md:items-start'>70+</div>
            <div className='text-center md:text-start'>Agribusiness Companies <br /> that have Collaborated</div>
          </div>
        </div>
      </motion.div>


      {/* <div>
          <button className='bg-[#fcfcc3] p-2 rounded-lg text-lg ml-[5rem] md:ml-[12rem] text-[#63652f] font-semibold'>
          About us
          </button>
      </div> */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className='flex lg:flex-row flex-col items-center md:justify-around justify-center md:gap-0 gap-10 mx-20 mt-10'
      >

        <div className='flex flex-col items-start justify-center'>
          <div>
            <button className='bg-[#fcfcc3] p-2 rounded-lg text-lg ml-[7rem] md:ml-[2rem] text-[#63652f] font-semibold'>
              About us
            </button>
          </div>
          {/* <div className='border border-black inline p-2 rounded-full'>About Us</div> */}

          <div><img src={farmer} alt="farmer" className="w-60 h-56 rounded-lg mt-20 mb-16 ml-10" /></div>

          <div className='font-mono'>At AgriGuide we believe the future of <br /> agriculture lies in harnessing smart <br /> technologies that farmers</div>
          <hr className='w-[20rem] border-[0.1px] border-black mb-4 mt-6' />
          {/* <div className='='></div> */}

          <div className='flex flex-row items-center justify-start gap-44'>
            <div className='font-mono'>(FIRST)</div>
            <div className='font-mono'>(PRESENT)</div>
          </div>
        </div>

        <div>
          <div className='text-lg xs:text-4xl font-bold ml-4 mb-8 md:text-center lg:text-start xs:text-center text-center'>Cultivating Future <br /> Tomorrow The AgriGuiding <br /> Drones Story</div>

          <div><img src={drone} alt="agriculture-drone" className="w-96 h-72 rounded-lg md:ml-10 md:ml-0 sm:ml-16 ms:ml-14 xs:ml-10" /></div>
        </div>

        <div className='xs:ml-8 md:ml-0'>
          <div className='font-bold text-6xl ml-2'>40K</div>
          <div className='text-gray-500 font-semibold text-xl'>Clients Reviews</div>
        </div>
      </motion.div>


      {/* OUR PRODUCT section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className='bg-[#e4f2d4] mt-5 p-4'
      >

        <div className='flex flex-col gap-5 items-center md:items-start md:ml-[10rem]'>
          <div className='bg-[#fcfcc3] inline text-[#63652f] p-2 rounded-full text-center w-fit xs:ml-0 sm:ml-0 md:ml-0'>
            Our products
          </div>

          <div className='font-bold text-center md:text-start text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-6xl max-w-3xl'>
            Innovative Solutions for Modern_Farming
          </div>

          <div className='font-thin text-center md:text-start text-sm xs:text-base md:text-xl max-w-2xl'>
            Our planet's population is growing rapidly & so <br className="hidden md:block" /> is the need for more food. Already, 800 million people go to bed hungry. So, we need more foods for them.
          </div>

          <div className='bg-[#c2f33e] inline p-2 rounded-full text-center w-fit xs:ml-0 sm:ml-0 md:ml-0'>
            More Service
          </div>
        </div>

        <div>
          <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 justify-items-center mt-10 mb-20 px-2 sm:px-8 md:px-0'>
            <div className='bg-white w-full max-w-xs p-4 rounded-xl shadow-lg mt-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center'>
              <img src={trucktor} alt="trucktor" className='w-40 sm:w-48 h-auto rounded-xl' />
              <div className='font-bold text-lg sm:text-xl mt-2 text-center'>Precision Agriculture <br /> Solutions</div>
              <div className='font-thin mt-2 text-center text-sm sm:text-base'>Our planet's population is growing <br /> rapidly already hungry each night. <br /> So our need for more food.</div>
            </div>

            <div className='bg-white w-full max-w-xs p-4 rounded-xl shadow-lg mt-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center'>
              <img src={drone2} alt="drone" className='w-40 sm:w-48 h-auto rounded-xl' />
              <div className='font-bold text-lg sm:text-xl mt-2 text-center'>Drone Spraying & <br /> Spreading Services</div>
              <div className='font-thin mt-2 text-center text-sm sm:text-base'>Our planet's population is growing <br /> rapidly already hungry each night. <br /> So our need for more food.</div>
            </div>

            <div className='bg-white w-full max-w-xs p-4 rounded-xl shadow-lg mt-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center'>
              <img src={city} alt="city" className='w-40 sm:w-48 h-auto rounded-xl' />
              <div className='font-bold text-lg sm:text-xl mt-2 text-center'>Aerial Survey & <br /> Mapping Service</div>
              <div className='font-thin mt-2 text-center text-sm sm:text-base'>Our planet's population is growing <br /> rapidly already hungry each night. <br /> So our need for more food.</div>
            </div>

            <div className='bg-white w-full max-w-xs p-4 rounded-xl shadow-lg mt-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center'>
              <img src={man} alt="man" className='w-40 sm:w-48 h-auto rounded-xl' />
              <div className='font-bold text-lg sm:text-xl mt-2 text-center'>Automated Data <br /> Collection</div>
              <div className='font-thin mt-2 text-center text-sm sm:text-base'>Our planet's population is growing <br /> rapidly already hungry each night. <br /> So our need for more food.</div>
            </div>
          </div>
        </div>
      </motion.div>



      {/* WHY CHOOSE US section */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mt-16 px-2 xs:px-4 sm:px-8 md:px-12 lg:px-24"
      >
        <div className="flex flex-col gap-5 items-center md:items-start">
          <div className="bg-[#fcfcc3] w-fit p-2 rounded-lg text-[#63652f] text-base xs:text-lg sm:text-xl">
            Why Choose Us
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
            Benefits Gained From Using <br /> Our Agriguide's Solutions
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 bg-[#fcfcc3] p-2 rounded-lg mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
            <div className="text-xl font-bold text-center mb-2">Sustainability</div>
            <div className="font-thin text-center text-sm xs:text-base">
              Eco-friendly practices minimize environmental <br /> impact and promote long-term soil health
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 bg-[#fcfcc3] p-2 rounded-lg mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
            <div className="text-xl font-bold text-center mb-2">Real-time Monitoring</div>
            <div className="font-thin text-center text-sm xs:text-base">
              Smart irrigation systems and sensors-based <br /> farming reduce water and fertilizer waste
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 bg-[#fcfcc3] p-2 rounded-lg mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            <div className="text-xl font-bold text-center mb-2">Improved Food Security</div>
            <div className="font-thin text-center text-sm xs:text-base">
              Higher productivity ensures a steady food <br /> supply for growing populations.
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 bg-[#fcfcc3] p-2 rounded-lg mb-4">
              <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
            </svg>
            <div className="text-xl font-bold text-center mb-2">Climate Resilience</div>
            <div className="font-thin text-center text-sm xs:text-base">
              Innovations like drought-resistant crops help <br /> farmers adapt to changing weather conditions.
            </div>
          </div>
          {/* Card 5 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 bg-[#fcfcc3] p-2 rounded-lg mb-4">
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
              <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
              <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
            <div className="text-xl font-bold text-center mb-2">Smart Farming</div>
            <div className="font-thin text-center text-sm xs:text-base">
              Use of AI, IoT, and big data enables informed <br /> decision-making for better farm management.
            </div>
          </div>
          {/* Card 6 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 bg-[#fcfcc3] p-2 rounded-lg mb-4">
              <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
            </svg>
            <div className="text-xl font-bold text-center mb-2">Economic Growth</div>
            <div className="font-thin text-center text-sm xs:text-base">
              Agri-tech advancements create new job <br /> opportunities and boost rural economies.
            </div>
          </div>
        </div>
      </motion.div>


      {/* GET IN TOUCH section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mt-20 py-16 bg-[#fcfcc3] px-4 sm:px-8 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-6 md:w-1/2">
            <div className="bg-white w-fit p-2 rounded-lg text-[#63652f] text-base xs:text-lg font-semibold">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#63652f]">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-lg text-gray-700">
              Contact us today to learn more about our smart agriculture solutions and how we can help you achieve higher yields and sustainability.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#63652f]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#63652f]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="text-gray-700">contact@agriguide.com</span>
              </div>
            </div>
          </div>
          <form className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/2 flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#62832c]" />
            <input type="email" placeholder="Your Email" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#62832c]" />
            <textarea placeholder="Message" rows="4" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#62832c]"></textarea>
            <button className="bg-[#62832c] text-white font-bold py-3 rounded-lg hover:bg-[#4e6a23] transition">Send Message</button>
          </form>
        </div>
      </motion.div>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] text-white py-12 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={reactLogo} alt="Logo" className="h-8 w-8" />
              <span className="font-bold text-xl">AgriGuide</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering farmers with modern technology for a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#c2f33e]">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Our Services</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#c2f33e]">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Drone Spraying</a></li>
              <li><a href="#" className="hover:text-white transition">Soil Analysis</a></li>
              <li><a href="#" className="hover:text-white transition">Crop Monitoring</a></li>
              <li><a href="#" className="hover:text-white transition">Precision Farming</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#c2f33e]">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="p-2 rounded-l-lg w-full text-black focus:outline-none" />
              <button className="bg-[#62832c] px-4 py-2 rounded-r-lg hover:bg-[#4e6a23] transition">Go</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AgriGuide. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default App
