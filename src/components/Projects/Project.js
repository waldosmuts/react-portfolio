export default function Project(props) {
    if (props.data.featured) {
        return (
            <div className="flex justify-between h-72 bg-white text-black dark:text-white dark:bg-gray-900 rounded-md shadow-md overflow-hidden relative">
                <div className="flex flex-col gap-y-4 px-10 py-10 z-10 relative">
                    <h3 className="font-nunito font-black text-2xl tracking-wider">{props.data.title}</h3>
                    <p>{props.data.description}</p>
                </div>
                <div className="flex gap-x-4 absolute right-4 bottom-4 z-10">
                    <a className="px-6 py-2 rounded-md uppercase tracking-wider font-black text-sm bg-primary" href={props.data.live} target="_blank" rel="noreferrer">Live</a>
                    <a className="px-6 py-2 rounded-md uppercase tracking-wider font-black text-sm bg-highlight" href={props.data.repo} target="_blank" rel="noreferrer">Repo</a>
                </div>
                <img className="absolute w-full opacity-20" src={props.data.preview} alt="" />
            </div>
        )
    }
    return (
        <div className="bg-white text-black dark:text-white dark:bg-gray-900 rounded-md py-10 px-5 shadow-md">
            <h3 className="font-nunito font-black text-2xl tracking-wider">{props.data.title}</h3>
            <p>{props.data.description}</p>
            <a href={props.data.live} target="_blank" rel="noreferrer">Live</a>
            <a href={props.data.repo} target="_blank" rel="noreferrer">Repo</a>
        </div>
    )
}