import Link from "next/link"
import Menu from "../Menu"

export default function Header4({
    scroll,
    onePageNav
}) {
    return (
        <>

            <header>
                <div id="header-sticky" className={`header-4 ${scroll ? "sticky" : ""}`}>
                    <div className="container">
                        <div className="mega-menu-wrapper">
                            <div className="header-main">
                                <div className="header-left">
                                    <div className="logo">
                                        <Link href="/" className="header-logo">
                                            <img src="/assets/img/logo/black-logo-1.png" alt="logo-img" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="header-right d-flex justify-content-end align-items-center">
                                    <div className="mean__menu-wrapper">
                                        <div className="main-menu">
                                        <nav id="mobile-menu">
                                                {onePageNav ?
                                                    <></>
                                                    :
                                                    <Menu />
                                                }
                                            </nav>
                                        </div>
                                    </div>           
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
