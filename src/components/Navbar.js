import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
    return (
        <nav id="top" className="font-nunito text-2xl tracking-wider flex justify-between p-10 text-black dark:text-white">
            <Link className="transition hover:text-primary underline underline-offset-8 decoration-2 decoration-primary" to="/">waldo</Link>
            <div className="nav--right text-xl flex gap-12 relative">
                <HashLink className="transition hover:text-primary underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-primary" to="/#about">about</HashLink>
                <HashLink className="transition hover:text-primary underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-primary" to="/#experience">experience</HashLink>
                <Link className="transition hover:text-primary underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-primary" to="/projects">projects</Link>
                <svg className="absolute -right-7 -top-2 fill-primary scale-x-90 -rotate-12" width="134" height="45" viewBox="0 0 134 45" xmlns="http://www.w3.org/2000/svg">
                    <path d="M116.967 9.58946C110.889 7.21967 104.363 6.65352 97.9417 6.11962L34.1303 0.773673C26.7492 0.157354 19.088 -0.42096 12.2109 2.40741C5.33374 5.23578 -0.472968 12.5491 0.578288 20.3861C1.36395 26.3434 5.90185 31.1626 11.0358 33.6416C16.1698 36.1206 21.8877 36.7153 27.4847 37.2515L97.8846 44.0268C106.65 44.8681 124.994 46.7147 130.94 37.4316C138.156 26.1634 126.309 13.2212 116.967 9.58946Z" />
                </svg>
                <HashLink className="text-white ml-5 relative" to="/#contact">contact</HashLink>
            </div>
        </nav>
    )
}