import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function AboutPage() {
    return <div>
     

      <Navbar />
      <div className="pageheader flex h-screen justify-center items-center">
        <span className="text-4xl font-bold text-purple-900 inline-block align-middle">
          About Us
        </span>
      </div>
      <div className="container mt-7 mx-auto">
        <div className="grid md:grid-cols-2">
          <div className="md:my-24 sm:my-5 mx-5">
            <span className="text-3xl text-purple-800 font-bold">
              Our Teaching Methods
            </span>
            <p>Our teaching method is based on scientific research on how children learn through, This process of learning ensure that children develop a understanding of different topics and ability to use.</p>
            <p>Spartankids strive to create an environment that helps childrens to learn and grow in the perfect launchpad to explore their creativity, learn more about the world around them and develop skills that they will use throughout their life.</p>
          </div>
          <div>
          <img className="img-fluid" src="/images/about.jpg" alt="Sunset in the mountains" />
          </div>
        </div>
        <div className="grid md:grid-cols-2">
        <div className="md:my-24 sm:my-24">
        <img className="img-fluid" src="/images/about1.jpg" alt="Sunset in the mountains" />

          </div>
          <div className="md:my-48 sm:my-24 mx-5">
            <span className="text-3xl text-purple-800 font-bold">
            Our Mission
            </span>
            <p>Our mission is to help each child to realize the their full potential,thus enabling the child cope up with evergrowing challenges of life.</p>
            <p>we are commited to introduce the joy of learning through play, channelize the child's energy through recreational activities, enlarge the intectuall broaden outlook of child and improve their self confidence </p>

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
    </div>
  }
  
  export default AboutPage