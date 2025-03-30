import ProjectSlider2 from '../slider/ProjectSlider2'



export default function Project1( {title, data}) {
    return (
        <>
            <section className="project-section fix pt-0 mt-4" id="project">
                <ProjectSlider2 data={data} />
            </section>
        </>
    )
}
