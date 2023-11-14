export function Task(props){
    return(
        <li>
            <label>
                <input type="checkbox"></input>
                {props.text}
            </label>
        </li>
    )
}