import "./createtodo.css"
export function Createtodo (){
    return (
        <div className = "crTodo">
            <input type="text" class="form-control" placeholder="Enter todo here" aria-label="Username" aria-describedby="basic-addon1"></input>
            <button type="button" class="btn btn-primary">Primary</button>
        </div>
    )
}