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
          <div className="my-5">
            <span className="text-3xl text-purple-800 font-bold">
              Our Teaching Methods
            </span>
            <p>Our teaching method is based on scientific research on how children learn through, This process of learning ensure that children develop a understanding of different topics and ability to use.</p>
          </div>
          <div>
            hello
          </div>
        </div>
        <div className="grid md:grid-cols-2">
        <div>
            hello
          </div>
          <div className="my-5">
            <span className="text-3xl text-purple-800 font-bold">
            Our Mission
            </span>
            <p>Our mission is to help each child to realize the their full potential,thus enabling the child cope up with evergrowing challenges of life.</p>
            <p>we are commited to introduce the joy of learning through play, channelize the child's energy through recreational activities, enlarge the intectuall broaden outlook of child and improve their self confidence </p>

          </div>
          
        </div>
      </div>
      <Footer /> 
    </div>
  }
  
  export default AboutPage