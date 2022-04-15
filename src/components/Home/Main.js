import About from "./About"
import Experience from "./Experience"
import Contact from "./Contact"

export default function Main(props) {
    return (
        <main>
            <About darkMode={props.darkMode} />
            <Experience darkMode={props.darkMode} />
            <Contact darkMode={props.darkMode} />
        </main>
    )
}