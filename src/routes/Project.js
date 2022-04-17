import { doc, getDoc, collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import db from "../utils/Firestore"
import Header from "../components/Project/Header"
import Main from "../components/Project/Main"
import Footer from "../components/Footer"

export default function Project(props) {
    const [stack, setStack] = useState([])
    const [projectData, setProjectData] = useState({})

    const projectId = (window.location.href).slice(window.location.href.lastIndexOf("/") + 1)
    const docRef = doc(db, "projects", projectId)

    useEffect(() => {
        async function getProject() {
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setProjectData(docSnap.data())
            } else {
                setProjectData(false)
            }
        }
        getProject()
    }, [docRef])

    useEffect(() => {
        async function fetchData() {
            const stackData = await getDocs(collection(db, "stack"))
            setStack(() => {
                return (
                    stackData.docs.map(item => {
                        return ({
                            id: item.id,
                            ...item.data()
                        })
                    })
                )
            })
        }
        fetchData()
    }, [projectData])

    return (
        <>
            <Header />
            {projectData ? <Main data={projectData} stack={stack} darkMode={props.darkMode} changeTheme={props.changeTheme} /> : <div>no such project exists...</div>}
            <Footer />
        </>
    )
}