
import Link from 'next/link'

export default function About5() {
    return (
        <>
            <section className="about-section section-padding fix bg-cover pt-0" id="about">
                <div className="container">
                    <div className="about-wrapper-2 style-2">
                        <div className="row">

                            <div className="col-lg-5 order-lg-0">
                                <div className="about-image-2 wow fadeInUp" data-wow-delay=".4s">
                                    <img src="/assets/img/about/09.png" alt="about-img" />
                                </div>
                            </div>
                            <div className="col-lg-7 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        {/* <span className="wow fadeInUp">ABOUT INFOTECK</span> */}
                                        <h2 className="wow fadeInUp row text-uppercase text-center mx-1" data-wow-delay=".3s">
                                            <div class="mt-3 text-logo"></div>
                                            Expertise & Services
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp text-justify" data-wow-delay=".5s">
                                        Empower your AV projects with Evolvix, your trusted partner in advanced AV programming and control solutions. We seamlessly blend cutting
                                        edge technology with intuitive control to enhance your designs and elevate the user experience. As leaders in AV solutions and smart control
                                        commissioning, we deliver powerful, customized systems that meet and exceed customer expectations. With Evolvix, experience the future of AV
                                        smart, seamless, and impactful
                                    </p>
                                    <div className="icon-area wow fadeInUp" data-wow-delay=".7s">
                                        <ul className="list">
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                smart control commissioning
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                powerful systems
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                customized systems
                                            </li>
                                        </ul>
                                        <ul className="list">
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                AV smart
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                seamless
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                impactful
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="about-button wow fadeInUp" data-wow-delay=".9s">
                                        <Link href="/about" className="theme-btn">
                                            Explore More
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


