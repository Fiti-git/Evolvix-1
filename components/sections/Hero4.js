
import Link from 'next/link'

export default function Hero4() {
    return (
        <>
            <section className="pt-5 hero-section hero-4 bg-cover" style={{ backgroundImage: 'url("assets/img/section-bg.jpg")' }}>
                <div className="container pt-lg-5">
                    <div className="row g-4 align-items-center">
                        
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="hero-image">
                                <img src="/assets/img/hero/hero-5.png" alt="hero-img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h6 className="wow fadeInRight">Applying Audio Visualization</h6>
                                <div className="wow fadeInLeft text-logo" data-wow-delay=".3s"></div>
                                <p className="wow fadeInUp text-left" data-wow-delay=".5s">
                                Revolutionizing Your Projects with Cutting-Edge Audio-Visual & Control system program for an Enhanced User Experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
