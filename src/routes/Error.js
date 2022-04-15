import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Error() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="error--main flex justify-center items-center">
                <h1>404</h1>
            </main>
            <Footer />
        </>
    )
}