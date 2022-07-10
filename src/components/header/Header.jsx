
import "./header.css"
export function Header (props){
    const result = props.state.filter((item) => item.status)
    return (
        <header className = "Header_wrapper">
         Список дел ({result.length}/{props.state.length})
        </header>
    )
}