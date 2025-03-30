
import Link from 'next/link'

export default function About7() {
    return (
        <>
            <section className="about-section fix bg-cover py-5" id="chooseus">
                <div className="container">
                    <div className="about-wrapper-2 style-2">
                        <div className="row">

                            <div className="col-lg-4">
                                <div className="about-image-2 wow fadeInUp " data-wow-delay=".4s">
                                    <img src="/assets/img/about/09.png" alt="about-img" />
                                </div>
                            </div>
                            <div className="col-lg-8 mt-4 mt-lg-0 pb-2">
                                <div className="about-content">
                                    <div className="d-flex justify-content-start section-title mx-2">
                                        {/* <span className="wow fadeInUp">ABOUT INFOTECK</span> */}
                                        <h2 className="wow fadeInRight row text-uppercase text-center" data-wow-delay=".3s">
                                            Why
                                        </h2>
                                        <div class=" text-logo-1 mx-4 wow fadeInLeft" data-wow-delay=".3s"></div>
                                    </div>
                                    <div className="icon-area wow fadeInUp" data-wow-delay=".7s">
                                        <ul className="list" class="text-justify">
                                            <li class="mb-lg-3 d-flex">
                                                <i className="fa-regular fa-circle-check " />
                                                <div>
                                                    <b>Expertise You Can Trust:</b> Decades of experience in AV control systems, ensuring seamless integration and flawless performance.
                                                </div>
                                            </li>
                                            <li class="mb-lg-3 d-flex">
                                                <i className="fa-regular fa-circle-check " />
                                                <div>
                                                    <b>Custom-Tailored Solutions:</b> We design and program systems that align perfectly with your project requirements, enhancing efficiency and user experience.
                                                </div>
                                            </li>
                                            <li class="mb-lg-3 d-flex">
                                                <i className="fa-regular fa-circle-check " />
                                                <div>
                                                    <b>Seamless Integration:</b> Expertise in QSC, Crestron, Extron, Biamp, AMX, and other industry-leading platforms for a unified AV ecosystem.
                                                </div>
                                            </li>
                                            <li class="mb-lg-3 d-flex">
                                                <i className="fa-regular fa-circle-check " />
                                                <div>
                                                    <b>End-to-End Support:</b> From design and programming to commissioning and post-installation support, we're with you at every step.
                                                </div>
                                            </li>
                                            <li class="mb-lg-3 d-flex">
                                                <i className="fa-regular fa-circle-check " />
                                                <div>
                                                    <b>Future-Ready Technology:</b> We implement smart, scalable, and reliable solutions that evolve with your needs.
                                                </div>
                                            </li>
                                            <li class="mb-lg-3 d-flex">
                                                <i className="fa-regular fa-circle-check " />
                                                <div>
                                                    <b>Effortless User Experience:</b> Our systems are designed to be as intuitive as possible, ensuring ease of use, smooth functionality, and maximum satisfaction.
                                                </div>
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
