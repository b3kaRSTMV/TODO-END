import "./todo.css"
export function Todo(props) {
    const onDelete = () => {
        alert(props.text);
    }
    return (
        <div className="todoWrapper">
            <div className="d-flex align-items-center">
                <input checked={props.checked} type="checkbox" name="" id="" />
           <span className={props.checked ? "checked" : ''}> {props.text}</span>
           
            </div>
            <div>
                <button className="btn btn-success">Edit</button>
                <button onClick={onDelete} className="btn btn-danger delete">Edit</button>
            </div>
        </div>
    )
}
