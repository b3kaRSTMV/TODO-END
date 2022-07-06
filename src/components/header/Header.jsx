
import "./header.css"
export function Header (props){
    return (
        <header className = "Header_wrapper">
         Todos <span> ({props.state.length} / {props.state.filter((item) => item.checked).length})</span>
        </header>
    )
}