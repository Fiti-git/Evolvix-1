
import Link from 'next/link'

export default function Service3({ data }) {
    return (
        <>
            <section className="service-section-3 pb-0 fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg-3.jpg")' }} id="service">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title ">
                            <h2 class="text-uppercase">
                                Unleash the Power of Innovation
                            </h2>
                        </div>
                        {/* <Link href="/service" className="theme-btn">
                            See all Services
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link> */}
                    </div>

                    <div className="row justify-content-around">
                        {
                            data.map(e => {
                                return (
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="service-card-items">
                                            <div className="service-image p-2">
                                                <img src={e["img"]} alt="service-img" />
                                            </div>
                                            <div className="service-content">
                                                <h4>
                                                    <Link href="">{e["head"]}</Link>
                                                </h4>
                                                <p class="text-justify">
                                                    {e["desc"]}
                                                </p>
                                                <div className="icon-area wow fadeInUp mt-2" data-wow-delay=".7s">
                                                    <ul className="list" class="text-left">
                                                        {
                                                            e.points.map(l => {
                                                                return (
                                                                    <li class="mb-lg-2 d-flex text-left">
                                                                        <i className="fa-regular fa-circle-check mt-1 mx-2" />
                                                                        <div class="testimonial-tex mt-0">
                                                                            <b>{l[0]}</b>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })
                                                        }


                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

function Service3_2({ data }) {
    return (
        <>
            <section className="service-section-3 pb-0 fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg-3.jpg")' }} id="service">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title ">
                            <h2 class="text-uppercase">
                                Unleash the Power of Innovation
                            </h2>
                        </div>
                        {/* <Link href="/service" className="theme-btn">
                            See all Services
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link> */}
                    </div>

                    <div className="row justify-content-around">
                        {
                            data.map(e => {
                                return (
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="service-card-items">
                                            <div className="service-image p-2">
                                                <img src={e["img"]} alt="service-img" />
                                            </div>
                                            <div className="icon-2">
                                                <img src={e["icon"]} alt="img" />
                                            </div>
                                            <div className="service-content">
                                                <div className="icon">
                                                    <img src={e["icon"]} alt="img" />
                                                </div>
                                                <h4>
                                                    <Link href="">{e["head"]}</Link>
                                                </h4>
                                                <p class="text-justify">
                                                    {e["desc"]}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
