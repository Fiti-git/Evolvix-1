
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
        el: ".dot-2",
        clickable: true,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },
    breakpoints: {
        1199: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
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

            <div className="swiper project-slider-2">
                <Swiper {...swiperOptions} className="swiper-wrapper">

                    <SwiperSlide>
                        <div className="project-items style-2">
                            <div className="project-image">
                                {
                                    data.map(e => {
                                        return (
                                            <span className="text-slider">
                                                <img src={e} alt="img" />
                                            </span>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    )
}
