import Main from "../components/Projects/Main"
import Footer from "../components/Footer"
import Header from "../components/Projects/Header"
import Seed from "../seed"
import { useEffect } from "react"

export default function Projects() {
    // const cloudinaryConfig = {
    //     cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    //     api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
    //     api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET
    // }

    // useEffect(() => {
    //     Seed()
    // }, [])

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}