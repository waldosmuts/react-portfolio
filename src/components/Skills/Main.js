import { useEffect, useState } from "react"
import db from "../../utils/Firestore"
import { collection, getDocs } from "firebase/firestore"
import ThemeSwitch from "../ThemeSwitch"
import { stackData } from "../../PortfolioData"

export default function Main(props) {
    const [stack, setStack] = useState([])
    const stackElements = []

    useEffect(() => {
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

        if (process.env.NODE_ENV === "development") {
            setStack(stackData)
        } else {
            getStack()
        }
    }, [])

    function handleClick(e) {
        e.target.classList.add("w-full")
    }

    for (const skill of stack) {
        if (skill.featured) {
            stackElements.unshift(<div key={skill.id} onClick={handleClick} className="flex transition-all justify-center bg-tertiary py-2 px-4 lg:px-8 rounded-lg grow"><span className="pointer-events-none">{skill.title}</span></div>)
        } else {
            stackElements.push(<div key={skill.id} onClick={handleClick} className="flex transition-all justify-center bg-primary py-2 px-4 lg:px-8 rounded-lg grow"><span className="pointer-events-none">{skill.title}</span></div>)
        }
    }

    return (
        <main className="skills--main flex flex-col justify-center items-center gap-4 px-4 lg:px-16 2xl:px-32">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 font-nunito text-white">
                {stackElements}
            </div>
            <ThemeSwitch darkMode={props.darkMode} changeTheme={props.changeTheme} />
        </main>
    )
}