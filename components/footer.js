import styles from '../styles/Home.module.css'

export default function Footer() {
    return(
        <footer className="bgpurple">
        <div className="footer-top">
            <div className="container mx-auto text-left">
                <div className="grid sm:grid-cols-1 md:grid-cols-3">
                    <div>
                        <span className="text-2xl font-bold">
                            Spartan kids Preschool & Daycare
                        </span>
                        <p className="mt-5">Our mission is to find an individual approach to each child in accordance with their personal needs and their level of knowledge.</p>
                    </div>
                    <div className="md:text-center">
                    <span className="text-2xl font-bold">
                            Quick Links
                        </span>
                        <ul className="mt-5">
                            <li><a href="">home</a></li>
                            <li><a href="">Programs</a></li>
                            <li><a href="">Admission</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                    <span className="text-2xl text-left font-bold">
                           Location
                        </span>
                        <p>
                        Flat no:94 G-1 Sundar Nagar, Poonamallee<br/>
Chennai, Tamil Nadu 600056
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="text-center pt-3">
            <p><i className="fa fa-copyright"></i>copyright @ Spartankids Pre-school & Daycare</p>
					{/* <p className="h6">&copy All rights Reserved.</p> */}
            </div>
            </div>
        </div>
      </footer>
    )
}