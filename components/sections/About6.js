'use client';

import Link from 'next/link';
import PopUp from '../layout/PopUp';

var modal = <h5>hi</h5>;

function popup() {

    modal = `
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900">Modal Title</h3>
                        <div className="mt-2 px-7 py-3">
                            <p className="text-lg text-gray-500">Modal Body</p>
                        </div>
                        <div className="flex justify-center mt-4">

                            {/* Using useRouter to dismiss modal*/}
                            <button

                                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            </div>`
        
    
}


export default function About6({ data }) {
    return (
        <>{
            data.map(element => {
                return (
                    <>
                        <PopUp></PopUp>

                    </>)
            })}
        </>
    )


}
{/* <section className="about-section section-padding fix bg-cover pt-0 mb-2" id="about">
<div className="container">
    <div className="about-wrapper-2 style-2">
        <div className="row">
            <div className={"col-lg-5 order-lg-" + element['n'] % 2}>
                <div className="about-image-2 wow fadeInUp " data-wow-delay=".4s">
                    <img src={element["image"]} alt="about-img" />
                </div>
            </div>
            <div className="col-lg-7 mt-4 mt-lg-0 ">
                <div className="about-content">
                    <div className="section-title">
                        <h2 className="wow fadeInUp row text-uppercase text-center" data-wow-delay=".3s">
                            {element["head"]}
                        </h2>
                    </div>
                    <p className="mt-3 mt-md-0 wow fadeInUp text-justify" data-wow-delay=".5s">
                        {element["description"]}
                    </p>
                    <div className="icon-area wow fadeInUp" data-wow-delay=".7s">
                        <ul className="list" class="text-justify">
                            {element["points"].map(e => {
                                return (
                                    <>
                                        <li class="d-flex">
                                            <i className="fa-regular fa-circle-check mt-1" />
                                            <div class="mt-0">
                                                <b>{e[0]}</b> {e[1]}
                                            </div>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</section> */}