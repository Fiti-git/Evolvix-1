
import Link from "next/link"

export default function Footer3() {
    return (
        <>

            <footer className="footer-section footer-bg">
                <div className="footer-shape-4">
                    <img src="/assets/img/footer-shape-4.png" alt="shape-img" />
                </div>
                <div className="shape-2">
                    <img src="/assets/img/footer-shape-3.png" alt="shape-img" />
                </div>
                <div className="footer-widgets-wrapper">
                    <div className="container">
                        <div className="row justify-content-sm-between">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>About Us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <p class="text-justify">
                                            Evolvix is a specialized Audio-Visual (AV) and Control Systems programming company dedicated to delivering seamless, high
                                            performance solutions for businesses, institutions, and industries
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 ps-lg-5 wow fadeInUp my-3 my-sm-0" data-wow-delay=".5s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="#about">
                                                <i className="fa-solid fa-chevron-right" />
                                                Evolvix About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#service">
                                                <i className="fa-solid fa-chevron-right" />
                                                Our Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#chooseus">
                                                <i className="fa-solid fa-chevron-right" />
                                                Why Evolvix
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#workflow">
                                                <i className="fa-solid fa-chevron-right" />
                                                Workflow
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#projects">
                                                <i className="fa-solid fa-chevron-right" />
                                                Projects
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <div className="social-icon d-flex align-items-center">
                                            <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="#"><i className="fab fa-twitter" /></Link>
                                            <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                            <Link href="mailto:info@evolvix.pro"><i className="fa fa-envelope" /></Link>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                <div className="footer-bottom style-3">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <div className="footer-logo wow fadeInLeft" data-wow-delay=".3s">
                                <Link href="/">
                                    <img src="/assets/img/logo/white-logo-2.png" alt="logo-img" />
                                </Link>
                            </div>
                            <div>
                                <p className="wow fadeInRight color-2" data-wow-delay=".5s">
                                    © All Copyright {new Date().getFullYear()} by
                                </p>
                                <div className="text-white-logo-1"></div>
                            </div>

                        </div>
                    </div>
                    <Link href="#" id="scrollUp" className="scroll-icon">
                        <i className="far fa-arrow-up" />
                    </Link>
                </div>
            </footer>

        </>
    )
}
