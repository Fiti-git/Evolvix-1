
import Link from 'next/link'

export default function News4({ title, data }) {
    return (
        <>
            <section className="project-section fix section-padding bg-cover" id="workflow" style={{ backgroundImage: 'url("assets/img/section-bg.jpg")' }}>
                <div className="container">
                    <div className="section-title text-center">
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        {title}
                        </h2>
                    </div>
                    <div className="row">
                        {
                            data.map(e => {
                                return (
                                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="news-card-items style-2">
                                            <div className="workflow-image">
                                                <img src={e.img} alt="news-img" />
                                            </div>
                                            <div className="news-content">

                                            <h6 class="">{e.head}</h6>
                                                <h3>
                                                        {e.title}
                                                </h3>
                                                <p class="text-justify">
                                                    {e.desc}
                                                </p>
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
