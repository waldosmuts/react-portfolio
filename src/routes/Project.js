import { doc, getDoc, collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import db from "../utils/Firestore"
import Error from "./Error"
import Header from "../components/Project/Header"
import Main from "../components/Project/Main"
import Footer from "../components/Footer"
import ProjectGhost from "../components/Project/ProjectGhost"

export default function Project(props) {
    const [stack, setStack] = useState([])
    const [projectData, setProjectData] = useState({})

    const projectId = (window.location.href).slice(window.location.href.lastIndexOf("/") + 1)
    const docRef = doc(db, "projects", projectId)

    useEffect(() => {
        async function getProjectData() {
            async function getProject() {
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setProjectData(() => {
                        return {
                            id: projectId,
                            ...docSnap.data()
                        }

                    })
                } else {
                    setProjectData(false)
                }
            }

            async function getStack() {
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

            await getProject()
            await getStack()
        }

        getProjectData()
        // eslint-disable-next-line
    }, [])

    if (projectData) {
        return (
            <>
                <Header />
                {
                    stack.length ?
                        <Main data={projectData} stack={stack} darkMode={props.darkMode} changeTheme={props.changeTheme} /> :
                        <ProjectGhost />
                }
                <Footer route={"project"} />
            </>
        )
    } else {
        return (
            <Error />
        )
    }


}