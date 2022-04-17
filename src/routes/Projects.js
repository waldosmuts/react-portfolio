import Main from "../components/Projects/Main"
import Header from "../components/Projects/Header"
import Footer from "../components/Footer"

export default function Projects(props) {
    return (
        <>
            <Header />
            <Main darkMode={props.darkMode} changeTheme={props.changeTheme} />
            <Footer />
        </>
    )
}