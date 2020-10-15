import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function AboutPage() {
    return <div>
     

      <Navbar />
      <div className="pageheader flex h-screen justify-center items-center">
        <span className="text-4xl font-bold text-purple-900 inline-block align-middle">
          Contact Us
        </span>
      </div>
      <div className="container mx-auto">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1634.230527944965!2d80.09917973431239!3d13.043491300937662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52610428dd38ed%3A0xbb19f2aee14b4676!2sSpartankids%20Pre%20school%20and%20Daycare!5e0!3m2!1sen!2sin!4v1602748772701!5m2!1sen!2sin" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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