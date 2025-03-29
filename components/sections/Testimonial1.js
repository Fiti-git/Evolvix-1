'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-1",
        clickable: true,
    },
}

export default function Testimonial1({ data }) {
    return (
        <>
            <section className="testimonial-section fix" id="workflow">
                <div className="container">
                    <div className="testimonial-wrapper">
                        <div className="swiper testimonial-slider">

                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                {data.map(e => {
                                    return (
                                        <SwiperSlide>
                                            <div className="section-title">
                                                <h2>{e.head}</h2>
                                            </div>
                                            <div className="testimonial-items">
                                                <div className="testimonial-content row">
                                                    <div className="col-xl-4 project-img">
                                                        <img src={e.img} />
                                                    </div>
                                                    <div className="col-xl-8 mt-3 mt-md-0 text-justify px-5">
                                                        <p>
                                                            {e.description}
                                                        </p>
                                                        <div className="icon-area wow fadeInUp" data-wow-delay=".7s">
                                                            <ul className="list" class="text-justify">
                                                                <li class="mb-3 d-flex">
                                                                    <i className="fa-regular fa-circle-check mt-1 mx-2" />
                                                                    <div>
                                                                        <b>Expertise You Can Trust:</b> Decades of experience in AV control systems, ensuring seamless integration and flawless performance.
                                                                    </div>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
