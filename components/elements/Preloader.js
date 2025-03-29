export default function Preloader() {
    return (
        <>

            <div id="preloader" className="preloader">
                <div className="animation-preloader">
                    <div className="spinner">
                    </div>
                    <div className="txt-loading">
                        <span data-text-preloader="E" className="letters-loading">
                            E
                        </span>
                        <span data-text-preloader="V" className="letters-loading">
                            V
                        </span>
                        <span data-text-preloader="O" className="letters-loading">
                            O
                        </span>
                        <span data-text-preloader="L" className="letters-loading">
                            L
                        </span>
                        <span data-text-preloader="V" className="letters-loading">
                            V
                        </span>
                        <span data-text-preloader="I" className="letters-loading">
                            I
                        </span>
                        <span data-text-preloader="X" className="letters-loading">
                            X
                        </span>
                    </div>
                    <p className="text-center">Loading</p>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
