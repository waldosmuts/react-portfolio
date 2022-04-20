import { useState } from "react"
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)

    function handleCLick() {
        setShowNav(prevShowNav => !prevShowNav)
    }

    return (
        <nav id="top" className="font-nunito text-xl lg:text-2xl tracking-wider flex justify-between items-center p-10 text-black dark:text-white z-50 relative">
            <Link className="transition hover:text-primary underline underline-offset-8 decoration-2 decoration-primary -mt-1" to="/">waldo</Link>
            <div className={`nav--right rounded-xl md:rounded-none bg-primary md:bg-transparent text-lg lg:text-xl gap-3 md:gap-12 absolute py-10 md:py-0 top-8 md:top-0 right-8 md:right-0 md:relative flex ${showNav ? "" : "hidden"} md:flex flex-col md:flex-row`}>
                <HashLink className=" pl-6 pr-12 md:px-0 transition hover:text-highlight md:hover-text-primary underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-highlight md:hover:decoration-primary" to="/#about">about</HashLink>
                <HashLink className=" pl-6 pr-12 md:px-0 transition hover:text-highlight md:hover-text-primary underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-highlight md:hover:decoration-primary" to="/#experience">experience</HashLink>
                <Link className=" pl-6 pr-12 md:px-0 transition hover:text-highlight md:hover-text-primary underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-highlight md:hover:decoration-primary" to="/projects">projects</Link>
                <svg className="scale-75 lg:scale-100 absolute -right-8 lg:-right-7 md:-top-2 fill-primary -rotate-12 hidden md:block" width="134" height="45" viewBox="0 0 134 45" xmlns="http://www.w3.org/2000/svg">
                    <path d="M116.967 9.58946C110.889 7.21967 104.363 6.65352 97.9417 6.11962L34.1303 0.773673C26.7492 0.157354 19.088 -0.42096 12.2109 2.40741C5.33374 5.23578 -0.472968 12.5491 0.578288 20.3861C1.36395 26.3434 5.90185 31.1626 11.0358 33.6416C16.1698 36.1206 21.8877 36.7153 27.4847 37.2515L97.8846 44.0268C106.65 44.8681 124.994 46.7147 130.94 37.4316C138.156 26.1634 126.309 13.2212 116.967 9.58946Z" />
                </svg>
                <HashLink className="pl-6 pr-12 md:px-0 hover:text-highlight md:hover-text-primary md:hover:text-white underline md:no-underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-highlight md:hover:decoration-primary md:text-white md:ml-5 relative" to="/#contact">contact</HashLink>
            </div>
            <button id="nav--open" onClick={handleCLick} className={`absolute right-10 ${showNav ? "hidden" : ""} md:hidden stroke-2 stroke-black dark:stroke-white`}>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 18H20M4 6H20H4ZM4 12H20H4Z" />
                </svg>
            </button>
            <button id="nav--close" onClick={handleCLick} className={`absolute right-10 ${showNav ? "" : "hidden"} md:hidden fill-black dark:fill-white`}>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4099 12L17.7099 7.71C17.8982 7.5217 18.004 7.2663 18.004 7C18.004 6.7337 17.8982 6.47831 17.7099 6.29C17.5216 6.1017 17.2662 5.99591 16.9999 5.99591C16.7336 5.99591 16.4782 6.1017 16.2899 6.29L11.9999 10.59L7.70994 6.29C7.52164 6.1017 7.26624 5.99591 6.99994 5.99591C6.73364 5.99591 6.47824 6.1017 6.28994 6.29C6.10164 6.47831 5.99585 6.7337 5.99585 7C5.99585 7.2663 6.10164 7.5217 6.28994 7.71L10.5899 12L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L11.9999 13.41L16.2899 17.71C16.3829 17.8037 16.4935 17.8781 16.6154 17.9289C16.7372 17.9797 16.8679 18.0058 16.9999 18.0058C17.132 18.0058 17.2627 17.9797 17.3845 17.9289C17.5064 17.8781 17.617 17.8037 17.7099 17.71C17.8037 17.617 17.8781 17.5064 17.9288 17.3846C17.9796 17.2627 18.0057 17.132 18.0057 17C18.0057 16.868 17.9796 16.7373 17.9288 16.6154C17.8781 16.4936 17.8037 16.383 17.7099 16.29L13.4099 12Z" />
                </svg>
            </button>
        </nav>
    )
}