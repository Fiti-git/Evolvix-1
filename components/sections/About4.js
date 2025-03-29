
import Link from 'next/link'

export default function About4() {
    return (
        <>
            <section className="about-section section-padding fix bg-cover pt-0 mb-2" id="about">
                <div className="container">
                    <div className="about-wrapper-2 style-2">
                        <div className="row">

                            <div className="col-xl-6 order-xl-1">
                                <div className="about-image-2 wow fadeInUp" data-wow-delay=".4s">
                                    <img src="/assets/img/about/08.png" alt="about-img" />
                                </div>
                            </div>
                            <div className="col-xl-6 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        {/* <span className="wow fadeInUp">ABOUT INFOTECK</span> */}
                                        <h2 className="wow fadeInUp  mt-3 " data-wow-delay=".3s">
                                            ABOUT
                                            
                                        </h2>
                                        <div class="col text-logo"></div>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp text-justify" data-wow-delay=".5s">
                                    <b>SEAMLESS AV & CONTROL SOLUTIONS FOR SMARTER SPACES </b> <br/>
At Evolvix, we specialize in high-performance Audio-Visual (AV) and control systems programming, empowering businesses and institutions with intuitive, efficient, and future-ready technology.
<br/>
From boardrooms to entertainment venues, we integrate cutting-edge AV automation, DSP programming, and system optimization to deliver a flawless user experience.

                                    </p>
                                    <div className="icon-area wow fadeInUp" data-wow-delay=".7s">
                                        <ul className="list">
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                Expertise in Crestron, Q-Sys, Extron, Biamp, Symetrix, ATEN and AMX
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                Custom solutions for corporate, hospitality, retail, and more
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                Seamless integration for effortless operation
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                Future-ready technology solutions
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                Easy maintenance and troubleshooting
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
