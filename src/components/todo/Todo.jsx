import "./todo.css"
import { useState } from "react"
export function Todo(props) {
    const onDelete = () => {
        props.onDelete(props.id)

    }
    const handleCheck = () => {
        props.onCheck(props.id);
    }
    const Edit = () => {
        setState(!state)
    }

    const [state, setState] = useState(false)
    const [inpVal, setInpVal] = useState(props.text)
    const editSubmit = (e)=>{
        e.preventDefault()
        props.onEditText(inpVal, props.id)
        setState(false)
    }


    return (

        <div className="todoWrapper">
            <div>
                {
                    state ?
                        <form className="editInput" onSubmit={editSubmit}>
                            <input
                                value={inpVal}
                                type="text"
                                onChange={(event) => setInpVal(event.target.value)}
                            />
                            <button className="btn btn-primary">Изменить!</button>
                        </form>
                        :
                        <div className="d-flex align-items-center">
                            <input checked={props.checked} onChange={handleCheck} type="checkbox" name="" id="" />
                            <span className={props.checked ? "checked" : ''}> {props.text}</span>
                        </div>
                }

            </div>

            <div>
                <button onClick={Edit} className="btn btn-success">Edit</button>
                <button onClick={onDelete} className="btn btn-danger delete">Delete</button>
            </div>
        </div>
    )
}

