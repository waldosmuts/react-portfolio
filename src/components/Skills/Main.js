import { useEffect, useState } from "react"
import db from "../../utils/Firestore"
import { collection, getDocs } from "firebase/firestore"
import ThemeSwitch from "../ThemeSwitch"

export default function Main(props) {
    const [stack, setStack] = useState([])

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

    useEffect(() => {
        getStack()
    })

    const stackElements = stack.map(skill => <div key={skill.id} className="bg-primary py-2 px-4 lg:px-8 rounded-lg"><span>{skill.title}</span></div>)

    return (
        <main className="skills--main flex justify-center items-center px-4 lg:px-16 2xl:px-32">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 font-nunito text-white">
                {stackElements}
            </div>
            <ThemeSwitch darkMode={props.darkMode} changeTheme={props.changeTheme} />
        </main>
    )
}