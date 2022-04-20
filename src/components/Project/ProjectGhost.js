import { useState, useEffect } from "react"
import { HashLink } from "react-router-hash-link"
import ThemeSwitch from "../ThemeSwitch"

export default function ProjectGhost(props) {
    const [loadingIndicator, setLoadingIndicator] = useState("")

    useEffect(() => {
        setInterval(() => {
            setLoadingIndicator(prevLoadingIndicator => {
                prevLoadingIndicator = prevLoadingIndicator === "..." ? "" : prevLoadingIndicator
                prevLoadingIndicator += "."
                return prevLoadingIndicator
            })
        }, 500)
    }, [])

    return (
        <main className="project--main flex flex-col items-center pb-16 lg:py-16 px-4 lg:px-0 -mt-px font-nunito text-black dark:text-white bg-secondary dark:bg-gray-900 relative">
            <HashLink className="lg:absolute lg:left-32 lg:top-10 rounded-md self-start lg:self-auto px-8 py-2 bg-white dark:bg-gray-800 tracking-wider font-black" to={`/projects/#${(window.location.href).slice(window.location.href.lastIndexOf("/") + 1)}`}>{"< back"}</HashLink>
            <div className="h-7 lg:h-9 w-full max-w-xs bg-white dark:bg-slate-800 rounded-md mt-8 lg:mt-0"></div>
            <div className="bg-primary rounded-xl max-w-md w-full aspect-square shrink-0 shadow-md mt-8 flex justify-center items-center"><span className="-mt-6 text-white text-5xl">{loadingIndicator}</span></div>
            <div className="flex flex-col lg:flex-row mt-8 max-w-xl w-full">
                <div className="w-full h-40 bg-white dark:bg-gray-800 px-10 pt-8 pb-20 lg:pb-10 lg:mr-2 mt-4 lg:mt-0 rounded-md order-2 lg:order-1"></div>
                <div className="flex flex-row lg:flex-col gap-2 order-1 lg:order-2">
                    <div className="h-10 lg:h-9 w-full aspect-square rounded-md bg-tertiary" />
                    <div className="h-10 lg:h-9 w-full aspect-square rounded-md bg-primary" />
                </div>
            </div>
            <div className="flex w-full max-w-xl flex-wrap gap-2 mt-4 lg:mt-2">
                <div className="bg-tertiary h-6 w-32 rounded-md"></div>
                <div className="bg-tertiary h-6 w-16 rounded-md"></div>
                <div className="bg-tertiary h-6 w-52 rounded-md"></div>
                <div className="bg-tertiary h-6 w-20 rounded-md"></div>
                <div className="bg-tertiary h-6 w-24 rounded-md"></div>
                <div className="bg-tertiary h-6 w-32 rounded-md"></div>
            </div>
            <ThemeSwitch darkMode={props.darkMode} changeTheme={props.changeTheme} />
        </main>
    )
}