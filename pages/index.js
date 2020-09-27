import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Slider from '../components/slider'
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
<p className="text-gray-700 text-base">
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
<p className="text-gray-700 text-base">
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
<p className="text-gray-700 text-base">
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
<p className="text-6xl  text-center">Our Learning style</p> 
<p>
Find an individual approach to each child in accordance with their personal needs and their level of knowledge, cultural characteristics and interests of their families.
</p>
</div>
<div className="text-xl mt-6">
Every children have their own love language, we all have our unique learning style. This learning style
          continue with us into into adulthood.there is no right or wrong way to learning styles. we should strive to
          help children to find their own learning style. in spartan we reviewed different learning style that you will
          hear within education system.</div>
  </div>

</div>
<div>
  <img src="/images/home_purple_strip_bottom.png"/>
</div>

<div className="my-24 container">

</div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </main>
  )
}
