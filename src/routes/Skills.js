import Navbar from "../components/Navbar"
import Main from "../components/Skills/Main"
import Footer from "../components/Footer"


export default function Skills(props) {
    return (
        <div className="skills--container">
            <header>
                <Navbar />
            </header>
            <Main darkMode={props.darkMode} changeTheme={props.changeTheme} />
            <Footer />
        </div>
    )
}