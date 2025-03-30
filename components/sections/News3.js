'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import PopUp from '../layout/PopUp'


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
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

export default function News3({ data , handlePopUp}) {
    
    return (
        <>
            <section className="project-section fix  bg-cover py-5" id="projects">
                <div className="container">
                <div className="section-title text-center ">
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Previous Project samples
                        </h2>
                    </div>
                    
                    <div className="row ">
                    {
                                data.map(e => {
                                    return (
                                            <div className="wow fadeInUp col-12 col-md-6 col-lg-4 col-xxl-3" data-wow-delay=".3s" onClick={handlePopUp}>
                                                <div className="news-card-items style-2 style-3">
                                                    <div className="news-image">
                                                        <img src={e.imgs[2]} alt="news-img" onClick={handlePopUp} />
                                                    </div>
                                                    <div className="news-content">

                                                        {/* <h3>
                                                            <Link href="">
                                                               {e.head}
                                                            </Link>
                                                        </h3> */}
                                                        <Link href="" className="theme-btn-2 mt-3" onClick={handlePopUp}>
                                                            read More
                                                            <i className="fa-solid fa-arrow-right-long" />
                                                        </Link>
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
