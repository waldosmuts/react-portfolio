import { HashLink } from "react-router-hash-link"
import ThemeSwitch from "../ThemeSwitch"

export default function Main(props) {
    const stackElements = props.data.stack.map(item => {
        const itemData = props.stack.find(i => (i.id === item))
        return <span key={item} className="text-white grow text-center text-sm px-4 py-1 bg-tertiary rounded-md tracking-wider shadow-md">{itemData.title}</span>
    })

    return (
        <main className="project--main flex flex-col items-center pb-16 lg:py-16 px-4 lg:px-0 -mt-px font-nunito text-black dark:text-white bg-secondary dark:bg-gray-900 relative">
            <HashLink className="lg:absolute lg:left-32 lg:top-10 rounded-md self-start lg:self-auto px-8 py-2 bg-white dark:bg-gray-800 tracking-wider font-black" to={`/projects/#${props.data.id}`}>{"< back"}</HashLink>
            <h1 className="text-xl lg:text-2xl xl:text-3xl mt-8 lg:mt-0 font-black tracking-wider text-center">{props.data.title}</h1>
            <img className="rounded-xl max-w-md w-full shrink-0 shadow-md mt-8" src={props.data.preview} alt="" />
            <div className="flex flex-col lg:flex-row mt-8 max-w-xl">
                <p className="text-lg bg-white dark:bg-gray-800 px-10 pt-8 pb-20 lg:pb-10 lg:mr-2 mt-4 lg:mt-0 rounded-md order-2 lg:order-1">{props.data.description}</p>
                <div className="flex flex-row lg:flex-col gap-2 order-1 lg:order-2">
                    <a className="flex justify-center w-full items-center lg:aspect-square py-3 lg:py-0 lg:px-2 rounded-md uppercase tracking-wider text-sm bg-tertiary hover:bg-highlight stroke-white stroke-2 fill-transparent" href={props.data.live} target="_blank" rel="noreferrer">
                        <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5441 8.45596C10.7249 7.6372 9.61421 7.17725 8.45605 7.17725C7.2979 7.17725 6.18716 7.6372 5.36805 8.45596L2.27905 11.544C1.45993 12.3631 0.999756 13.474 0.999756 14.6325C0.999756 15.7909 1.45993 16.9018 2.27905 17.721C3.09818 18.5401 4.20914 19.0003 5.36755 19.0003C6.52597 19.0003 7.63693 18.5401 8.45605 17.721L10.0001 16.177" />
                            <path d="M8.45605 11.5441C9.27516 12.3628 10.3859 12.8228 11.5441 12.8228C12.7022 12.8228 13.8129 12.3628 14.6321 11.5441L17.7211 8.45605C18.5402 7.63693 19.0004 6.52597 19.0004 5.36755C19.0004 4.20914 18.5402 3.09818 17.7211 2.27905C16.9019 1.45993 15.791 0.999756 14.6326 0.999756C13.4741 0.999756 12.3632 1.45993 11.5441 2.27905L10.0001 3.82305" />
                        </svg>
                    </a>
                    <a className="flex items-center w-full justify-center lg:aspect-square py-3 lg:py-0 lg:px-2 rounded-md uppercase tracking-wider text-sm bg-primary hover:bg-highlight fill-white" href={props.data.repo} target="_blank" rel="noreferrer">
                        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="flex w-full max-w-xl flex-wrap gap-2 mt-4 lg:mt-2">
                {stackElements}
            </div>
            <ThemeSwitch darkMode={props.darkMode} changeTheme={props.changeTheme} />
        </main>
    )
}