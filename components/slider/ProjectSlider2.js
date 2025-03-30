
'use client'
import Link from "next/link"
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
    pagination: {
        el: ".dot-3",
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        650: {
            slidesPerView: 2,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },
}

export default function ProjectSlider2({ data }) {
    return (
        <>
            <div className="swiper project-slider-2 pb-3" style={{ backgroundImage: 'url("assets/img/section-bg.jpg")' }}>
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    {data.map(e => {
                        return (
                            <>
                            <SwiperSlide className="">
                                <div className="">
                                    <div className="service-card-items">
                                        <div className="service-image p-2">
                                            <img src={e["img"]} alt="service-img" />
                                        </div>
                                        <div className="service-content pt-0">
                                            <h4>
                                                {e["head"]}
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
                                                                    <i className="fa-regular fa-circle-check mx-2" />
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
                            </>
                        )
                    })}
                </Swiper>
            </div>

        </>
    )
}
