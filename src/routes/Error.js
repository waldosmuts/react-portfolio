import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function Error() {
    return (
        <>
            <header className="transition-colors duration-300 bg-secondary dark:bg-gray-900 overflow-visible">
                <Navbar />
            </header>
            <main className="error--main flex flex-col justify-center items-center font-nunito text-black dark:text-white pb-24 relative">
                <h1 className="text-xl mx-20 text-center lg:text-3xl tracking-wider">I'm afraid you're in the wrong place...</h1>
                <Link className="bg-primary hover:bg-highlight px-4 lg:px-8 py-2 lg:py-4 rounded-lg text-xl tracking-wider mt-10" to="/">go back <span className="underline decoration-2 decoration-black dark:decoration-white underline-offset-2">home</span>?</Link>
            </main>
            <Footer />
        </>
    )
}