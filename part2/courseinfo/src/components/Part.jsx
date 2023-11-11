const Part = ({part}) => {
    return (
        <div>
        <li key={part.id}>{part.name}</li>
        </div>
    )
}

export default Part