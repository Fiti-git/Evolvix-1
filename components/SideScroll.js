"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";

import Marque2 from "./sections/Marque2";

import { Autoplay, Navigation, Pagination } from "swiper/modules"


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

}
function ScrollSection({ data }) {
   const sectionRef = useRef(null);
   const triggerRef = useRef(null);

   gsap.registerPlugin(ScrollTrigger);

   useEffect(() => {
      const pin = gsap.fromTo(
         sectionRef.current,
         {
            translateX: 0,
         },
         {
            translateX: "-1000vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
               trigger: triggerRef.current,
               start: "top top",
               end: "2000 top",
               scrub: 1.0,
               pin: true,
            },
         }
      );
      return () => {
         {
            /* A return function for killing the animation on component unmount */
         }
         pin.kill();
      };
   }, []);

   return (
      <section className="scroll-section-outer p-3" id="projects">
         {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

         {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
         <div ref={triggerRef}>
            <div ref={sectionRef} className="scroll-section-inner">
               {
                  data.map((e) => {
                     return (
                        <div className="scroll-section col-lg-1">
                           <section className="about-section  fix bg-cover pt-0 mb-2" id="projects">
                              <div className="container ">
                                 <div className="about-wrapper-1 style-2">
                                    <div className="justify-content-md-center section-padding">
                                       <div className="col m-auto col-lg-8 mt-lg-5">
                                          <div className="wow fadeInUp" data-wow-delay=".4s">
                                             <div className="swiper project-slider-2 ">
                                                <Swiper {...swiperOptions} className="swiper-wrapper col-lg-12">
                                                   {
                                                      e["imgs"].map((img) => {
                                                         return (
                                                            <SwiperSlide>
                                                               <div className="project-items-1 style- col-lg-12 mt-lg-5">
                                                                  <div className="project-image">
                                                                     <img src={img} alt={img} />
                                                                  </div>
                                                               </div>
                                                            </SwiperSlide>
                                                         )
                                                      })
                                                   }


                                                </Swiper>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col m-auto col-lg-8 mt-4">
                                          <div className="testimonial-items">
                                             <div className="testimonial-content">
                                                <div className="section-title text-center my-2">
                                                   <h2>{e["head"]}</h2>
                                                </div>
                                                <p className="mt-1 text-justify">
                                                   {e["desc"]}
                                                </p>
                                             </div>
                                          </div>
                                       </div>
                                       <div class=" col m-auto col-lg-8 d-flex justify-content-center">
                                          {/* {
                                             e["brands"].map(logo => {
                                                return (
                                                   <span className="text-slider">
                                                      <img src={logo} alt={logo} />
                                                   </span>

                                                )
                                             })
                                          } */}
                                          <Marque2 data={e["brands"]}/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </section>
                        </div>
                     )
                  })
               }

            </div>
         </div>
      </section>
   );
}

export default ScrollSection;
