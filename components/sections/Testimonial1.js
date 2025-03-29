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
            <section className="testimonial-section fix p-0" id="">
                <div className="container">
                
                    <div className="testimonial-wrapper p-2 p-lg-5">
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
                                                    <div className="col-xl-8 mt-3 mt-md-0">
                                                        <p>
                                                            {e.description}
                                                        </p>
                                                        <div className="icon-area wow fadeInUp" data-wow-delay=".7s">
                                                            <ul className="list" class="text-left">
                                                                {
                                                                    e.points.map(l => {
                                                                        return (
                                                                            <li class="mb-3 d-flex text-left">
                                                                                <i className="fa-regular fa-circle-check mt-1 mx-2" />
                                                                                <div class="testimonial-text">
                                                                                    <b>{l[0]}</b> {l[1]}
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
