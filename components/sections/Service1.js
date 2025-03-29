'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function Service1({ data }) {
    return (
        <>
            <section className="service-section fix section-padding bg-cover pb-0" style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }} id="service">
                <div className="container">

                    <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                {data.map(e => {
                                    return (
                                        <SwiperSlide>
                                            <div className="service-box-items ">
                                                <div className="more-about-icon">
                                                    <img src="/assets/img/about/09.png" alt="icon-img" />
                                                </div>
                                                <div className="content">
                                                    <h4>
                                                            {e.head}
                                                    </h4>
                                                    <p>
                                                        {e.desc}
                                                    </p>
                                                    <Link href="" className="theme-btn-2 mt-3">
                                                        read More
                                                        <i className="fa-solid fa-arrow-right-long" />
                                                    </Link>
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
