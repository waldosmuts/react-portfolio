export default function Project(props) {
    return (
        <div className="bg-secondary rounded-md py-10 px-5">
            <h3 className="font-nunito">{props.data.title}</h3>
            <p>{props.data.description}</p>
            <a href={props.data.live} target="_blank" rel="noreferrer">Live</a>
            <a href={props.data.repo} target="_blank" rel="noreferrer">Repo</a>
        </div>
    )
}