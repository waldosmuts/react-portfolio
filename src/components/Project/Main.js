import ThemeSwitch from "../ThemeSwitch"

export default function Main(props) {
    const stackElements = props.data.stack.map(item => {
        const itemData = props.stack.lenght && props.stack.find(i => (i.id === item))
        return <span key={item} className="text-sm px-4 py-1 bg-tertiary rounded-md tracking-wider shadow-md">{itemData.title}</span>
    })

    return (
        <main className="flex flex-col items-center gap-y-10 py-32 -mt-px font-nunito text-black dark:text-white bg-secondary dark:bg-gray-900">
            <h1 className="text-3xl font-black tracking-wider text-center">{props.data.title}</h1>
            <img className="rounded-lg w-96" src={props.data.preview} alt="" />
            <p className="text-xl">{props.data.description}</p>
            <div>
                {stackElements}
            </div>
            <ThemeSwitch darkMode={props.darkMode} changeTheme={props.changeTheme} />
        </main>
    )
}