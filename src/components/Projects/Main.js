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
        if (project.featured) {
            featuredProjectsElements.push(<Project key={project.id} data={project} />)
        } else {
            projectsElements.push(<Project key={project.id} data={project} />)
        }
    })

    return (
        <main className="projects--main px-32">
            <h1>Projects and such</h1>
            <h2 className="mt-16">Featured Projects</h2>
            <div>
                {featuredProjectsElements}
            </div>
            <h2 className="mt-16">Other Projects</h2>
            <div className="grid grid-cols-3 gap-16">
                {projectsElements}
            </div>
        </main>
    )
}