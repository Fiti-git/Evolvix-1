import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul>    
                <li>
                    <Link href="#about">About</Link>
                </li>
                <li>
                    <Link href="#service">Services</Link>
                </li>
                <li>
                    <Link href="#chooseus">Why Evolvix</Link>
                </li>
                <li>
                    <Link href="#workflow">Workflow</Link>
                </li>
                <li>
                    <Link href="#projects">Project</Link>
                </li>
                <li>
                    <Link href="#contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
