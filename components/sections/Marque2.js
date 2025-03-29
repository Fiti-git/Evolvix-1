

export default function Marque2({ data }) {
    return (
        <>
            <div className="marque-section-2 mb-5">
                <div className="container-fluid">
                    <div className="marquee-wrapper style-2 text-slider">
                        <div className="marquee-inner to-left">
                            <ul className="marquee-list d-flex">
                                <li className="marque-item-2 style-2 p-1">
                                    {
                                        data.map(e => {
                                            return (
                                                <span className="text-slider p-4">
                                                    <img src={e} alt="img" />
                                                </span>

                                            )
                                        })
                                    }
                                    {
                                        data.map(e => {
                                            return (
                                                <span className="text-slider p-4">
                                                    <img src={e} alt="img" />
                                                </span>

                                            )
                                        })
                                    }
                                    {
                                        data.map(e => {
                                            return (
                                                <span className="text-slider p-4">
                                                    <img src={e} alt="img" />
                                                </span>

                                            )
                                        })
                                    }{
                                        data.map(e => {
                                            return (
                                                <span className="text-slider p-4">
                                                    <img src={e} alt="img" />
                                                </span>

                                            )
                                        })
                                    }

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
