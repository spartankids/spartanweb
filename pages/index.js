import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Slider from '../components/slider'
import Footer from '../components/footer'
export default function Home() {
  
  return (
    <main>
      
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    < Navbar />
    
    <Slider />
    <div className="grid grid-cols-1 justify-center place-items-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-48 container mx-auto">

<div className="max-w-sm  rounded overflow-hidden shadow-lg">
<img className="w-full h-64" src="/images/kindergarden.jpg" alt="Sunset in the mountains" />
<div className="px-6 py-4">
<div className="font-bold text-xl mb-2">Day Care</div>
<p className=" text-gray-500 text-base">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
</p>
</div>
<div className="px-6 pt-4 pb-2">
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">1-2
Years </span>
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">2-2.5 hours/day</span>
{/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
</div>
</div>

<div className="max-w-sm rounded mt-2 overflow-hidden shadow-lg">
<img className="w-full h-64" src="/images/preschool.jpg" alt="Sunset in the mountains" />
<div className="px-6 py-4">
<div className="font-bold text-xl mb-2">Pre School</div>
<p className=" text-gray-500 text-base">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
</p>
</div>
<div className="px-6 pt-4 pb-2">
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">2-6
Years </span>
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">2-2.5 hours/day</span>
{/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
</div>
</div>

<div className="max-w-sm mt-2 rounded overflow-hidden shadow-lg">
<img className="w-full h-64" src="/images/summercamp.jpg" alt="Sunset in the mountains" />
<div className="px-6 py-4">
<div className="font-bold text-xl mb-2">Summer Camp & After School</div>
<p className="text-gray-500 text-base">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
</p>
</div>
<div className="px-6 pt-4 pb-2">
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">2 years Onwards</span>
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Holidays & Afterschool</span>
{/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
</div>
</div>

</div>
       
  
<div className="mt-48">
  <img src="/images/home_purple_strip.png"/>
</div>
<div className="bgpurple">
  <div className="grid  md:grid-cols-2 p-12 md:p-24">
 <div className="mx-0">
<p className="text-6xl md:text-left sm:text-center">Our Learning style</p> 
<p>
Our school gives its pupils the opportunity not only to develop themselves intellectually, aesthetically and physically, but also to find their direction in life, to receive a quality education.
</p>
</div>
<div className="text-xl mt-6 ">
Every children have their own love language, we all have our unique learning style. This learning style
          continue with us into into adulthood.there is no right or wrong way to learning styles. we should strive to
          help children to find their own learning style. in spartan we reviewed different learning style that you will
          hear within education system.</div>
  </div>

</div>
<div>
  <img src="/images/home_purple_strip_bottom.png"/>
</div>

<div className="my-24 mx-auto container">
    <div className="grid  md:grid-cols-2 p-12 md:px-24">
      <div>
        <h1 className="text-4xl font-bold text-purple-800">Our Mission</h1>
        <p className="grid md:grid-cols-2 sm:grid-col  text-gray-500">
        Find an individual approach to each child in accordance with their personal needs and their level of knowledge, cultural characteristics and interests of their families.
        </p>
        <div className="mt-5">
        <button className="bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 border-b-4 bg-indigo-400 hover:bg-indigo-300 rounded">
MORE DETAILS</button>
</div>
      </div>
      <div>
        <div className="shadow-xl bg-yellow-500">
      <img className="w-full h-auto -ml-2 -pb-5" src="/images/mission.jpg" alt="Sunset in the mountains" />
      </div>
      </div>
    </div>
</div>

<div className="py-12 bg-white">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h3 className="text-purple-800 mt-1 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      What Make Us Different
      </h3>
      <p className="mt-4 max-w-2xl text-xl leading-7  lg:mx-auto">
      Our unique principles, pro-active learning system and team values are fundamental in delivering exceptional success for our students.      </p>
    </div>

    <div className="mt-10">
      <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <li>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-32 w-32">
              <img className="" src="/images/smile.svg" alt="smile" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Happy Environment</h4>
              <p className="mt-2 text-base leading-6  text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-32 w-32">
              <img className="" src="/images/glove.svg" alt="glove" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Hygiene</h4>
              <p className="mt-2 text-base leading-6  text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-32 w-32">
              <img className="" src="/images/cctv.svg" alt="cctv" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Safety & Security</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-32 w-32">
              <img className="" src="/images/playground.svg" alt="playground" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Play Area</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-32 w-32">
              <img className="" src="/images/blackboard.svg" alt="blackboard" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Clean campus</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-32 w-32">
              <img className="" src="/images/vocabulary.svg" alt="audiovisual" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Audio & Visual Classroom</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-32 w-32">
              <img className="" src="/images/hydro.svg" alt="hydro" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Purified water</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-32 w-32">
              <img className="" src="/images/air-conditioner.svg" alt="airconditioner" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Air Conditioned Classroom</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

<div className="bg-gray-50">
  <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 className="text-3xl leading-9 text-purple-800 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
      Enroll your child with us.
    </h2>
    <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0 float-left">
      <div className="inline-flex rounded-md shadow">
        <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          GET IN TOUCH
        </a>
      </div>
    </div>
  </div>
</div>
    <Footer />
    </main>
  )
}
