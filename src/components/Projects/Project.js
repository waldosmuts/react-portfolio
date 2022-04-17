import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import db from "../../utils/Firestore"

export default function Project(props) {
    const [stack, setStack] = useState([])

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
    }, [])

    if (stack.length) {
        if (props.data.featured) {
            const stackElements = props.data.stack.map(item => {
                const itemData = stack.find(i => (i.id === item))
                return <span key={item} className="text-sm px-4 py-1 bg-tertiary rounded-md tracking-wider shadow-md">{itemData.title}</span>
            })
            return (
                <div className="flex items-center odd:ml-60 even:mr-60 max-w-4xl">
                    <Link className="bg-primary shrink-0 rounded-lg overflow-hidden cursor-pointer" to={`/projects/${props.data.id}`}>
                        <img className="w-80 h-80 opacity-50 pointer-events-auto saturate-0 hover:opacity-100 hover:saturate-100 transition" src={props.data.preview} alt="" />
                    </Link>
                    <div className="relative -left-20 overflow-hidden max-w-2xl">
                        <div className="mr-12">
                            <h3 className="text-right text-sm tracking-wider opacity-50">Featured Project</h3>
                            <Link to={`/projects/${props.data.id}`}>
                                <h2 className="text-right text-2xl font-black tracking-wider">{props.data.title}</h2>
                            </Link>
                        </div>
                        <div className="flex mt-2">
                            <div className="flex items-center justify-center bg-white dark:bg-gray-800 py-6 px-8 rounded-lg max-h-60 shadow-md">
                                <p>{props.data.description}</p>
                            </div>
                            <div className="flex flex-col gap-2 justify-start ml-2">
                                <a className="flex justify-center items-center shadow-md p-2 rounded-md uppercase tracking-wider font-black text-sm bg-tertiary hover:bg-highlight stroke-white stroke-2 fill-transparent" href={props.data.live} target="_blank" rel="noreferrer">
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5441 8.45596C10.7249 7.6372 9.61421 7.17725 8.45605 7.17725C7.2979 7.17725 6.18716 7.6372 5.36805 8.45596L2.27905 11.544C1.45993 12.3631 0.999756 13.474 0.999756 14.6325C0.999756 15.7909 1.45993 16.9018 2.27905 17.721C3.09818 18.5401 4.20914 19.0003 5.36755 19.0003C6.52597 19.0003 7.63693 18.5401 8.45605 17.721L10.0001 16.177" />
                                        <path d="M8.45605 11.5441C9.27516 12.3628 10.3859 12.8228 11.5441 12.8228C12.7022 12.8228 13.8129 12.3628 14.6321 11.5441L17.7211 8.45605C18.5402 7.63693 19.0004 6.52597 19.0004 5.36755C19.0004 4.20914 18.5402 3.09818 17.7211 2.27905C16.9019 1.45993 15.791 0.999756 14.6326 0.999756C13.4741 0.999756 12.3632 1.45993 11.5441 2.27905L10.0001 3.82305" />
                                    </svg>
                                </a>
                                <a className="flex items-center justify-center shadow-md p-2 rounded-md uppercase tracking-wider font-black text-sm bg-primary hover:bg-highlight fill-white" href={props.data.repo} target="_blank" rel="noreferrer">
                                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-end gap-2 mt-2 ml-20 pl-2 text-white">
                            {stackElements}
                        </div>
                    </div>
                </div>
            )
        } else {
            const stackElements = props.data.stack.map(item => {
                const itemData = stack.find(i => (i.id === item && i))
                return <span key={item} className="text-sm px-4 py-1 bg-secondary dark:bg-gray-700 rounded-md tracking-wider grow text-center">{itemData.title}</span>
            })
            return (
                <div className="flex flex-col items-center rounded-lg overflow-hidden w-full">
                    <Link className="bg-primary cursor-pointer w-full" to={`/projects/${props.data.id}`}>
                        <img className="w-full h-40 object-cover object-top opacity-50 pointer-events-auto saturate-0 hover:opacity-100 hover:saturate-100 transition" src={props.data.preview} alt="" />
                    </Link>
                    <div className="bg-white dark:bg-gray-800 px-6 pt-8 pb-6 -mt-px w-full h-full relative">
                        <h3 className="text-sm tracking-wider opacity-50">Noteworthy</h3>
                        <Link to={`/projects/${props.data.id}`}>
                            <h2 className="text-xl font-black tracking-wider">{props.data.title}</h2>
                        </Link>
                        <p className="truncate mt-4">{props.data.description}</p>
                        <div className="flex flex-wrap gap-2 mt-8 mb-14 text-black dark:text-white">
                            {stackElements}
                        </div>
                        <div className="flex gap-2 items-center absolute p-6 w-full bottom-0 left-0">
                            <div className="h-px w-full opacity-25 bg-highlight mr-2"></div>
                            <a className="flex justify-center items-center p-2 rounded-md uppercase tracking-wider text-sm bg-tertiary hover:bg-highlight stroke-white stroke-2 fill-transparent" href={props.data.live} target="_blank" rel="noreferrer">
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5441 8.45596C10.7249 7.6372 9.61421 7.17725 8.45605 7.17725C7.2979 7.17725 6.18716 7.6372 5.36805 8.45596L2.27905 11.544C1.45993 12.3631 0.999756 13.474 0.999756 14.6325C0.999756 15.7909 1.45993 16.9018 2.27905 17.721C3.09818 18.5401 4.20914 19.0003 5.36755 19.0003C6.52597 19.0003 7.63693 18.5401 8.45605 17.721L10.0001 16.177" />
                                    <path d="M8.45605 11.5441C9.27516 12.3628 10.3859 12.8228 11.5441 12.8228C12.7022 12.8228 13.8129 12.3628 14.6321 11.5441L17.7211 8.45605C18.5402 7.63693 19.0004 6.52597 19.0004 5.36755C19.0004 4.20914 18.5402 3.09818 17.7211 2.27905C16.9019 1.45993 15.791 0.999756 14.6326 0.999756C13.4741 0.999756 12.3632 1.45993 11.5441 2.27905L10.0001 3.82305" />
                                </svg>
                            </a>
                            <a className="flex items-center justify-center p-2 rounded-md uppercase tracking-wider text-sm bg-primary hover:bg-highlight fill-white" href={props.data.repo} target="_blank" rel="noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            )
        }
    } else {
        if (props.data.featured) {
            return (
                <div className="flex items-center odd:ml-60 even:mr-60 max-w-4xl">
                    <div className="bg-primary shrink-0 rounded-lg overflow-hidden cursor-pointer w-80 h-80"></div>
                    <div className="relative -left-20 overflow-hidden max-w-2xl">
                        <div className="mr-12">
                            <div className="bg-gray-800 dark:bg-white h-6 w-32 ml-auto opacity-10 rounded-md"></div>
                            <div className="ml-auto w-64 rounded-lg bg-white dark:bg-gray-800 h-10 mt-2"></div>
                        </div>
                        <div className="flex mt-2">
                            <div className="flex items-center justify-center bg-white dark:bg-gray-800 py-6 px-64 rounded-lg max-h-60 shadow-md h-28"></div>
                            <div className="flex flex-col gap-2 justify-start ml-2">
                                <div className="flex justify-center items-center shadow-md p-2 rounded-md bg-tertiary w-7 h-7"></div>
                                <div className="flex items-center justify-center shadow-md p-2 rounded-md bg-primary w-7 h-7"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-end gap-2 mt-2 ml-20 pl-2">
                            <div className="bg-tertiary h-6 w-32 rounded-md"></div>
                            <div className="bg-tertiary h-6 w-16 rounded-md"></div>
                            <div className="bg-tertiary h-6 w-52 rounded-md"></div>
                            <div className="bg-tertiary h-6 w-20 rounded-md"></div>
                            <div className="bg-tertiary h-6 w-24 rounded-md"></div>
                            <div className="bg-tertiary h-6 w-32 rounded-md"></div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="flex flex-col items-center rounded-lg overflow-hidden w-full">
                    <div className="bg-primary w-full h-40 object-cover object-top" src={props.data.preview} alt="" />
                    <div className="bg-white dark:bg-gray-800 px-6 pt-8 pb-6 -mt-px w-full h-full relative">
                        <div className="bg-gray-800 dark:bg-white h-6 w-24 opacity-10 rounded-md" />
                        <div className="bg-white dark:bg-gray-700 h-8 w-52 mt-2 rounded-md" />
                        <div className="bg-white dark:bg-gray-700 h-32 w-full mt-4 rounded-md" />
                        <div className="flex flex-wrap gap-2 mt-4 mb-14 text-black dark:text-white">
                            <div className="bg-gray-700 h-6 w-32 rounded-md grow"></div>
                            <div className="bg-gray-700 h-6 w-16 rounded-md grow"></div>
                            <div className="bg-gray-700 h-6 w-52 rounded-md grow"></div>
                            <div className="bg-gray-700 h-6 w-20 rounded-md grow"></div>
                            <div className="bg-gray-700 h-6 w-24 rounded-md grow"></div>
                            <div className="bg-gray-700 h-6 w-32 rounded-md grow"></div>
                        </div>
                        <div className="flex gap-2 items-center absolute p-6 w-full bottom-0 left-0">
                            <div className="h-px w-full opacity-25 bg-highlight mr-2"></div>
                            <div className="flex justify-center items-center p-2 rounded-md uppercase tracking-wider text-sm bg-tertiary w-7 h-7"></div>
                            <div className="flex items-center justify-center p-2 rounded-md uppercase tracking-wider text-sm bg-primary w-7 h-7"></div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}