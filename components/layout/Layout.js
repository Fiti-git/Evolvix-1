
'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import MouseCursor from "./MouseCursor"
import Footer3 from "./footer/Footer3"
import Header4 from "./header/Header4"

export default function Layout({ title, headerStyle, footerStyle, children }) {
    const [scroll, setScroll] = useState(0)

    // useEffect(() => {
    //     )

    useEffect(() => {
        // document.title = "title"
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <MouseCursor />
            {/* <Offcanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} /> */}



            <link rel="icon" type="image/x-icon" href="assets/img/logo/logo.ico" />

            {headerStyle == 4 ? <Header4 scroll={scroll} /> : null}

            {children}
            {footerStyle == 3 ? < Footer3 /> : null}

            <BackToTop />
        </>
    )
}
