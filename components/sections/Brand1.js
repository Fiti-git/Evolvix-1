import BrandSlider1 from "../slider/BrandSlider1"


export default function Brand1({data}) {
    return (
        <>
            <div className="brand-section fix pt-0">
                <div className="container">
                    <div className="brand-wrapper mt-3">
                        <BrandSlider1 data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}
