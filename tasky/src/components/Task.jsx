const Task = (props) => {
    
    return (
    <div className="card">
        <p className="title">{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p className="description">{props.description}</p>
        <p className="priority">{props.priority}</p>
        <p>{props.children}</p>
    </div>
    )
}

export default Task;
