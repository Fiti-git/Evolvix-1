"use client"
import Layout from "@/components/layout/Layout"
import About4 from "@/components/sections/About4"
import About5 from "@/components/sections/About5"
import About6 from "@/components/sections/About6"
import About7 from "@/components/sections/About7"
import Hero4 from "@/components/sections/Hero4"
import Project4 from "@/components/sections/Project4"
import Service3 from "@/components/sections/Service3"
import Testimonial1 from "@/components/sections/Testimonial1"
import ScrollSection from "@/components/SideScroll"
import Title from 'next/head/'
import Service1 from "@/components/sections/Service1"
import Service2 from "@/components/sections/Service2"
import Service4 from "@/components/sections/Service4"
import News1 from "@/components/sections/News1"
import News2 from "@/components/sections/News2"
import News3 from "@/components/sections/News3"
import News4 from "@/components/sections/News4"
import PopUp from "@/components/layout/PopUp"
import { useState } from "react"




var activeview = "assets/img/brand/activeview.png";
var audio_technica = "assets/img/brand/audio-technica.png";
var aver = "assets/img/brand/aver.png";
var blackbox = "assets/img/brand/blackbox.png";
var brightsign = "assets/img/brand/brightsign.png";
var clickshare = "assets/img/brand/clickshare.png";
var crestron = "assets/img/brand/crestron.png";
var dexon = "assets/img/brand/dexon.png";
var epson = "assets/img/brand/epson.png";
var globalcache = "assets/img/brand/globalcache.png";
var lenovo = "assets/img/brand/lenovo.png";
var lg = "assets/img/brand/lg.png";
var lightware = "assets/img/brand/lightware.png";
var q_sys = "assets/img/brand/q-sys.png";
var samsung = "assets/img/brand/samsung.png";
var seervision = "assets/img/brand/seervision.png";
var sennheiser = "assets/img/brand/sennheiser.png";
var shure = "assets/img/brand/shure.png";
var webex = "assets/img/brand/webex.png";
var wyrestrom = "assets/img/brand/wyrestrom.png";

var services = [
    {
        "head": "Tailored AV Solutions",
        "desc": "Evolvix designs personalized audiovisual experiences, creating perfect setups for boardrooms, home theaters, and diverse spaces with unique, tailored solutions.",
        "img": "/assets/img/service/1.webp",
        "icon": "/assets/img/service/icon/s-icon-4.svg",
    },
    {
        "head": "Effortless Integration",
        "desc": "We ensure seamless integration of all your AV equipment-from speakers to screens-so you can enjoy a flawless, hassle-free experience every time.",
        "img": "/assets/img/service/2.webp",
        "icon": "/assets/img/service/icon/s-icon-10.svg",
    },
    {
        "head": "Immersive Experience",
        "desc": "Deliver immersive experiences through seamless AV integration, smart automation, and cutting-edge control solutions-transforming spaces into dynamic, interactive environments",
        "img": "/assets/img/service/3.webp",
        "icon": "/assets/img/service/icon/s-icon-12.svg",
    },
];

var industries = [
    {
        "head": "Corporate & Enterprise",
        "desc": "Smart boardrooms, video conferencing, and unified control systems for efficient communication",
        "img": "assets/img/about/10.webp"
    },
    {
        "head": "Hospitality",
        "desc": "Intuitive automation for hotels, resorts, and event spaces, enhancing guest experiences",
        "img": "assets/img/about/08.png"
    },
    {
        "head": "Education",
        "desc": " Interactive classrooms, lecture halls, and campus-wide AV solutions for modern learning environments.",
        "img": "assets/img/about/10.webp"
    },
    {
        "head": "Healthcare",
        "desc": "Reliable AV and control systems for hospitals, clinics, and telemedicine applications",
        "img": "assets/img/about/08.png"
    },
    {
        "head": "Retail",
        "desc": "Dynamic digital signage, background music, and smart control solutions for engaging customer experiences.",
        "img": "assets/img/about/10.webp"
    },
    {
        "head": " Entertainment & Venues",
        "desc": " Theatres, Arenas, and performance spaces with immersive AV and lighting control.",
        "img": "assets/img/about/08.png"
    },
    {
        "head": "Sports Venues",
        "desc": " High-performance AV and control solutions for immersive fan experiences and seamless event management.",
        "img": "assets/img/about/10.webp"
    },
    {
        "head": " Houses of Worship",
        "desc": " Powerful audio, video, and control systems to enhance services and community engagement",
        "img": "assets/img/about/08.png"
    },
    {
        "head": "Government & Defense",
        "desc": " Secure and reliable AV solutions for mission-critical environments",
        "img": "assets/img/about/10.webp"
    },
];

var projects = [
    {
        "head": "ADNOC Control Room",
        "desc": "At ADNOC HQ Control Room, we have expertly programmed and integrated the Q-SYS ecosystem with Seervision camera tracking for seamless automation. Additionally, we have implemented high-demand features such as voice lift and speaker tracking using eight ceiling tile microphones, along with sound reinforcement through wireless microphones. The entire 50-meter video wall is efficiently controlled by Q-SYS, ensuring a dynamic and intuitive experience. To further enhance user interaction, we have incorporated voice prompts that respond intelligently to user inputs, delivering a more immersive and efficient control system",
        "imgs": ["assets/img/project/p1/1.jpg", "assets/img/project/p1/2.jpg", "assets/img/project/p1/3.jpg", "assets/img/project/p1/4.jpg"],
        "brands": [q_sys, seervision, sennheiser, audio_technica, samsung, dexon, activeview]
    },
    {
        "head": "Dubai Police Forensic Control room",
        "desc": "At the Dubai Police Forensic Control Room, we have expertly programmed and seamlessly integrated the Q-SYS ecosystem for advanced automation. Additionally, we have implemented high-demand features such as voice lift and speaker tracking using two ceiling tile microphones, all centrally controlled by Q-SYS. Furthermore, our team has meticulously optimized the room’s audio, fine-tuning it based on room reflections to ensure crystal-clear sound, even in challenging acoustic conditions, making it ideal for mission-critical applications",
        "imgs": ["assets/img/project/p2/1.jpg", "assets/img/project/p2/2.jpg", "assets/img/project/p2/3.jpg", "assets/img/project/p2/4.jpg", "assets/img/project/p2/5.jpg"],
        "brands": [q_sys, shure, lg, clickshare]
    },
    {
        "head": "ADGM Al Reem Courtroom",
        "desc": ` At ADGM Al Reem Courtroom, Evolvix executed a comprehensive AV and control system upgrade, integrating cutting-edge technology for seamless communication 
and automation. The renovation included the installation of four ceiling tile microphones and 16 wireless microphones, ensuring crystal-clear audio capture and 
reinforcement. Advanced voice lift and sound optimization were implemented to enhance speech intelligibility across the room. `,
        "imgs": ["assets/img/project/p3/1.jpg", "assets/img/project/p3/2.jpg", "assets/img/project/p3/3.jpg", "assets/img/project/p3/4.jpg"],
        "brands": [crestron, q_sys, shure, wyrestrom]
    },
    {
        "head": "Department of Government Enablement",
        "desc": ` The Department of Government Enablement envisioned replicating the Cisco Touch Panel interface within the Q-SYS iPad application, and our team successfully 
brought this concept to life. We meticulously recreated the User Control Interface (UCI) on the Q-SYS platform, seamlessly integrating Cisco API to enable full control 
directly from the Q-SYS UCI viewer, ensuring a streamlined and intuitive user experience`,
        "imgs": ["assets/img/project/p4/1.jpg", "assets/img/project/p4/2.jpg", "assets/img/project/p4/3.jpg", "assets/img/project/p4/4.jpg"],
        "brands": [q_sys, sennheiser, webex]
    },
    {
        "head": "NMK Electronics HQ Boardroom",
        "desc": ` Evolvix designed and implemented a fully synchronized AV and control system at UCI, creating a seamless replica of the actual room where both environments remain 
in perfect sync. When changes occur in the physical space-such as lights turning off-the UCI replica dynamically adjusts, reflecting the real-time state. The 
integration features multiple microphones and advanced speaker tracking for enhanced audio clarity and automation. Additionally, an intuitive pantry ordering system 
was developed, where user requests trigger real-time updates on digital signage screens, streamlining service efficiency and elevating the overall user experience`,
        "imgs": ["assets/img/project/p5/1.jpg", "assets/img/project/p5/2.jpg", "assets/img/project/p5/3.jpg", "assets/img/project/p5/4.jpg", "assets/img/project/p5/5.jpg", "assets/img/project/p5/6.jpg"],
        "brands": [q_sys, shure, lg, brightsign, globalcache]
    },
    {
        "head": "ADNOC Executive Meeting Room",
        "desc": `At ADNOC HQ Executive Meeting Room, we have skilfully programmed and seamlessly integrated the Q-SYS ecosystem for advanced automation. The system 
manages various types of meeting room displays and multiple input sources, all centrally controlled by Q-SYS. Additionally, our team has meticulously fine-tuned the 
room’s audio, optimizing it based on room reflections to ensure crystal-clear sound from the ceiling microphones, making it ideal for mission-critical applications`,
        "imgs": ["assets/img/project/p6/1.jpg", "assets/img/project/p6/2.jpg", "assets/img/project/p6/3.jpg", "assets/img/project/p6/4.jpg"],
        "brands": [q_sys, sennheiser, samsung, clickshare]
    },
    {
        "head": "ADNOC Crisis Meeting room",
        "desc": ` At ADNOC HQ Crisis Meeting Room, we have expertly programmed and seamlessly integrated the Q-SYS ecosystem for advanced automation. The system efficiently 
manages diverse display layouts with multiple input sources, all centrally controlled by Q-SYS. Furthermore, our team has meticulously optimized the room’s audio, 
fine-tuning it based on room reflections to deliver crystal-clear sound from the ceiling microphones, ensuring reliability for mission-critical applications`,
        "imgs": ["assets/img/project/p7/1.jpg", "assets/img/project/p7/2.jpg", "assets/img/project/p7/3.jpg", "assets/img/project/p7/4.jpg"],
        "brands": [q_sys, sennheiser, samsung, clickshare, blackbox, webex]
    },
    {
        "head": "ADNOC Logistics Services Boardroom",
        "desc": ` At the ADNOC Logistics Boardroom, we have expertly programmed and seamlessly integrated the Q-SYS ecosystem for advanced automation. The system efficiently 
manages a 120" video wall with multiple video inputs, all encoded and decoded through the network and centrally controlled by Q-SYS. Additionally, the room 
features speaker tracking for enhanced audio clarity. Our team has meticulously optimized the room’s acoustics, fine-tuning the audio based on room reflections to 
ensure crystal-clear sound from the ceiling microphones, guaranteeing reliability for mission-critical applications.`,
        "imgs": ["assets/img/project/p8/1.jpg", "assets/img/project/p8/2.jpg", "assets/img/project/p8/3.jpg", "assets/img/project/p8/4.jpg"],
        "brands": [q_sys, sennheiser, samsung, clickshare, lenovo]
    },
    {
        "head": "Khalifa University Auditorium",
        "desc": ` The Khalifa University Auditorium, designed to accommodate 300 attendees, has been expertly programmed and seamlessly integrated with the Q-SYS ecosystem for 
audio-video processing and advanced automation. The system efficiently manages a 220" projector and motorized screen with multiple video inputs, all encoded and 
decoded through the network and centrally controlled by Q-SYS. Additionally, our team has meticulously optimized the room’s acoustics, fine-tuning the audio based 
on room reflections to ensure crystal-clear sound from the ceiling microphones, guaranteeing reliability for mission-critical applications`,
        "imgs": ["assets/img/project/p9/1.jpg", "assets/img/project/p9/2.jpg", "assets/img/project/p9/3.jpg", "assets/img/project/p9/4.jpg"],
        "brands": [q_sys, sennheiser, epson]
    },
    {
        "head": "Al Dhaid University Boardroom",
        "desc": `At Al Dhaid University Boardroom, we have skilfully engineered and integrated the Q-SYS ecosystem, incorporating speaker tracking to enable seamless automation. In 
response to high user demand, we have also implemented advanced features such as voice lift and sound reinforcement using wireless microphones. To elevate user 
engagement, the system includes intelligent voice prompts that dynamically respond to user inputs, creating a more interactive and efficient control experience.`,
        "imgs": ["assets/img/project/p10/1.jpg", "assets/img/project/p10/2.jpg", "assets/img/project/p10/3.jpg", "assets/img/project/p10/4.jpg", "assets/img/project/p10/5.jpg"],
        "brands": [q_sys, shure, lg, clickshare, lightware, aver]
    },
    {
        "head": "Emirates Chairman Boardroom",
        "desc": ` Evolvix successfully delivered a state-of-the-art AV solution for the Emirates Chairman Boardroom, optimizing it for high-performance video conferencing. Our 
integration of the Crestron control system ensures seamless automation, enhancing user experience with effortless operation. To meet high user demand, we 
implemented advanced features such as voice lift and intelligent speaker tracking, utilizing five ceiling tile microphones and multiple PTZ cameras. This comprehensive 
setup guarantees crystal-clear audio and dynamic video capture, enabling a smooth and immersive conferencing experience.`,
        "imgs": ["assets/img/project/p11/1.jpg", "assets/img/project/p11/2.jpg", "assets/img/project/p11/3.jpg", "assets/img/project/p11/4.jpg", "assets/img/project/p11/5.jpg"],
        "brands": [q_sys, shure, lg, crestron, lightware]
    },
];

var brands = [
    "/assets/img/brand/brand1.webp",
    "/assets/img/brand/brand2.webp",
    "/assets/img/brand/brand3.webp",
    "/assets/img/brand/brand4.webp",
    "/assets/img/brand/brand5.webp",
    "/assets/img/brand/brand6.webp",
];

var steps = [
    {
        "img": "assets/img/about/07.png",
        "head": "Step 01",
        "title": "Design Analysis & BOQ Verification",
        "desc": " A structured approach to reviewing designs and validating the Bill of Quantities to ensure accuracy, efficiency, and seamless project execution"
    },
    {
        "img": "assets/img/hero/hero-4.png",
        "head": "Step 02",
        "title": " Program Development & UCI Design",
        "desc": " We create intelligent control programs and user-friendly interface (UCI) designs to ensure seamless system operation"
    },
    {
        "img": "assets/img/hero/hero-5.png",
        "head": "Step 03",
        "title": "Deployment & Quality Assurance",
        "desc": "We deliver a flawless implementation by carefully setting up hardware, fine tuning software configurations, and seamlessly integrating control systems."
    },
    {
        "img": "assets/img/about/07.png",
        "head": "Step 04",
        "title": "Handover & Documentation",
        "desc": "We ensure a smooth transition by providing comprehensive documentation, finalized programs, and thorough training, equipping your team with everything needed for seamless operation and future scalability"
    },
];

var moreAbout = [
    {
        "n": 1,
        "img": "/assets/img/about/09.png",
        "head": "Custom Audio-Visual Systems That Redefine Your Space",
        "description": "Imagine a space where every visual is crystal clear and every sound is immersive. With Evolvix, that vision becomes reality. We specialize in high-performance AV systems that integrate flawlessly into your environment, whether for business, entertainment, or relaxation",
        "desc" : "Evolvix provides immersive AV systems for business, entertainment, and relaxation",
        "points": [
            ["Tailored Control Solutions:", "Seamless integration with QSC, Crestron, Extron, Biamp, AMX, and more for optimized performance."],
            ["Precision Audio Optimization:", " Smart tuning, noise suppression, and acoustic enhancement for crystal-clear sound"],
            ["Smart Control at Your Fingertips", "Seamlessly manage AV, lighting, and automation with intuitive, touch-enabled control for effortless operation"],
            [" Multi-Zone Audio for Maximum Flexibility:", " Customize audio zones for any space-perfect for both luxury homes and large commercial settings"],
        ]
    },
    {
        "n": 2,
        "img": "/assets/img/about/10.webp",
        "head": "Smart Control Systems That Empower Your Space",
        "description": "Take control of your environment in the most sophisticated way possible. With Evolvix’s advanced control programming, we make your space work smarter, not harder, so you can focus on what matters most",
        "desc": "Evolvix enhances spaces with advanced control programming for smarter environments",
        "points": [
            ["Custom Control Interfaces:", "Seamless integration with QSC, Crestron, Extron, Biamp, AMX, and more for optimized performance."],
            ["Seamless Integration of All Systems:", "Every aspect of your AV and control systems works together in harmony-ensuring a seamless, intuitive experience across the board."],
            ["Building Automation:", "Automate everything-from lights and shades to security and HVAC-with smart solutions that adjust based on your needs and schedule."],
            ["Remote Access for Total Convenience:", "Manage your systems from anywhere in the world, whether you’re at home, in the office, or on vacation."],
            ["Voice-Activated Technology:", "Welcome to the future-control your environment with simple voice commands for the ultimate hands-free experience."]
        ]
    },
    {
        "n": 3,
        "img": "/assets/img/about/09.png",
        "head": "Premium Video Conferencing Solutions for Effortless Communication",
        "description": `In today’s world, crystal-clear communication is essential. Evolvix offers state-of-the art video conferencing solutions that ensure seamless collaboration-whether you’re hosting a global board meeting or connecting with your remote team`,
        "desc": "Evolvix ensures seamless video conferencing for effective global communication",
        "points": [
            ["Full Conference Room Setup:", `Get the perfect video conferencing environment with professional-grade audio, video, and lighting designed to impress.`],
            ["Integrated Collaboration Tools:", `We integrate Zoom, Microsoft Teams, Google Meet, and other tools to give you a seamless meeting experience-every time`],
            ["Optimized Performance:", `We fine-tune every system for peak performance, ensuring your meetings are always flawless.`],
            ["Round-the-Clock Support:", ` You can count on us our dedicated support team is available 24/7 to ensure your conferencing systems are always running smoothly`]
        ]
    },
    {
        "n": 4,
        "img": "/assets/img/about/09.png",
        "head": "Bespoke AV & Control Solutions for Commercial & Residential Projects",
        "description": "From high-end businesses to luxury residences, Evolvix delivers custom solutions that elevate your space and provide unmatched convenience. We work closely with you to ensure your technology fits your needs and exceeds your expectations.",
        "desc": "High-end technology solutions for businesses and luxury residences",
        "points": [
            ["Commercial Spaces:", "Elevate your workplace with smart AV systems, from conference rooms to digital signage, designed to enhance productivity and create a lasting impression"],
            ["Residential Spaces:", "Turn your home into a smart sanctuary with custom home theaters, multi-room audio, and complete smart home automation that make everyday life effortless"]
        ]
    },
    {
        "n": 5,
        "img": "/assets/img/about/09.png",
        "head": "Ongoing Support & Maintenance: We’ve Got You Covered",
        "description": "Your tech should keep working as hard as you do. Evolvix offers ongoing support and maintenance to ensure your AV systems continue to perform at their peak, year after year.",
        "desc": "Evolvix offers continuous AV support for long-term peak performance",
        "points": [
            ["24/7 Support When You Need It Most: ", "Our expert team is available anytime, day or night, to resolve issues quickly and efficiently"],
            ["Regular Maintenance & Upgrades: ", "We provide proactive maintenance and the latest system upgrades to keep you ahead of the curve"],
            ["Proactive Fault Detection:", "We detect and address potential issues before they become problems, ensuring your systems remain flawless"],
            ["Training That Empowers You:", "We offer hands-on training to ensure you fully understand how to operate and maximize your systems"]
        ]
    }

];

export default function Home() {
const [popUp, setPopUp] = useState(false);
    const handlePopUp = () =>{
        setPopUp(!popUp);
    }
    return (
        <>
            <title>Evolvix</title>  
            <Layout headerStyle={4} footerStyle={3}>
                
                
             <PopUp e={projects[1]}/>
                <Hero4 />
                <About4 /> {/* about us */}
                {/* <About5 /> Expertise & Services
                <Service3 data={services}/> Unleash the Power of Innovation */}
                <Testimonial1 data={moreAbout}/> {/* more about 5 slides*/}
                <About7 /> {/* why evolvix*/}
                <Project4 data={industries} title={"Industries We Serve"} />
                <News4 data={steps} title="Our Workflow for Seamless Integration"/> {/* our workflow seamless integration*/}

                <News3 data={projects}/>

            </Layout>


        </>
    )
}