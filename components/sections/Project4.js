import ProjectSlider1 from '../slider/ProjectSlider1'

export default function Project4( {title, data}) {
    return (
        <>
            <section className="project-section fix pt-3" id="project">
                <div className="container">
                    <div className="section-title text-center my-0">
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        {title}
                        </h2>
                    </div>
                </div>
                <ProjectSlider1 data={data}/>
            </section>
        </>
    )
}
