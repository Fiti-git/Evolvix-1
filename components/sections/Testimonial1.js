'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

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
            <section className="fix p-0" id="" style={{ backgroundImage: 'url("assets/img/section-bg.jpg")' }}>
                <div className="">

                    <div className="testimonial-wrappe p-2 p-lg-5">
                        <div className="swiper testimonial-slidr">

                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                {data.map(e => {
                                    return (
                                        <SwiperSlide>
                                            <div className="col-xl-4 col-lg-4 col-md-6 px-1">
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
