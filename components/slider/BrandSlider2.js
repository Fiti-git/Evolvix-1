
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1199: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}
export default function BrandSlider2() {
    return (
        <>
            <div className="swiper brand-slider-2">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="/assets/img/brand/brand1.webp" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="/assets/img/brand/brand2.webp" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="/assets/img/brand/brand3.webp" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="/assets/img/brand/brand4.webp" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="/assets/img/brand/brand5.webp" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img">
                            <img src="/assets/img/brand/brand6.webp" alt="img" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
