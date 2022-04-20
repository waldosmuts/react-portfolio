import Header from "../components/Home/Header"
import Main from "../components/Home/Main"
import Footer from "../components/Footer"

export default function Home(props) {
    return (
        <>
            <Header darkMode={props.darkMode} changeTheme={props.changeTheme} />
            <Main darkMode={props.darkMode} />
            <Footer route="home" />
        </>
    )
}