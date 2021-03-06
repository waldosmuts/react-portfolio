import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import db from "../../utils/Firestore"
import Project from "./Project"
import ThemeSwitch from "../ThemeSwitch"
import { FeaturedGhost, ProjectGhost } from "./ProjectsGhosts"

export default function Main(props) {
    const [projects, setProjects] = useState([])
    const [projectCount, setProjectCount] = useState(() => {
        if (window.innerWidth > 1536) {
            return 4
        } else if (window.innerWidth > 1280) {
            return 3
        } else {
            return 2
        }
    })

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

    function handleClick() {
        setProjectCount(prevProjectCount => {
            if (window.innerWidth > 1536) {
                return prevProjectCount + 4
            } else if (window.innerWidth > 1280) {
                return prevProjectCount + 3
            } else {
                return prevProjectCount + 2
            }
        })
    }

    const featuredProjectsElements = []
    const projectsElements = []

    if (projects.length) {
        projects.forEach(project => {
            const projectElement = <Project key={project.id} data={project} />
            if (project.featured) {
                featuredProjectsElements.push(projectElement)
            } else {
                projectsElements.push(projectElement)
            }
        })
    } else {
        for (let i = 0; i < 3; i++) {
            featuredProjectsElements.push(
                <FeaturedGhost key={`featured-ghost-${i}`} />
            )
        }
        for (let i = 0; i < 5; i++) {
            projectsElements.push(
                <ProjectGhost key={`ghost-${i}`} />
            )
        }
    }


    return (
        <main className="projects--main flex flex-col font-nunito p-4 lg:pt-16 pb-52 px-4 sm:px-16 md:px-32 -mt-px text-black dark:text-white bg-secondary transition dark:bg-gray-900 overflow-y-scroll">
            <h1 className="font-nunito text-2xl text-center lg:text-left">my <span className="text-primary underline underline-offset-8 decoration-2 decoration-primary">projects</span></h1>
            <ThemeSwitch darkMode={props.darkMode} changeTheme={props.changeTheme} />
            <section className="grid grid-cols-1 gap-y-8 lg:gap-y-16 mt-8 lg:mt-16 place-items-center lg:ml-20 2xl:ml-0 z-10">
                {featuredProjectsElements}
            </section>
            <section className="grid grid-cols-1 overflow-hidden lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-12 2xl:gap-6 mt-16 lg:mt-32 lg:px-4 sm:px-16 md:px-32 justify-center">
                {projectsElements.slice(0, projectCount)}
            </section>
            {projectCount < projectsElements.length && <button className="bg-primary text-white py-2 lg:mx-4 rounded-md mt-6" onClick={handleClick}>Show more</button>}
        </main>
    )
}