import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import db from "../../utils/Firestore"
import Project from "./Project"
import ThemeSwitch from "../ThemeSwitch"

export default function Main(props) {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function fetchData() {
            const projectsData = await getDocs(collection(db, "projects"))
            setProjects(() => {
                return (
                    projectsData.docs.map(project => {
                        return ({
                            id: project.id,
                            ...project.data()
                        })
                    })
                )
            })
        }
        fetchData()
    }, [])

    const featuredProjectsElements = []
    const projectsElements = []

    projects.forEach(project => {
        const projectElement = <Project key={project.id} data={project} />
        if (project.featured) {
            featuredProjectsElements.push(projectElement)
        } else {
            projectsElements.push(projectElement)
        }
    })

    return (
        <main className="projects--main flex flex-col justify-center font-nunito pt-16 pb-52 px-32 -mt-px text-black dark:text-white bg-secondary transition dark:bg-gray-900 overflow-y-scroll">
            <h1 className="font-nunito text-2xl">my <span className="text-primary underline underline-offset-8 decoration-2 decoration-primary">projects</span></h1>
            <ThemeSwitch darkMode={props.darkMode} changeTheme={props.changeTheme} />
            <section className="grid grid-cols-1 gap-y-16 mt-16 place-items-center ml-20 2xl:ml-0">
                {featuredProjectsElements}
            </section>
            <section className="grid grid-cols-3 gap-12 mt-32 px-16 justify-center">
                {projectsElements}
            </section>
        </main>
    )
}