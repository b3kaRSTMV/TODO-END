import { useState } from "react"
import "./createtodo.css"
export function Createtodo(props) {
    const [inputValue, setInputValue] = useState("")
    const submit = (event) => {
        event.preventDefault();
        props.addNew(inputValue)
        setInputValue("")
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <form class="form_wrapper" onSubmit={submit}>
            <input
                value={inputValue}
                type="text"
                placeholder="Добавьте свои дела!"
                onChange={handleChange} required
            />
            <button >Добавить</button>
        </form>
    )
}
