
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


export default function ProjectSlider1({ showDots, data }) {
    return (
        <>
            <div className="swiper project-slider pt-5">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    {data.map(e=>{
                        return(
                            <>
                            <SwiperSlide>
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src={e["img"]} alt={e["img"]} class="p-5 " />
                                        <div className="project-content">
                                            <h4>{e["head"]}</h4>
                                            <h5>
                                                <div class="text-justify">{e["desc"]}</div>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            </>
                        )
                    })}
                    
                    
                </Swiper>

                {showDots &&
                    <div className="swiper-dot-2">
                        <div className="dot-3" />
                    </div>
                }
            </div>
        </>
    )
}
