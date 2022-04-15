import { useEffect, useState } from "react"
import { initializeApp } from "firebase/app"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import Project from "./Project"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default function Main() {
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
        <main className="projects--main font-nunito py-16 px-32 text-black dark:text-white bg-secondary transition dark:bg-gray-800 overflow-y-scroll">
            <h1 className="font-black text-2xl tracking-wider">projects and such</h1>
            <h2 className="mt-16 font-black text-2xl tracking-wider">featured projects</h2>
            <div className="grid grid-cols-1 gap-y-8">
                {featuredProjectsElements}
            </div>
            <h2 className="mt-16 font-black text-2xl tracking-wider">other projects</h2>
            <div className="grid grid-cols-3 gap-x-16 gap-y-8">
                {projectsElements}
            </div>
        </main>
    )
}